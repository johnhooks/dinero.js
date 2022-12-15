/* eslint-disable functional/no-expression-statement */
import { UNEQUAL_CURRENCIES_MESSAGE } from '../checks/messages.js';
import { assert } from '../helpers/assert.js';
import type { Calculator, Dinero } from '../types/index.js';
import { maximum as max } from '../utils/index.js';

import { haveSameCurrency } from './haveSameCurrency.js';
import { normalizeScale } from './normalizeScale.js';

export type MaximumParams<TAmount> = readonly [
  dineroObjects: ReadonlyArray<Dinero<TAmount>>
];

function unsafeMaximum<TAmount>(calculator: Calculator<TAmount>) {
  const maxFn = max(calculator);

  return function maximum(...[dineroObjects]: MaximumParams<TAmount>) {
    const [firstDinero] = dineroObjects;
    const { currency, scale } = firstDinero.toJSON();

    const amount = maxFn(
      dineroObjects.map((subject) => {
        const { amount: subjectAmount } = subject.toJSON();

        return subjectAmount;
      })
    );

    return firstDinero.create({
      amount,
      currency,
      scale,
    });
  };
}

export function safeMaximum<TAmount>(calculator: Calculator<TAmount>) {
  const normalizeFn = normalizeScale(calculator);
  const maxFn = unsafeMaximum(calculator);

  return function maximum(...[dineroObjects]: MaximumParams<TAmount>) {
    const condition = haveSameCurrency(dineroObjects);
    assert(condition, UNEQUAL_CURRENCIES_MESSAGE);

    const normalizedDineroObjects = normalizeFn(dineroObjects);

    return maxFn(normalizedDineroObjects);
  };
}

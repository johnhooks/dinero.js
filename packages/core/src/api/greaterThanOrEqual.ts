/* eslint-disable functional/no-expression-statement */
import { UNEQUAL_CURRENCIES_MESSAGE } from '../checks/messages.js';
import { assert } from '../helpers/assert.js';
import type { Calculator, Dinero } from '../types/index.js';
import { greaterThanOrEqual as gte } from '../utils/index.js';

import { haveSameCurrency } from './haveSameCurrency.js';
import { normalizeScale } from './normalizeScale.js';

export type GreaterThanOrEqualParams<TAmount> = readonly [
  dineroObject: Dinero<TAmount>,
  comparator: Dinero<TAmount>
];

function unsafeGreaterThanOrEqual<TAmount>(calculator: Calculator<TAmount>) {
  const greaterThanOrEqualFn = gte(calculator);

  return function greaterThanOrEqual(
    ...[dineroObject, comparator]: GreaterThanOrEqualParams<TAmount>
  ) {
    const dineroObjects = [dineroObject, comparator];

    const [subjectAmount, comparatorAmount] = dineroObjects.map((d) => {
      const { amount } = d.toJSON();

      return amount;
    });

    return greaterThanOrEqualFn(subjectAmount, comparatorAmount);
  };
}

export function safeGreaterThanOrEqual<TAmount>(
  calculator: Calculator<TAmount>
) {
  const normalizeFn = normalizeScale(calculator);
  const greaterThanOrEqualFn = unsafeGreaterThanOrEqual(calculator);

  return function greaterThanOrEqual(
    ...[dineroObject, comparator]: GreaterThanOrEqualParams<TAmount>
  ) {
    const condition = haveSameCurrency([dineroObject, comparator]);
    assert(condition, UNEQUAL_CURRENCIES_MESSAGE);

    const [subjectAmount, comparatorAmount] = normalizeFn([
      dineroObject,
      comparator,
    ]);

    return greaterThanOrEqualFn(subjectAmount, comparatorAmount);
  };
}

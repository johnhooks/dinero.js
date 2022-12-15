/* eslint-disable functional/no-expression-statement */
import { UNEQUAL_CURRENCIES_MESSAGE } from '../checks/messages.js';
import { assert } from '../helpers/assert.js';
import type { Calculator, Dinero } from '../types/index.js';
import { lessThan as lt } from '../utils/index.js';

import { haveSameCurrency } from './haveSameCurrency.js';
import { normalizeScale } from './normalizeScale.js';

export type LessThanParams<TAmount> = readonly [
  dineroObject: Dinero<TAmount>,
  comparator: Dinero<TAmount>
];

function unsafeLessThan<TAmount>(calculator: Calculator<TAmount>) {
  const lessThanFn = lt(calculator);

  return function lessThan(
    ...[dineroObject, comparator]: LessThanParams<TAmount>
  ) {
    const dineroObjects = [dineroObject, comparator];

    const [subjectAmount, comparatorAmount] = dineroObjects.map((d) => {
      const { amount } = d.toJSON();

      return amount;
    });

    return lessThanFn(subjectAmount, comparatorAmount);
  };
}

export function safeLessThan<TAmount>(calculator: Calculator<TAmount>) {
  const normalizeFn = normalizeScale(calculator);
  const lessThanFn = unsafeLessThan(calculator);

  return function lessThan(
    ...[dineroObject, comparator]: LessThanParams<TAmount>
  ) {
    const condition = haveSameCurrency([dineroObject, comparator]);
    assert(condition, UNEQUAL_CURRENCIES_MESSAGE);

    const [subjectAmount, comparatorAmount] = normalizeFn([
      dineroObject,
      comparator,
    ]);

    return lessThanFn(subjectAmount, comparatorAmount);
  };
}

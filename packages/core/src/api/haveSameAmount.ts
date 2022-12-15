import type { Calculator, Dinero } from '../types/index.js';
import { equal } from '../utils/index.js';

import { normalizeScale } from './normalizeScale.js';

export type HaveSameAmountParams<TAmount> = readonly [
  dineroObjects: ReadonlyArray<Dinero<TAmount>>
];

export function haveSameAmount<TAmount>(calculator: Calculator<TAmount>) {
  const normalizeFn = normalizeScale(calculator);
  const equalFn = equal(calculator);

  return function _haveSameAmount(
    ...[dineroObjects]: HaveSameAmountParams<TAmount>
  ) {
    const [firstDinero, ...otherDineros] = normalizeFn(dineroObjects);
    const { amount: comparatorAmount } = firstDinero.toJSON();

    return otherDineros.every((d) => {
      const { amount: subjectAmount } = d.toJSON();

      return equalFn(subjectAmount, comparatorAmount);
    });
  };
}

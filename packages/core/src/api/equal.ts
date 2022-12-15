import type { Calculator, Dinero } from '../types/index.js';

import { haveSameAmount } from './haveSameAmount.js';
import { haveSameCurrency } from './haveSameCurrency.js';

export type EqualParams<TAmount> = readonly [
  dineroObject: Dinero<TAmount>,
  comparator: Dinero<TAmount>
];

export function equal<TAmount>(calculator: Calculator<TAmount>) {
  return function _equal(...[dineroObject, comparator]: EqualParams<TAmount>) {
    return (
      haveSameAmount(calculator)([dineroObject, comparator]) &&
      haveSameCurrency([dineroObject, comparator])
    );
  };
}

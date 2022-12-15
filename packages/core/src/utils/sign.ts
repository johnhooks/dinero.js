import type { Calculator } from '../types/index.js';

import { equal } from './equal.js';
import { lessThan } from './lessThan.js';

export function sign<TAmount>(calculator: Calculator<TAmount>) {
  const equalFn = equal(calculator);
  const lessThanFn = lessThan(calculator);
  const zero = calculator.zero();

  return (input: TAmount) => {
    if (equalFn(input, zero)) {
      return zero;
    }

    const one = calculator.increment(zero);
    const minusOne = calculator.decrement(zero);

    return lessThanFn(input, zero) ? minusOne : one;
  };
}

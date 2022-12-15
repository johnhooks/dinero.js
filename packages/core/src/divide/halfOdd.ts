import type { DivideOperation } from '..';
import { isEven, isHalf } from '../utils/index.js';

import { halfUp } from '.';

export const halfOdd: DivideOperation = (amount, factor, calculator) => {
  const isEvenFn = isEven(calculator);
  const isHalfFn = isHalf(calculator);

  const rounded = halfUp(amount, factor, calculator);

  if (!isHalfFn(amount, factor)) {
    return rounded;
  }

  return isEvenFn(rounded) ? calculator.decrement(rounded) : rounded;
};

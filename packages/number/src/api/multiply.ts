import { calculator } from '../calculator';

import { multiply as coreMultiply } from '@dinero.js/core';
import type { MultiplyParams, Dinero } from '@dinero.js/core';

const multiplyFn = coreMultiply(calculator);

/**
 * Multiply the passed Dinero object.
 *
 * @param multiplicand - The Dinero object to multiply.
 * @param multiplier - The number to multiply with.
 *
 * @returns A new Dinero object.
 *
 * @public
 */
export function multiply(
  ...[multiplicand, multiplier]: MultiplyParams<number>
): Dinero<number> {
  return multiplyFn(multiplicand, multiplier);
}

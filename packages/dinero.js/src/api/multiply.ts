import { multiply as coreMultiply } from '@pesos/core';
import type { MultiplyParams } from '@pesos/core';

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
export function multiply<TAmount>(
  ...[multiplicand, multiplier]: MultiplyParams<TAmount>
) {
  const { calculator } = multiplicand;
  const multiplyFn = coreMultiply(calculator);

  return multiplyFn(multiplicand, multiplier);
}

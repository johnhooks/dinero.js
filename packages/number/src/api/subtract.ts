import { calculator } from '../calculator';

import { safeSubtract } from '@dinero.js/core';
import type { SubtractParams, Dinero } from '@dinero.js/core';

const subtractFn = safeSubtract(calculator);

/**
 * Subtract the passed Dinero objects.
 *
 * @param minuend - The Dinero object to subtract from.
 * @param subtrahend - The Dinero object to subtract.
 *
 * @returns A new Dinero object.
 *
 * @public
 */
export function subtract(
  ...[minuend, subtrahend]: SubtractParams<number>
): Dinero<number> {
  return subtractFn(minuend, subtrahend);
}

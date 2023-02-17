import { calculator } from '../calculator';

import { safeMinimum } from '@dinero.js/core';
import type { MinimumParams, Dinero } from '@dinero.js/core';

const minimumFn = safeMinimum(calculator);

/**
 * Get the lowest of the passed Dinero objects.
 *
 * @param dineroObjects - The Dinero objects to minimum.
 *
 * @returns A new Dinero object.
 *
 * @public
 */
export function minimum(
  ...[dineroObjects]: MinimumParams<number>
): Dinero<number> {
  return minimumFn(dineroObjects);
}

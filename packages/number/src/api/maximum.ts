import { calculator } from '../calculator';

import { safeMaximum } from '@dinero.js/core';
import type { MaximumParams, Dinero } from '@dinero.js/core';

const maximumFn = safeMaximum(calculator);

/**
 * Get the greatest of the passed Dinero objects.
 *
 * @param dineroObjects - The Dinero objects to maximum.
 *
 * @returns A new Dinero object.
 *
 * @public
 */
export function maximum(
  ...[dineroObjects]: MaximumParams<number>
): Dinero<number> {
  return maximumFn(dineroObjects);
}

import { calculator } from '../calculator';

import { safeAllocate } from '@dinero.js/core';
import type { AllocateParams, Dinero } from '@dinero.js/core';

const allocateFn = safeAllocate(calculator);

/**
 * Distribute the amount of a Dinero object across a list of ratios.
 *
 * @param dineroObject - The Dinero object to allocate from.
 * @param ratios - The ratios to allocate the amount to.
 *
 * @returns A new Dinero object.
 *
 * @public
 */
export function allocate(
  ...[dineroObject, ratios]: AllocateParams<number>
): ReadonlyArray<Dinero<number>> {
  return allocateFn(dineroObject, ratios);
}

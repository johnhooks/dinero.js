import { calculator } from '../calculator';

import { normalizeScale as coreNormalizeScale } from '@dinero.js/core';
import type { NormalizeScaleParams, Dinero } from '@dinero.js/core';

const normalizeScaleFn = coreNormalizeScale(calculator);

/**
 * Normalize a set of Dinero objects to the highest scale of the set.
 *
 * @param dineroObjects - The Dinero objects to normalize.
 *
 * @returns A new set of Dinero objects.
 *
 * @public
 */
export function normalizeScale(
  ...[dineroObjects]: NormalizeScaleParams<number>
): ReadonlyArray<Dinero<number>> {
  return normalizeScaleFn(dineroObjects);
}

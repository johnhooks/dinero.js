import { calculator } from '../calculator';

import { isPositive as coreIsPositive } from '@dinero.js/core';
import type { IsPositiveParams } from '@dinero.js/core';

const isPositiveFn = coreIsPositive(calculator);

/**
 * Check whether a Dinero object is positive.
 *
 * @param dineroObject - The Dinero object to check.
 *
 * @returns Whether the Dinero object is positive.
 *
 * @public
 */
export function isPositive(
  ...[dineroObject]: IsPositiveParams<number>
): boolean {
  return isPositiveFn(dineroObject);
}

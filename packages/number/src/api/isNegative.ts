import { calculator } from '../calculator';

import { isNegative as coreIsNegative } from '@dinero.js/core';
import type { IsNegativeParams } from '@dinero.js/core';

const isNegativeFn = coreIsNegative(calculator);

/**
 * Check whether a Dinero object is negative.
 *
 * @param dineroObject - The Dinero object to check.
 *
 * @returns Whether the Dinero object is negative.
 *
 * @public
 */
export function isNegative(
  ...[dineroObject]: IsNegativeParams<number>
): boolean {
  return isNegativeFn(dineroObject);
}

import { calculator } from '../calculator';

import { safeLessThanOrEqual } from '@dinero.js/core';
import type { LessThanOrEqualParams } from '@dinero.js/core';

const lessThanOrEqualFn = safeLessThanOrEqual(calculator);

/**
 * Check whether the value of a Dinero object is lesser than or equal to another.
 *
 * @param dineroObject - The Dinero object to compare.
 * @param comparator - The Dinero object to compare to.
 *
 * @returns Whether the Dinero to compare is lesser than or equal to the other.
 *
 * @public
 */
export function lessThanOrEqual(
  ...[dineroObject, comparator]: LessThanOrEqualParams<number>
): boolean {
  return lessThanOrEqualFn(dineroObject, comparator);
}

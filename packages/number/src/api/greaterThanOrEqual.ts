import { calculator } from '../calculator';

import { safeGreaterThanOrEqual } from '@dinero.js/core';
import type { GreaterThanOrEqualParams } from '@dinero.js/core';

const greaterThanOrEqualFn = safeGreaterThanOrEqual(calculator);

/**
 * Check whether the value of a Dinero object is greater than or equal another.
 *
 * @param dineroObject - The Dinero object to compare.
 * @param comparator - The Dinero object to compare to.
 *
 * @returns Whether the Dinero to compare is greater than or equal the other.
 *
 * @public
 */
export function greaterThanOrEqual(
  ...[dineroObject, comparator]: GreaterThanOrEqualParams<number>
): boolean {
  return greaterThanOrEqualFn(dineroObject, comparator);
}

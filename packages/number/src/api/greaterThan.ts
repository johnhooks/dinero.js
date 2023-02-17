import { calculator } from '../calculator';

import { safeGreaterThan } from '@dinero.js/core';
import type { GreaterThanParams } from '@dinero.js/core';

const greaterThanFn = safeGreaterThan(calculator);

/**
 * Check whether the value of a Dinero object is greater than another.
 *
 * @param dineroObject - The Dinero object to compare.
 * @param comparator - The Dinero object to compare to.
 *
 * @returns Whether the Dinero to compare is greater than the other.
 *
 * @public
 */
export function greaterThan(
  ...[dineroObject, comparator]: GreaterThanParams<number>
): boolean {
  return greaterThanFn(dineroObject, comparator);
}

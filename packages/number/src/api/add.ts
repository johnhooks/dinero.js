import { calculator } from '../calculator';

import { safeAdd } from '@dinero.js/core';
import type { AddParams, Dinero } from '@dinero.js/core';

const addFn = safeAdd(calculator);

/**
 * Add up the passed Dinero objects.
 *
 * @param augend - The Dinero object to add to.
 * @param addend - The Dinero object to add.
 *
 * @returns A new Dinero object.
 *
 * @public
 */
export function add(...[augend, addend]: AddParams<number>): Dinero<number> {
  return addFn(augend, addend);
}

import { safeAdd } from '@pesos/core';
import type { AddParams } from '@pesos/core';

/**
 * Add up the passed Dinero objects.
 *
 * @param augend - The Dinero object to add to.
 * @param addend - The Dinero object to add.
 *
 * @returns A new Dinero object.
 */
export function add<TAmount>(...[augend, addend]: AddParams<TAmount>) {
  const { calculator } = augend;
  const addFn = safeAdd(calculator);

  return addFn(augend, addend);
}

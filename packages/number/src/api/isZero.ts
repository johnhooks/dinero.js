import { calculator } from '../calculator';

import { isZero as coreIsZero } from '@dinero.js/core';
import type { IsZeroParams } from '@dinero.js/core';

const isZeroFn = coreIsZero(calculator);

/**
 * Check whether the value of a Dinero object is zero.
 *
 * @param dineroObject - The Dinero object to check.
 *
 * @returns Whether the value of a Dinero object is zero.
 *
 * @public
 */
export function isZero(...[dineroObject]: IsZeroParams<number>): boolean {
  return isZeroFn(dineroObject);
}

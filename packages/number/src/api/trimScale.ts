import { calculator } from '../calculator';

import { trimScale as coreTrimScale } from '@dinero.js/core';
import type { TrimScaleParams, Dinero } from '@dinero.js/core';

const trimScaleFn = coreTrimScale(calculator);

/**
 * Trim a Dinero object's scale as much as possible, down to the currency exponent.
 *
 * @param dineroObject - The Dinero object which scale to trim.
 *
 * @returns A new Dinero object.
 *
 * @public
 */
export function trimScale(
  ...[dineroObject]: TrimScaleParams<number>
): Dinero<number> {
  return trimScaleFn(dineroObject);
}

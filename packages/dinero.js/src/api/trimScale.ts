import { trimScale as coreTrimScale } from '@pesos/core';
import type { TrimScaleParams } from '@pesos/core';

/**
 * Trim a Dinero object's scale as much as possible, down to the currency exponent.
 *
 * @param dineroObject - The Dinero object which scale to trim.
 *
 * @returns A new Dinero object.
 */
export function trimScale<TAmount>(
  ...[dineroObject]: TrimScaleParams<TAmount>
) {
  const { calculator } = dineroObject;
  const trimScaleFn = coreTrimScale(calculator);

  return trimScaleFn(dineroObject);
}

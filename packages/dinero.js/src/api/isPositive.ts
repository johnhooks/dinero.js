import { isPositive as coreIsPositive } from '@pesos/core';
import type { IsPositiveParams } from '@pesos/core';

/**
 * Check whether a Dinero object is positive.
 *
 * @param dineroObject - The Dinero object to check.
 *
 * @returns Whether the Dinero object is positive.
 */
export function isPositive<TAmount>(
  ...[dineroObject]: IsPositiveParams<TAmount>
) {
  const { calculator } = dineroObject;
  const isPositiveFn = coreIsPositive(calculator);

  return isPositiveFn(dineroObject);
}

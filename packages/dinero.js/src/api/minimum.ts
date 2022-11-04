import { safeMinimum } from '@pesos/core';
import type { MinimumParams } from '@pesos/core';

/**
 * Get the lowest of the passed Dinero objects.
 *
 * @param dineroObjects - The Dinero objects to minimum.
 *
 * @returns A new Dinero object.
 *
 * @public
 */
export function minimum<TAmount>(...[dineroObjects]: MinimumParams<TAmount>) {
  const { calculator } = dineroObjects[0];
  const minimumFn = safeMinimum(calculator);

  return minimumFn(dineroObjects);
}

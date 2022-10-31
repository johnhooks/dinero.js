import { toUnits as coreToUnits } from '@bitmachina/dinero-core';
import type { ToUnitsParams } from '@bitmachina/dinero-core';

/**
 * Get the amount of a Dinero object in units.
 *
 * @param dineroObject - The Dinero object to retrieve units from.
 *
 * @returns The amount in units.
 */
export function toUnits<TAmount>(...[dineroObject]: ToUnitsParams<TAmount>) {
  const { calculator } = dineroObject;
  const toUnitsFn = coreToUnits(calculator);

  return toUnitsFn(dineroObject);
}

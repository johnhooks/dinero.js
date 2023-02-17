import { calculator } from '../calculator';

import { hasSubUnits as coreHasSubUnits } from '@dinero.js/core';
import type { HasSubUnitsParams } from '@dinero.js/core';

const hasSubUnitsFn = coreHasSubUnits(calculator);

/**
 * Check whether a Dinero object has minor currency units.
 *
 * @param dineroObject - The Dinero object to check.
 *
 * @returns Whether the Dinero object has minor currency units.
 *
 * @public
 */
export function hasSubUnits(
  ...[dineroObject]: HasSubUnitsParams<number>
): boolean {
  return hasSubUnitsFn(dineroObject);
}

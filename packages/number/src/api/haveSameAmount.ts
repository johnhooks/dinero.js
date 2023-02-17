import { calculator } from '../calculator';

import { haveSameAmount as coreHaveSameAmount } from '@dinero.js/core';
import type { HaveSameAmountParams } from '@dinero.js/core';

const haveSameAmountFn = coreHaveSameAmount(calculator);

/**
 * Check whether a set of Dinero objects have the same amount.
 *
 * @param dineroObjects - The Dinero objects to compare.
 *
 * @returns Whether the Dinero objects have the same amount.
 *
 * @public
 */
export function haveSameAmount(
  ...[dineroObjects]: HaveSameAmountParams<number>
): boolean {
  return haveSameAmountFn(dineroObjects);
}

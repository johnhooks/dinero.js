import { haveSameAmount as coreHaveSameAmount } from '@bitmachina/dinero-core';
import type { HaveSameAmountParams } from '@bitmachina/dinero-core';

/**
 * Check whether a set of Dinero objects have the same amount.
 *
 * @param dineroObjects - The Dinero objects to compare.
 *
 * @returns Whether the Dinero objects have the same amount.
 *
 * @public
 */
export function haveSameAmount<TAmount>(
  ...[dineroObjects]: HaveSameAmountParams<TAmount>
) {
  const { calculator } = dineroObjects[0];
  const haveSameAmountFn = coreHaveSameAmount(calculator);

  return haveSameAmountFn(dineroObjects);
}

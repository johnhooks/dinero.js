import type { Rate, ScaledAmount } from '../types';

/**
 * @internal
 */
export function isScaledAmount<TAmount>(
  amount: Rate<TAmount>
): amount is ScaledAmount<TAmount> {
  return (amount as ScaledAmount<TAmount>)?.hasOwnProperty('amount');
}

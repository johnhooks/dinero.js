import type { Rate, ScaledAmount } from '../types/index.js';

export function isScaledAmount<TAmount>(
  amount: Rate<TAmount>
): amount is ScaledAmount<TAmount> {
  return (amount as ScaledAmount<TAmount>)?.hasOwnProperty('amount');
}

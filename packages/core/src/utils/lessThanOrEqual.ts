import type { Calculator } from '../types/index.js';

import { equal } from './equal.js';
import { lessThan } from './lessThan.js';

type LessThanOrEqualCalculator<TAmount> = Calculator<TAmount>;

/**
 * Returns a lessThanOrEqual function.
 *
 * @param calculator - The calculator to use.
 *
 * @returns The lessThanOrEqual function.
 */
export function lessThanOrEqual<TAmount>(
  calculator: LessThanOrEqualCalculator<TAmount>
) {
  return (subject: TAmount, comparator: TAmount) => {
    return (
      lessThan(calculator)(subject, comparator) ||
      equal(calculator)(subject, comparator)
    );
  };
}

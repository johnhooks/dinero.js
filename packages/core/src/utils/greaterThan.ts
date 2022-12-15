import { ComparisonOperator } from '../types/index.js';
import type { Calculator } from '../types/index.js';

type GreaterThanCalculator<TAmount> = Calculator<TAmount>;

/**
 * Returns a greaterThan function.
 *
 * @param calculator - The calculator to use.
 *
 * @returns The greaterThan function.
 */
export function greaterThan<TAmount>(
  calculator: GreaterThanCalculator<TAmount>
) {
  return (subject: TAmount, comparator: TAmount) => {
    return calculator.compare(subject, comparator) === ComparisonOperator.GT;
  };
}

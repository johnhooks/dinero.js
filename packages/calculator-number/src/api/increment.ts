import type { UnaryOperation } from '@pesos/core';

/**
 * Returns an incremented number.
 *
 * @param value - The number to increment.
 *
 * @returns The incremented number.
 */
export const increment: UnaryOperation<number> = (value) => {
  return value + 1;
};

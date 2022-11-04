import type { Currency } from '@pesos/core';

/**
 * United States dollar.
 */
export const USD: Currency<number> = {
  code: 'USD',
  base: 10,
  exponent: 2,
};

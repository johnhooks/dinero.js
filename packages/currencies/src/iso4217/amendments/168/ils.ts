import type { Currency } from '@bitmachina/dinero-core';

/**
 * Israeli new shekel.
 */
export const ILS: Currency<number> = {
  code: 'ILS',
  base: 10,
  exponent: 2,
};

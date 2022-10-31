import type { Currency } from '@bitmachina/dinero-core';

/**
 * Cuban convertible peso.
 */
export const CUC: Currency<number> = {
  code: 'CUC',
  base: 10,
  exponent: 2,
};

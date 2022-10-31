import type { Currency } from '@bitmachina/dinero-core';

/**
 * Renminbi (Chinese) yuan.
 */
export const CNY: Currency<number> = {
  code: 'CNY',
  base: 10,
  exponent: 2,
};

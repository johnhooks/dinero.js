import type { Currency } from '@bitmachina/dinero-core';

/**
 * Hungarian forint.
 */
export const HUF: Currency<number> = {
  code: 'HUF',
  base: 10,
  exponent: 2,
};

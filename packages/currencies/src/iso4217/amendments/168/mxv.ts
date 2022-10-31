import type { Currency } from '@bitmachina/dinero-core';

/**
 * Mexican Unidad de Inversion.
 */
export const MXV: Currency<number> = {
  code: 'MXV',
  base: 10,
  exponent: 2,
};

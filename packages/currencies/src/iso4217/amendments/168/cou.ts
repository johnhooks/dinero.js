import type { Currency } from '@bitmachina/dinero-core';

/**
 * Unidad de Valor Real.
 */
export const COU: Currency<number> = {
  code: 'COU',
  base: 10,
  exponent: 2,
};

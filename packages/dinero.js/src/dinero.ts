/* eslint-disable functional/no-expression-statement */
import { calculator } from '@pesos/calculator-number';
import {
  createDinero,
  assert,
  INVALID_AMOUNT_MESSAGE,
  INVALID_SCALE_MESSAGE,
} from '@pesos/core';

/**
 * Create a Dinero object.
 *
 * @param options.amount - The amount in minor currency units.
 * @param options.currency - The currency.
 * @param options.scale - The number of decimal places to represent.
 *
 * @returns The created Dinero object.
 */
export const dinero = createDinero({
  calculator,
  onCreate({ amount, scale }) {
    assert(Number.isInteger(amount), INVALID_AMOUNT_MESSAGE);
    assert(Number.isInteger(scale), INVALID_SCALE_MESSAGE);
  },
});

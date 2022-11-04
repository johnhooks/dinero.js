import { calculator } from '@pesos/calculator-bigint';
import { createDinero } from '@pesos/dinero.js';
import type { DineroOptions } from '@pesos/dinero.js';

const dinero = createDinero({ calculator });

export function createBigintDinero(options: DineroOptions<bigint>) {
  return dinero(options);
}

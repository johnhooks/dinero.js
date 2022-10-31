import { calculator } from '@bitmachina/dinero-calculator-bigint';
import { createDinero } from '@bitmachina/dinero.js';
import type { DineroOptions } from '@bitmachina/dinero.js';

const dinero = createDinero({ calculator });

export function createBigintDinero(options: DineroOptions<bigint>) {
  return dinero(options);
}

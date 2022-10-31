import { dinero } from '@bitmachina/dinero.js';
import type { DineroOptions } from '@bitmachina/dinero.js';

export function createNumberDinero(options: DineroOptions<number>) {
  return dinero(options);
}

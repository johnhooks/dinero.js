import { dinero } from '@pesos/dinero.js';
import type { DineroOptions } from '@pesos/dinero.js';

export function createNumberDinero(options: DineroOptions<number>) {
  return dinero(options);
}

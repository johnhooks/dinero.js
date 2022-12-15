import type { Dinero } from '../types/index.js';

export function toSnapshot<TAmount>(dineroObject: Dinero<TAmount>) {
  return dineroObject.toJSON();
}

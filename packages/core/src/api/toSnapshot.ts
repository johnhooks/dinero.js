import type { Dinero } from '../types';

/**
 * @internal
 */
export function toSnapshot<TAmount>(dineroObject: Dinero<TAmount>) {
  return dineroObject.toJSON();
}

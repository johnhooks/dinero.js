import { calculator } from '../calculator';

import { transformScale as coreTransformScale } from '@dinero.js/core';
import type { TransformScaleParams, Dinero } from '@dinero.js/core';

const transformScaleFn = coreTransformScale(calculator);

/**
 * Transform a Dinero object to a new scale.
 *
 * @param dineroObject - The Dinero object to transform.
 * @param newScale - The new scale.
 * @param divide - A custom divide function.
 *
 * @returns A new Dinero object.
 *
 * @public
 */
export function transformScale(
  ...[dineroObject, newScale, divide]: TransformScaleParams<number>
): Dinero<number> {
  return transformScaleFn(dineroObject, newScale, divide);
}

import type { Calculator } from '../types/index.js';

import { isArray } from './isArray.js';

export function computeBase<TAmount>(calculator: Calculator<TAmount>) {
  return (base: TAmount | readonly TAmount[]) => {
    if (isArray(base)) {
      return base.reduce((acc, curr) => calculator.multiply(acc, curr));
    }

    return base;
  };
}

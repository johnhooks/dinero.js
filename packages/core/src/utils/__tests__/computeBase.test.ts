import { calculator } from '@bitmachina/dinero-calculator-number';
import { describe, it, expect } from 'vitest';

import { computeBase as createComputeBase } from '../computeBase';

const computeBase = createComputeBase(calculator);

describe('computeBase', () => {
  it('returns non-array values as is', () => {
    expect(computeBase(100)).toBe(100);
  });
  it('computes array values', () => {
    expect(computeBase([20, 12, 7])).toBe(1680);
  });
});

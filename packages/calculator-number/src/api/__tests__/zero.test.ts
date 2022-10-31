import { describe, it, expect } from 'vitest';

import { zero } from '../zero';

describe('zero', () => {
  it('returns zero', () => {
    expect(zero()).toBe(0);
  });
});

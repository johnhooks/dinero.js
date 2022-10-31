import { ComparisonOperator } from '@bitmachina/dinero-core';
import { describe, it, expect } from 'vitest';

import { compare } from '../compare';

describe('compare', () => {
  describe('ComparisonOperator.LT', () => {
    it('returns `ComparisonOperator.LT` with positive numbers', () => {
      expect(compare(1n, 2n)).toBe(ComparisonOperator.LT);
    });
    it('returns `ComparisonOperator.LT` with negative numbers', () => {
      expect(compare(-2n, -1n)).toBe(ComparisonOperator.LT);
    });
  });
  describe('ComparisonOperator.GT', () => {
    it('returns `ComparisonOperator.GT` with positive numbers', () => {
      expect(compare(2n, 1n)).toBe(ComparisonOperator.GT);
    });
    it('returns `ComparisonOperator.GT` with negative numbers', () => {
      expect(compare(-1n, -2n)).toBe(ComparisonOperator.GT);
    });
  });
  describe('ComparisonOperator.EQ', () => {
    it('returns `ComparisonOperator.EQ` with positive numbers', () => {
      expect(compare(2n, 2n)).toBe(ComparisonOperator.EQ);
    });
    it('returns `ComparisonOperator.EQ` with negative numbers', () => {
      expect(compare(-2n, -2n)).toBe(ComparisonOperator.EQ);
    });
  });
});

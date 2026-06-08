import { expect, test } from '@rstest/core';
import { toDocSlug } from './slug';

test('toDocSlug normalizes path segments', () => {
  expect(toDocSlug('/Guide/Quick Start/')).toBe('guide/quick-start');
});

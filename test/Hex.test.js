import { expect, test } from 'vitest';
import { Hex } from '../packages/utils';

test('Refine text', () => {
  expect(Hex.refine('中,文en12')).toBe('中，文 en12\n');
});

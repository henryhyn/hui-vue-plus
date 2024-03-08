import axios from 'axios';
import { expect, test } from 'vitest';
import { Hex } from '../packages/utils';

const service = axios.create({
  timeout: 5000
});
const retrofit = new Hex.Retrofit(service);
async function getData() {
  const data = await new Promise((resolve, reject) => {
    retrofit.get('https://jsonplaceholder.typicode.com/posts/1', res => resolve(res));
  });
  return data;
}

test('Refine text', async () => {
  const res = await getData();
  expect(res.id).toBe(1);
});

test('Refine text', () => {
  expect(Hex.refine('中,文en12')).toBe('中，文 en12\n');
});

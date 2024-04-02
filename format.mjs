import fs from 'fs';
import { Hex } from 'hui-vue';

const args = process.argv.slice(2);
args.forEach(file => {
  const data = fs.readFileSync(file, { encoding: 'utf-8' });
  fs.writeFileSync(file, Hex.refine(data), { encoding: 'utf-8' });
  console.log(`${file} 转换完毕!`);
});

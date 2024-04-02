// 参考: https://github.com/vinta/pangu.js/blob/master/src/shared/core.js
import fs from 'fs';

const CRLF_LF = /[ ]*\r?\n/g;
const ANS_PUNCT = /(\w)[ ]+(\p{Po})/g;
const CJK_ANS = /(\p{Unified_Ideograph})(\w)/gu;
const ANS_CJK = /(\w%?)(\p{Unified_Ideograph})/gu;
const BRACKET = /（(.+?)）/gu;
const CJK_BRACKET = /(\p{Unified_Ideograph}\*{0,2})([$(])/gu;
const BRACKET_CJK = /([$)])(\p{Unified_Ideograph})/gu;
const spacing = function (text) {
  let newText = (text || '').trim();
  newText = newText.replace(CRLF_LF, '\n');
  newText = newText.replace(ANS_PUNCT, '$1$2');
  newText = newText.replace(CJK_ANS, '$1 $2');
  newText = newText.replace(ANS_CJK, '$1 $2');
  newText = newText.replace(BRACKET, '($1)');
  newText = newText.replace(CJK_BRACKET, '$1 $2');
  newText = newText.replace(BRACKET_CJK, '$1 $2');
  return newText + '\n';
};

const PUNCT = /(\p{Unified_Ideograph})([,.?!;:])[ ]*/gu;
const PUNCT_MAP = {
  ',': '，',
  '.': '。',
  '?': '？',
  '!': '！',
  ';': '；',
  ':': '：'
};
const convert = function (symbols) {
  return symbols.replace(PUNCT, (match, p1, p2) => `${p1}${PUNCT_MAP[p2]}`);
};

const args = process.argv.slice(2);
args.forEach(file => {
  const data = fs.readFileSync(file, { encoding: 'utf-8' });
  fs.writeFileSync(file, convert(spacing(data)), { encoding: 'utf-8' });
  console.log(`${file} 转换完毕!`);
});

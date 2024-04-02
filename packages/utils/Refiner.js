// 参考: https://github.com/vinta/pangu.js/blob/master/src/shared/core.js
export default class Refiner {
  static CRLF_LF = /[ ]*\r?\n/g;
  static ANS_PUNCT = /(\w)[ ]+(\p{Po})/g;
  static CJK_ANS = /(\p{Unified_Ideograph})(\w)/gu;
  static ANS_CJK = /(\w%?)(\p{Unified_Ideograph})/gu;
  static BRACKET = /（(.+?)）/gu;
  static CJK_BRACKET = /(\p{Unified_Ideograph}\*{0,2})([$(])/gu;
  static BRACKET_CJK = /([$)])(\p{Unified_Ideograph})/gu;

  static PUNCT = /(\p{Unified_Ideograph})([,.?!;:])[ ]*/gu;
  static PUNCT_MAP = {
    ',': '，',
    '.': '。',
    '?': '？',
    '!': '！',
    ';': '；',
    ':': '：'
  };

  constructor() {
    this.version = '0.0.1';
  }

  refine(text) {
    return this.convert(this.spacing(text));
  }

  spacing(text) {
    let newText = (text || '').trim();
    newText = newText.replace(Refiner.CRLF_LF, '\n');
    newText = newText.replace(Refiner.ANS_PUNCT, '$1$2');
    newText = newText.replace(Refiner.CJK_ANS, '$1 $2');
    newText = newText.replace(Refiner.ANS_CJK, '$1 $2');
    newText = newText.replace(Refiner.BRACKET, '($1)');
    newText = newText.replace(Refiner.CJK_BRACKET, '$1 $2');
    newText = newText.replace(Refiner.BRACKET_CJK, '$1 $2');
    return newText + '\n';
  }

  convert(text) {
    return text.replace(Refiner.PUNCT, (match, p1, p2) => `${p1}${Refiner.PUNCT_MAP[p2]}`);
  }
}

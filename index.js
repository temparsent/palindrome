//reverse()メソッドを追加して全てのStringで使えるようにする。
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;

  // パリンドロームのテスト用に変換したcontentを返す
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // パリンドロームならtrueを、違うならfalseを返す
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// TranslatedPhraseオブジェクトを定義する
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // パリンドロームのテスト用に変換した訳文を返す
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}
TranslatedPhrase.prototype = new Phrase();

String.prototype.brank = function() {
  return /^\s*$/.test(this);
};

Array.prototype.last = function() {
  return this[this.length - 1];
};
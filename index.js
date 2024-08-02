module.exports = Phrase;

//reverse()メソッドを追加して全てのStringで使えるようにする。
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;

  // パリンドロームのテスト用に変換したcontentを返す
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  //コンテンツの文字だけ返す
  //利用例
  // new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    const lettersRegEx = /[a-z]/gi;
    return (this.content.match(lettersRegEx) || []).join("");
  }
  // パリンドロームならtrueを、違うならfalseを返す
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

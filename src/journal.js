

export default function Entry(text) {
  this.text = text;
  this.wordCounted = 0;
  this.occurancesOfWord = 0;
}

Entry.prototype.wordCounter = function(text) {
  let wordCount = 0;
  const textArray = text.trim().split(" ");
  console.log(textArray);
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
      console.log(wordCount);
    }
  });
  this.wordCounted = wordCount;
  console.log(this.wordCounted);
  return this.wordCounted;
};

Entry.prototype.numberOfOccurrencesInText = function(word, text) {
  if (word.trim().length === 0) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
};
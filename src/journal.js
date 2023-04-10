

export default function Entry(text) {
  this.text = text;
}

Entry.prototype.wordCounter = function(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
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

// function boldPassage(word, text) {
//   if ((text.trim().length === 0) || (word.trim().length === 0)) {
//     return null;
//   }
//   const p = document.createElement("p");
//   let textArray = text.split(" ");
//   textArray.forEach(function(element, index) {
//     if (word === element) {
//       const bold = document.createElement("strong");
//       bold.append(element);
//       p.append(bold);
//     } else {
//       p.append(element);
//     }
//     if (index !== (textArray.length - 1)) {
//       p.append(" ");
//     }
//   });
//   return p;
// }
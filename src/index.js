import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/styles.css';
import Entry from './journal.js';


function handleFormSubmission() {
  event.preventDefault();
  const inputtedPassage = document.getElementById("text-passage").value;
  const inputtedWord = document.getElementById("word").value;
  let newEntry = new Entry(inputtedPassage, inputtedWord);
  newEntry.wordCounter(inputtedPassage);
  newEntry.numberOfOccurrencesInText(inputtedWord, inputtedPassage);
  document.getElementById("total-count").innerText = newEntry.wordCounted;
  document.getElementById("selected-count").innerText = newEntry.occurrencesOfWord;
  console.log(inputtedPassage);
}
//   let boldedPassage = boldPassage(word, passage);
//   if (boldedPassage) {
//     document.querySelector("div#bolded-passage").append(boldedPassage);
//   } else {
//     document.querySelector("div#bolded-passage").innerText = null;
//   }
// }

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});
//Instructions 
//Given an array of strings, words, return a string that has all the words concatenated together
// - spaces are needed in between words
//
//ex. ['how', 'are', 'you'] -> 'how are you'

function wordsToSentence(words) {
    //your code here
    return words.join(' ');
  }
  
  //console log results
  console.log('results', wordsToSentence(['hey', 'there']));
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = {
      wordsToSentence,
    };
  }
  
function findLongestWordLength(str) {
    let words = str.split(" ")
    let longestWord = 0
  
    for (let i = 0; i < words.length; i++){
      if (words[i].length > longestWord){
        longestWord = words[i].length
      }
    }
  
    return longestWord;
  }
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 
function findLongestWord(str) {
    words = str.split(" ");
    let longestWord = "";

    for (let word of words){
        if (word.length > longestWord.length){
            longestWord = word;
        }
    }

    return longestWord;

}
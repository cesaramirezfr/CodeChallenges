/**
 * Given two words (start and end) and a dictionary, you need to return the sortest length of a sequence of words that takes us from the initial word to the final word.
 * Keep in mind that at each step, only a single letter should be changed, and each modified word must be present in the given array, as shown in the following examples:
 * 
 * Example 1:
 * Input: start = “hit”  end = “cog”  dict= [“hot”,”dot”,”dog”,”lot”,”log”]
 * Output:  5
 * Explanation= "hit-hot-dot-dog-cog = size 5 to reach the word.
 * 
 * Example 2:
 * Input: start = “met”  end = “ced”  dict= ["xet","ten", "cet", "lot","log"]
 * Output:  3
 * Explanation= "met-cet-ced= size 3 to reach the word.
 */

function countLetterDiff(word1: string, word2: string): number {
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      count++;
    }
  }
  return count;
}

export function wordLadder(start: string, end: string, dict: string[]): number {
  let steps = 1;
  let word = start;
  let words = dict.concat(end);

  do {
    steps++;
    const possibleNextWord: string[] = [];

    words.forEach((w) => {
      if(countLetterDiff(w, word) === 1) {
        possibleNextWord.push(w)
      }
    });

    possibleNextWord.sort((a, b) => {
      const aDiff = countLetterDiff(a, end);
      const bDiff = countLetterDiff(b, end);
      return aDiff - bDiff;
    });

    word = possibleNextWord[0];
  } while (word !== end);

  return steps;
}
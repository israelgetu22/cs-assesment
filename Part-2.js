//Part 2

//ONE

// let array = [28, 43, -12, 30, 4, 0, 12];

// // Write your solution below:
// let result = false;

// for (let i = 0; i < array.length; i++) {
//   for (let k = i + 1; k < array.length; k++) {
//     console.log("i " + array[i] + " k " + array[k]);
//     if (array[i] + array[k] === 0) {
//       result = true;
//     }
//   }
// }

// time complexity: O(n2)
// space complexity: O(n2)

// console.log(result);

//TWO
// function hasUniqueCharacters(word) {
//   let noDuplicate = true;
//   for (let i = 0; i < word.length; i++) {
//     for (let x = i + 1; x < word.length; x++) {
//       if (word[i] === word[x]) {
//         noDuplicate = false;
//       }
//     }
//   }
//   return noDuplicate;
// }

// let myWord = hasUniqueCharacters("Moonday");
// console.log(myWord);

// time complexity: O(n2)
// space complexity: O(n2)

//THREE
// function isPangram(string) {
//   let strArr = string.toLowerCase();
//   let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

//   for (let i = 0; i < alphabet.length; i++) {
//     if (strArr.indexOf(alphabet[i]) < 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPangram("I like cats, but not mice"));
// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

// time complexity: O(n)
// space complexity: O(n)

//FOUR
// function longest_string(str_ara) {
//   var max = str_ara[0].length;
//   str_ara.map((v) => (max = Math.max(max, v.length)));
//   result = str_ara.filter((v) => v.length == max);
//   return result;
// }

// console.log(longest_string(["a", "aa", "aaa", "aaaaa", "aaaa"]));

// time complexity: O(n)
// space complexity: O(n)

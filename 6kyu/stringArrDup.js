/* In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

 */
//solution
//1. lop through array and isolate the strings
//2. loop through strings and identify the repeated letters use for Loop
//3. find a way of comparing the letter with the next one
console.log(" mas");
const dup = ["abracadabraaaaaaaaaaaaaaaaaa", "allosssttee", "assessee"];
function findOdd(A) {
  return A.map((string) => {
    return string.toString()
      .split("")
      .map((letter, index, arr) => {
        const nextLetter = arr[index + 1];
        if (letter === nextLetter) {
          return;
        } else return letter;
      })
      .join("");
  });
}
console.log(findOdd(dup));

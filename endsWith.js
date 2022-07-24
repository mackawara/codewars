/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

/* SOlution */
const endsWith = (str, ending) =>
  ending == str.split("").splice(-ending.length, ending.length).join(""); // use splice to extract the last nth characters depnding on lenght of string to be matched

console.log(endsWith("johnds", "ohns"));

/* BEtter Solution
uses the string method endsWith

const endsWith=(str,ending)=>
str.endsWith(ending)

*/

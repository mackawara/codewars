/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

 */
//Solution
//1. Split the sring into aarray
//2. use array loop methods find? find?count? to count the numbe of appearances or custom function
//3. convert if length >1
//4. return string

function duplicateEncode(word) {
  const array1 = word.toLowerCase().split("");
  // this function take an array and letter and checks the number of occurence and returns the amount oftimes the letter occurs in the aarray. Uses the count to convert to the desired
  function getCountConvert(letter, array) {
    let count = 0;
    array.forEach((item) => {
      if (letter == item) count++;
    });

    return count > 1 ? ")" : "(";
  }
  //uses the converter to return the converted string
  return array1.map((letter) => getCountConvert(letter, array1)).join("");
}
console.log(duplicateEncode("success"));

//lessos from other use lastIndexOf and index of which would be checking if the first occurence is the last


/* "hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata */

const { kStringMaxLength } = require("buffer");
const e = require("express");

//Solution
//1. use split to isolate each letter
//.2 identify the vowels using regex
//3. array.map to recreate the string without the vowels

/* function shortcut(string) {
  return string
    .split("") 
    .map((letter) => {
      return !/a|e|i|o|u/.test(letter) ? letter : "";
    })
    .join("");
}
console.log(shortcut("hello")); */

//piece of cake

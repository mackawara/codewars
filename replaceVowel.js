/*Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. */


function disemvowel(str) {
 
  //convert to array by split then check each list item by using regex 
  
  const strArr=str.split("").map((letter)=>letter.match(/a|e|i|o|u/gi)?"":letter).join("")
  
return strArr
}

// lessons gi in regex means ignore case


// Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  const regex= /a|e|i|o|u/i
const arr=str.split("")
const vowels=arr.filter((char)=>{
return regex.test(char)
})
  return vowels.length
}

// Alternative 
function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

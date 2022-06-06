/* Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */

function solution(str){
  return str.split("").reverse().join().replace(/,/g,"")
}

// split() returns an array containign each character 
//revrse reaaranges the character
//join changes the array into a string

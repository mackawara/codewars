/* 
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */
//solution
//1. convert to array and split
//2..use arrays.sort to reverse

function solution(str){
   return str.split("").reverse().join("")
}
console.log(solution("fast"))
//good as it can get
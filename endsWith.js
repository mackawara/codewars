/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

/* SOlution */
function solution(str, ending){
    // TODO: complete
    const len=ending.split("").length 
    return ending==str.split("").splice(-len,len).join("") // use splice to extract the last nth characters depnding on lenght of string to be matched
     // compare returned string with ending
  }
  console.log(solution("johns","ohns"))
/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

/* SOlution */
function solution(str, ending){
    // TODO: complete
    const len=ending.split("").length
    const spliced=str.split("").splice(-len,len).join("")
    console.log(spliced)
    const endinArr=ending.split("")
    return ending==spliced
  }
  console.log(solution("johns","ohns"))
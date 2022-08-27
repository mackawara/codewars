/* omplete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

//Solution
//1. identify the capital and insert a space
//2. Use regeX?
//3. replace
function solution(string) {
    const reg=new RegExp(/[A-Z]/)
   return string.split("").map(letter=>{
        return reg.test(letter)?" "+letter:letter
    }).join("")
}
console.log(solution("camelCaseLetter"))
//Working solution
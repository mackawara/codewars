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

function duplicateEncode(word){
    const array1=word.toLowerCase().split("")
    function getCount(letter,array){
        let count=0
        array.forEach(item=>{
            if (letter==item)count++
           // console.log(count)
        
        })
        console.log(count)
       return count
       }
 return array1.map(letter=>{
     if (getCount(letter,array1)>1)return ")"
     else return "("   
    }).join("")
    
}
console.log(duplicateEncode("success"))
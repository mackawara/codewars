/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps */

const reverseWords=(str)=> {
   const newArray=str.split(" ")
   const eachWord= newArray.map((eachword)=> {return eachword.split("").reverse().join("")}) // split into characters , revers and join 
    return eachWord.join(" ") // convert back the array into  a single string by joining each array item with space
                           }

//Steps
// 1.use split(" ") to split into an array of words.
// 2. loop throught the array and split each word int an array and reverse the characters

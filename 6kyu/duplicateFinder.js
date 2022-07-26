/* DESCRIPTION:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

steps 
1 . split into array in order to loop
2 . run nested loop to check if item already in and push the duplicate to array
3. return length of array

 */
function duplicateCount(text){
   const tArr= text.split("")
   let dupl=[]
   let count=[]
   tArr.filter((letter)=>{
    dupl.push(letter)
    dupl.includes(letter)?dupl.splice(letter):console.log(" duplicate found")

   //console.log(count)
    //if dupl.includes(letter)
   })
   const newAR=tArr.map((dupl)=>{

   })
   console.log(dupl)
   dupl.forEach((dup)=>{

   })
   return dupl.length
  }
console.log(duplicateCount("wewefwe"))
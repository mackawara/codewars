/* DESCRIPTION:
You get a "text" and have to shift the vowels by "n" positions to the right.
(Negative value for n should shift to the left.)
"Position" means the vowel's position if taken as one item in a list of all vowels within the string.
A shift by 1 would mean, that every vowel shifts to the place of the next vowel.

Shifting over the edges of the text should continue at the other edge.

Example:

text = "This is a test!"
n = 1
output = "Thes is i tast!"

text = "This is a test!"
n = 3
output = "This as e tist!"

If text is null orsplit empty return exactly this value.
Vowels are "a,e,i,o,u".


Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.

STRINGSREGULAR EXPRESSIONSALGORITHMS
SIMILAR KATA: */
//solution
//1.split the text to individual
//2. identify the vowels using regex
//3. use map to rreplace vowel with the next one

function vowelShift(text, n) {

 const vowelArr=  text.split("").filter(letter=>{
       return /a|e|i|o|u/.test(letter)
    })
const  test=    vowelArr.forEach((vowel,index,array) => {
        const nextV=array[index+n]
        console.log(nextV)
      return  text.split("").map((letter,index1, array1)=>{
        if (!typeof(nextV)==undefined&&letter==vowel){
            console.log(letter)}
     q   })
        
    });
    console.log(test)
    
  }
  console.log(vowelShift("wangudavuda",1))
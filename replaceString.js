/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string*/

function fakeBin(x){
/*split converts any string to  array s that the aray can be looped*/
const array1=x.split("")
/*apply the condition for replacing*/
const array3=array1.map((number)=>{
  if (number>=5){return 1
}
  else if (number<5) return 0
  
})

/*converts the resultant array to string and then removes the commas*/
return array3.toString().replace(/,/g,"")
}

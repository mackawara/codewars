/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


*/

function highAndLow(numbers){
  // spilt the numbers by space and convert to Int , then sort from highest lowest
 const hiest= numbers.split(" ").map((number)=>{return parseInt(number)}).sort(function(a,b){return a-b})
 
 return `${hiest[hiest.length-1]} ${hiest[0]}`
}

/* ons
Output
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals. */

//solution
//1. identify the last and first letter of each
// 2 use string method , index 0 and index -1 or starts with and ends with?
//3. compare and pass true if equal

const a="girrafe",
b="grape"
function feast(beast, dish) {
   
    //using indices
    const lastind=string=>string.length-1
    console.log(beast[0],beast[lastind(beast)])
  return  beast[0]==dish[0]&&beast[lastind(beast)]==dish[lastind(dish)]?true:false
    }
    console.log(feast(a,b))
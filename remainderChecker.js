/* Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

Solution */
function lovefunc(flower1,flower2){
        if (flower1%2==0&&flower2%2!==0) { //check for even number in both
          return true;
        }else if(flower1%2!==0&&flower2%2==0){
          return true;
        }else return false;
      }

/*
Better Solution from codewars
check if the remainder after dividing the 2 is the same , which would mean they are bott odd/even

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}
*/

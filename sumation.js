/* Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 */
//use loop obviously
// keep track of addedd value

var summation = function (num) {
    // Code here
    let sum=0
    for (let index = 0; index <= num; index++) {
        sum=sum+index
        console.log(index)
        
    }
    return sum
  }
  console.log(summation(8))
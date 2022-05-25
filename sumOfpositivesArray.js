/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/

function positiveSum(arr) {
  const positives=arr.filter((item)=>{
    return item>0
  })
  let sum=0 ;
  for (let i = 0; i < positives.length; i++) {
  const number= positives[i] ;
    
    sum+=number
}
 
return sum}
              

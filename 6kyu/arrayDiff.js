/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] */

//possible solution
//1 . search for the elements of the first array in the second array
//2. look for every instant of the element in the second
//3. loop through the 1st array and check for the element?
//4. remove the elements from the first array and retrun the resuls

/* Solution */
// 1 liner refactoring
const arrayDiff=(a, b) => a.filter(item=>!b.includes(item)) // check if element is to be found in second array



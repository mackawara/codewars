// given a string of words s , find a nd return th elengt of the shortest one
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

//use pop to get the first word after sorting and get the length

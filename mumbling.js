/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
function accum(s) {
	// your code
  function capitalise(cahr){
    return cahr[0].toUpperCase()+cahr.slice(1) //capitalises each string passed to it
  }
  const arr2=s.split("").map((char,index)=>{
    return char.repeat(index+1).toLowerCase() // tolowercase helps tohave all strings start at one case
  })
  return arr2.map((item)=>{
    return capitalise(item)
  }).join("-")
}

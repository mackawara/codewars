/*Simple, remove the spaces from the string, then return the resultant string.
1st atttempt : tried to use string.replace(" ", "") that only replaces the first match
solved it by specifying a regex value , which meant all matches are replaces
 
t*/
function noSpace(x){
  const regex=/ /g
const filtered=x.replace(regex,"")
return filtered
}

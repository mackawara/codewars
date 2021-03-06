/*Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

could have used index of each score
should have used ternary operator too
*/

function points(games) {
  // your code here
  let points=0
  
  const wins=games.filter((match)=>{
    const ourScore= match.slice(0,1)
    const theirScore=match.slice(2,3)
    if (ourScore>theirScore){points+=3}
    else if (ourScore==theirScore){points+=1}
    
  })
  return points
}

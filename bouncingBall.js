/* 
PROBLEM
A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).
*/

function bouncingBall(h, bounce, window) {
  // your code here

  let views = 0; // number of timeS Mom sees th ball

  let reboundHeight = h * bounce;

  if (h > 0 && h > window && bounce > 0 && bounce < 1) {
    // check if all minimu conditions have been met and run
    while (reboundHeight > window) {
      console.log(reboundHeight);
      views += 2; // for each true condition mum see the ball twice once on the way down and once on the way up(rebound)
      reboundHeight = reboundHeight * bounce; // recalculate the rebound height at each bounce
    }
    views += 1;
    console.log(views);
    return views;
  } else {
    console.log(-1);
    return -1;
  }
}

bouncingBall(3, 0.1, 1.5);

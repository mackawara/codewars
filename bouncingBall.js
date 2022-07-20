function bouncingBall(h, bounce, window) {
  // your code here

  let views = 0;

  let reboundHeight;

  
  

  for (let index = 0; reboundHeight > window; reboundHeight*bounce) {
    if (h > 0 && h > window && bounce > 0 && bounce < 1) {
    console.log(reboundHeight)
    views+=2
    console.log(views)
    }
  }
}
bouncingBall(10, 0.66, 1);

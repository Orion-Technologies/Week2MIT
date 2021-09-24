//Set global variable that would contain the position, velocity and the html element "ball"
var ball;
var velocity = 100;
var positionY = 0;
var positionX = 0;
var reverse = false;
//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var ball = document.getElementById('ball');
  var Ymin = 0;
  var Ymax = 300;
  var Xmin = 0;
  var Xmax = 300;
  
  if(reverse){
    positionY = positionY - velocity;
    positionX = positionX - velocity;
    ball.style.left = positionY + 'px';
    ball.style.left = positionX + 'px';
  } else {
    positionY = positionY + velocity;
    positionX = positionX + velocity;
    ball.style.left = positionY + 'px';
    ball.style.left = positionX + 'px';
  }

 if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }

}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);

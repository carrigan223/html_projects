//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var positionY = 0;
var velocity = 100;
var reverse = false;
var ball = document.getElementById("ball");

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 0;
  var Xmax = 300;

  // two y-axis coordinates
  var Ymin = 0;
  var Ymax = 300;

  //checking if reverse is true
  //if true sub velocity
  //if false adding velocity
  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
   
  }

  //checking if positionX is greater then Xmax
  //or equal to Xmin
  //or positionY greater then Ymax
  //or equal to Ymax
  //if any of these conditions are true
  //return the opposite of reverse
  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";
}

setInterval(moveBall, 100);

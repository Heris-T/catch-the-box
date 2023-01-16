let intervalId;
let screenWidth;
let screenHeight;
let leftSpeed = 5;
let topSpeed = 5;

function startGame() {
  // Hide the start button
  document.getElementById("startBtn").style.display = "none";

  // Get the box element
  var box = document.getElementById("box");
  var restartBtn = document.getElementById("restartBtn");

  // Get the screen width and height
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;

  // Set the initial position of the box
  box.style.top = "0px";
  box.style.left = "0px";

  // Start the animation loop
  intervalId = setInterval(moveBox, 10);

  function moveBox() {
    // Get the current position of the box
    var left = parseInt(box.style.left);
    var top = parseInt(box.style.top);

    // Update the position of the box
    left += leftSpeed;
    top += topSpeed;

    // Check if the box has reached the edge of the screen
    if (left + 50 > screenWidth || left < 0) {
      leftSpeed = -leftSpeed;
    }
    if (top + 50 > screenHeight || top < 0) {
      topSpeed = -topSpeed;
    }

    box.style.left = left + "px";
    box.style.top = top + "px";
  }

  box.onclick = function() {
    clearInterval(intervalId);
    restartBtn.style.display = "block";
    alert("You caught the box!");
  }

  restartBtn.onclick = function() {
    intervalId = setInterval(moveBox, 10);
    restartBtn.style.display = "none";
  }
}

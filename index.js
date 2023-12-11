document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("background-canvas");
  var ctx = canvas.getContext("2d");

  // Set canvas width and height to cover the entire screen
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var dotRadius = 10;
  var dotColor = "black";
  var shiftX = canvas.width / 2; // Center dot horizontally
  var shiftY = canvas.height / 2; // Center dot vertically

  var t = 0; // Initialize the value of t
  var num_lines = 20;

  function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    for (let i = 0; i < num_lines; i++) {
      lx1 = x1(t+i)*4 + shiftX;
      ly1 = y1(t+i)*4 + shiftY;
      lx2 = x2(t+i)*4 + shiftX;
      ly2 = y2(t+i)*4 + shiftY;

      ctx.beginPath();
      ctx.moveTo(lx1, ly1);
      ctx.lineTo(lx2, ly2);
      var hue = ((t+i) / 3) % 360; // Change hue value over time
      ctx.strokeStyle = `hsl(${hue}, 95%, 75%)`; // Set stroke color
      ctx.lineWidth = 2; // Define line width
      ctx.stroke();
      ctx.closePath();
    }


    t += 0.2;


    // Request the next frame
    requestAnimationFrame(draw);
  }

  // Start the animation loop
  draw();
});

const x1 = (t) => {
    return Math.sin(t / 10) * 100 + Math.sin(t / 5) * 20;
  };
  const y1 = (t) => {
    return Math.cos(t / 10) * 100;
  };
  
  const x2 = (t) => {
    return Math.sin(t / 10) * 200 + Math.sin(t) * 2;
  };
  const y2 = (t) => {
    return Math.sin(t / 20) * 200 + Math.cos(t / 12) * 20;
  };
  
// Got the Binary rain code from this source: https://betterprogramming.pub/how-to-create-the-matrix-text-effect-with-javascript-325c6bb7d96e while also using ChatGPT to modify it to my needs since I am 
// no good with animations
import { useEffect } from "react";

const BinaryRain = () => {
  var tileSize = 20;
  var maxStackHeight;
  var columns = [];
  var canvas;
  var ctx;

  useEffect(() => {
    canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    initMatrix();
    let frameCount = 0;
    const frameDelay = 10; // Increase this number to slow down the animation
    const tick = () => {
      if (frameCount % frameDelay === 0) {
        draw();
      }
      frameCount++;
      requestAnimationFrame(tick);
    };
    const animationFrameId = requestAnimationFrame(tick);

  // Clean up when the component is unmounted
  return () => {
    cancelAnimationFrame(animationFrameId);
  };
  });

  const initMatrix = () => {
     maxStackHeight = Math.ceil(canvas.height / tileSize);

    // divide the canvas into columns
    for (let i = 0; i < canvas.width / tileSize; ++i) {
      var column = {};
      // save the x position of the column
      column.x = i * tileSize;
      // create a random stack height for the column
      column.stackHeight = 10 + Math.random() * maxStackHeight;
      // add a counter to count the stack height
      column.stackCounter = 0;
      // add the column to the list
      columns.push(column);
    }
  };

  const draw = () => {
    // draw a semi transparent black rectangle on top of the scene to slowly fade older characters
    ctx.fillStyle = "rgba( 0 , 0 , 0 , " + 0.03 + " )";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // pick a font slightly smaller than the tile size
    ctx.font = tileSize - 2 + "px monospace";
    ctx.fillStyle = "rgb(160,32,240, .2)";
    for (let i = 0; i < columns.length; ++i) {
      // pick a random ascii character (change the 94 to a higher number to include more characters)
      var randomCharacter = Math.floor(Math.random()*2);
      ctx.fillText(
        randomCharacter,
        columns[i].x,
        columns[i].stackCounter * tileSize + tileSize
      );

      // if the stack is at its height limit, pick a new random height and reset the counter
      if (++columns[i].stackCounter >= columns[i].stackHeight) {
        columns[i].stackHeight = 10 + Math.random() * maxStackHeight;
        columns[i].stackCounter = 0;
      }
    }
  };

  return (
    <canvas
      id="canvas"
      className="fixed z-0 h-max h-full w-full"
    ></canvas>
  );
};

export default BinaryRain;

var step;

// setup for the canvas and colors
function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent("sketch-holder");

  step = 50;

  colors = ["#eaa690", "#60403f", "#f68366", "#fd9848","#ffc56d"]
  noLoop();

}

// randomly making a diagonal line one way or the other
function cross(x, y, width, height) {
  var change = random() >= 0.5;
  if (change){
    line(x, y, x+ width, y + height);
  }
  else {
    line(x + width, y, x, y + height);
  }
}

// decreases the step value when mouse is pressed in the canvas, and redraws
function mousePressed() {
  if (0 <= mouseX && 0 <= mouseY && mouseX <= width && mouseY <= height) {
    if (step <= 10) {
      step = 50;
    }
    step -= 2;
    redraw();
  }

}

// draws the lines in each grid piece
function draw() {
  background(255);
  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      stroke(random(colors));
      strokeWeight(5);
      cross(x, y, step, step);
    }
  }
}



document.addEventListener("DOMContentLoaded", function() {
    // Captura as dimensões da tela
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    // Encontra o elemento p no HTML
    const display = document.getElementById('screen-size');

    // Define o texto do elemento para mostrar as dimensões
    display.textContent = `Width: ${screenWidth}px, Height: ${screenHeight}px`;
});
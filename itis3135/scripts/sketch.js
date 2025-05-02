// Interactive drawing sketch
// Based on p5.js examples

function setup() {
    // Create canvas and place it in the canvas-container div
    let canvas = createCanvas(600, 400);
    canvas.parent('canvas-container');
    background(240);
    
    // Add instructions text
    textAlign(CENTER);
    textSize(16);
    fill(0);
    text("Move your mouse to draw. Click to clear the canvas.", width/2, 30);
  }
  
  function draw() {
    // Map mouse position to color values
    let r = map(mouseX, 0, width, 0, 255);
    let g = map(mouseY, 0, height, 0, 255);
    let b = map(mouseX + mouseY, 0, width + height, 255, 0);
    
    // Draw only when mouse is pressed
    if (mouseIsPressed) {
      noStroke();
      fill(r, g, b, 100);
      ellipse(mouseX, mouseY, 24, 24);
    }
  }
  
  // Clear canvas when mouse is clicked
  function mouseClicked() {
    // Don't clear if clicked outside canvas
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      background(240);
      
      // Redraw instructions
      textAlign(CENTER);
      textSize(16);
      fill(0);
      text("Move your mouse to draw. Click to clear the canvas.", width/2, 30);
      
      // Prevent default behavior
      return false;
    }
  }
  
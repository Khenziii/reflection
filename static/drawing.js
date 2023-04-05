const canvas = document.getElementById('canvas');

// Set the actual size of the canvas element to match the CSS size
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// Add event listeners for mouse events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);

let isDrawing = false;

function startDrawing(event) {
    isDrawing = true;
    draw(event); // Draw the first pixel
    canvas.addEventListener('mousemove', draw);
}

function draw(event) {
    if (!isDrawing) return;
  
    // Get the coordinates of the pixel that was clicked on the left side
    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;
  
    // Update the pixel's background color to black on the left side
    const pixel = canvas.getContext('2d');
    pixel.fillStyle = 'black';
    pixel.fillRect(x, y, 1, 1);
  
    // Draw the same pixel flipped horizontally on the right side
    const rightPixelX = canvas.width - x;
    pixel.save();
    pixel.scale(-1, 1);
    pixel.fillStyle = 'black';
    pixel.fillRect(-rightPixelX, y, 1, 1);
    pixel.restore();
  }
  


function stopDrawing() {
    isDrawing = false;
    canvas.removeEventListener('mousemove', draw);
}

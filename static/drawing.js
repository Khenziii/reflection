// Get the canvas element
const canvas = document.querySelector('canvas');

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

  // Get the coordinates of the pixel that was clicked
  const x = event.clientX - canvas.offsetLeft;
  const y = event.clientY - canvas.offsetTop;

  // Update the pixel's background color to black
  const pixel = canvas.getContext('2d');
  pixel.fillStyle = 'black';
  pixel.fillRect(x, y, 1, 1);
}

function stopDrawing() {
  isDrawing = false;
  canvas.removeEventListener('mousemove', draw);
}
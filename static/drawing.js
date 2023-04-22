const canvas = document.getElementById('canvas');
const slider = document.getElementById('slider');
const firstUI = document.getElementById('firstUI');
const colorpicker = document.getElementById('color-picker');
const secondUI = document.getElementById('secondUI');
const checkbox = document.getElementById('checkbox');
const thirdUI = document.getElementById('thirdUI');

function changepensize() {
    //console.log("changing the pen size!")

    const rect = firstUI.getBoundingClientRect();
    slider.style.left = `calc(\${rect.left}px + \${rect.width / 2}px)`;
    slider.style.display = slider.style.display === 'none' ? 'block' : 'none';
}

function changepencolor() {
    colorpicker.style.display = colorpicker.style.display === 'none' ? 'block' : 'none';
}

function rubber() {
    //console.log("changing the rubber status!")

    checkbox.style.display = checkbox.style.display === 'none' ? 'block' : 'none';
}

// Set the actual size of the canvas element to match the CSS size
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// Add event listeners for mouse events
window.onload = () => {
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
}

let isDrawing = false;

function startDrawing(event) {
    isDrawing = true;
    draw(event); // Draw the first pixel
    canvas.addEventListener('mousemove', draw);
}

function draw(event) {
    if (!isDrawing) return;

    // Get the coordinates of the pixel that was clicked on the left side
    //const x = event.clientX - canvas.offsetLeft;
    //const y = event.clientY - canvas.offsetTop;
    const rect = canvas.getBoundingClientRect()

    const x = event.clientX - rect.left - slider.value / 2;
    const y = event.clientY - rect.top - slider.value / 2;

    // Update the pixel's background color to black on the left side
    const pixel = canvas.getContext('2d');

    //console.log(checkbox.checked)
    if (checkbox.checked == true) {
        pixel.fillStyle = 'white';
    }
    else {
        //pixel.fillStyle = 'black';
        pixel.fillStyle = colorpicker.value;
    }

    pixel.fillRect(x, y, slider.value, slider.value);

    // Draw the same pixel flipped horizontally on the right side
    const rightPixelX = canvas.width - x;
    pixel.save();
    pixel.scale(-1, 1);
    pixel.fillRect(-rightPixelX, y, slider.value, slider.value);
    pixel.restore();
}



function stopDrawing() {
    isDrawing = false;
    canvas.removeEventListener('mousemove', draw);
}

const canvas = document.getElementById('canvas');

const slider = document.getElementById('slider');
const firstUI = document.getElementById('firstUI');

const colorpicker = document.getElementById('color-picker');
const secondUI = document.getElementById('secondUI');

const checkbox = document.getElementById('checkbox');
const thirdUI = document.getElementById('thirdUI');

function changepensize() {
    slider.style.display === 'none' ? 'block' : 'none';
}

function changepencolor() {
    colorpicker.style.display === 'none' ? 'block' : 'none';
}

function rubber() {
    checkbox.style.display === 'none' ? 'block' : 'none';
}

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

window.onload = () => {
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
}

let isDrawing = false;

function startDrawing(event) {
    isDrawing = true;
    draw(event);
    canvas.addEventListener('mousemove', draw);
}

function draw(event) {
    if (!isDrawing) return;

    const rect = canvas.getBoundingClientRect()

    const x = event.clientX - rect.left - slider.value / 2;
    const y = event.clientY - rect.top - slider.value / 2;

    const pixel = canvas.getContext('2d');

    if (checkbox.checked == true) {
        pixel.fillStyle = 'white';
    }
    else {
        pixel.fillStyle = colorpicker.value;
    }

    pixel.fillRect(x, y, slider.value, slider.value);

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

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#AAA';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = Math.floor(Math.random() * 360) + 1;

let draw = function(e) {

  if (!isDrawing) {
    hue = Math.floor(Math.random() * 360) + 1;
    ctx.lineWidth = 1;
    return;
  }

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  // change hue color and lineWidth with each movement
  hue++;
  ctx.lineWidth = ctx.lineWidth < 12 ? ctx.lineWidth += 0.25 : ctx.lineWidth;
};

canvas.addEventListener('mousemove', draw);

// required b/c w/o it, the mouse down is still activated until
// clicked again, even if you mouse up after mouse out
canvas.addEventListener('mouseout', () => isDrawing = false);

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseup', () => isDrawing = false );

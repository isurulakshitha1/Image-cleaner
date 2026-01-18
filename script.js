const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
let drawing = false;

const upload = document.getElementById("upload");

upload.addEventListener("change", e => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
});

img.onload = () => {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
};

/* DESKTOP (MOUSE) */
canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", e => {
  if (!drawing) return;
  draw(e.offsetX, e.offsetY);
});

/* MOBILE (TOUCH) */
canvas.addEventListener("touchstart", e => {
  e.preventDefault();
  drawing = true;
});

canvas.addEventListener("touchend", e => {
  e.preventDefault();
  drawing = false;
});

canvas.addEventListener("touchmove", e => {
  e.preventDefault();
  if (!drawing) return;

  const rect = canvas.getBoundingClientRect();
  const touch = e.touches[0];

  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

  draw(x, y);
});

function draw(x, y) {
  ctx.fillStyle = "rgba(255,0,0,0.6)";
  ctx.beginPath();
  ctx.arc(x, y, 12, 0, Math.PI * 2);
  ctx.fill();
}

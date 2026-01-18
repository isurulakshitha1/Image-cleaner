const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let img = new Image();
let drawing = false;

document.getElementById("upload").onchange = e => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
};

img.onload = () => {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
};

canvas.onmousedown = () => drawing = true;
canvas.onmouseup = () => drawing = false;
canvas.onmousemove = e => {
  if (!drawing) return;
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(e.offsetX, e.offsetY, 10, 0, Math.PI * 2);
  ctx.fill();
};

function processImage() {
  alert("Next step: connect Hugging Face API");
}

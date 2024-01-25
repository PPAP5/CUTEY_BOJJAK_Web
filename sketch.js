let img;
let pixels = [];

function preload() {
  img = loadImage('홍진호.png'); 
}

function setup() {
  createCanvas(4000, 4000);

  for (let i = 0; i < img.width; ++i) {
    for (let j = 0; j < img.height; ++j) {
      pixels.push(new Pixel(img.get(i, j), i, j));
    }
  }
}

function draw() {
  background(0);

  let mouseOverPixel = false;

  for (let p of pixels) {
    p.show();
    p.move();

    if ((p.tx+15 >= mouseX && p.tx-15 <= mouseX) && (p.ty+15 >= mouseY && p.ty-15 <= mouseY)) {
      mouseOverPixel = true;
      p.bounceRandomly();
    }
  }


  if (!mouseOverPixel) {
    for (let p of pixels) {
      p.returnToOriginal();
    }
  }
}

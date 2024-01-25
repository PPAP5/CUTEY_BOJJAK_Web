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

  for (let p of pixels) {
    p.show();
    p.move();
    
    if ((p.tx+5 >= mouseX && p.tx-5 <= mouseX) && (p.ty+5 >= mouseY && p.ty-5 <= mouseY)) {
      p.bounceRandomly()
    }
    
  }
}

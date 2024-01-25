let img;

function preload() {
  img = loadImage('홍진호.png'); // 이미지를 미리 로드합니다.
}

let a = 6

function setup() {
  createCanvas(4000, 4000);
  
  
  
  for (let i = 0; i < img.width; ++i) {
    for (let j = 0; j < img.height; ++j) {
      let pixelColor = img.get(i,j);
      
      
    }  
  }
}

function createPixel(x, y, r, g, b) {
  fill(r, g, b)
  rect(x, y, 5)
}
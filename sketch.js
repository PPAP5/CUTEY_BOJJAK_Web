let img; // 이미지 변수 선언
let pixels = []; // 픽셀 배열 선언

function preload() {
    img = loadImage('홍진호.png'); // 이미지 불러오기
}

function setup() {
    createCanvas(4000, 4000); // 캔버스 생성

    for (let i = 0; i < img.width; ++i) {
        for (let j = 0; j < img.height; ++j) {
            pixels.push(new Pixel(img.get(i, j), i, j)); // 이미지의 각 픽셀을 배열에 추가
        }
    }
}

function draw() {
    background(0); // 배경색 설정

    let mouseOverPixel = false;

    for (let p of pixels) {
        p.show(); // 픽셀 표시
        p.move(); // 픽셀 이동

        if ((p.tx+10 >= mouseX && p.tx-10 <= mouseX) && (p.ty+10 >= mouseY && p.ty-10 <= mouseY)) {
            p.bounceRandomly(); // 마우스 근처 픽셀 무작위 이동
        } else {
            p.returnToOriginal(); // 마우스가 없을 때 원래 위치로 복귀
        }
    }
}

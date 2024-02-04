let img; // 이미지 변수
let pixels = []; // 픽셀 배열
let imgLoaded = false; // 이미지 로딩 상태 플래그
let r = 20

function setup() {
    createCanvas(windowWidth, windowHeight); // 캔버스 크기 설정
    input = createFileInput(handleFiles); // p5.js 파일 입력 생성
    input.position(0, 0); // 입력 위치 설정
}

function draw() {
    background(0);

    if (imgLoaded) {
        // 이미지가 로드된 경우
        for (let p of pixels) {
            p.show();
            p.move();
            // 마우스 근처의 픽셀에 대한 추가 처리
            if ((p.tx + r >= mouseX && p.tx - r <= mouseX) && (p.ty + r >= mouseY && p.ty - r <= mouseY)) {
                p.bounceRandomly();
            } else {
                p.returnToOriginal();
            }
        }
    } else {
        text("이미지를 로드해주세요.", 10, 10); // 이미지 로드 안내 메시지
    }
}

function handleFiles(file) {
    if (file.type === 'image') {
        img = loadImage(file.data, imageLoaded); // 이미지 로드
    }
}

function imageLoaded() {
    imgLoaded = true;
    processImage();
}

function processImage() {
    pixels = [];

    img.loadPixels();
    for (let i = 0; i < img.width; i++) {
        for (let j = 0; j < img.height; j++) {
            let c = img.get(i, j);
            pixels.push(new Pixel(c, i, j)); // 'Pixel' 클래스 인스턴스 생성
        }
    }
}

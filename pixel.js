class Pixel {
  constructor(colors, x, y) {
    this.colors = colors;
    this.x = x * 4.25;
    this.y = y * 4.25;
    this.sx = random(400);
    this.sy = random(400);
    this.tx = x * 2;
    this.ty = y * 2;
    this.speed = random(0.08, 0.1);
    this.scaleFactor = 8; // 추가: 크기 확대를 위한 scaleFactor 설정
  }

  show() {
    noStroke();
    fill(this.colors);
    push(); // 현재의 변환 상태를 저장
    scale(this.scaleFactor); // scaleFactor에 따라 크기 조절
    ellipse(this.sx / this.scaleFactor, this.sy / this.scaleFactor, 1, 1);
    pop(); // 이전의 변환 상태로 복원
  }

  move() {
    this.sx = lerp(this.sx, this.tx, this.speed);
    this.sy = lerp(this.sy, this.ty, this.speed);
  }

  bounceRandomly() {
    let angle = random(TWO_PI);
    let distance = random(10, 500);
    this.tx = this.sx + cos(angle) * distance;
    this.ty = this.sy + sin(angle) * distance;
  }

  returnToOriginal() {
    this.tx = this.x * 2; // 원래 크기로 되돌리기
    this.ty = this.y * 2;
  }
}

class Pixel {
  constructor(colors, x, y) {
    this.colors = colors; // 픽셀의 색상
    this.x = x * 4.25; // 초기 x 위치
    this.y = y * 4.25; // 초기 y 위치
    this.sx = random(400); // 시작 x 좌표
    this.sy = random(400); // 시작 y 좌표
    this.tx = x * 2; // 목표 x 좌표
    this.ty = y * 2; // 목표 y 좌표
    this.speed = random(0.08, 0.1); // 이동 속도
    this.scaleFactor = 8; // 크기 확대를 위한 scaleFactor 설정
  }

  show() {
    noStroke(); // 선 없음
    fill(this.colors); // 색상 채우기
    push(); // 현재의 변환 상태를 저장
    scale(this.scaleFactor); // scaleFactor에 따라 크기 조절
    ellipse(this.sx / this.scaleFactor, this.sy / this.scaleFactor, 1, 1); // 타원 그리기
    pop(); // 이전의 변환 상태로 복원
  }

  move() {
    this.sx = lerp(this.sx, this.tx, this.speed); // x 좌표 이동
    this.sy = lerp(this.sy, this.ty, this.speed); // y 좌표 이동
  }

  bounceRandomly() {
    let angle = random(TWO_PI); // 무작위 각도
    let distance = random(10, 500); // 무작위 거리
    this.tx = this.sx + cos(angle) * distance; // 새로운 목표 x 좌표
    this.ty = this.sy + sin(angle) * distance; // 새로운 목표 y 좌표
  }

  returnToOriginal() {
    this.tx = this.x * 2; // 원래 x 좌표로 되돌리기
    this.ty = this.y * 2; // 원래 y 좌표로 되돌리기
  }
}

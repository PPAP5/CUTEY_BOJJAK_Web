class Pixel {
  constructor(colors, x, y) {
    this.colors = colors;
    this.x = x;
    this.y = y;
    this.sx = random(400); 
    this.sy = random(400);
    this.tx = x * 8; 
    this.ty = y * 8;
    this.speed = random(0.08, 0.1); 
  }

  show() {
    noStroke();
    fill(this.colors);
    ellipse(this.sx, this.sy, 5, 5);
  }

  move() {
    this.sx = lerp(this.sx, this.tx, this.speed);
    this.sy = lerp(this.sy, this.ty, this.speed);
  }

  bounceRandomly() {
    let angle = random(TWO_PI); 
    let distance = random(10, 50); 
    this.tx = this.sx + cos(angle) * distance;
    this.ty = this.sy + sin(angle) * distance;
  }
}

class Pixel {
  constructor(colors, x, y) {
    this.colors = colors; 
    this.x = x * 2; 
    this.y = y * 2; 
    this.sx = random(400); 
    this.sy = random(400); 
    this.tx = x * 8; 
    this.ty = y * 8; 
    this.speed = random(0.08, 0.1); 
  }

  show() {
    noStroke();
    fill(this.colors);
    ellipse(this.sx, this.sy, 10, 10);
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
    this.tx = this.x * 5;
    this.ty = this.y * 5;
  }
}

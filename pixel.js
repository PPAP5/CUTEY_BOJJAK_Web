class Pixel {
  constructor(r, g, b, x, y) {
    this.r = r
    this.g = g
    this.b = b
    this.x = x
    this.y = y
  }
  
  show() {
    noStroke()
    fill(this.r, this.g, this.b);
    ellipse(random(4000), random(4000), 5, 5);
  }
}
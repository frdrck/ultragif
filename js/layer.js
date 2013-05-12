function Layer(src) {
  this.src = src;
  this.img = document.createElement('img');
  this.img.src = src;
  this.x = 0;
  this.y = 0;
}

Layer.prototype.draw = function(ctx) {
  ctx.drawImage(this.img, this.x, this.y);
}

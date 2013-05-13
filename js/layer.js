function Layer(src) {
  this.src = src;
  this.img = document.createElement('img');
  this.img.src = src;
  this.x = 0;
  this.y = 0;
  this.scale_x = 1;
  this.scale_y = 1;
  this.rotation = 0;

  this.trans_x = 0;
  this.trans_y = 0;
}

Layer.prototype.init_translate = function() {
  this.trans_x = this.x;
  this.trans_y = this.y;
}

Layer.prototype.translate = function(dx, dy) {
  this.x = this.trans_x + dx; 
  this.y = this.trans_y + dy;
}

// Scales the layer across both axes if only 'scale' is provided.
// Scales x and y axes independently if both 'scale' and 'scale_y' are provided.
Layer.prototype.scale = function(scale, scale_y) {
  this.scale_x = scale;
  this.scale_y = scale_y || scale;
}

Layer.prototype.rotate = function(degrees) {
  this.rotation = degrees;
}

Layer.prototype.draw = function(ctx) {
  ctx.save()
  ctx.translate(this.x, this.y);
  ctx.scale(this.scale_x, this.scale_y);
  if (this.rotation != 0) {
    ctx.rotate(2 * Math.PI / this.rotation);
  }
  ctx.drawImage(this.img, this.x, this.y);
  ctx.restore()
}

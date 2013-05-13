function Canvas(elementId, width, height) {
  this.canvas = document.getElementById(elementId);
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = width || DEFAULT_WIDTH;
  this.canvas.height = height || DEFAULT_HEIGHT;
  this.ctx.setFillColor('#ffffff');
  this.ctx.fillRect(0, 0, width, height);

  this.encoder = new GIFEncoder();
  this.encoder.start();
  this.encoder.setRepeat(0);

  // A list of layers on the canvas. The items in the list are drawn on top
  // of each other from the beginning of the list to the end, so the end
  // of the list represents the top layer.
  this.ordered_layers = [];

  // A dictionary relating layer names to layers
  this.layers = {};

  this.selectedLayer = undefined;

  // eventually stores the gif data.
  this.data = undefined;
}

Canvas.prototype.addLayer = function(src) {
  var layer = new Layer(src);
  this.ordered_layers.push(layer);
  this.layers[src] = layer;
  return layer;
}

Canvas.prototype.selectLayer = function(i) {
  this.selectedLayer = i;
}

Canvas.prototype.draw = function() {
  for (var i = 0; i < this.ordered_layers.length; i++) {
    var layer = this.ordered_layers[i];
    layer.draw(this.ctx);
  }
}

Canvas.prototype.add_frame = function() {
  this.encoder.addFrame(this.ctx);
}

Canvas.prototype.render_gif_data = function() {
  if (!this.data) {
    this.encoder.finish();
    this.data = this.encoder.stream().getData();
    this.data = btoa(this.data);
  }
  return this.data;
};

Canvas.prototype.mousedown = function(e) {
  if (this.selectedLayer) {
    this.layers[this.selectedLayer].init_translate();
    this.ismousedown = true;
    this.mouse_x0 = e.x;
    this.mouse_y0 = e.y;
  }
}

Canvas.prototype.mousemove = function(e) {
  if (this.ismousedown) {
    var dx = e.x - this.mouse_x0;
    var dy = e.y - this.mouse_y0;
    this.layers[this.selectedLayer].translate(dx, dy);
    this.draw();
  }
}

Canvas.prototype.mouseup = function(e) {
  this.ismousedown = false;
}

Canvas.prototype.mouseenter = function(e) {
}

Canvas.prototype.mouseleave = function(e) {
}

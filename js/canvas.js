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
}

Canvas.prototype.addLayer = function(src) {
  var layer = new Layer(src);
  this.ordered_layers.push(layer);
  this.layers[src] = layer;
  return layer;
}

Canvas.prototype.draw = function() {
  for (var i = 0; i < this.ordered_layers.length; i++) {
    var layer = this.ordered_layers[i];
    layer.draw(this.ctx);
  }
}

Canvas.prototype.add_frame = function() {
  console.log("adding frame");
  this.encoder.addFrame(this.ctx);
}

Canvas.prototype.export_gif = function() {
  debugger
  this.encoder.finish();
  var data = this.encoder.stream().getData();
  data = btoa(data);

  var img = document.createElement('img')
  img.src = "data:image/gif;base64, " + data
  document.body.appendChild(img)
}

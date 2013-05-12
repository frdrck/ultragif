canvases = {};

function initialize_canvas(name) {
  var canvas = document.getElementById(name);
  var ctx = canvas.getContext("2d");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  ctx.fillRect(0,0,WIDTH, HEIGHT);
}

window.onload = function () {
  console.log("ULTRAGIF!!");
  initialize_canvas(DEFAULT_CANVAS_NAME);
}

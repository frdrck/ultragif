canvases = {};

function initialize_canvas(name) {
  var canvas = document.getElementById(name);
  var ctx = canvas.getContext("2d");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  ctx.setFillColor('#ffffff');
  ctx.fillRect(0,0,WIDTH, HEIGHT);
}

function prepare_encoder() {
  var encoder = new GIFEncoder()
  encoder.setRepeat(0)
}

function add_frame() {
  // TODO(geluso) grab canvas, add contents to encoder.
  // encoder.addFrame(fore_ctx)
}

function create_gif() {
  encoder.finish()
  var data = encoder.stream().getData()
  data = btoa(data)
  var img = document.createElement('img')
  img.src = "data:image/gif;base64, " + data
  document.body.appendChild(img)
}

window.onload = function () {
  console.log("ULTRAGIF!!");
  initialize_canvas(DEFAULT_CANVAS_NAME);

  var myDropzone = Dropzone.forElement("#my-dropzone");

  myDropzone.on("addedfile", function(file) {
      console.log(file);
  });
}

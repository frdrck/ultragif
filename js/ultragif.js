function initialize_canvas(name) {
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

  var canvas = new Canvas("untitled");
  var dog = canvas.addLayer("img/1368390992733-dumpfm-BUTTPOISON-IMG_5432.jpg");
  var face = canvas.addLayer("img/1368161387675-dumpfm-frederick-FUCK.png");

  face.rotate(-20);
  face.translate(-40, 0);

  canvas.draw();
}

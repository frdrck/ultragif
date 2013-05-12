window.onload = function () {
  console.log("ULTRAGIF!!");

  var myDropzone = Dropzone.forElement("#my-dropzone");
  myDropzone.on("addedfile", function(file) {
      console.log(file);
  });
}

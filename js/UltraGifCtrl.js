var UltraGifCtrl = function($scope, $http) {
  $scope.tool = "translate";

  $scope.canvas = new Canvas("untitled");
  $scope.layers = $scope.canvas.layers;

  var dog = $scope.canvas.addLayer("img/1368390992733-dumpfm-BUTTPOISON-IMG_5432.jpg");
  var face = $scope.canvas.addLayer("img/1368161387675-dumpfm-frederick-FUCK.png");

  face.rotate(-20);
  face.translate(-40, 0);

  $scope.preview_gif = function() {
    var data = $scope.canvas.render_gif_data();
    var img = document.createElement('img');
    img.src = "data:image/gif;base64, " + data;
    document.body.appendChild(img);
  };

  $scope.save_to_server = function() {
    var data = $scope.canvas.render_gif_data(); 
    $http.post(POST_IMAGE_URL, data).success(function(response) {
      debugger      
    });
  };
};

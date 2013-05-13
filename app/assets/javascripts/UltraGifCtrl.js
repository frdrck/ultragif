var UltraGifCtrl = function($scope) {
  $scope.tool = "translate";

  $scope.canvas = new Canvas("untitled");
  $scope.layers = $scope.canvas.layers;

  var dog = $scope.canvas.addLayer("/assets/dog.jpg");
  var face = $scope.canvas.addLayer("/assets/face.png");

  face.rotate(-20);
  face.translate(-40, 0);
};

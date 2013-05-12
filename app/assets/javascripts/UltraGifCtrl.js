var UltraGifCtrl = function($scope) {
  $scope.tool = "translate";

  $scope.canvas = new Canvas("untitled");
  $scope.layers = $scope.canvas.layers;

  var dog = $scope.canvas.addLayer("img/1368390992733-dumpfm-BUTTPOISON-IMG_5432.jpg");
  var face = $scope.canvas.addLayer("img/1368161387675-dumpfm-frederick-FUCK.png");

  face.rotate(-20);
  face.translate(-40, 0);
};

function nodesDrawer(nodes, canvas) {
  var context = canvas.getContext('2d');

  var clearCanvas = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    var width = canvas.width;
    canvas.width = 1;
    canvas.width = width;
  };

  var draw = function() {
    clearCanvas();
    _.each(nodes, function(element) {
      element.draw(context);
    });
  }

  return {
    draw: draw
  };
}

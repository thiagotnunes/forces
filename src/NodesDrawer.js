function nodesDrawer(nodes, canvas) {

  var self = {};
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

    return self;
  }

  self = {
    draw: draw
  };

  return self;
}

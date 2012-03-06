function nodesDrawer(nodes, canvas) {
  var context = canvas.getContext('2d');
  var radius = 10;
  var startAngle = 0;
  var endAngle = Math.PI*2;
  var anticlockWise = true;

  var clearCanvas = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    var width = canvas.width;
    canvas.width = 1;
    canvas.width = width;
  };

  var drawCircleFor = function(node) {
    var x = parseInt(node.position.x);
    var y = parseInt(node.position.y);
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, anticlockWise);
    context.closePath();
    context.fill();

    context.strokeStyle = '#000';
    _.each(node.connections, function(element) {
      var otherX = element.position.x;
      var otherY = element.position.y;
      context.moveTo(x, y);
      context.lineTo(otherX, otherY);
    });
    context.stroke();
  };

  var draw = function() {
    clearCanvas();
    _.each(nodes, function(element) {
      drawCircleFor(element);
    });
  }

  return {
    draw: draw
  };
}

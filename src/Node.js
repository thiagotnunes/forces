function node(position) {

  var self = {};
  var radius = 10;
  var startAngle = 0;
  var endAngle = Math.PI*2;
  var anticlockWise = true;
  var connections = [];

  var draw = function(context) {
    var x = parseInt(self.position.x);
    var y = parseInt(self.position.y);
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, anticlockWise);
    context.closePath();
    context.fill();

    context.strokeStyle = '#000';
    _.each(connections, function(element) {
      var otherX = element.position.x;
      var otherY = element.position.y;
      context.moveTo(x, y);
      context.lineTo(otherX, otherY);
    });
    context.stroke();
  };

  var connectWith = function(otherNode) {
    if (!connections.contains(otherNode)) {
      connections.push(otherNode);
      otherNode.connections.push(self);
    }

    return self;
  };

  self = {
    position: position,
    connections: connections,
    velocity: vector(0, 0),
    connectWith: connectWith,
    draw: draw
  };

  return self;
}

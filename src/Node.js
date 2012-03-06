function node(position) {

  var self = {};
  var connections = [];

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
    connectWith: connectWith
  };

  return self;
}

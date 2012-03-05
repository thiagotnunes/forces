function vector(x, y) {
  var self = {};

  var add = function(otherVector) {
    return vector(x + otherVector.x, y + otherVector.y);
  };

  var subtract = function(otherVector) {
    return vector(x - otherVector.x, y - otherVector.y);
  };

  var dot = function(otherVector) {
    return x * otherVector.x + y * otherVector.y;
  };

  var multiply = function(constant) {
    return vector(x * constant, y * constant);
  };

  var module = function() {
    return Math.sqrt(dot(self));
  };

  var normalize = function() {
    return multiply(1.0 / module());
  };

  self = {
    x: x,
    y: y,
    add: add,
    subtract: subtract,
    dot: dot,
    multiply: multiply,
    module: module,
    normalize: normalize
  };

  return self;
}

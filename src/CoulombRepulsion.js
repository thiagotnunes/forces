function coulombRepulsion() {
  var k = 100;

  var forceFor = function (axis, distance) {
    return k * axis * (1 / distance);
  }

  var calculate = function(node1, node2) {
    var distance = node1.position.subtract(node2.position);
    var euclideanDistance = Math.sqrt(distance.dot(distance));
    var normalizedDistance = distance.normalize();

    return vector(forceFor(normalizedDistance.x, euclideanDistance), forceFor(normalizedDistance.y, euclideanDistance));
  };

  return {
    calculate: calculate
  };
}

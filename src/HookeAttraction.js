function hookeAttraction() {
  var minimumLength = 50;
  var k = -1;

  var calculate = function(node1, node2) {
    var distance = node1.position.subtract(node2.position);
    var restingDistance = distance.normalize().multiply(minimumLength);

    return (distance.subtract(restingDistance)).multiply(k);
  };

  return {
    calculate: calculate
  };
}

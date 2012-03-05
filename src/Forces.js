function forces(repulsion, attraction) {
  var timestep = 0.7;
  var damping = 0.5;

  var velocityFor = function(node, netForce) {
    var updatedNetForce = netForce.multiply(timestep);
    var velocity = node.velocity.add(updatedNetForce);
    return velocity.multiply(damping).multiply(timestep);
  };

  var nextLocationFor = function(node, velocity) {
    return node.position.add(velocity);
  };

  var calculateNetForceFor = function(node, nodes, initialForce) {
    var netForce = initialForce;
    _.each(nodes, function(element) {
      if (element != node) {
        netForce = netForce.add(repulsion.calculate(node, element));
      }
    });
    _.each(node.connections, function(element) {
      netForce = netForce.add(attraction.calculate(node, element));
    });

    return netForce;
  };

  return {
    velocityFor: velocityFor,
    nextLocationFor: nextLocationFor,
    calculateNetForceFor: calculateNetForceFor
  };
}

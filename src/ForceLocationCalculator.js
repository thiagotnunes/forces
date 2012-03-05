function forceLocationCalculator(forces) {

  var updateLocationOf = function(nodes, initialNetForce) {
    _.each(nodes, function(element) {
      var netForce = forces.calculateNetForceFor(element, nodes, initialNetForce);
      var velocity = forces.velocityFor(element, netForce);
      var position = forces.nextLocationFor(element, velocity);

      element.velocity = velocity;
      element.position = position; 
    });
  };

  return {
    updateLocationOf: updateLocationOf
  };
}

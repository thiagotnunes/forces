function main(nodes, drawer) {
  var repulsion = coulombRepulsion();
  var attraction = hookeAttraction();
  var nodeForces = forces(repulsion, attraction);    
  var locationCalculator = forceLocationCalculator(nodeForces);
  var STABILIZED = 1;
  
  var kinetic_energy_for = function(nodes) {
    var kinetic_energy = 0;
    _.each(nodes, function(node) {
      kinetic_energy += node.velocity.dot(node.velocity);
    });

    return kinetic_energy;
  };

  var isSystemStable = function(kinetic_energy) {
    return kinetic_energy < STABILIZED;
  };

  var updateLocation = function(nodes) {
    locationCalculator.updateLocationOf(nodes, vector(0, 0));
    drawer.draw();

    kinetic_energy = kinetic_energy_for(nodes);

    var callback = function() {
      updateLocation(nodes, kinetic_energy);
    };

    if (isSystemStable(kinetic_energy)) {
      alert("Done.");
    } else {
      setTimeout(callback, 10);
    }
  };

  var organize = function() {
    updateLocation(nodes);
  };

  return {
    organize: organize
  };
}

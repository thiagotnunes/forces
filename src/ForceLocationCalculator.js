function forceLocationCalculator(forces) {
    var self = {};

    self.updateLocationOf = function(nodes, initialNetForce) {
        for(var i=0; i<nodes.length; i++) {
            var netForce = forces.calculateNetForceFor(nodes[i], nodes, initialNetForce);
            var velocity = forces.velocityFor(nodes[i], netForce);
            var location = forces.nextLocationFor(nodes[i], velocity);

            nodes[i].velocity = velocity;
            nodes[i].location = location; 
        }
    };

    return self;
}

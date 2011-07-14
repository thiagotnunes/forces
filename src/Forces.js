function forces(repulsion, attraction) {
    var self = {
        timestep : 1,
        damping : 0.5
    };

    self.velocityFor = function(node, netForce) {
        var updatedNetForce = netForce.multiply(self.timestep);
        var velocity = node.velocity.dot(updatedNetForce);
        return velocity.multiply(self.damping);
    };

    self.nextPositionFor = function(node, velocity) {
        var updatedVelocity = velocity.multiply(self.timestep);
        return node.location.add(updatedVelocity);
    };

    self.calculateNetForceFor = function(node, initialForce) {
        var netForce = initialForce;
        for (var i=0; i<node.connections.length; i++) {
            netForce = netForce.add(repulsion.calculate(node, node.connections[i]));
            netForce = netForce.add(attraction.calculate(node, node.connections[i]));
        }

        return netForce;
    };

    return self;
}

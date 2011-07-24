function forces(repulsion, attraction) {
    var self = {
        timestep : 0.7,
        damping : 0.5
    };

    self.velocityFor = function(node, netForce) {
        var updatedNetForce = netForce.multiply(self.timestep);
        var velocity = node.velocity.add(updatedNetForce);
        return velocity.multiply(self.damping).multiply(self.timestep);
    };

    self.nextLocationFor = function(node, velocity) {
        return node.location.add(velocity);
    };

    self.calculateNetForceFor = function(node, nodes, initialForce) {
        var netForce = initialForce;
        for (var i=0; i<nodes.length; i++) {
            if (nodes[i] != node)
                netForce = netForce.add(repulsion.calculate(node, nodes[i]));
        }
        for (var i=0; i<node.connections.length; i++) {
            netForce = netForce.add(attraction.calculate(node, node.connections[i]));
        }

        return netForce;
    };

    return self;
}

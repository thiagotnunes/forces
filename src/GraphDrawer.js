function graphDrawer() {
    var self = {
        timestep : 1,
        damping : 0.5
    };

    self.velocityFor = function(node, force) {
        var updatedForce = force.multiply(self.timestep);
        var velocity = node.velocity.dot(updatedForce);
        return velocity.multiply(self.damping);
    };

    self.nextPositionFor = function(node, velocity) {
        var updatedVelocity = velocity.multiply(self.timestep);
        return node.location.add(updatedVelocity);
    };

    return self;
}

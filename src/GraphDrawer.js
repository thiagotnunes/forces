function graphDrawer(forces) {
    var self = {};

    self.draw = function(nodes) {
        for(var i=0; i<nodes.length; i++) {
            var netForce = forces.calculateNetForceFor(nodes[i]); 
            var velocity = forces.velocityFor(nodes[i], netForce);
            var location = forces.nextLocationFor(nodes[i], velocity);

            nodes[i].location = location; 
        }
    };

    return self;
}

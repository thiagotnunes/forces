describe("Location Calculator", function() {
    it("should apply the forces to get the nodes in the right locations", function() {
        var forces = {
            calculateNetForceFor : {},
            velocityFor : {},
            nextLocationFor : {}
        };
        
        var node1 = {};
        var node2 = {};
        var nodes = [node1, node2];

        var netForce = {};
        var velocity = {};
        var location = {};

        var context = {};
        var initialNetForce = {};

        spyOn(forces, 'calculateNetForceFor').andReturn(netForce);
        spyOn(forces, 'velocityFor').andReturn(velocity);
        spyOn(forces, 'nextLocationFor').andReturn(location);

        var locationCalculator = forceLocationCalculator(forces);
        locationCalculator.updateLocationOf(nodes, initialNetForce);

        expect(forces.calculateNetForceFor).toHaveBeenCalledWith(node1, initialNetForce);
        expect(forces.calculateNetForceFor).toHaveBeenCalledWith(node2, initialNetForce);
        expect(forces.velocityFor).toHaveBeenCalledWith(node1, netForce);
        expect(forces.velocityFor).toHaveBeenCalledWith(node2, netForce);
        expect(forces.nextLocationFor).toHaveBeenCalledWith(node1, velocity);
        expect(forces.nextLocationFor).toHaveBeenCalledWith(node2, velocity);
    });
});

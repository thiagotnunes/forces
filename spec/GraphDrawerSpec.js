describe("Graph Drawer", function() {
    it("should draw graph and apply the forces to get the nodes in the right locations", function() {
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

        spyOn(forces, 'calculateNetForceFor').andReturn(netForce);
        spyOn(forces, 'velocityFor').andReturn(velocity);
        spyOn(forces, 'nextLocationFor').andReturn(location);

        var drawer = graphDrawer(forces);
        drawer.draw(nodes);

        expect(forces.calculateNetForceFor).toHaveBeenCalledWith(node1);
        expect(forces.calculateNetForceFor).toHaveBeenCalledWith(node2);
        expect(forces.velocityFor).toHaveBeenCalledWith(node1, netForce);
        expect(forces.velocityFor).toHaveBeenCalledWith(node2, netForce);
        expect(forces.nextLocationFor).toHaveBeenCalledWith(node1, velocity);
        expect(forces.nextLocationFor).toHaveBeenCalledWith(node2, velocity);
    });
});

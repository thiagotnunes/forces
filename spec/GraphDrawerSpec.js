describe("Graph drawer", function() {
    it("should calculate node velocity", function() {
        var drawer = graphDrawer();
        var netForce = {
            multiply : {}
        };
        var someNode = {
            velocity : {
                dot : {}
            }
        };
        var resultingVelocity = {
            multiply : {}
        };
        var expectedVelocity = {};
        
        spyOn(netForce, 'multiply').andReturn(netForce);
        spyOn(resultingVelocity, 'multiply').andReturn(expectedVelocity);
        spyOn(someNode.velocity, 'dot').andReturn(resultingVelocity);

        var actualVelocity = drawer.velocityFor(someNode, netForce);

        expect(netForce.multiply).toHaveBeenCalledWith(drawer.timestep);
        expect(someNode.velocity.dot).toHaveBeenCalledWith(netForce);
        expect(resultingVelocity.multiply).toHaveBeenCalledWith(drawer.damping);
        expect(actualVelocity).toBe(expectedVelocity);
    });

    it("should calculate node updated position", function() {
        var drawer = graphDrawer();
        var someNode = {
            location : {
                add : {}
            }
        };
        var velocity = {
            multiply : {}
        };
        var expectedLocation = {};

        spyOn(velocity, 'multiply').andReturn(velocity);
        spyOn(someNode.location, 'add').andReturn(expectedLocation);

        var actualLocation = drawer.nextPositionFor(someNode, velocity);
        
        expect(velocity.multiply).toHaveBeenCalledWith(drawer.timestep);
        expect(someNode.location.add).toHaveBeenCalledWith(velocity);
        expect(actualLocation).toBe(expectedLocation);
    });

    it("should calculate net force", function() {
       var node2 = {};
       var node3 = {};
       var node1 = {
           connections : [node2, node3]
       };

       var repulsion = {
           calculate : {}
       };
       var resultingRepulsion = {};
       
       var attraction = {
           calculate : {}
       };
       var resultingAttraction = {};
       var netForce = {
           add : {}
       };

       spyOn(repulsion, 'calculate').andReturn(resultingRepulsion);
       spyOn(attraction, 'calculate').andReturn(resultingAttraction);
       spyOn(netForce, 'add').andReturn(netForce);

       var drawer = graphDrawer(null, repulsion, attraction);

       var actualNetForce = drawer.calculateNetForceFor(node1, netForce);

       expect(actualNetForce).toBe(netForce);
       expect(repulsion.calculate).toHaveBeenCalledWith(node1, node2);
       expect(repulsion.calculate).toHaveBeenCalledWith(node1, node3);
       expect(attraction.calculate).toHaveBeenCalledWith(node1, node2);
       expect(attraction.calculate).toHaveBeenCalledWith(node1, node3);
       expect(netForce.add).toHaveBeenCalledWith(resultingRepulsion);
       expect(netForce.add).toHaveBeenCalledWith(resultingAttraction);
    });
});

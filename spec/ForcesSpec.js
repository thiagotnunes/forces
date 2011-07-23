describe("Forces", function() {
    it("should calculate node velocity", function() {
        var forcesCalculator = forces();
        var netForce = {
            multiply : {}
        };
        var someNode = {
            velocity : {
                add : {}
            }
        };
        var resultingVelocity = {
            multiply : {}
        };
        var expectedVelocity = {
            multiply : {}
        };
        
        spyOn(netForce, 'multiply').andReturn(netForce);
        spyOn(resultingVelocity, 'multiply').andReturn(expectedVelocity);
        spyOn(expectedVelocity, 'multiply').andReturn(expectedVelocity);
        spyOn(someNode.velocity, 'add').andReturn(resultingVelocity);

        var actualVelocity = forcesCalculator.velocityFor(someNode, netForce);

        expect(netForce.multiply).toHaveBeenCalledWith(forcesCalculator.timestep);
        expect(someNode.velocity.add).toHaveBeenCalledWith(netForce);
        expect(resultingVelocity.multiply).toHaveBeenCalledWith(forcesCalculator.damping);
        expect(actualVelocity).toBe(expectedVelocity);
    });

    it("should calculate node updated location", function() {
        var forcesCalculator = forces();
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

        var actualLocation = forcesCalculator.nextLocationFor(someNode, velocity);
        
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

       var forcesCalculator = forces(repulsion, attraction);

       var actualNetForce = forcesCalculator.calculateNetForceFor(node1, [node1, node2, node3], netForce);

       expect(actualNetForce).toBe(netForce);
       expect(repulsion.calculate).not.toHaveBeenCalledWith(node1, node1);
       expect(repulsion.calculate).toHaveBeenCalledWith(node1, node2);
       expect(repulsion.calculate).toHaveBeenCalledWith(node1, node3);
       expect(attraction.calculate).toHaveBeenCalledWith(node1, node2);
       expect(attraction.calculate).toHaveBeenCalledWith(node1, node3);
       expect(netForce.add).toHaveBeenCalledWith(resultingRepulsion);
       expect(netForce.add).toHaveBeenCalledWith(resultingAttraction);
    });
});

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
});

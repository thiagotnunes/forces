describe("Graph drawer", function() {
    it("should calculate node velocity", function() {
        var drawer = graphDrawer();
        var netForce = {};
        var someNode = {
            velocity : {
                multiply : {}
            }
        };
        var resultingVelocity = {
            multiply : {}
        };
        var expectedVelocity = {};
        
        spy(resultingVelocity, 'multiply').andReturn(expectedValue);
        spy(someNode.velocity, 'dot').andReturn(resultingVelocity);

        drawer.updateVelocityFor(someNode, netForce);

        expect(someNode.velocity.dot).toHaveBeenCalledWith(netForce);
        expect(resultingVelocity.multiply).toHaveBeenCalledWith(drawer.damping);
        expect(someNode.velocity).toBe(expectedVelocity);
    });
});

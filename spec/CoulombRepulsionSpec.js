describe("Coulomb repulsion", function() {

    it("should calculate force between two nodes", function() {
        var repulsion = coulombRepulsion();

        var normalizedDistance = {
            x: 0.7,
            y: 0.3
        };
        var distance = {
            normalize: jasmine.createSpy().andReturn(normalizedDistance),
            dot: jasmine.createSpy().andReturn(100)
        };
        var node1 = {
            position: {
                subtract: jasmine.createSpy().andReturn(distance)
            }
        };
        var node2 = {};

        expect(repulsion.calculate(node1, node2)).toHaveAttributesOf({ x: 7, y: 3 });   
        expect(node1.position.subtract).toHaveBeenCalledWith(node2.position);
        expect(distance.normalize).toHaveBeenCalled();
    });
});

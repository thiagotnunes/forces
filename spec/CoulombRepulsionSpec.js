describe("Coulomb repulsion", function() {

    it("should calculate force between two nodes", function() {
        var repulsion = coulombRepulsion();

        var node1 = {
            location : {
                subtract : {}
            }
        };
        var node2 = {};
        var distance = {
            normalize : {},
            dot : {}
        };
        var normalizedDistance = {
            x : 0.7,
            y : 0.3
        };

        spyOn(node1.location, 'subtract').andReturn(distance);
        spyOn(distance, 'dot').andReturn(100);
        spyOn(distance, 'normalize').andReturn(normalizedDistance);

        expect(repulsion.calculate(node1, node2)).toHaveAttributesOf({ x : 7, y : 3 });   
        expect(node1.location.subtract).toHaveBeenCalledWith(node2.location);
        expect(distance.normalize).toHaveBeenCalled();
    });
});

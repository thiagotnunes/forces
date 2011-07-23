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
            module : {},
            normalize : {}
        };
        var normalizedDistance = {
            x : 100,
            y : 200
        };

        spyOn(distance, 'module').andReturn(9);
        spyOn(distance, 'normalize').andReturn(normalizedDistance);
        spyOn(node1.location, 'subtract').andReturn(distance);

        expect(repulsion.calculate(node1, node2)).toHaveAttributesOf({ x : 1, y : 2 });   
        expect(node1.location.subtract).toHaveBeenCalledWith(node2.location);
        expect(distance.normalize).toHaveBeenCalled();
    });
});

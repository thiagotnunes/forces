describe("Coloumb repulsion", function() {

    it("should calculate force between two nodes", function() {
        var repulsion = coulombRepulsion();

        var location1 = vector(10, 20);
        var node1 = node(location1);
        var location2 = vector(30, 40);
        var node2 = node(location2);

        expect(repulsion.calculate(node1, node2)).toHaveAttributesOf(vector(-0.0030839742182898417, -0.0030839742182898417));    
    });
});

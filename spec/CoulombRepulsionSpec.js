describe("Coulomb repulsion", function() {

    it("should calculate force between two nodes", function() {
        var repulsion = coulombRepulsion();

        var node1 = node(vector(10, 20));
        var node2 = node(vector(30,40));

        expect(repulsion.calculate(node1, node2)).toHaveAttributesOf(vector(-0.0030839742182898417, -0.0030839742182898417));    
    });
});

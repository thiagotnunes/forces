describe("Hooke's attraction", function() {
    it("should calculate hookes attraction between two nodes", function() {
        var attraction = hookeAttraction();
        
        var parent = node(vector(15, 20));
        var child = node(vector(20, 40));
        
        expect(attraction.calculate(parent, child)).toHaveAttributesOf(vector(-15, -3.638034375544995));
    });
});

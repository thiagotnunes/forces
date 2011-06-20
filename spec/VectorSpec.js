describe("Vector", function() {

    it("should subtract 2 vectors", function() {
        var x1 = 10;
        var y1 = 20;
        var v1 = vector(x1, y1);

        var x2 = 15;
        var y2 = 5;
        var v2 = vector(x2, y2);

        var result = v1.subtract(v2);

        expect(result).toHaveAttributesOf(vector(-10, 10));
    });

    it("should calculate dot product of a vector", function() {
        var x1 = 10;
        var y1 = 20;
        var v1 = vector(x1, y1);

        var x2 = 5;
        var y2 = 25;
        var v2 = vector(x2, y2);

        var result = v1.dot(v2);

        expect(result).toBe(550);
    });
});

describe("Vector", function() {

    it("should add 2 vectors", function() {
        var x1 = 10;
        var y1 = 20;
        var v1 = vector(x1, y1);

        var x2 = 15;
        var y2 = 5;
        var v2 = vector(x2, y2);

        expect(v1.add(v2)).toHaveAttributesOf(vector(25, 25));
    });

    it("should subtract 2 vectors", function() {
        var x1 = 10;
        var y1 = 20;
        var v1 = vector(x1, y1);

        var x2 = 15;
        var y2 = 5;
        var v2 = vector(x2, y2);

        var result = v1.subtract(v2);

        expect(v1.subtract(v2)).toHaveAttributesOf(vector(-5, 15));
    });

    it("should calculate dot product of a vector", function() {
        var x1 = 10;
        var y1 = 20;
        var v1 = vector(x1, y1);

        var x2 = 5;
        var y2 = 25;
        var v2 = vector(x2, y2);

        expect(v1.dot(v2)).toBe(550);
    });

    it("should multiply a constant by a vector", function() {
        var x1 = 10;
        var y1 = 2;
        var v1 = vector(x1, y1);

        expect(v1.multiply(20)).toHaveAttributesOf(vector(200, 40));
    }); 

    it("should normalize the vector", function() {
        var x1 = 100;
        var y1 = 100;
        var v1 = vector(x1, y1);

        var normalizedV1 = v1.normalize();
        normalizedV1.x = parseFloat(normalizedV1.x.toFixed(1));
        normalizedV1.y = parseFloat(normalizedV1.y.toFixed(1));

        expect(normalizedV1).toHaveAttributesOf(vector(0.7, 0.7));
    });
});

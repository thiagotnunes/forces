describe("Hooke's attraction", function() {
    it("should calculate hookes attraction between two nodes", function() {
        var attraction = hookeAttraction();
        
        var node1 = {
            location : {
                subtract : {}
            }
        };
        var node2 = {
            location : {}
        };
        var distance = {
            normalize : {},
            subtract : {}
        };
        var normalizedDistance = {
            multiply : {}
        };
        var restingDistance = {};
        var invertedResult = {
            multiply : {}
        };
        var expectedResult = {};

        spyOn(invertedResult, 'multiply').andReturn(expectedResult);
        spyOn(normalizedDistance, 'multiply').andReturn(restingDistance);
        spyOn(distance, 'subtract').andReturn(invertedResult);
        spyOn(distance, 'normalize').andReturn(normalizedDistance);
        spyOn(node1.location, 'subtract').andReturn(distance);
        
        expect(attraction.calculate(node1, node2)).toBe(expectedResult);
        expect(node1.location.subtract).toHaveBeenCalledWith(node2.location);
        expect(distance.normalize).toHaveBeenCalled();
        expect(normalizedDistance.multiply).toHaveBeenCalledWith(attraction.minimumLength);
        expect(distance.subtract).toHaveBeenCalledWith(restingDistance);
        expect(invertedResult.multiply).toHaveBeenCalledWith(-1);
    });
});

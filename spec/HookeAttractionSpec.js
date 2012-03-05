describe("Hooke's attraction", function() {
  it("should calculate hookes attraction between two nodes", function() {
    var attraction = hookeAttraction();

    var expectedResult = {};
    var invertedResult = {
      multiply: jasmine.createSpy().andReturn(expectedResult)
    };
    var restingDistance = {};
    var normalizedDistance = {
      multiply: jasmine.createSpy().andReturn(restingDistance)
    };
    var distance = {
      normalize: jasmine.createSpy().andReturn(normalizedDistance),
      subtract: jasmine.createSpy().andReturn(invertedResult)
    };
    var node1 = {
      position: {
        subtract: jasmine.createSpy().andReturn(distance)
      }
    };
    var node2 = {
      position : {}
    };

    expect(attraction.calculate(node1, node2)).toBe(expectedResult);
    expect(node1.position.subtract).toHaveBeenCalledWith(node2.position);
    expect(distance.normalize).toHaveBeenCalled();
    expect(normalizedDistance.multiply).toHaveBeenCalledWith(50);
    expect(distance.subtract).toHaveBeenCalledWith(restingDistance);
    expect(invertedResult.multiply).toHaveBeenCalledWith(-1);
  });
});

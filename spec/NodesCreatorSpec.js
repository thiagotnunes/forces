describe("Nodes Creator", function() {
  it("should create nodes and randomize their positions", function() {
    var positionCounter = 0;
    var randomizer = {
      nextLocation: {}
    };

    spyOn(randomizer, 'nextLocation').andCallFake(
      function() {
        var nextLocation = { 
          x: positionCounter, 
          y: positionCounter 
        };

        positionCounter++;

        return nextLocation;
      }
      );

    var NUMBER_OF_NODES = 30;
    var testNodesCreator = nodesCreator(NUMBER_OF_NODES, randomizer);

    var nodes = testNodesCreator.createNodes();

    expect(nodes.length).toBe(NUMBER_OF_NODES);
    _.each(nodes, function(element, i) {
      expect(element.position.x).toBe(i);
      expect(element.position.y).toBe(i);
    });
  });
});

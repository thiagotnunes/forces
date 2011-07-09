describe("Main", function() {
    it("should create nodes and randomize their positions", function() {
        var randomizer = {
            locationCounter : 0
        };
        randomizer.nextLocation = function() {
            var nextLocation = { 
                x : randomizer.locationCounter, 
                y : randomizer.locationCounter 
            };
            randomizer.locationCounter++;

            return nextLocation;
        };
        
        var NUMBER_OF_NODES = 30;
        var testNodesCreator = nodesCreator(NUMBER_OF_NODES, randomizer);

        var nodes = testNodesCreator.createNodes();

        expect(nodes.length).toBe(NUMBER_OF_NODES);
        for (var i=0; i<nodes.length; i++) {
            expect(nodes[i].location.x).toBe(i);
            expect(nodes[i].location.y).toBe(i);
        }
    });
});

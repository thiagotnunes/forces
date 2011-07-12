function nodesCreator(numberOfNodes, locationRandomizer) {
    var self = {};
    var nodes = [];

    self.createNodes = function() {
        for (var i=0; i<numberOfNodes; i++) {
            var location = locationRandomizer.nextLocation();
            nodes.push(node(location));
        }

        return nodes;
    };

    return self;
}

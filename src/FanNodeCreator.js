function fanNodeCreator(nodesCreator) {
    self = {
        nodesCreator : nodesCreator
    };

    self.nodes = function() {
        var nodes = self.nodesCreator.createNodes();

        for(var i=1; i<nodes.length; i++) {
            nodes[0].connectWith(nodes[i]);
        }

        return nodes;
    }

    return self;
}

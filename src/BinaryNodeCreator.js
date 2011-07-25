function binaryNodeCreator(nodesCreator) {
    var self = {
        nodesCreator : nodesCreator
    };

    self.nodes = function() {
        var nodes = self.nodesCreator.createNodes();

        for(var i=0; i<nodes.length; i++) {
            var nextNode = i*2;
            if (nodes.length > nextNode + 1)
                nodes[i].connectWith(nodes[nextNode + 1]);
            if (nodes.length > nextNode + 2)
                nodes[i].connectWith(nodes[nextNode + 2]);
        }

        return nodes;
    };

    return self;
}

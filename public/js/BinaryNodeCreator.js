function binaryNodeCreator(nodesCreator) {

    var nodes = function() {
        var nodes = nodesCreator.createNodes();

        _.each(nodes, function(element, i) {
            var nextNode = i*2;
            if (nodes.length > nextNode + 1)
                element.connectWith(nodes[nextNode + 1]);
            if (nodes.length > nextNode + 2)
                element.connectWith(nodes[nextNode + 2]);
        });

        return nodes;
    };

    return {
      nodes: nodes
    };
}

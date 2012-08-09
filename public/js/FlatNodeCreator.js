function flatNodeCreator(nodesCreator) {
  var nodes = function() {
    var nodes = nodesCreator.createNodes();

    _.each(nodes, function(element, i) {
      if (i != 0) {
        nodes[0].connectWith(element);
      }
    });

    return nodes;
  }

  return {
    nodes: nodes
  };
}

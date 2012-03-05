function nodesCreator(numberOfNodes, positionRandomizer) {
  var nodes = [];

  var createNodes = function() {
    _.times(numberOfNodes, function() {
      var position = positionRandomizer.nextLocation();
      nodes.push(node(position));
    });

    return nodes;
  };

  return {
    createNodes: createNodes
  };
}

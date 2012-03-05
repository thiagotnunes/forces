function main(canvas) {
    var randomizer = locationRandomizer(canvas.width, canvas.height, 200);
    var creator = binaryNodeCreator(nodesCreator(12, randomizer));
    var repulsion = coulombRepulsion();
    var attraction = hookeAttraction();
    var nodeForces = forces(repulsion, attraction);    
    var locationCalculator = forceLocationCalculator(nodeForces);

    var nodes = function(creator) {
        var nodes = creator.nodes();
        
        drawer = nodesDrawer(nodes, canvas);
        drawer.draw();

        return nodes;
    }(creator);

    var updateLocation = function(nodes) {
        locationCalculator.updateLocationOf(nodes, vector(0, 0));
        drawer.draw();
        setTimeout(callback, 100);
        function callback() {
            updateLocation(nodes);
        };
    };

    var organize = function() {
        updateLocation(nodes);
    };

    return {
      organize: organize
    };
}

function main(nodes, drawer) {
    var repulsion = coulombRepulsion();
    var attraction = hookeAttraction();
    var nodeForces = forces(repulsion, attraction);    
    var locationCalculator = forceLocationCalculator(nodeForces);

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

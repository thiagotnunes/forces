function main(canvas) {
    var self = {
        canvas : canvas
    };

    self.initialize = function() {
        var randomizer = locationRandomizer(800, 600, 200);
        var creator = fanNodeCreator(nodesCreator(8, randomizer));
        var repulsion = coulombRepulsion();
        var attraction = hookeAttraction();
        var nodeForces = forces(repulsion, attraction);    
        self.locationCalculator = forceLocationCalculator(nodeForces);
        self.createNodesAndDraw(creator);
    }

    self.createNodesAndDraw = function(creator) {
        self.nodes = creator.nodes();
        
        drawer = nodesDrawer(self.nodes, self.canvas);
        drawer.draw();
    }

    self.organize = function() {
        updateLocation(self.nodes);
    }

    function updateLocation(nodes) {
        self.locationCalculator.updateLocationOf(self.nodes, vector(0, 0));
        drawer.draw();
        setTimeout(callback, 100);
        function callback() {
            updateLocation(self.nodes);
        };
    }

    return self;
}

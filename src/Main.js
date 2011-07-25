function main(canvas) {
    var self = {
        canvas : canvas
    };

    self.initialize = function() {
        var randomizer = locationRandomizer(self.canvas.width, self.canvas.height, 200);
        var creator = binaryNodeCreator(nodesCreator(12, randomizer));
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

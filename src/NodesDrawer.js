function nodesDrawer(nodes, canvas) {
    var self = {
        nodes : nodes, 
        canvas : canvas,
        context : canvas.getContext('2d')
    };

    self.draw = function() {
        clearCanvas();
        for (var i=0; i<self.nodes.length; i++) {
            self.nodes[i].draw(self.context);
        }

        return self;
    }

    function clearCanvas() {
        self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
        var width = self.canvas.width;
        self.canvas.width = 1;
        self.canvas.width = width;
    }

    return self;
}

function node(location) {

    var radius = 10;
    var startAngle = 0;
    var endAngle = Math.PI*2;
    var anticlockWise = true;
   
    var self = {
        location : location,
        connections : []
    };

    self.draw = function(context) {
        context.beginPath();
        context.arc(location.x, location.y, radius, startAngle, endAngle, anticlockWise);
        context.closePath();
        context.fill();

        context.beginPath();
        for(var i=0; i<self.connections.length; i++) {
            context.lineTo(self.location.x, self.location.y, self.connections[i].location.x, self.connections[i].location.y, 10);
        }
        context.closePath();
        context.fill();

        return this;
    };

    self.connectWith = function(otherNode) {
        if (!self.connections.contains(otherNode)) {
            self.connections.push(otherNode);
            otherNode.connections.push(self);
        }

        return this;
    };

    return self;
}

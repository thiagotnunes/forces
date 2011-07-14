function node(location) {

    var radius = 10;
    var startAngle = 0;
    var endAngle = Math.PI*2;
    var anticlockWise = true;
   
    var self = {
        location : location,
        connections : [],
        velocity : vector(0, 0)
    };

    self.draw = function(context) {
        context.beginPath();
        context.arc(location.x, location.y, radius, startAngle, endAngle, anticlockWise);
        context.closePath();
        context.fill();

        context.strokeStyle = '#000';
        for(var i=0; i<self.connections.length; i++) {
            context.moveTo(self.location.x, self.location.y);
            context.lineTo(self.connections[i].location.x, self.connections[i].location.y);
        }
        context.stroke();

        return self;
    };

    self.connectWith = function(otherNode) {
        if (!self.connections.contains(otherNode)) {
            self.connections.push(otherNode);
            otherNode.connections.push(self);
        }

        return self;
    };

    return self;
}

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

        context.strokeStyle = '#000';
        for(var i=0; i<this.connections.length; i++) {
            context.moveTo(this.location.x, this.location.y);
            context.lineTo(this.connections[i].location.x, this.connections[i].location.y);
        }
        context.stroke();

        return this;
    };

    self.connectWith = function(otherNode) {
        if (!this.connections.contains(otherNode)) {
            this.connections.push(otherNode);
            otherNode.connections.push(this);
        }

        return this;
    };

    return self;
}

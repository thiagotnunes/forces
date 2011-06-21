function node(location) {

    var radius = 10;
    var startAngle = 0;
    var endAngle = Math.PI*2;
    var anticlockWise = true;
   
    var self = {
        location : location
    };

    self.draw = function(context) {
        context.beginPath();
        context.arc(location.x, location.y, radius, startAngle, endAngle, anticlockWise);
        context.closePath();
        context.fill();
    };

    return self;
}

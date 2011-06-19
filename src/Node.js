function node(position) {

    var radius = 10;
    var startAngle = 0;
    var endAngle = Math.PI*2;
    var anticlockWise = true;
   
    var self = {
    };

    self.draw = function(context) {
        context.beginPath();
        context.arc(position.x, position.y, radius, startAngle, endAngle, anticlockWise);
        context.closePath();
        context.fill();
    };

    return self;
}

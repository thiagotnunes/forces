function positionRandomizer(width, height, radius) {
    var lowerBoundary = radius + 1;
    var widthUpperBoundary = upperBoundaryFor(width);
    var heightUpperBoundary = upperBoundaryFor(height);
    var positions = [];

    var self = {
    };

    self.nextRandomFor = function(upperBoundary) {
        return lowerBoundary + baseRandomNumber(upperBoundary);
    };

    self.nextPosition = function() {
        do {
            var randomX = self.nextRandomFor(widthUpperBoundary);
            var randomY = self.nextRandomFor(heightUpperBoundary);
            var position = {
                x : randomX,
                y : randomY
            };
        } while (positions.contains(position)); 

        positions.push(position);
        return position;
    };

    function baseRandomNumber(upperBoundary) {
        return Math.floor(Math.random() * upperBoundary);
    }

    function upperBoundaryFor(value) {
        return value - radius - lowerBoundary - 1;
    }

    return self;
}

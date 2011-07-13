function locationRandomizer(width, height, radius) {
    var lowerBoundary = radius + 1;
    var widthUpperBoundary = upperBoundaryFor(width);
    var heightUpperBoundary = upperBoundaryFor(height);
    var locations = [];

    var self = {
    };

    self.nextRandomFor = function(upperBoundary) {
        return lowerBoundary + baseRandomNumber(upperBoundary);
    };

    self.nextLocation = function() {
        do {
            var randomX = self.nextRandomFor(widthUpperBoundary);
            var randomY = self.nextRandomFor(heightUpperBoundary);
            var location = vector(randomX, randomY);
        } while (locations.contains(location)); 

        locations.push(location);
        return location;
    };

    function baseRandomNumber(upperBoundary) {
        return Math.floor(Math.random() * upperBoundary);
    }

    function upperBoundaryFor(value) {
        return value - radius - lowerBoundary - 1;
    }

    return self;
}

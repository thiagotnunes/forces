function locationRandomizer(width, height, radius) {
    var baseRandomNumber = function(upperBoundary) {
        return Math.floor(Math.random() * upperBoundary);
    };

    var upperBoundaryFor = function (value) {
        return value - radius - lowerBoundary - 1;
    };

    var lowerBoundary = radius + 1;
    var widthUpperBoundary = upperBoundaryFor(width);
    var heightUpperBoundary = upperBoundaryFor(height);
    var positions = [];

    var nextRandomFor = function(upperBoundary) {
        return lowerBoundary + baseRandomNumber(upperBoundary);
    };

    var nextLocation = function() {
        do {
            var randomX = nextRandomFor(widthUpperBoundary);
            var randomY = nextRandomFor(heightUpperBoundary);
            var position = vector(randomX, randomY);
        } while (positions.contains(position)); 

        positions.push(position);
        return position;
    };

    return {
      nextRandomFor: nextRandomFor,
      nextLocation: nextLocation
    };
}

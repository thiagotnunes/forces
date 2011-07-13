function vector(x, y) {
    var self = {
        x : x,
        y : y
    };

    self.subtract = function(otherVector) {
        return vector(x - y, otherVector.x - otherVector.y);
    };

    self.dot = function(otherVector) {
        return x * otherVector.x + y * otherVector.y;
    };

    self.multiply = function(constant) {
        return vector(x * constant, y * constant);
    };

    self.norm = function() {
        return Math.sqrt(self.dot(self));
    };

    self.normalize = function() {
        return self.multiply(1.0 / self.norm());
    };

    return self;
}

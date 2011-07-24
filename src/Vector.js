function vector(x, y) {
    var self = {
        x : x,
        y : y
    };

    self.add = function(otherVector) {
        return vector(self.x + otherVector.x, self.y + otherVector.y);
    };

    self.subtract = function(otherVector) {
        return vector(self.x - otherVector.x, self.y - otherVector.y);
    };

    self.dot = function(otherVector) {
        return self.x * otherVector.x + self.y * otherVector.y;
    };

    self.multiply = function(constant) {
        return vector(self.x * constant, self.y * constant);
    };

    self.module = function() {
        return Math.sqrt(self.dot(self));
    };

    self.normalize = function() {
        return self.multiply(1.0 / self.module());
    };

    return self;
}

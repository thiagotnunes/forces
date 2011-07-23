function coulombRepulsion() {
    var self = {
        k : 1
    };

    self.calculate = function(node1, node2) {
        var distance = node1.location.subtract(node2.location);
        var normalizedDistance = distance.normalize();
        
        return vector(forceFor(normalizedDistance.x, distance), forceFor(normalizedDistance.y, distance));
    };

    function forceFor(axis, distance) {
        return axis / Math.pow(distance.module() + self.k, 2.0);
    }

    return self;
}

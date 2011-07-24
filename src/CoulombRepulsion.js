function coulombRepulsion() {
    var self = {
        k : 100
    };

    self.calculate = function(node1, node2) {
        var distance = node1.location.subtract(node2.location);
        var euclideanDistance = Math.sqrt(distance.dot(distance));
        var normalizedDistance = distance.normalize();
        
        return vector(forceFor(normalizedDistance.x, euclideanDistance), forceFor(normalizedDistance.y, euclideanDistance));
    };

    function forceFor(axis, distance) {
        return self.k * axis * (1 / distance);
    }

    return self;
}

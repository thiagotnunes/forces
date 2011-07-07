function hookeAttraction() {
    var self = {
        minimumLength : 5
    };

    self.calculate = function(node1, node2) {
        var distance = node1.location.subtract(node2.location);
        var restingDistance = distance.normalize().multiply(self.minimumLength);

        return (distance.subtract(restingDistance)).multiply(-1);
    };

    return self;
}

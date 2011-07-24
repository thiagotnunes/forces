function hookeAttraction() {
    var self = {
        minimumLength : 50,
        k : -1
    };

    self.calculate = function(node1, node2) {
        var distance = node1.location.subtract(node2.location);
        var restingDistance = distance.normalize().multiply(self.minimumLength);

        return (distance.subtract(restingDistance)).multiply(self.k);
    };

    return self;
}

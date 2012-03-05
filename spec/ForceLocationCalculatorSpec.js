describe("Location Calculator", function() {
  it("should apply the forces to get the nodes in the right positions", function() {
    var netForce = {};
    var velocity = {};
    var position = {};

    var forces = {
      calculateNetForceFor: jasmine.createSpy().andReturn(netForce),
  velocityFor: jasmine.createSpy().andReturn(velocity),
  nextLocationFor: jasmine.createSpy().andReturn(position)
    };

    var node1 = {};
    var node2 = {};
    var nodes = [node1, node2];

    var context = {};
    var initialNetForce = {};

    var positionCalculator = forceLocationCalculator(forces);
    positionCalculator.updateLocationOf(nodes, initialNetForce);

    expect(forces.calculateNetForceFor).toHaveBeenCalledWith(node1, nodes, initialNetForce);
    expect(forces.calculateNetForceFor).toHaveBeenCalledWith(node2, nodes, initialNetForce);
    expect(forces.velocityFor).toHaveBeenCalledWith(node1, netForce);
    expect(forces.velocityFor).toHaveBeenCalledWith(node2, netForce);
    expect(forces.nextLocationFor).toHaveBeenCalledWith(node1, velocity);
    expect(forces.nextLocationFor).toHaveBeenCalledWith(node2, velocity);
    expect(node1.velocity).toBe(velocity);
    expect(node2.velocity).toBe(velocity);
    expect(node1.position).toBe(position);
    expect(node2.position).toBe(position);
  });
});

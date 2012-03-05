describe("Forces", function() {
  it("should calculate node velocity", function() {
    var forcesCalculator = forces();

    var netForce = {};
    netForce.multiply = jasmine.createSpy().andReturn(netForce);
    var expectedVelocity = {};
    expectedVelocity.multiply = jasmine.createSpy().andReturn(expectedVelocity);
    var resultingVelocity = {
      multiply: jasmine.createSpy().andReturn(expectedVelocity)
    };
    var someNode = {
      velocity: {
        add: jasmine.createSpy().andReturn(resultingVelocity)
      }
    };

    var actualVelocity = forcesCalculator.velocityFor(someNode, netForce);

    expect(netForce.multiply).toHaveBeenCalledWith(0.7);
    expect(someNode.velocity.add).toHaveBeenCalledWith(netForce);
    expect(resultingVelocity.multiply).toHaveBeenCalledWith(0.5);
    expect(actualVelocity).toBe(expectedVelocity);
  });

  it("should calculate node updated position", function() {
    var forcesCalculator = forces();
    var expectedLocation = {};
    var someNode = {
      position: {
        add: jasmine.createSpy().andReturn(expectedLocation)
      }
    };
    var velocity = {};
    velocity.multiply = jasmine.createSpy(velocity);

    var actualLocation = forcesCalculator.nextLocationFor(someNode, velocity);

    expect(someNode.position.add).toHaveBeenCalledWith(velocity);
    expect(actualLocation).toBe(expectedLocation);
  });

  it("should calculate net force", function() {
    var node2 = {};
    var node3 = {};
    var node1 = {
      connections: [node2, node3]
    };

    var resultingRepulsion = {};
    var repulsion = {
      calculate: jasmine.createSpy().andReturn(resultingRepulsion)
    };

    var resultingAttraction = {};
    var attraction = {
      calculate: jasmine.createSpy().andReturn(resultingAttraction)
    };
    var netForce = {};
    netForce.add = jasmine.createSpy().andReturn(netForce);

    var forcesCalculator = forces(repulsion, attraction);

    var actualNetForce = forcesCalculator.calculateNetForceFor(node1, [node1, node2, node3], netForce);

    expect(actualNetForce).toBe(netForce);
    expect(repulsion.calculate).not.toHaveBeenCalledWith(node1, node1);
    expect(repulsion.calculate).toHaveBeenCalledWith(node1, node2);
    expect(repulsion.calculate).toHaveBeenCalledWith(node1, node3);
    expect(attraction.calculate).toHaveBeenCalledWith(node1, node2);
    expect(attraction.calculate).toHaveBeenCalledWith(node1, node3);
    expect(netForce.add).toHaveBeenCalledWith(resultingRepulsion);
    expect(netForce.add).toHaveBeenCalledWith(resultingAttraction);
  });
});

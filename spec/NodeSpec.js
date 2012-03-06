describe("Node", function() {

  it("should add connection to other nodes", function() {
    var firstNode = node({ x: 5, y: 4});
    var secondNode = node({ x: 10, y: 25});
    var thirdNode = node({ x: 0, y: 5});

    firstNode.connectWith(secondNode).connectWith(thirdNode);

    expect(firstNode.connections).toContain(secondNode);
    expect(firstNode.connections).toContain(thirdNode);
    expect(secondNode.connections).toContain(firstNode);
    expect(secondNode.connections).not.toContain(thirdNode);
    expect(thirdNode.connections).toContain(firstNode);
    expect(thirdNode.connections).not.toContain(secondNode);
  });

  it("should not duplicate connection with the same node", function() {
    var firstNode = node({ x: 5, y: 5});
    var secondNode = node({ x: 5, y: 5});

    firstNode.connectWith(secondNode).connectWith(secondNode);

    expect(firstNode.connections.length).toBe(1);
    expect(secondNode.connections.length).toBe(1);
    expect(firstNode.connections).toContain(secondNode);
    expect(secondNode.connections).toContain(firstNode);
  });

  it("should have initial velocity set to 0,0", function() {
    var someNode = node({ x: 5, y: 5 });

    expect(someNode.velocity).toHaveAttributesOf({ x: 0, y: 0 });
  });
});

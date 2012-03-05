describe("Node", function() {

  it("should draw itself on canvas", function() {
    var position = { 
      x : 5,
      y : 4
    };
    var radius = 10;
    var startAngle = 0;
    var endAngle = Math.PI * 2;
    var anticlockWise = true;

    var firstNode = node(position);
    var context = {
      beginPath: jasmine.createSpy(),
      arc: jasmine.createSpy(),
      closePath: jasmine.createSpy(),
      fill: jasmine.createSpy(),
      stroke: jasmine.createSpy()
    };

    firstNode.draw(context);

    expect(context.beginPath).toHaveBeenCalled();
    expect(context.arc).toHaveBeenCalledWith(position.x, position.y, radius, startAngle, endAngle, anticlockWise);
    expect(context.closePath).toHaveBeenCalled();
    expect(context.fill).toHaveBeenCalled();
    expect(context.stroke).toHaveBeenCalled();
  });

  it("should draw node connections", function() {
    var radius = 10;
    var startAngle = 0;
    var endAngle = Math.PI * 2;
    var anticlockWise = true;

    var firstNode = node({ x: 5, y: 4 });
    var secondNode = node({ x: 10, y: 15 });
    var context = {
      beginPath: jasmine.createSpy(),
      arc: jasmine.createSpy(),
      closePath: jasmine.createSpy(),
      fill: jasmine.createSpy(),
      stroke: jasmine.createSpy(),
      moveTo: jasmine.createSpy(),
      lineTo: jasmine.createSpy()
    };

    firstNode.connectWith(secondNode).draw(context);

    expect(context.moveTo).toHaveBeenCalledWith(5, 4);
    expect(context.lineTo).toHaveBeenCalledWith(10, 15);
    expect(context.strokeStyle).toBe('#000');
    expect(context.stroke).toHaveBeenCalled();
  });

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

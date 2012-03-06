describe("Nodes Drawer", function() {

  it("should draw the nodes on canvas", function() {

    var nodes = function() {
      var firstNode = { 
        position: { 
          x: 5, 
          y: 4 
        } 
      };
      var secondNode = { 
        position: { 
          x: 10, 
          y: 15 
        } 
      };
      firstNode.connections = [secondNode];
      secondNode.connections = [firstNode];

      return [firstNode, secondNode]; 
    }();
    
    var context = function() {
      return {
        beginPath: jasmine.createSpy(),
        arc: jasmine.createSpy(),
        closePath: jasmine.createSpy(),
        fill: jasmine.createSpy(),
        stroke: jasmine.createSpy(),
        moveTo: jasmine.createSpy(),
        lineTo: jasmine.createSpy(),
        clearRect: jasmine.createSpy()
      }
    }();

    var canvas = function() {
      var width = 3;
      var height = 5;
      return {
        getContext: jasmine.createSpy().andReturn(context),
        width: width,
        height: height
      };
    }();

    var drawer = nodesDrawer(nodes, canvas);

    drawer.draw();

    shouldClear(canvas, context);
    expect(canvas.width).toBe(3);
    shouldDrawCircleFor(nodes, context);
    shouldDrawEdgesFor(nodes, context);
  });

  function shouldClear(canvas, context) {
    expect(canvas.getContext).toHaveBeenCalledWith('2d');
    expect(context.clearRect).toHaveBeenCalledWith(0, 0, canvas.width, canvas.height);
  };

  function shouldDrawCircleFor(nodes, context) {
    var radius = 10;
    var startAngle = 0;
    var endAngle = Math.PI * 2;
    var anticlockWise = true;

    expect(context.beginPath).toHaveBeenCalled();
    _.each(nodes, function(element) {
      expect(context.arc).toHaveBeenCalledWith(element.position.x, element.position.y, radius, startAngle, endAngle, anticlockWise);
    });
    expect(context.closePath).toHaveBeenCalled();
    expect(context.fill).toHaveBeenCalled();
    expect(context.stroke).toHaveBeenCalled();
  };

  function shouldDrawEdgesFor(nodes, context) {
    _.each(nodes, function(node) {
      _.each(node.connections, function(connection) {
        expect(context.moveTo).toHaveBeenCalledWith(node.position.x, node.position.y);
        expect(context.lineTo).toHaveBeenCalledWith(connection.position.x, connection.position.y);
      });
    });
    expect(context.strokeStyle).toBe('#000');
    expect(context.stroke).toHaveBeenCalled();
  };

});

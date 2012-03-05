describe("Nodes Drawer", function() {
  it("should clear canvas and draw nodes", function() {
    var node1 = {
      draw: jasmine.createSpy()
    };
    var node2 = {
      draw: jasmine.createSpy()
    };
    var nodes = [node1, node2];

    var width = 3;
    var height = 5;
    var context = {
      clearRect: jasmine.createSpy()
    };
    var canvas = {
      getContext: jasmine.createSpy().andReturn(context),
      width: width,
      height: height
    };

    var drawer = nodesDrawer(nodes, canvas);

    drawer.draw();

    expect(canvas.getContext).toHaveBeenCalledWith('2d');
    expect(context.clearRect).toHaveBeenCalledWith(0, 0, canvas.width, canvas.height);
    expect(canvas.width).toBe(width);
    expect(node1.draw).toHaveBeenCalledWith(context);
    expect(node2.draw).toHaveBeenCalledWith(context);
  });
});

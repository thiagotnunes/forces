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
            beginPath: {},
            arc: {},
            arc: {},
            closePath: {},
            fill: {}
        };

        spyOn(context, 'beginPath');
        spyOn(context, 'arc');
        spyOn(context, 'closePath');
        spyOn(context, 'fill');

        firstNode.draw(context);

        expect(context.beginPath).toHaveBeenCalled();
        expect(context.arc).toHaveBeenCalledWith(position.x, position.y, radius, startAngle, endAngle, anticlockWise);
        expect(context.closePath).toHaveBeenCalled();
        expect(context.fill).toHaveBeenCalled();
    });

    it("should add connection to other nodes", function() {

    });
});

describe("Node", function() {

    it("should draw itself on canvas", function() {
        var location = { 
            x : 5,
            y : 4
        };
        var radius = 10;
        var startAngle = 0;
        var endAngle = Math.PI * 2;
        var anticlockWise = true;

        var firstNode = node(location);
        var context = {
            beginPath: {},
            arc: {},
            closePath: {},
            fill: {},
            rect : {}
        };

        spyOn(context, 'beginPath');
        spyOn(context, 'arc');
        spyOn(context, 'closePath');
        spyOn(context, 'fill');

        firstNode.draw(context);

        expect(context.beginPath).toHaveBeenCalled();
        expect(context.arc).toHaveBeenCalledWith(location.x, location.y, radius, startAngle, endAngle, anticlockWise);
        expect(context.closePath).toHaveBeenCalled();
        expect(context.fill).toHaveBeenCalled();
    });

    it("should draw node connections", function() {
        var radius = 10;
        var startAngle = 0;
        var endAngle = Math.PI * 2;
        var anticlockWise = true;

        var firstNode = node({ x : 5, y : 4 });
        var secondNode = node({ x : 10, y : 15 });
        var context = {
            beginPath: {},
            arc: {},
            closePath: {},
            fill: {},
            rect : {}
        };

        spyOn(context, 'beginPath');
        spyOn(context, 'arc');
        spyOn(context, 'closePath');
        spyOn(context, 'fill');
        spyOn(context, 'rect');

        firstNode.connectWith(secondNode).draw(context);

        expect(context.beginPath).toHaveBeenCalled();
        expect(context.rect).toHaveBeenCalledWith(5, 4, 10, 15);
        expect(context.closePath).toHaveBeenCalled();
    });

    it("should add connection to other nodes", function() {
        var firstNode = node({ x : 5, y : 4});
        var secondNode = node({ x : 10, y : 25});
        var thirdNode = node({ x : 0, y : 5});

        firstNode.connectWith(secondNode).connectWith(thirdNode);

        expect(firstNode.connections).toContain(secondNode);
        expect(firstNode.connections).toContain(thirdNode);
        expect(secondNode.connections).toContain(firstNode);
        expect(secondNode.connections).notToContain(thirdNode);
        expect(thirdNode.connections).toContain(firstNode);
        expect(thirdNode.connections).notToContain(secondNode);
    });

    it("should not duplicate connection with the same node", function() {
        var firstNode = node({ x : 5, y : 5});
        var secondNode = node({ x : 5, y : 5});

        firstNode.connectWith(secondNode).connectWith(secondNode);

        expect(firstNode.connections.length).toBe(1);
        expect(secondNode.connections.length).toBe(1);
        expect(firstNode.connections).toContain(secondNode);
        expect(secondNode.connections).toContain(firstNode);
    });
});

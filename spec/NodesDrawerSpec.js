describe("Nodes Drawer", function() {
    it("should clear canvas and draw nodes", function() {
        var node1 = {
            draw : {}
        };
        var node2 = {
            draw : {}
        };
        var nodes = [node1, node2];
        var context = {
            clearRect : {}
        };
        var width = 3;
        var height = 5;
        var canvas = {
            getContext : {},
            width : width,
            height : height
        };

        spyOn(canvas, 'getContext').andReturn(context);
        spyOn(context, 'clearRect');
        spyOn(node1, 'draw');
        spyOn(node2, 'draw');

        var drawer = nodesDrawer(nodes, canvas);

        drawer.draw();

        expect(canvas.getContext).toHaveBeenCalledWith('2d');
        expect(context.clearRect).toHaveBeenCalledWith(0, 0, canvas.width, canvas.height);
        expect(canvas.width).toBe(width);
        expect(node1.draw).toHaveBeenCalledWith(context);
        expect(node2.draw).toHaveBeenCalledWith(context);
    });
});

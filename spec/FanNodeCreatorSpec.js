describe("Fan Node Creator", function() {
    it("should creator a fan like graph", function() {
        var creator = {
            createNodes : {}
        };
        var node1 = {
            connectWith : {}
        };
        var node2 = {
            connectWith : {}
        };
        var node3 = {
            connectWith : {}
        };
        var node4 = {
            connectWith : {}
        };
        var nodes = [node1, node2, node3, node4];

        spyOn(creator, 'createNodes').andReturn(nodes);
        spyOn(node1, 'connectWith');
        spyOn(node2, 'connectWith');
        spyOn(node3, 'connectWith');
        spyOn(node4, 'connectWith');

        var fanCreator = fanNodeCreator(creator);

        var responseNodes = fanCreator.nodes();

        expect(nodes.contains(node1)).toBe(true);
        expect(nodes.contains(node2)).toBe(true);
        expect(nodes.contains(node3)).toBe(true);
        expect(nodes.contains(node4)).toBe(true);
        expect(creator.createNodes).toHaveBeenCalled();
        expect(node1.connectWith).toHaveBeenCalledWith(node2);
        expect(node1.connectWith).toHaveBeenCalledWith(node3);
        expect(node1.connectWith).toHaveBeenCalledWith(node4);
        expect(node2.connectWith).not.toHaveBeenCalled();
        expect(node3.connectWith).not.toHaveBeenCalled();
        expect(node4.connectWith).not.toHaveBeenCalled();
    });
});

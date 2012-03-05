describe("Binary Node Creator", function() {
    it("should create a binary graph", function() {
        var creator = {
            createNodes: jasmine.createSpy().andReturn(createNodes())
        };

        var binaryCreator = binaryNodeCreator(creator);

        var nodes = binaryCreator.nodes();

        expect(nodes.contains(nodes[0])).toBe(true);
        expect(nodes.contains(nodes[1])).toBe(true);
        expect(nodes.contains(nodes[2])).toBe(true);
        expect(nodes.contains(nodes[3])).toBe(true);
        expect(creator.createNodes).toHaveBeenCalled();
        expect(nodes[0].connectWith).toHaveBeenCalledWith(nodes[1]);
        expect(nodes[0].connectWith).toHaveBeenCalledWith(nodes[2]);
        expect(nodes[1].connectWith).toHaveBeenCalledWith(nodes[3]);
        expect(nodes[2].connectWith).not.toHaveBeenCalled();
        expect(nodes[3].connectWith).not.toHaveBeenCalled();
    });

    function createNodes() {
      var nodes = [{},{},{},{}];
      _.each(nodes, function(element) {
        element.connectWith = jasmine.createSpy()
      });

      return nodes;
    }
});

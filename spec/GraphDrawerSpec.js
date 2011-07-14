describe("Graph Drawer", function() {
    it("should draw graph and apply the forces to get the nodes in the right locations", function() {
        var forces = {};
        var node1 = {};
        var node2 = {};
        var node3 = {};
        node1.connections = [node2, node3];
        node2.connections = [node1];
        node3.connections = [node1];

        var nodes = [node1, node2, node3];
        var drawer = graphDrawer(nodes, forces);
    });
});

describe("Location Randomizer", function() {

    it("should give a random position within boundaries", function() {
        var width = 600;
        var height = 600;
        var radius = 10; 

        var randomizer = locationRandomizer(width, height, radius);

        var position = randomizer.nextLocation();

        expect(position.x).toBeGreaterThan(radius);
        expect(position.x).toBeLessThan(width - radius);
        expect(position.y).toBeGreaterThan(radius);
        expect(position.y).toBeLessThan(height - radius);
    });

    it("should not generate no two same positions", function() {
        var randomizer = locationRandomizer(600, 600, 10);

        var invocationCounter = 0;
        spyOn(randomizer, 'nextRandomFor').andCallFake(
            function(upperBoundary) {
                return this.callCount <= 4 ? 0 : 1;
            }
        );

        var firstLocation = randomizer.nextLocation();
        var secondLocation = randomizer.nextLocation();

        expect(firstLocation).not.toBe(secondLocation);
    });
});                                                                 

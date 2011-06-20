describe("Position Randomizer", function() {

    it("should give a random position within boundaries", function() {
        var width = 600;
        var height = 600;
        var radius = 10; 

        var randomizer = positionRandomizer(width, height, radius);

        var position = randomizer.nextPosition();

        expect(position.x).toBeGreaterThan(radius);
        expect(position.x).toBeLessThan(width - radius);
        expect(position.y).toBeGreaterThan(radius);
        expect(position.y).toBeLessThan(height - radius);
    });

    it("should not generate no two same positions", function() {
        var randomizer = positionRandomizer(600, 600, 10);

        var invocationCounter = 0;
        randomizer.nextRandomFor = function(upperBoundary) {
            invocationCounter += 1;
            if (invocationCounter <= 4) {
                return 0;
            } else {
                return 1;
            }
        };

        var firstPosition = randomizer.nextPosition();
        var secondPosition = randomizer.nextPosition();

        expect(firstPosition).not.toBe(secondPosition);
    });
});                                                                 

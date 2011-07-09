describe("Array", function() {
    it("should confirm that an element is in the array", function() {
        var testArray = [1,2,3];

        expect(testArray.contains(1)).toBe(true);
        expect(testArray.contains(2)).toBe(true);
        expect(testArray.contains(3)).toBe(true);
    });

    it("should confirm that an element is not in the array", function() {
        var testArray = [1,2,3];

        expect(testArray.contains(0)).toBe(false);
        expect(testArray.contains(4)).toBe(false);
        expect(testArray.contains(14)).toBe(false);
    });
});

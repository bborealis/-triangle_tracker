describe('triangleTracker', function() {
    it('is Equilateral if all sides are equal', function() {
        expect(triangleTracker(3, 3, 3)).to.equal("Equilateral");
    });

    it('is isosceles if two sides are equal', function() {
        expect(triangleTracker(5, 6, 6)).to.equal("Isosceles");
    });

    it('is Scalene if no sides are equal', function() {
        expect(triangleTracker(2, 4, 5)).to.equal("Scalene");
    });

    it('is not a triangle if one side is the same or larger the the sum of the other two sides', function() {
        expect(triangleTracker(2, 2, 8)).to.equal(false);
    });
});

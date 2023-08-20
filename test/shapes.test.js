const { Circle, Square, Triangle } = require('../lib/shapes');

describe('Logo renders', () => {
    describe('Circle Logo Render', () => {
        it('Should return the proper svg file structure passed for the circle logo.', () =>{
            const circle = new Circle('ABC', 'white', 'red');
            expect(circle.renderLogo()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="100" fill="red" /><text x="100" y="120" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>`);
        });
    });
    describe('Square Logo Render', () => {
        it('Should return the proper svg file structure passed for the square logo.', () =>{
            const square = new Square('RED', 'RED', 'black');
            expect(square.renderLogo()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="200" height="200" fill="black" /><text x="100" y="120" font-size="60" text-anchor="middle" fill="RED">RED</text></svg>`);
        });
    });
    describe('Triangle Logo Render', () => {
        it('Should return the proper svg file structure passed for the triangle logo.', () =>{
            const triangle = new Triangle('trY', 'yellow', 'black');
            expect(triangle.renderLogo()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 0 200, 200, 0, 200" fill="black" /><text x="100" y="150" font-size="60" text-anchor="middle" fill="yellow">trY</text></svg>`);
        });
    });
});
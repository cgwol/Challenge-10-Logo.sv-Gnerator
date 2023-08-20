const { Circle, Square, Triangle } = require('../lib/shapes');

describe('Renders', () => {
    describe('Circle Logo Render', () => {
        it('Should return the proper svg file structure passed for the circle logo.', () =>{
            const circle = new Circle('ABC', 'white', 'red');
            expect(circle.renderLogo()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="100" fill="red" /><text x="100" y="120" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>`);
        });
    });
});
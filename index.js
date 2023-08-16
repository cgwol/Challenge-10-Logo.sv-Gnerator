// const { writeFile } = require('fs/promises');
// const { Circle, Square, Triangle } = require('./lib/shapes.js');
const inq = require('./lib/inq.js');
const generator = require('./lib/generator.js');

// const circle = new Circle(
//     'ABC',
//     'black',
//     'green'
// );

// const svg = circle.renderLogoCircle();

// const square = new Square(
//     '123',
//     'black',
//     'gray'
// );

// const svg = square.renderLogo();


// console.log(svg);

// writeFile('./dist/logo.svg', svg);

inq.init().then(responses => {
    console.log(responses);
    generator.createLogo(responses.text, responses.shape, responses.textColor, responses.shapeColor);
});


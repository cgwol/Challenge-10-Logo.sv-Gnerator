const { writeFile } = require('fs/promises');
const inq = require('inquirer');
const Circle = require('./lib/shapes');
const Square = require('./lib/shapes');

const square = new Square()(
    'ABC',
    'red',
    'blue'
);

const svg = square.renderLogo();

writeFile('./dist/logo.svg',svg);
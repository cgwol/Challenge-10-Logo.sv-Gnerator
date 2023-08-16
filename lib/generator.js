const { Circle, Square, Triangle } = require('./shapes.js');
const { writeFile } = require('fs/promises');
// { text: 'YOL', shape: 'Circle', textColor: 'red', shapeColor: 'black' }

function createLogo(text, shape, textColor, shapeColor){
    // console.log(shape);
    switch(shape){
        case 'Circle':
            return circleLogo(text, textColor, shapeColor);
        case 'Square':
            return squareLogo(text, textColor, shapeColor);
        case 'Triangle':
            return triangleLogo(text, textColor, shapeColor);
        default:
            console.log("Error Generating SVG")
    }
}

function circleLogo(text, textColor, shapeColor){
    const circle = new Circle(
        text,
        textColor,
        shapeColor
    );
    // console.log(circle);
    const svg = circle.renderLogo();

    writeFile('./dist/logo.svg', svg);
}

function squareLogo(text, textColor, shapeColor){

}

function triangleLogo(text, textColor, shapeColor){

}

module.exports = { createLogo };
const { Circle, Square, Triangle } = require('./shapes.js');
const { writeFile } = require('fs/promises');
// { text: 'YOL', shape: 'Circle', textColor: 'red', shapeColor: 'black' }

function createLogo(text, shape, textColor, shapeColor){

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

    const svg = circle.renderLogo();
    try {
        writeFile('./dist/logo.svg', svg);
        success();
    } catch (err) {
        console.error("Error writing to svg file");
    }
    
}

function squareLogo(text, textColor, shapeColor){
    const square = new Square(
        text,
        textColor,
        shapeColor
    );

    const svg = square.renderLogo();
    try {
        writeFile('./dist/logo.svg', svg);
        success();
    } catch (err) {
        console.error("Error writing to svg file");
    }
}

function triangleLogo(text, textColor, shapeColor){
    const triangle = new Triangle(
        text,
        textColor,
        shapeColor
    );

    const svg = triangle.renderLogo();
    try {
        writeFile('./dist/logo.svg', svg);
        success();
    } catch (err) {
        console.error("Error writing to svg file");
    }
}

function success(){
    console.log("Generated logo.svg");
}

module.exports = { createLogo };
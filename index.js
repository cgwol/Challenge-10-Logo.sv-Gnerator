const inq = require('./lib/inq.js');
const generator = require('./lib/generator.js');

inq.init().then(responses => {
    console.log(responses);
    generator.createLogo(responses.text, responses.shape, responses.textColor, responses.shapeColor);
});


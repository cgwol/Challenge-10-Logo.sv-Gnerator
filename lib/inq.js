const inq = require('inquirer');

const userInput = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters to display on the logo. ',
        validate: name => {
            if (name.length > 3) {
                return 'Character limit of 3';
            }
            else {
                return true;
            }
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Enter what shape the logo will be. ',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text (color keyword OR hexadeciaml number). '
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape\'s background (color keyword OR hexadeciaml number). '
    }
];


function init(){
    console.log("Requires user input: ");
    return inq.prompt(userInput);
}

module.exports = { init };

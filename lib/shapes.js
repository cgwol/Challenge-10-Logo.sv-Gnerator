class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    renderLogo() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="100" cy="100" r="100" fill="${this.shapeColor}" />
        <text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          
    </svg>`
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    renderLogo() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <rect x="0" y="0" width="200" height="200" fill="${this.shapeColor}" />
        <text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
              
    </svg>`;
    }

}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    renderLogo() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="100, 0 200, 200, 0, 200" fill="${this.shapeColor}" />
        <text x="100" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

      </svg>
      `
    }
}

module.exports = {Triangle, Circle, Square};
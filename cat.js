const Animal = require('./animal');

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    makeSound() {
        return `${this.name} meows softly.`;
    }

    scratch() {
        return `${this.name} is scratching the furniture.`;
    }

    static behavior() {
        return `Cats love to climb and explore.`;
    }
}

module.exports = Cat;

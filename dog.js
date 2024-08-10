const Animal = require('./animal');

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    makeSound() {
        return `${this.name} barks loudly!`;
    }

    fetch() {
        return `${this.name} is fetching the ball.`;
    }

    static behavior() {
        return `Dogs love to wag their tails.`;
    }
}

module.exports = Dog;


class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return `${this.name} makes a sound.`;
    }

    static behavior() {
        return `General animal behavior.`;
    }
}

module.exports = Animal;

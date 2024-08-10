
const Animal = require('./animal');
const Dog = require('./dog');
const Cat = require('./cat');

const myDog = new Dog('Buddy', 'Golden Retriever');
const myCat = new Cat('Whiskers', 'Tabby');

console.log(myDog.makeSound()); 
console.log(myCat.makeSound()); 

console.log(myDog.fetch()); 
console.log(myCat.scratch()); 

try {
    console.log(myDog.scratch()); 
} catch (e) {
    console.error('Error:', e.message);
}

try {
    console.log(myCat.fetch()); 
} catch (e) {
    console.error('Error:', e.message);
}

console.log(Animal.behavior()); 
console.log(Dog.behavior()); 
console.log(Cat.behavior()); 

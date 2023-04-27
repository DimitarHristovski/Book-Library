// #1.0 - OOP - Object Constructor Function
// function Player(arg1, agr2) {
//     this.name = arg1;
//     this.surname = agr2;
//     this.SayName = function() {
//         console.log(this.name);
//     }
// };

// Player.prototype.SayFullName = function () {
//     console.log(this.name, this.surname)
// }

// const playerOne = new Player("John", "Whick");
// const playerTwo = new Player("James", "Bond");

// playerOne.SayName();
// playerTwo.SayName();
 


// #1.1 - OOP - The Prototype
// function Player(arg1, agr2) {
//     this.name = arg1;
//     this.surname = agr2;
//     this.SayName = function() {
//         console.log(this.name);
//     }
// };

// Player.prototype.SayHello = function() {
//     console.log("Hello!")
// }

// Player.prototype.SayHy = function() {
//     console.log(`My name is ${this.name} and my surname is ${this.surname}!`)
// }


// #1.2 - OOP - Prototype Property: Prototype-based Inheritance
// function Human() {
//     this.date = Date();
// }

// Human.prototype.SayHello = function() {
//     console.log(`Hello guy! My name is ${this.name}, and I am from ${this.country}!`);
// }

// function Zombie(name, country) {
//     this.name = name;
//     this.country = country;
// }
// Human.prototype.Died = function() {
//     console.log(`${this.name}, who is from ${this.country}, died on ${this.date}, and now he is a Zombie!`)    
// }
// Zombie.prototype = new Human();

// const x = new Zombie("Test", "Testistan")

// console.log(x)





// #1.3 - OOP - Object.create() - creation from the prototype with 1 argument
// const person = {
//     name: 'Branko',
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
// };

// const me = Object.create(person);

// console.log(me)
// me.printIntroduction(); // expected output: "My name is Matthew. Am I human? true"

// me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // inherited properties can be overwritten
// console.log(me)




// #1.4 - OOP - Object.create() - creation from the prototype with 2 arguments
// const person = {
//   isHuman: false,
//   printIntroduction: function() {
//     console.log(`My name is ${this.name} ${this.surname}. Am I human? ${this.isHuman}`);
//   }
// };

// const me = Object.create(person, { 
//   surname: {
//     value: "Popovic"
//   },
// });

// me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // inherited properties can be overwritten

// me.printIntroduction(); // expected output: "My name is Matthew. Am I human? true"



// #1.5 - OOP - Factory functions - Object shorthand
// const name = "Maynard";
// const color = "red";
// const number = 34;
// const food = "rice";

// const person = (name, surname) => {
//     const sayHello = () => console.log(`Hello my name is ${name} ${surname}!`)
//     return {sayHello}
// }

// console.log(name, color, number, food); // Maynard red 34 rice

// console.log({name, color, number, food}); // { name: 'Maynard', color: 'red', number: 34, food: 'rice' }



// #1.6 - OOP - Factory functions - Scope and Closure
// const FactoryFunction = string => {
//   const capitalizeString = () => string.toUpperCase();
//   const printString = () => console.log(`----${capitalizeString()}----`);
//   return { printString };
// };

// const taco = FactoryFunction('taco');



// #1.7 - OOP - Factory functions - Scope and Closure - Private & Public functions
// const Player = (name, level) => {
//   let health = level * 2;
//   const getLevel = () => level;
//   const getName  = () => name;
//   const die = y => {
//     console.log(`${y} has died!`)
//   };
//   const attack = enemy => {
//     if (level < enemy.getLevel()) {
//       damage(1);
//       console.log(`${enemy.getName()} has damaged ${name}`);
//     }
//     if (level >= enemy.getLevel()) {
//       enemy.damage(1);
//       console.log(`${name} has damaged ${enemy.getName()}`);
//     }
//   };
//   const damage = x => {
//     health -= x;
//     if (health <= 0) {
//       die(name);
//     }
//   };
//   return {attack, damage, getLevel, getName};
// };
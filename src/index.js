import './style.scss';

const { sayHello } = require('./utils');

sayHello();

class Human {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const bobby = new Human('Peter');
console.log(bobby.getName());

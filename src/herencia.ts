export class Animal {
  constructor(
    public name: string
  ){}

  move() {
    console.log('moving');
  }

  greeting() {
    console.log(`Hello I'm ${this.name}`);
  }
}

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string) {
    super(name);

  }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof');
    }
  }
}

const dog = new Dog('Rex', 'Owen');
dog.greeting();
dog.move();
dog.woof(3);
console.log(dog.owner);


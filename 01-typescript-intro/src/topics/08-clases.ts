// Clases

export class Person {
  constructor(public name: string, private address: string = "No address") {}
}

const ironman = new Person("Borja");

console.log(ironman);

// Herencia
export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, "New York");
  }
}
const ironmanHero = new Hero("Ironman", 45, "Tony");

console.log(ironmanHero);

// Composicion
export class Hero2 {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}
const tony = new Person("Tony Stark");
const ironmanHero2 = new Hero2("Ironman", 45, "Tony", tony);

console.log(ironmanHero2);

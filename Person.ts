export class Person {

    public constructor(
        readonly firstname: string,
        readonly lastname: string,
        readonly age: number
    ) {
    }

    public sayHello(): string {
        return `Person info: ${this.firstname} ${this.lastname}, ${this.age}`;
    }
}

const person1: Person = new Person('Veronica', 'Obedina', 22);
console.log(person1.sayHello());



//Simple object
let userN = {
    name: 'Veronica',
    age: 22,
};

//Define object type
let user2: { age: number, name: string } = {
    name: 'Veronica',
    age: 20
};

let userName: string = user2.name;
let userAge: number = user2.age;

//Using TYPE for objects
type Person = { firstname: string, lastname: string };
let simpleUser: Person = {
    firstname: 'Veronica',
    lastname: 'Obedina'
}
let adminUser: Person = {
    firstname: 'Umar',
    lastname: 'Kayumov'
}

//Types with optional properties
type User = {
    firstname: string,
    lastname: string,
    password?: string,
    generatePassword?: () => string
}

let superUser: User = {
    firstname: 'Khurziyo',
    lastname: 'Kozimova',
    generatePassword(): string {
        return `hello_world`;
    }
}
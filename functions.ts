const createPassword = (name: string, age: number | string) => `${name}${age}`;

let password1: string = createPassword('Veronica', 25);
let password2: string = createPassword('Alisa', '20');

//Function with optional arguments
const createOptionalPassword = (name: string, age?: number | string) => `${name}${age}`;
let password3: string = createOptionalPassword('Veronica');

//REST functions
const createSkills = (name: string, ...skills: Array<string>) => `Name: ${name}, Skills: ${skills.join()}`;
let data: string = createSkills('Veronica', 'Java', 'TS');

//RETURN TYPES
const returnString = (firstname: string, lastname: string): string => `${firstname} ${lastname}`;
const returnNumber = (age: number): number => age;
const returnObject = (): object => ({});
const returnVoid = (message: string): void => {
    alert(`Ahtung: ${message}`);
}
const returnNever = (message: string): never => {
    throw new Error(message);
}
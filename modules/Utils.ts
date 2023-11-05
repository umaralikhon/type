namespace Utils {
    export const SECRET: string = '123456';
    export const PI: number = 3.14;
    export const generatePass = (username: string, age: number): string => `${username}_${age}`;
}

const myPass = Utils.generatePass("veronica", 22);
console.log(myPass);
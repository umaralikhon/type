let user: [id: number, name: string];
user = [1, "Veronica"];
// user = [2, "Umar"];

console.log(user);
console.log(user[1]);

for (const i of user) {
    console.log(i);
}


//Tuples as function parameters
function printUser(user1: [firstname: string, lastname: string]): void {
    console.log(user1);
}

let veronica: [firsname: string, lastname: string] = ["Veronica", "Obedina"];
printUser(veronica);

let math: [string, ...number[]] = ["Math", 4, 5, 5, 5];

function printMarks(marks: [string, ...number[]]): void {
    for (const i of marks) {
        console.log(marks[i]);
    }

    console.log(marks);
}

printMarks(math);

function addNumbers(firstNumber: number, ...numberArray: number[]): number {

    let result = firstNumber;

    for (let i = 0; i < numberArray.length; i++) {
        result += numberArray[i];
    }

    return result;
}

let sumNumbers = addNumbers(1, 2, 3, 4, 5, 6, 7);
console.log(`SUM: ${sumNumbers}`);

function sumElements(...args: number[]): number {

    let result = 0;

    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }

    return result;
}

const numbers = [1, 2, 3, 4, 56, 7, 8, 9] as const;
const sumNumbers2 = sumElements(...numbers);
console.log(`SUM2: ${sumNumbers2}`);
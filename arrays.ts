let simpleArray: number[] = [1, 2, 3];
let generaricArray: Array<number> = [1, 2, 3];

//Tuple arrays
let xArr: [string, number];
xArr = ["Hello", 10];

let yArr: [string, number] = ["World", 10];

//Any typed array
let xAny: [any, any] = ["Hello", 12];
let zAny: Array<any> = [25, "Veronica"];

//Enum type
enum Directions {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

let up = Directions.UP;
let down = Directions.DOWN;

//NEVER TYPE
const msg = "This is never type";
const error = (msg: string): never => {
    throw new Error(msg);
}

//OBJECT TYPE
const create = (obj: object | null): void => {

};

create({obj: 1});

let id: number | string;
id = 10;
id = "Hello";

//TYPE (Custom types)
type MyType = string;
let customType: MyType;
customType = "This is custom type!";

console.log(customType);




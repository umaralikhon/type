import {Person} from "./Person";

class Worker extends Person {

    public constructor(
        readonly firstname: string,
        readonly lastname: string,
        readonly age: number,
        readonly email: string,
        readonly username: string,
    ) {
        super(firstname, lastname, age);
        this.email = email;
        this.username = username;
    }

    public showInfo(): string {
        return `Worker info: ${this.firstname} ${this.lastname}, ${this.age}, ${this.email}, ${this.username}`;
    }
}

const worker: Worker = new Worker('Veronica', 'Obedina', 20, 'veronica@test.com', 'veronica');
const workerInfo: string = worker.showInfo();
console.log(workerInfo);

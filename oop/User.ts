class User {
    private firstname: string;
    private lastname: string;
    private age;

    public constructor() {
    }

    public constructor(firstname: string, lastname: string, age: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    public setFirstname(firstname: string): void {
        this.firstname = firstname;
    }

    public setLastname(lastname: string): void {
        this.lastname = lastname;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public getFirstname(): string {
        return this.firstname;
    }

    public getLastname(): string {
        return this.lastname;
    }

    public getAge(): string {
        return this.age;
    }
}

class Employee extends User {

    readonly company: string;

    constructor(firstname: string, lastname: string, age: number, company: string) {
        super(firstname, lastname, age);
        this.company = company;
    }
}
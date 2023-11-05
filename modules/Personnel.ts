namespace Personnel {

    export class Employee {
        public constructor(private firstname: string) {
            this.firstname = firstname;
        }

        public getFirstname(): string {
            return this.firstname;
        }
    }
}

let veronicaN = new Personnel.Employee("Veronica");
console.log(veronicaN.getFirstname());
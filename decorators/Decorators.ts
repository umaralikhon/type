const logClass = (constructor: Function) => {
    console.log(constructor);
}

const logProperty = (target: Object, propertyKey: string | symbol) => {
    console.log(propertyKey);
}

const logMethod = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    console.log(propertyKey);
}

@logClass
class UserDecorator {

    @logProperty
    private secret: string;

    public constructor(private firstname: string, private lastname: string, secret: string) {
        this.secret = secret;
    }

    @logMethod
    public displayInfo(): void {
        console.log(`Firstname: ${this.firstname}`);
        console.log(`Lastname: ${this.lastname}`);
    }
}

let myUserDecor: UserDecorator = new UserDecorator("Veronica", "Obedina", "hello");
myUserDecor.displayInfo();
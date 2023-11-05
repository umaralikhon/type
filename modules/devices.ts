interface Device {
     name: string;
}

class Phone implements Device {

    name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    private;
}

function call(phone: Phone): void {
    console.log(`Make call from: ${phone.getName()}`);
}

export {Device, Phone, call};
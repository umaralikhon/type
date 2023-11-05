function getId<T>(id: T): T {
    return id;
}

let result1 = getId<number>(5);
let result2 = getId<string>('Test');
console.log(result1);
console.log(result2);

class GenericUser<T> {
    private id: T;

    constructor(id: T) {
        this.id = id;
    }

    public getId(): T {
        return this.id;
    }
}

let genericNika = new GenericUser<number>(3);
console.log(genericNika.getId());

function compareName<T extends { name: string }>(obj1: T, obj2: T) {
    if (obj1 === obj2) {
        console.log("Names are equal");
    } else {
        console.log("Name are not equal");
    }
}

type GenericUsertype = { id: number; name: string };
let bob: GenericUsertype = {id: 0, name: "Bob"};
let tom: GenericUsertype = {id: 1, name: "Tom"};

compareName<GenericUsertype>(tom, bob);

abstract class Figure {
    abstract getArea(): number;

    displayArea(): void {
        console.log("Not implemented");
    }
}

class Rectangle extends Figure {

    public constructor(private width: number, private height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public getArea(): number {
        return this.height * this.width;
    }

    public displayArea() {
        console.log(`Area: ${this.getArea()}`);
    }
}

let myFigure: Figure = new Rectangle(20, 20);
myFigure.displayArea();
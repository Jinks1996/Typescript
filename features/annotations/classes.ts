class Vehicle {
    constructor(protected color: string){}
    
    public drive(): void {
        console.log(`I am Driving in ${this.color} Vehicle`)
    }

    honk(): void {
        console.log('beep')
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string){
        super(color);
    }

    drive(): void {
        console.log(`I am Driving in ${this.color} Vehicle having ${this.wheels} wheels`)
    }
}

const car = new Car(4, 'red')
car.drive()

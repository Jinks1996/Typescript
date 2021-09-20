// variables
let apples = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//  built in objects
let now: Date = new Date();

//  Array
let colors: string[] = ['red', 'blue', 'green'];
let numbers: number[] = [1, 2, 3];

// Classes
class Car {

}

let car: Car = new Car()

//  Object Literal
let point: { x: number; y:number} = {
    x: 1,
    y: 2
}

const logNumber: (i: number) => void = (i) => {
    console.log(i)
}
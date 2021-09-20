const carMakers = ["ford", "toyota", "chevy"];
const Dates = [new Date(), new Date()];

const carsByMake : string[][] = [];

const car = carMakers[0]; // Type Inference

carMakers.map((car: string) : string => {
    return car;
})

//Flexible types
const importantDates: (Date | string)[] = []
importantDates.push("20-3-10")
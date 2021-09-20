const vehicleProperty = {
    name: "civic",
    year: 2000,
    broken: true,
    summary() : string {
        return `Name : ${this.name}`
    }
}

interface Vehicle {
    name: string; 
    year: number; 
    broken: boolean;
    summary() : string;
} 

const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}, Year: ${vehicle.year}, Broken: ${vehicle.broken}`);
    
}


// Resuability
interface Reportable {
    summary(): string; 
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar:40,
    summary() : string {
        return `My drink has ${this.sugar} grams of sugar`
    }
}

const printSummary = (item : Reportable) : void => {
    console.log(item.summary());
} 

printSummary(drink);
printSummary(vehicleProperty)
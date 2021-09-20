// ---------------------------------------------- Basic Generics
type arrOfNumbers = Number[]; // ... using normal type
type arrayOfNumbers = Array<Number>; // ... using generics

let arr: arrayOfNumbers = [2, 3, 4];
// ---------------------

// ---------------------------------------------- Generics in more flexible way
// Example 1
let myFunction = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1];
};

// here <T> is called generic type which is used to provide more flexibility to the type
// like the above function can accept array of string, numbers or both depending on the Inference

let array1 = myFunction([1, 2, 3]); // ... array of numbers
let array2 = myFunction(["a", "b", "c"]); // ... array of strings
let array3 = myFunction([1, 2, "a"]); // ... array of elements which can be either numbers or string

//Example 2
let myFunction2 = <X, Y>(x: X, y: Y) => [x, y]; // ... return type is inferred by typescript
// you can also specify default type by <X, Y = number>, So default type of Y will be number if none is specified.

let array4 = myFunction2(2, "b");
// ---------------------

// ---------------------------------------------- extends keyword in Generics
// w/o extends keyword
let myFunction3 = (obj: { firstName: string; lastName: string }) => {
  return { ...obj, fullName: obj.firstName + obj.lastName };
};
// in above case you won't be able to pass any extra argument other that firstName and lastName to myFunction3

// using extends keyword
let myFunction4 = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return { ...obj, fullName: obj.firstName + obj.lastName };
};
// by extending type to Generic Type, you can pass any extra argument other that firstName and lastName to myFunction4
myFunction4({ firstName: "Steve", lastName: "Rogers", age: 90 });
// ---------------------

// ---------------------------------------------- Generics with Interface
interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type numberTab = Tab<number>; // ... type of data here will be number
type stringTab = Tab<string>; // ... type of data here will be string
// ---------------------

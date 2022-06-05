//Types

let num: any = 6;

num = "hola";
num = {};
num = [];

//types in function

function sum(n1: number, n2: number): string {
  return (n1 + n2).toString();
}

sum(1, 3);

//Object
interface Person {
  name: string;
  lastname: string;
  years: number;
  active: boolean;
}

let person1: Person = {
  name: "Manuel",
  lastname: "Baella",
  years: 23,
  active: true,
};

let person2: Person = {
  name: "Manuel",
  lastname: "Baella",
  years: 23,
  active: false,
};

//Types
type MyList = [number?, string?, boolean?];

//Arrays
let arr: MyList = [];
arr.push(1);
arr.push("number");
arr.push(true);
arr = [1, "number", true];

// Class
class Observable<T> {
  constructor(public value: T) {
    //
  }
}

let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23);

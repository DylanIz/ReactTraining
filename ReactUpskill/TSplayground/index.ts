/*
type Person = {
  name: string;
};

const person: Person = {
  name: "dylan",
};

console.log(person.name);
*/

/*
function addOne(num: number) {
  return num + 1;
}

const res = addOne(4);
console.log(res);
*/

/*
const double = (num: number) => {
  return num * 2;
};

const res = double(15);

console.log(res);
*/

/*
const multiply = (x: number, y: number) => {
  return x * y;
};

const res = multiply(5, 5);

console.log(res);
*/

/*
const greet = (person: string = "Dylan") => {
  return `Hello ${person}`;
};

console.log(greet());

console.log(greet("John"));
*/

/*
const throwError = (msg: string): never => {
  throw new Error(msg);
};
*/

const infiniteLoop = (): never => {
  while (true) {}
};

let x: never;

const neverReturn = (): never => {
  while (true) {}
};

x = neverReturn();

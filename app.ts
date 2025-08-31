/* Basic types */

const a: number = 2;
const b: string = "Hello World";
const c: boolean = true;

/* Function types */

function add(a: number, b: number): number {
  return a + b;
};

const sub = (a: number, b: number): number => {
  return a - b;
};

const handleError = (errmsg: string): /*void*/ never => {
  throw new Error(errmsg);
};

const hero = ["thor", "spiderman", "ironman"];

const heroList = hero.map((hero): string => {
  return `hero is ${hero}`;
});

const num = [1, 2, 3];

const numSum = num.reduce((previous, next): number => {
  return previous + next;
});

// console.log(heroList);
// console.log(numSum);

const addSum: number = add(2, 2);
const subSum: number = sub(2, 2);
// console.log(addSum);
// console.log(subSum);

/* Object types */

const User = {
  name:"krish",
  age: 20,
  isAlive: true
};

function userInfo({name: string, isAlive: boolean}) {}; 
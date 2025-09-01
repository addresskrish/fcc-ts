/* Basic types */

const a: number = 2;
const b: string = "Hello World";
const c: boolean = true;

/* Function types */

function add(x: number, y: number): number {
  return x + y;
};

const sub = (x: number, y: number): number => {
  return x - y;
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
  userName:"krish",
  age: 20,
  isAlive: true
};

/* Type aliases */
type Pizza = {
  readonly _id: number,
  name: string,
  size: string,
  price: number,
  isAvailable?: boolean
}

const pizzaDetails = (pizza: Pizza): Pizza => {
  return pizza
}

const pizzaOrder = pizzaDetails ({
  _id: 121,
  name: "Margherita",
  size: "Medium",
  price: 245
})

console.log(pizzaOrder)

/* Array */

const superheros: string[] = ["krish", "robin"]
const powers: Array<number> = []

type Aura = {
  auraPoints: number,
  exp: number
}

const aura: Aura[] = [{auraPoints: 1/0, exp: 1/0}]

superheros.push("batman");
powers.push(1/0, 100, 500)
aura.push({
  auraPoints: 100,
  exp: 100
})
console.log(superheros);
console.log(powers);
console.log(aura);

/**
 * function hello(value: number[]): void {} or function hello(value: Array<number>): void {}
 * function hello(value: Readonlynumber[]): void {} or function hello(value: ReadonlyArray<number>): void {}
 * 
 * const a = [1, 2, 3]
 * 
 * hello(a)
 * 
 */

/* Union types */

let score: number | string | boolean = 22;
score = "22";
score = true;

const details = (id: number | string): void => {
  typeof id === "string" ? console.log(`id is str: ${id.toUpperCase()}`) : console.log(`id in num: ${id + 2}`);
}

details("krish");
details(4);

/* full array is either number or string */
/* const data: number[] | string[] = [1, 2, 3] or ["1", "2", "3"] */ 

/* for both we use parenthesis */
const data: (number | string)[] = ["1", "2", 3] /* let's go 🎉 */

/* some special diclaration */
let pi:3.14 = 3.14
let seatAllowtment: "aisle" | "middle" | "window" = "aisle";
/* seatAllowtment = "crew"; ❌ */ 

/* Tuples types */
/* for order of array for specific  api calls use this */
/* well we can overider the tuples using push, pop so its very buggy */
let tUser: [string,  number, boolean];
tUser = ["krish", 121, true]


/* Enums types */
enum seatChoice {
  AISLE,
  MIDDLE,
  WINDOW
}

const kcSeat = seatChoice.WINDOW

/* Interfaces types */

interface Admin {
  readonly _id: number,
  name: string,
  email: string,
  googleId?: string,
  startTrail(): string
  // startTrail: () => string
  getCoupon(couponname: string): number
}

const krish: Admin = 
{ _id: 1, 
  name: "krish", 
  email: "hello@krish.com",
  startTrail: () => {
    return "login sucessfully!"
  },
  getCoupon: (name: "krish100") => {
    return 1
  }
}
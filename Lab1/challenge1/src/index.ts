// INSTRUCTIONS:
// Replace unknown type with the correct type
let numberOfDishes: number = 50;

let favoriteSnack: string = "cake";

const ingredients: string[] = [ // or use Array<string> 
  "butter",
  "flour",
  "baking powder",
  "sugar",
  "eggs",
  "vanilla",
  "salt",
];

// The object is missing a value. Fill in the missing value with drinks of your choice.
const menu: {
  courses: number;
  veganOption: boolean;
  drinkChoices: string[];
} = {
  courses: 5,
  veganOption: true,
  drinkChoices: ["Health Potion", "Mana Potion", "Stamina Thing"] // added drink choices
};

const strawberry = {
  name: "Strawberry",
  color: "red",
  sweetness: 80,
};

// Correctly annotate this function parameter
function eatFruit(fruit: {name: string}): void { // adding type to the key(name) of the object(fruit)
  if (fruit.name === "Strawberry") {
    console.log("I love Strawberry!");
  }
  console.log("Fruit is very tasty.");
}

eatFruit(strawberry);

// Correctly annotate the fruitList and transformFunction parameters
function mapFruit(fruitList: string[], transformFunction: (fruitName: string) => string): string[] {
  return fruitList.map(fruit => transformFunction(fruit));
}

const fruitList = ["Apple", "Banana", "Orange"];

// Annotate the fruitName function parameter
function bakeFruit(fruitName: string): string {
  return `Baked ${fruitName}`;
}

const bakedFruit = mapFruit(fruitList, bakeFruit);

/*
// greetMe(name : string, callbackFn: (msg: string) => void )

  function greetMe(name, callback) {
    callback("Hello there" + name)
  }
  greetMe("John", (msg) => { console.log(msg) })

*/

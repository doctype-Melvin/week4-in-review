console.clear();
// Functions
function myFunction() {
  const coffee = 123;
  return coffee;
}
const myArrowFunction = (para) => "Good Morning " + para;

myFunction();
myArrowFunction("Calle");

// Loops
const importantNumbers = [1, 2, 3, 4, 5];
const knownNames = ["calle", "henni", "maks", "frank", "mona", "julia"];
const objectsArray = [
  {
    name: "Calle",
    hair_colors: ["purple", "brown", "blue"],
  },
  {
    name: "Melvin",
    hair_colors: ["brown"],
  },
];
//console.log(objectsArray[0].name);
//objectsArray.map((object) => console.log(object.name));
//console.log(knownNames[3]);

// while loop
// let i = 0;
// while (i < knownNames.length) {
//   console.log(`name #${i}`, knownNames[i]);
//   i++;
// }

// for loop
for (let i = 0; i < importantNumbers.length; i++) {
  // console.log(knownNames[i] + ` is a shark`);
  //console.log(importantNumbers[i] * 2);
}

// Callbacks
function higherOrderFunction(callback) {
  callback();
}

function passThisFunction() {
  console.log("Moin Moin Leude");
}

higherOrderFunction(passThisFunction);

function anotherHigherOrder(food, callback) {
  callback(food);
}

function logSomething(para) {
  console.log(`I love ${para}`);
}

anotherHigherOrder("cheeseburgers", logSomething);

function lastHigherFunction(drink, callback) {
  callback(drink);
}
//(argument1 = 'coffee', argument2 = () => ...)
lastHigherFunction("coffee", (arg) =>
  console.log(`Every morning I drink ${arg}`)
);

// Array Methods
const mappedArray = importantNumbers.map((item) => makeDouble(item));

function makeDouble(item) {
  if (item % 2 === 0) {
    console.log(item);
  }
}

//console.log(knownNames.length);
const filteredArray = knownNames.filter((name) => name.length < 5);
//console.log(filteredArray);
//console.log([]);

// Spread & Rest
// ...

//Spread
const myNewArray = [...knownNames, "coffee", ...importantNumbers, "clouds"];
//console.log(myNewArray);
const knownNamesCopy = [...knownNames];
//console.log(knownNamesCopy);

const spreadThisObject = {
  height: 190,
  width: 75,
  transparent: true,
};

const spreadToThisObject = {
  text: `Let's spread something`,
  ...knownNamesCopy,
  ...objectsArray,
  ...spreadThisObject,
};

//console.log(spreadToThisObject);
const sumThisArray = [1, 2, 3, 4, 5, 6];
function takesSomeArguments(...xNumberOfArguments) {
  //console.log(xNumberOfArguments);
  return xNumberOfArguments.reduce((total, nextValue) => total + nextValue);
}
const alpha = ["a", 66, "c", "d"];
//console.log(takesSomeArguments(2, 7, 8, 10, 256, 58));
//console.log(takesSomeArguments(...sumThisArray));
//console.log(takesSomeArguments(...alpha));

// Fetch
const apiUrL = "https://rickandmortyapi.com/api/character/";

// Create random number
const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// Write an async function - don't forget await, try and catch
async function getDataFromAPI(url, number) {
  // Try to get the data please
  try {
    const response = await fetch(`${url}${number()}`);
    if (!response.ok) {
      // If something went wrong - logging it is ok for now
      console.log(`Something went wrong`);
    } else {
      // If everything went well, return the data
      const data = await response.json();
      return data;
    }
  } catch (error) {
    // Catch any error - logging it is ok for now
    console.log(error.message);
  }
}

// This is where magic is born
const ourData = getDataFromAPI(apiUrL, randomNumber)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

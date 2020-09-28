//
// Object Destructuring
//
const person = {
  name: "Big Mike",
  age: 50,
  address: {
    city: "Boston",
    state: "Mass",
    temp: 80
  }
};

const { name, age } = person;
//
// Variables city and state are used below again
// in array destructuring
//
// const { city, state, temp } = person.address;

// console.log(`${name} is ${age}`);
// console.log(`${city} is in ${state} the temperature is ${temp}`);

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};
const { title, author } = book;
const { name: publisherName = "Self-Published" } = book.publisher;
console.log(`Thie title is: ${title}. The author is: ${author}`);
console.log(publisherName);

//
// Array Destructuring
//
const address = ["820 Blue Hill Ave.", "Boston", "Mass", "02121"];
// const [street, city, state, zip] = address;
const [, city, state] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [coffee, , medium] = item;

console.log(`A medium ${coffee} is ${medium}`);

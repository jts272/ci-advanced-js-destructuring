/**
 * To run this file in Gitpod, use the
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

// WITHOUT DESTRUCTURING
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
// console.log(john, mary, joe);

// WITH DESTRUCTURING
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
  mike: "designer",
  jill: "developer",
  alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
// assigns the first and second elements of the array; the rest are ignored

let [, , maryNative, , marySecondary] = languages;
console.log(maryNative, marySecondary);
// use commas to skip thru array elements!

let languages2 = {
  lang1: "english",
  lang2: "french",
  lang3: "german",
  lang4: "japanese",
};
let { lang1, lang3 } = languages2;
console.log(lang1, lang3);
// simply access with property names!

// Using rest parameter syntax
let fruits = ["apple", "orange", "mango", "pineapple", "cherry"];
let [fav, secondFav, ...others] = fruits;
console.log(fav, secondFav, others);

let favFoods = {
  jack: "pizza",
  james: "pasta",
  jill: "eggs",
  timmy: "soup",
};
let { jack, james, ...rest } = favFoods;
console.log(jack, james, rest);

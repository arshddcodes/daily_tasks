// function sum(a, b, c) {
//   let first = a + b;
//   let second = first - c;
//   console.log(second);
// }

// sum(4, 9, 3);

// function add(ar, a, b) {
//   let slice = ar.slice(a, b);
//   console.log(slice);
// }

// let array = [
//   "apple",
//   "banana",
//   "orange",
//   "mango",
//   "grapes",
//   "watermelon",
//   "pineapple",
//   "strawberry",
//   "kiwi"
// ];

// add(array, 3, 11);

const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  let b = 5;
  console.log("Inside function");
  console.log(x);
  console.log(b);
}

console.log("Outside function");
console.log(x);
console.log(b);

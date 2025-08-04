// for (let e = 1; e < 10; e++) {
//   console.log(e);
//   let a = 5;
//   console.log(*a);
// }

// multiplication table using for

// for (let number = 1; number <= 10; number++){
//     let a = 5;
//     let sum = number * a;
//     console.log(`${number} x ${a} = ${sum}`)
// }

// for (let number = 1; number <= 10; number++){
//     let a = 2;
//     let sum = number * a;
//     console.log(`${sum}`)
// }

// for (let number = 1; number <= 10; number++){
//     let div = number % 2;
//     if(div === 0){
//         console.log(number)
//     }
// }

// for (let number = 1; number <= 10; number++){
//     let div = number % 2;

//     if (div !== 0) {
//         console.log(number)

//     }

// }

// prime number

// for (let i= 2; i <= 10; i++){
//     let prime = true;
//     for (let j = 2; j  < i; j++) {
//     if (i % j === 0) {
//       prime = false;
//        break;
//     }
//   }

//   if(prime){
//     console.log(i);
//   }

// }

// for (let row = 0; row <= 4; row++) {
//   let output = "";
//   for (let j = 0; j <= 4; j++) {
//     output += "*";
//   }
//   console.log(output);
// }

// for (let row = 0; row <= 4; row++) {
//   let output = "";
//   for (let j = 0; j <= row; j++) {
//     output += "*";
//   }
//   console.log(output);
// }


for (let i = 4; i >= 0; i--) {
  let output = "";
  for (let j = 0; j <= i; j++) {
    output += "*";
  }
  console.log(output);
}



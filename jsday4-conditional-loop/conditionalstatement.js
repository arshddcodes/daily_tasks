let mark = 30;
if (mark >= 50) {
  console.log("you passed");
} else {
  console.log("you failed");
}

// else if

let grade = 90;
if (grade >= 80) {
  console.log("you have A Grade");
} else if (grade >= 60) {
  console.log("you have B Grade");
} else if (grade >= 40) {
  console.log("you have C Grade");
} else if (grade >= 20) {
  console.log("you have D Grade");
} else {
  console.log("you failed");
}

// switch
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Friday":
    console.log("End of the work week.");
    break;
  default:
    console.log("Mid-week or weekend.");
}

let hello = false;

let ternary = hello ? "Hello": "bye"

console.log("ternary : ", ternary);

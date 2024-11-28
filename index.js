"use strict";

// let temperature = 21;

// if (temperature < 0) {
//   console.log("Опасно холодно");
// } else if (temperature >= 0 && temperature < 5) {
//   console.log("Очень холодно");
// } else if (temperature >= 5 && temperature < 20) {
//   console.log("Прохладно");
// } else if (temperature > 20) {
//   console.log("Тепло");
// }

// let nominalPrice = 5020;

// if (nominalPrice > 1000) {
//   nominalPrice = nominalPrice * 0.95;
//   console.log(nominalPrice);
// } else if (nominalPrice > 5000) {
//   nominalPrice = nominalPrice - 0.9;
//   console.log(nominalPrice);
// } else {
//   console.log(nominalPrice);
// }

function checkAge(age) {
  if (age >= 18) {
    console.log("You are welcome!");
  } else {
    console.log("You are not allowed!");
  }
}

checkAge(2);
checkAge(22);
checkAge(0);
checkAge(-1);

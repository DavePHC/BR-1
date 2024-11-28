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

// function checkAge(age) {
//   if (age >= 18) {
//     console.log("You are welcome!");
//   } else {
//     console.log("You are not allowed!");
//   }
// }

// checkAge(2);
// checkAge(22);
// checkAge(0);
// checkAge(-0);

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// let browser = prompt('Какой браузер?');

// if (browser === 'Edge') {
//   alert( "You've got the Edge!" );
// } else if ( browser === 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }

// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//   case 0:
//     alert('Вы ввели число 0');
//     break
//   case 1:
//     alert('Вы ввели число 1');
//     break
//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break
//   default:
//     alert( 'Мимо' );
// }

// let counter = 1;

// while (counter < 20) {
//   console.log(counter);
//   counter++;
// }

// do {
//   console.log(counter);
//   counter++;
// } while (counter < 20);

// for (let i = 1; i < 20; i++) {
//   console.log(i);
// }

const phoneBook = {
  list: {
    'Andrey Pushkin': 228228228,
    'Alexey Bogdanov': 555555555,
    'Artem Rudakov': 66666666,
  },
  log() {
    console.log(this.list);
  }
}

function addContact (name, phone) {
  phoneBook.list[name] = phone;
}

function editContact (name, phone) {
  phoneBook.list[name] = phone;
}

function deleteContact (name) {
  delete phoneBook.list[name];
}

addContact("Alexey Hirilov", 891111111);

addContact("Nikita Denisov", 89666666);

editContact("Andrey Pushkin", 222222222);

deleteContact("Nikita Denisov");

phoneBook.log();
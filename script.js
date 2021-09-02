"use strict";

const bar = document.querySelector(".bar");
const queueSize = numberOfCustomers();

function numberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

const numbersArr = [5, 2, 3, 4, 13, 30, 32, 12, 19, 27, 31, 27, 22, 10, 11, 14, 3, 26, 28, 8, 23, 20, 30, 11, 32, 12, 19, 27, 31, 27, 22, 10, 11, 14, 3, 26, 28, 8, 3, 4];
console.log(numbersArr.length);
const iterator = numbersArr.values();

for (const value of iterator) {
  console.log(value);
  setTimeout(1000);
}

// changeHeight();

// function changeHeight() {
//   bar.style.height = number + "rem";
//   setTimeout(changeHeight, 1000);
// }

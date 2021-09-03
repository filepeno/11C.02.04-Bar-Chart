"use strict";

// const queueSize = numberOfCustomers();
let iterator;
let bar;

let valueAtIndex;
let maxIterations;
const numbersArr = [5, 2, 3, 4, 13, 30, 32, 12, 19, 27, 31, 27, 22, 10, 11, 14, 3, 26, 28, 8, 23, 20, 30, 11, 32, 12, 19, 27, 31, 27, 22, 10, 11, 14, 3, 26, 28, 8, 3, 4];

//calculate random numbers between 0 and 32
// function numberOfCustomers() {
//   return Math.floor(Math.random() * 32);
// }

init();

function init() {
  console.log("init()");
  iterator = 1;
  maxIterations = numbersArr.length;
  bar = document.querySelector("#bar" + iterator);
  console.log(bar);
  loopNumbersArr();
}

function loopNumbersArr() {
  console.log("loopNumbersArr()");
  valueAtIndex = numbersArr[iterator - 1];
  iterator++;
  bar = document.querySelector("#bar" + iterator);
  changeHeight();
  if (iterator < maxIterations) {
    setTimeout(loopNumbersArr, 1000);
  }
}

function changeHeight() {
  bar.style.height = valueAtIndex + "rem";
}

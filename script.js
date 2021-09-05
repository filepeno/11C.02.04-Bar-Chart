"use strict";
let iterator;
let bar = document.querySelector("#bar" + iterator);

let valueAtIndex;
let maxIterations;
const numbersArr = [5, 2, 3, 4, 13, 30, 32, 12, 19, 27, 31, 27, 22, 10, 11, 14, 3, 26, 28, 8, 23, 20, 30, 11, 32, 12, 19, 27, 31, 27, 22, 10, 11, 14, 3, 26, 28, 8, 3, 4];
let queueSize;

init();

function init() {
  console.log("init()");
  iterator = 1;
  maxIterations = numbersArr.length;
  loopNumbersArr();
}

function loopNumbersArr() {
  console.log("loopNumbersArr()");
  valueAtIndex = numbersArr[iterator - 1];
  iterator++;
  bar = document.querySelector("#bar" + iterator);
  changeHeight();
  if (iterator < maxIterations) {
    loopNumbersArr();
  } else {
    //delete first value in array
    numbersArr.shift([0]);
    //calculate random numbers between 0 and 32
    queueSize = Math.floor(Math.random() * 32);
    console.log(queueSize);
    //push the new value into array
    numbersArr.push(queueSize);
    console.log(numbersArr);
    setTimeout(init, 1000);
  }
}

function changeHeight() {
  console.log("changeHeight()");
  bar.style.height = valueAtIndex + "rem";
}

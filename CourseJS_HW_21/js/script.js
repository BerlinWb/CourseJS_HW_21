"use strict";

const mainFunction = (callback) => {
  const firstNumber = +prompt("Enter the number");
  const degreeNumber = +prompt("Indicate the degree");
  if (Number.isNaN(firstNumber) || Number.isNaN(degreeNumber) || firstNumber <= 1 || degreeNumber <= 1)  {
    return alert('Error');
  }
  callback(firstNumber, degreeNumber)
}

const exponentiation = (a, b) => {
  let result = Math.pow(a, b);
  alert(`Exponentiation: ${result}`)
}

const multiplay = (a, b) => {
  let result = a * b;
  alert(`Multiplay: ${result}`)
}

const division = (a, b) => {
  let result = a / b;
  alert(`Division: ${result}`)
}


const modulo = (a, b) => {
  let result = a % b;
  alert(`Modulo: ${result}`)
}

mainFunction(exponentiation);
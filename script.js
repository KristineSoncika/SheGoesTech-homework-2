let numOne = parseInt(prompt("Please enter a digit:"));
let numTwo = parseInt(prompt("Please enter another digit:"));
let operator = prompt(
  "Please enter one of the following arithmetical operations: + (addition), - (substraction), * (multiplication), or / (division)"
);

if (operator === "+") {
  let result1 = Math.round(numOne + numTwo);
  alert(`Here is the result: ${result1}`);
} else if (operator === "-") {
  let result2 = Math.round(numOne - numTwo);
  alert(`Here is the result: ${result2}`);
} else if (operator === "*") {
  let result3 = Math.round(numOne * numTwo);
  alert(`Here is the result: ${result3}`);
} else if (operator === "/") {
  let result4 = Math.round(numOne / numTwo);
  alert(`Here is the result: ${result4}`);
} else {
  alert(`The operation is not correct, try again!`);
}

#!/usr/bin/node
/*
  print a factorial
*/

function factorial (a) {
  if (a === 1 || isNaN(a)) {
    return 1;
  }
  return a * factorial(a - 1);
}

const args = process.argv;
console.log(factorial(parseInt(args[2])));

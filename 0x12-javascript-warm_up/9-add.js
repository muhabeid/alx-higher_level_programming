#!/usr/bin/node
/*
  print the addition of 2 integers
*/

function add (a, b) {
  return parseInt(a) + parseInt(b);
}

const args = process.argv;

console.log(add(args[2], args[3]));

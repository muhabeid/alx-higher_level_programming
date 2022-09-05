#!/usr/bin/node
/*
  print c is fun x times
*/
const args = process.argv;

if (!args[2]) {
  console.log('Missing number of occurrences');
} else {
  for (let times = args[2]; times > 0; times--) {
    console.log('C is fun');
  }
}

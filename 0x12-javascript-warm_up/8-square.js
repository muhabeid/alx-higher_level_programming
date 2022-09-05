#!/usr/bin/node
/*
  print a square
*/
const args = process.argv;

if (!parseInt(args[2])) {
  console.log('Missing size');
} else {
  for (let timesy = parseInt(args[2]); timesy > 0; timesy--) {
    let numX = '';
    for (let timesx = parseInt(args[2]); timesx > 0; timesx--) {
      numX += 'X';
    }
    console.log(numX);
  }
}

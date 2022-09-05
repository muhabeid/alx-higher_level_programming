#!/usr/bin/node
const args = process.argv;
const len = process.argv.length;
if (len <= 3) {
  console.log(0);
} else {
  const secondBig = args.sort(function (a, b) { return b - a; });
  console.log(secondBig[3]);
}

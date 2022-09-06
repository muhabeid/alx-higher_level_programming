#!/usr/bin/node
/*
    concats 2 files
*/

const fs = require('fs');
const file1 = process.argv[2];
const file2 = process.argv[3];
const file3 = process.argv[4];
// Asynchronous read
function readfiles (nameFile) {
  return fs.readFileSync(nameFile);
}

function writefiles (nameFile, data) {
  fs.writeFile(nameFile, data, (err) => {
    if (err) {
      return console.error(err);
    }
  });
}
let dataFile = '';
dataFile = readfiles(file1);
dataFile += readfiles(file2);
writefiles(file3, dataFile);

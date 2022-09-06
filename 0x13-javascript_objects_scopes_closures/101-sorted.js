#!/usr/bin/node
/*
     imports a dictionary of occurrences by user id and
     computes a dictionary of user ids by occurrence.
*/
const dict = require('./101-data').dict;

const newDict = {};
for (const obj in dict) {
  if (newDict[dict[obj]]) {
    newDict[dict[obj]] = newDict[dict[obj]].concat([obj]);
  } else {
    newDict[dict[obj]] = [obj];
  }
}
console.log(newDict);

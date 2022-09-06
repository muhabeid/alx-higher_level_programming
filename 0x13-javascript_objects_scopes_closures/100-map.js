#!/usr/bin/node
/*
     imports an array and computes a new array
*/
const list = require('./100-data').list;

const newList = list.map((element, index) => element * index);
console.log(list);
console.log(newList);

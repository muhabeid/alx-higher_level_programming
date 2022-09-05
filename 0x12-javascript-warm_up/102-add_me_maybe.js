#!/usr/bin/node
/*
   increments and calls a function
*/

const addMeMaybe = function (number, theFunction) {
  theFunction(++number);
};

exports.addMeMaybe = addMeMaybe;

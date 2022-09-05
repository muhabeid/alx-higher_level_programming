#!/usr/bin/node
/*
  executes x times a function
*/

const callMeMoby = function (x, theFunction) {
  for (let times = x; times > 0; times--) {
    theFunction();
  }
};

exports.callMeMoby = callMeMoby;

#!/usr/bin/node
/*
    Class 2 init arg if are int and > 0
    create a print method
*/

class Rectangle {
  constructor (w, h) {
    if (Number.isInteger(w) && Number.isInteger(h) && w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let height = 0; height < this.height; height++) {
      console.log('X'.repeat(this.width));
    }
  }
}

module.exports = Rectangle;

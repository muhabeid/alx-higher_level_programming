#!/usr/bin/node
/*
    Class 2 init arg if are int and > 0
*/

class Rectangle {
  constructor (w, h) {
    if (Number.isInteger(w) && Number.isInteger(h) && w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }
}

module.exports = Rectangle;

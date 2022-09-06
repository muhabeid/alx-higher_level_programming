#!/usr/bin/node
/*
    Class 2 init arg if are int and > 0
    create a print method
    create a double method
    create a rotate method
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

  rotate () {
    const holder = this.height;
    this.height = this.width;
    this.width = holder;
  }

  double () {
    this.height = this.height * 2;
    this.width = this.width * 2;
  }
}

module.exports = Rectangle;

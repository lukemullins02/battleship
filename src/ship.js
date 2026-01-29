class Ship {
  constructor(len) {
    len = this.len;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    if (this.hits === this.len) {
      this.sunk = true;
    }
  }
}

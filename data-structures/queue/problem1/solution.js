class MyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  push(value) {
    const length = this.first.length;

    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }

    this.last.push(value);

    return this;
  }

  pop() {
    const length = this.last.length;

    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }

    return this.first.pop();
  }

  peek() {
    if (this.first.length > 0) {
      return this.first[this.first.length - 1];
    }

    return this.last[0];
  }

  empty() {
    return !this.first.length && !this.last.length;
  }
}

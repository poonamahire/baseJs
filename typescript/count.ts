import { Component, Input, Output, EventEmitter } from '@typescript/counter';

Component({
  selector: 'custom-counter',
  template: `
    <button (click)="decrement()">-</button>
    <span>{{counter}}</span>
    <button (click)="increment()">+</button>
  `
})
export class count {
 counterValue = 0;
 counterChange = new EventEmitter();


  get count() {
    return this.counterValue;
  }

  set count(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }

  decrement() {
    this.count--;
  }

  increment() {
    this.count++;
  }
}
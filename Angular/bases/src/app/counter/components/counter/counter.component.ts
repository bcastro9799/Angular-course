import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetValue(10)">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent implements OnInit {
  public counter: number = 10;
  constructor() {}

  ngOnInit() {}
  increaseBy(value: number): void {
    this.counter += value;
  }
  resetValue(value: number): void {
    this.counter = value;
  }
}

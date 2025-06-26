import { Component, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals-learn',
  imports: [],
  templateUrl: './signals-learn.html',
  styleUrl: './signals-learn.css'
})
export class SignalsLearn {
  counter = signal(0)

  WritableCounter : WritableSignal<number> = signal(0)

  counterSignal : Signal<number> = signal(1)

  constructor() {
    this.counter = signal(1)
  }
  updateCounter(n : number ) {
   this.counter.set(2)
  }

  // cannot use this.counter = signal(2) as it is a readonly signal
  incrementReadableCounter() {
    this.counterSignal = signal(this.counterSignal() + 1)
  }
}

import { Component, effect, signal, Signal, WritableSignal } from '@angular/core';

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

    incrementReadableCounter() {
    this.WritableCounter.update(i => i + 1)
   }

  constructor() {
    this.counter = signal(1)
    effect(() =>console.log("The value of counter changed: "+this.WritableCounter()))
  }
  
  updateCounter(n : number ) {
   this.counter.set(n)
  }
  
  // cannot use this.counter = signal(2) as it is a readonly signal
  // updateCounter2(n : number ) {
  //  this.counterSignal.set(n)
  // }
}
  

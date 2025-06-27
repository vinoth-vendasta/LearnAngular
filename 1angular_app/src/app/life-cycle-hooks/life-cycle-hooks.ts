import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  imports: [],
  templateUrl: './life-cycle-hooks.html',
  styleUrl: './life-cycle-hooks.css'
})
export class LifeCycleHooks implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {
    console.log("Constructor called")
  }
  ngOnChanges(changes: SimpleChanges): void {
    //used for component input property
    console.log("1. ngOnChanges called")
  }
  ngOnInit(): void {
    //used for API calls
    console.log("2. ngOnChanges called")
  }
  ngDoCheck(): void {
    //called for every change detection occurs
    console.log("3. ngDoCheck called")
  }
  ngAfterContentInit(): void {
    // use when ng content or child content been initialized
    console.log("4. ngAfterContentInit called")
  }
  ngAfterContentChecked(): void {
    // called when child content or ng content been checked
    console.log("5. ngAfterContentCheck called")
  }
  ngAfterViewInit(): void {
    // called after the components view Initialized
    console.log("6. ngAfterViewInit called")
  }
  ngAfterViewChecked(): void {
    // called after the components view Checked
    console.log("7. ngAfterViewCheck called")
  }
  ngOnDestroy(): void {
    // called when the component destroyed
    console.log("8. ngOnDestroy called")
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-learndirectives',
  imports: [CommonModule],
  templateUrl: './learndirectives.html',
  styleUrl: './learndirectives.css'
})
export class Learndirectives {
  isChecked : boolean = false
  
  onClick() {
    this.isChecked = !this.isChecked
  }

  customers : any[] = [
    {name: 'vinoth', email: 'demo@gmail.com', age : 4},
    {name: 'dhanushh', email: 'dhanu@gmail.com', age : 3},
    {name: 'kavin', email: 'kavi@gmail.com', age : 2},
  ]

  grade : number = 0
  set(i : number) {
    this.grade = i
  }

  textColor : string = "text"
  onClickColorChange() {
    this.textColor = "textRed"
  }
  newtextColor : string = "blue"
  onnewClickColorChange() {
    this.newtextColor = this.newtextColor == "blue" ? "green" : "red"
  }

}

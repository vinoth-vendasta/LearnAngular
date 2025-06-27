import { CommonModule, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomPipePipe } from '../custom-pipe-pipe';

@Component({
  selector: 'app-pipes',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, SlicePipe, DatePipe, JsonPipe, DecimalPipe, CommonModule, CustomPipePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {

  content: string = "This is the content"
  curr_date: Date = new Date()

  array: number[] = [1, 2, 3, 4, 5]

  users: any[] = [
    { name: "vinoth", age: 21 },
    { name: "dhanush", age: 19 },
  ]
  usersData = {
    username: "vinoth-vedasta",
    password: "pass#123"
  }

  //items: string[] = ['Apple', 'Orange', 'Mango']
  items = of(['Apple', 'Orange', 'Mango'])

  mobileNumber: any = "9385562690"
}

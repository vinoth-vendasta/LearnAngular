import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
  apiData: any[] = []
  constructor(private _http: HttpClient) {
    console.log("cards constructor called");
    this._http.get("https://jsonplaceholder.typicode.com/users").subscribe(res => {
      this.apiData = res as any[];
      console.log(this.apiData);
    })
  }
}

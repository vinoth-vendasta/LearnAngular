import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedData {
  API_URL = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get(this.API_URL);
  }
}

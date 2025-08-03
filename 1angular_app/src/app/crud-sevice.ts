import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iusers } from './iusers';

@Injectable({
  providedIn: 'root'
})
export class CrudSevice {
  base_url: string = "http://localhost:3000/users"

  constructor(private _http: HttpClient) { }

  getUserData() {
    return this._http.get<Iusers>(this.base_url)
  }
}

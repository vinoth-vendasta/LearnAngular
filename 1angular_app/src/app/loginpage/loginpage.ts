import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  imports: [RouterLink],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css'
})
export class Loginpage {

  constructor(private router: Router) { }
  loginData() {
    //user verification successfull
    alert("User Authenticated Successfully")
    // this.router.navigateByUrl("/cards")
    this.router.navigate(["cards"])
  }
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css'
})
export class TemplateDrivenForm {
  uname: string = ""
  pass: string = ""
  userObject: User = {
    username: "",
    email: "",
    password: "",
    isChecked: false
  };

  onSubmit(userForm: NgForm) {
    console.log(userForm.value)
    alert("User form Submitted");
    userForm.reset();
  }
}

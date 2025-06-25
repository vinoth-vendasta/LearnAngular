import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { Learndirectives } from './learndirectives/learndirectives';

@Component({
  selector: 'app-root',
  imports: [Learndirectives],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '1angular_app';
}

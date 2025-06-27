import { SignalsLearn } from './signals-learn/signals-learn';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { Learndirectives } from './learndirectives/learndirectives';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '1angular_app';
}

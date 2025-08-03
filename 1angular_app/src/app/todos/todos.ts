import { Component, OnInit } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos {
  constructor() { }
}


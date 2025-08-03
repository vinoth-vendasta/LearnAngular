import { Component, OnInit } from '@angular/core';
import { CrudSevice } from '../crud-sevice';
import { Iusers } from '../iusers';

@Component({
  selector: 'app-crud-com',
  imports: [],
  templateUrl: './crud-com.html',
  styleUrl: './crud-com.css'
})
export class CrudCom implements OnInit {

  apiData: Iusers[] = []
  constructor(private crudSer: CrudSevice) { }

  ngOnInit(): void {
    this.getAllData()
  }
  getAllData() {
    this.crudSer.getUserData().subscribe(res => {
      this.apiData = Array.isArray(res) ? res : [res]
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { faSearch, faPencilAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  faSearch = faSearch;
  faPencil = faPencilAlt;
  faEye = faEye;
  faTrash = faTrashAlt;

  employees : Employee[] = [];

  constructor() {
    this.employees = [
      {
        'name': 'Juan',
        'age': 31,
        'username': 'juanperez',
        'hireDate': 'Thu Oct 02 1986 00:00:00'
      },
      {
        'name': 'Juliana',
        'age': 32,
        'username': 'jsantana',
        'hireDate': 'Wed Mar 26 1986 00:00:00'
      }
    ];
   }

  ngOnInit() {
  }

}

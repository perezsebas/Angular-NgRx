import { Component, OnInit } from '@angular/core';
import { faSearch, faPencilAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Employee } from '../../models/employee';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../models/app-state';
import * as employeeActions from './../../actions/employee.actions';

@Component({
  selector: 'app-employees',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  faSearch = faSearch;
  faPencil = faPencilAlt;
  faEye = faEye;
  faTrash = faTrashAlt;

  employees : Employee[] = [];

  employees$: Observable<any>;

  constructor(
    private store: Store<AppState>
  ) {

    this.employees$ = this.store.select(state => state.employees);

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
    this.getEmployees();
  }

  getEmployees(){
    this.store.dispatch(new employeeActions.LoadEmployeesAction())
  }

}

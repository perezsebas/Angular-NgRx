import { Component, OnInit } from '@angular/core';
import { faSearch, faPencilAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Employee } from '../../models/employee';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../models/app-state';
import * as employeeActions from './../../actions/employee.actions';
import { AngularFirestore } from 'angularfire2/firestore';

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

  public employees : Observable<any[]>

  employees$: Observable<any>;

  constructor(
    private store: Store<AppState>,
    public db: AngularFirestore
  ) {

    this.employees$ = this.store.select(state => state.employees);

    this.employees = db.collection('/employees').valueChanges();
   }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.store.dispatch(new employeeActions.LoadEmployeesAction())
  }

}

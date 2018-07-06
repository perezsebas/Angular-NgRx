import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faSearch, faPencilAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { Employee } from '../../models/employee';
import { AppState } from '../../models/app-state';

import { Store } from '@ngrx/store';
import * as employeeActions from './../../actions/employee.actions';

import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


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

  employeesCollectionRef: AngularFirestoreCollection<Employee>;
  employees$: Observable<Employee[]>;

  subscription;

  constructor(
    private store: Store<AppState>,
    public db: AngularFirestore,
    private router: Router) {

    this.employeesCollectionRef = this.db.collection<Employee>('/employees');
  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employees$ = this.employeesCollectionRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Employee;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      })
    )

    this.setStoreValues();
  }

  setStoreValues() {
    this.employees$.pipe(first()).subscribe(employee => {
      this.store.dispatch(new employeeActions.LoadEmployeesAction(employee));
    });  
  }

  deleteEmployee(employee: Employee) {
    this.employeesCollectionRef.doc(employee.id).delete();
    this.store.dispatch(new employeeActions.DeleteEmployeeAction(employee.id));
  }

  goToNewEmployeeComponent(view: string, employeeId: string) {
    this.router.navigate([`/new-employee/${view}/${employeeId}`]);
  }

}

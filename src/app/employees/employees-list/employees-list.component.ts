import { Component, OnInit } from '@angular/core';
import { faSearch, faPencilAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Employee } from '../../models/employee';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from '../../models/app-state';
import * as employeeActions from './../../actions/employee.actions';
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
  employees$: Observable<Employee[]>

  // employees$: Observable<any>;

  constructor(
    private store: Store<AppState>,
    public db: AngularFirestore
  ) {

    // this.employees$ = this.store.select(state => state.employees);
    this.employeesCollectionRef = this.db.collection<Employee>('/employees');
    this.employees$ = this.employeesCollectionRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Employee;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      })
    )
  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.store.dispatch(new employeeActions.LoadEmployeesAction());
  }

}

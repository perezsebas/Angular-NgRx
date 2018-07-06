import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { faChevronLeft, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { Employee } from '../../models/employee';
import { AppState } from '../../models/app-state';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

import { NewEmployeeService } from './new-employee.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Store } from '@ngrx/store';
import * as employeeActions from './../../actions/employee.actions';


@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faCalendar = faCalendarAlt;

  countries: any = [];
  employeesCollectionRef: AngularFirestoreCollection<Employee>;
  employeeForm: FormGroup;
  employeeSelected: Employee;
  employees;
  formDisabled: boolean = false;

  datePattern = "^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$";

  constructor(
    private NewEmployeeService: NewEmployeeService,
    private store: Store<AppState>,
    public db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router) {

    this.employeesCollectionRef = this.db.collection<Employee>('/employees');
  }

  ngOnInit() {
    this.getParams();
    this.getCountries();
  }

  getParams() {
    this.route.params.subscribe(params => {

      if (params.action === 'view') {
        this.formDisabled = true;
      } 

      this.createForm();

      console.log(params);
      if (params.actions === 'new') {
        this.employeeForm.patchValue({ status: 'Active' });
      } else {

        this.employees = this.getValuesFromStore();
        this.employees.states.employees.forEach(element => {
          if (element.id === params.id) {
            this.employeeSelected = element;
          }
        });
        console.log(this.employeeSelected);
        if (this.employeeSelected !== undefined) {
          this.setFormValues(this.employeeSelected);
        }
      }
    });
  }

  createForm() {
    this.employeeForm = new FormGroup({
      area: new FormControl({ value: '', disabled: this.formDisabled }, Validators.required),
      country: new FormControl({ value: '0', disabled: this.formDisabled }, Validators.required),
      dob: new FormControl({ value: '', disabled: this.formDisabled }, [Validators.required, Validators.pattern(this.datePattern)]),
      hireDate: new FormControl({ value: '', disabled: this.formDisabled }, Validators.required),
      jobTitle: new FormControl({ value: '0', disabled: this.formDisabled }, Validators.required),
      name: new FormControl({ value: 'hola', disabled: this.formDisabled }, Validators.required),
      status: new FormControl({ value: '', disabled: this.formDisabled }, Validators.required),
      tipRate: new FormControl({ value: '', disabled: this.formDisabled }, Validators.required),
      username: new FormControl({ value: '', disabled: this.formDisabled }, Validators.required)
    });
    console.log(this.employeeForm);
  }

  getCountries() {
    this.NewEmployeeService.getCountries()
      .subscribe(res => {
        this.countries = res.json();
      });
  }

  getValuesFromStore() {
    let storeState;
    this.store.subscribe(state => {
      console.log(state);
      storeState = state;
    }).unsubscribe;
    return storeState;
  }

  setFormValues(employeeSelected: Employee) {
    console.log(employeeSelected);
    this.employeeForm.patchValue({
      area: employeeSelected.area,
      country: employeeSelected.country,
      dob: employeeSelected.dob,
      hireDate: employeeSelected.hireDate,
      jobTitle: employeeSelected.jobTitle,
      name: employeeSelected.name,
      status: employeeSelected ? 'Active' : 'Inactive',
      tipRate: employeeSelected.tipRate,
      username: employeeSelected.username
    });

  }

  addEmployee(newEmployee: Employee) {
    this.employeesCollectionRef.add(newEmployee);
    // this.store.dispatch(new employeeActions.AddEmployeeAction(newEmployee));
    this.goToEmployeesComponent();
  }

  updateEmployee(employee: Employee) {
    this.employeesCollectionRef.doc(employee.id).update({});
    // this.store.dispatch(new employeeActions.EditEmployeeAction(employee));
  }

  goToEmployeesComponent() {
    this.router.navigate(['/employees']);
  }
}

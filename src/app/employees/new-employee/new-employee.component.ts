import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Employee } from '../../models/employee';
import { AppState } from '../../models/app-state';

import { Observable } from 'rxjs';

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

  countries: any = [];

  employeesCollectionRef: AngularFirestoreCollection<Employee>;

  employeeForm: FormGroup;

  constructor(
    private NewEmployeeService: NewEmployeeService,
    private store: Store<AppState>,
    public db: AngularFirestore,
    private fb: FormBuilder) {

    this.employeesCollectionRef = this.db.collection<Employee>('/employees');

    this.createForm();
  }

  createForm() {
    this.employeeForm = this.fb.group({
      area: ['', Validators.required],
      country: ['', Validators.required],
      dab: ['', Validators.required],
      hireDate: ['', Validators.required],
      jobTitle: ['', Validators.required],
      name: ['', Validators.required],
      status: ['', Validators.required],
      tipRate: ['', Validators.required],
      username: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getCountries();
    this.addUSer();
  }

  getCountries() {
    this.NewEmployeeService.getCountries()
      .subscribe(res => {
        this.countries = res.json();
      });
  }

  addUSer() {
    this.employeesCollectionRef.add({
      "area": "Services",
      "country": "Colombia",
      "dob": "Thu Oct 02 1986 00:00:00",
      "hireDate": "Thu Oct 02 1986 00:00:00",
      "jobTitle": "Manager",
      "name": "User",
      "status": true,
      "tipRate": 0.1,
      "username": "user"
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { NewEmployeeService } from './new-employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  faChevronLeft = faChevronLeft;

  countries: any = [];

  constructor(private NewEmployeeService: NewEmployeeService) {
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.NewEmployeeService.getCountries()
      .subscribe(res => {
        this.countries = res.json();
      });
  }
  
}

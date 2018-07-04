import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Http } from '@angular/http';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  CountriesUrl:string = 'https://restcountries.eu/rest/v2/all';
  countries: any = [];

  constructor(
    private http: Http
  ) { 
    this.getCountries();
  }

  ngOnInit() {
  }

  getCountries(){
    this.http.get(this.CountriesUrl)
    .subscribe(res => {
      this.countries = res.json();
    });
  }
}

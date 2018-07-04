import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class NewEmployeeService {
  countriesUrl: string = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: Http) { }

  getCountries() {
    return this.http.get(this.countriesUrl);
  }

}

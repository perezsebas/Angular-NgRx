import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

import { AppRoutingModule } from './app.routes';
import { HttpModule } from '@angular/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './reducers/employee.reducer';
// import { EffectsModule } from '@ngrx/effects';
// import { EmployeeEffects } from './effects/employee.effects';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    NewEmployeeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase, 'TeamInt'),
    AngularFirestoreModule,
    StoreModule.forRoot({ employees: employeeReducer })
    // EffectsModule.

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

import { AppRoutingModule } from './app.routes';
import { HttpModule } from '@angular/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './reducers/employee.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './effects/employee.effects';

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
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'TeamInt'),
    AngularFirestoreModule,
    // AngularFirestoreModule.enablePersistence(),
    StoreModule.forRoot({ states: employeeReducer }),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    EffectsModule.forRoot([EmployeeEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

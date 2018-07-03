import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'employees', component: EmployeesComponent },
    { path: 'new-employee', component: NewEmployeeComponent },
    { path: 'new-employee/:id', component: NewEmployeeComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            // { enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }

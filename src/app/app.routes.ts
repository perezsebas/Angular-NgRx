import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'employees', component: EmployeesListComponent },
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

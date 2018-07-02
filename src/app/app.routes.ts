import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';

export const routes: Routes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'employees', component: EmployeesComponent }
];

export const routing = RouterModule.forRoot(
    routes,
    // { enableTracing: true }
);

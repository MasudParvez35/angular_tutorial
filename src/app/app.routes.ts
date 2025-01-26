import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
    { path: '', redirectTo: '/emp-list', pathMatch: 'full'},
    { path: 'emp-details/:id', component: EmployeeDetailsComponent },
    { path: 'emp-list', component: EmployeeListComponent },
    { path: 'add-emp', component: AddEmployeeComponent },
    { path: 'data-binding', component: DataBindingComponent },
    {path: 'login', component: LoginComponent},
    {path: 'sign-up', component: SignUpComponent}
];

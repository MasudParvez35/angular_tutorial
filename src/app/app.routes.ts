import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

export const routes: Routes = [
    {
        path: 'add-emp',
        component: AddEmployeeComponent
    },
    {
        path: 'emp-list',
        component: EmployeeListComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    }
];

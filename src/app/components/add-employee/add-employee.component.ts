import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, HttpClientModule], 
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employee: Employee = {
    id: 0,
    name: '',
    gender: '',
    age: 0
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  onSubmit() {
    this.employeeService.addEmployee(this.employee).subscribe(
      (response) => {
        console.log('Employee added successfully', response);
        alert('Employee added successfully!');
        this.router.navigate(['/emp-list']);
      },
      (error) => {
        console.error('Error:', error);
        alert('Failed to add employee.');
      }
    );
  }
}

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: any[] = [];
  errorMessage: string = '';
  selectedEmployee: any = null;

  private getAllEmployees = 'https://localhost:7155/api/Employee/GetEmployees';

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.getEmployees().subscribe(
      (data: any[]) => {
        this.employees = data;
      },
      (error: any) => {
        this.errorMessage = 'Could not load smployees.';
        console.error('Error fetching smployees:', error);
      }
    );
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.getAllEmployees);
  }

  // Fetch smployee details by ID
  viewDetails(id: number): void {
    this.router.navigate(['/emp-details', id]);
  }
}

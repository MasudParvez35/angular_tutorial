import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any = null;
  errorMessage: string = '';
  private employeeDetailsUrl = 'https://localhost:7155/api/Employee/GetEmployeeById';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Retrieve the 'id' parameter from the route
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.errorMessage = 'Invalid employee ID.';
      return;
    }

    // Fetch employee details by ID
    this.getEmployeeById(id).subscribe(
      (employee: any) => {
        this.employee = employee;
      },
      (error: any) => {
        this.errorMessage = 'Could not load employee details.';
        console.error('Error fetching employee details:', error);
      }
    );
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.employeeDetailsUrl}/${id}`);
  }

  goBack(): void {
    // this.router.navigate(['/emp-list']);
    this.router.navigateByUrl('/emp-list');
  }
}

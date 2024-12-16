import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  students: any[] = [];
  errorMessage: string = '';

  private apiUrl = 'https://localhost:7155/api/Student/GetStudents';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.getStudents().subscribe(
      (data:any) => {
        this.students = data;
      },
      (error:any) => {
        this.errorMessage = 'Could not load students.';
        console.error('Error fetching students:', error);
      }
    );
  }
  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

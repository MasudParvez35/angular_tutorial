import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
}) 
export class DataBindingComponent {

  courseName: string = 'Angular';
  stateName: string = 'Khulna';
  rollNo: number = 1528;
  isDisabled: boolean = true;
  currentDate : Date = new Date();
  inputType: string = 'checkbox';
  myClassName : string = 'bg-primary';

  constructor() { 
    //this.courseName = 'Angular 18';
  }

  changeCourseName() {
    this.courseName = 'DotNet 8';
  }

  showAlert(message: string) {
    alert(message);
    //this.courseName = 'React';
  }
}

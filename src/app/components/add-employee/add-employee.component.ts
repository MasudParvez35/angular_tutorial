import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  visiable : boolean = true;
  div1 : boolean = true;
  div2 : boolean = true;
  num1: string = '';
  num2: string = '';

  showDiv1() {
    this.visiable = true;
  }

  showDiv2() {
    this.visiable = false;
  }

  hideDiv1() {
    this.div1 = true;
    this.div2 = false;
  }
  hideDiv2() {
    this.div1 = false;
    this.div2 = true;
  }
}

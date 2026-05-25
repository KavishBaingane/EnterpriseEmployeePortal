import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-add-employee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee-form.html',
  styleUrl: './add-employee-form.css'
})
export class AddEmployeeFormComponent {
  @Output() addEmployee = new EventEmitter<Employee>();

  employee: Employee = {
    id: 0,
    name: '',
    designation: '',
    department: '',
    departmentColor: '#2563eb',
    salary: 0,
    isActive: true,
    profileImageUrl: '',
    joiningDate: new Date().toISOString().slice(0, 10),
    promoted: false
  };

  submitForm() {

    const newEmployee = {
      ...this.employee,
      id: Date.now()
    };

    this.addEmployee.emit(newEmployee);

    this.employee = {
      id: 0,
      name: '',
      designation: '',
      department: '',
      departmentColor: '#2563eb',
      salary: 0,
      isActive: true,
      profileImageUrl: '',
      joiningDate: new Date().toISOString().slice(0, 10),
      promoted: false
    };
  }
}

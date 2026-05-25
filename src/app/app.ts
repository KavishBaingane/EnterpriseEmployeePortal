import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employees/services/employee.service';
import { Employee } from './models/employee.model';
import { AddEmployeeFormComponent } from "./features/employees/add-employee-form/add-employee-form";
import { EmployeeCardComponent } from "./features/employees/employee-card/employee-card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddEmployeeFormComponent, EmployeeCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

  employeeService = inject(EmployeeService);
  employees = this.employeeService.employees;

  totalEmployees = this.employeeService.totalEmployees;
  totalSalary = this.employeeService.totalSalary;

  addEmployee(employee: Employee) {
    this.employeeService.addEmployee(employee);
  }

  removeEmployee(employeeId: number) {
    const updated = this.employees().filter(emp=>emp.id !== employeeId);
    this.employeeService.employees.set(updated);
  }
}
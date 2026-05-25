import { computed, Injectable, signal } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  employees = signal<Employee[]>([
    {
      id: 1,
      name: 'Kavish Sharma',
      designation: 'Software Engineer',
      department: 'Engineering',
      departmentColor: '#2563eb',
      salary: 80000,
      isActive: true,
      profileImageUrl: 'https://i.pravatar.cc/150?img=12',
      joiningDate: '2022-03-15',
      promoted: false
    },
    {
      id: 2,
      name: 'Rahul Verma',
      designation: 'Team Lead',
      department: 'Engineering',
      departmentColor: '#2563eb',
      salary: 120000,
      isActive: true,
      profileImageUrl: 'https://i.pravatar.cc/150?img=32',
      joiningDate: '2020-08-01',
      promoted: true
    },
    {
      id: 3,
      name: 'Priya Mehta',
      designation: 'HR Manager',
      department: 'Human Resources',
      departmentColor: '#7c3aed',
      salary: 95000,
      isActive: false,
      profileImageUrl: 'https://i.pravatar.cc/150?img=47',
      joiningDate: '2019-11-20',
      promoted: true
    },
    {
      id: 4,
      name: 'Anita Rao',
      designation: 'Product Designer',
      department: 'Design',
      departmentColor: '#ec4899',
      salary: 98000,
      isActive: true,
      profileImageUrl: 'https://i.pravatar.cc/150?img=5',
      joiningDate: '2021-02-10',
      promoted: false
    },
    {
      id: 5,
      name: 'Nikhil Kapoor',
      designation: 'Sales Executive',
      department: 'Sales',
      departmentColor: '#f59e0b',
      salary: 76000,
      isActive: true,
      profileImageUrl: 'https://i.pravatar.cc/150?img=14',
      joiningDate: '2023-06-06',
      promoted: false
    },
    {
      id: 6,
      name: 'Sara Joseph',
      designation: 'Finance Analyst',
      department: 'Finance',
      departmentColor: '#10b981',
      salary: 104000,
      isActive: true,
      profileImageUrl: 'https://i.pravatar.cc/150?img=27',
      joiningDate: '2018-09-09',
      promoted: true
    }
  ]);

  addEmployee(employee: Employee) {
    this.employees.update(employees => [...employees, employee]);
  }

  totalEmployees = computed(()=> this.employees().length);
  
  totalSalary = computed(()=>
  this.employees().reduce((sum,emp)=>sum+emp.salary,0)
  );

}

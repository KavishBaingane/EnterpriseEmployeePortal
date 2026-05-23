import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },

    {
        path: 'dashboard',
        loadComponent: () =>
            import('./features/dashboard/dashboard/dashboard')
                .then(m => m.Dashboard)
    },

    {
        path: 'employees',
        loadComponent: () =>
            import('./features/employees/employee-list/employee-list')
                .then(m => m.EmployeeList)
    },

    {
        path: 'department',
        loadComponent: () =>
            import('./features/department/department/department')
                .then(m => m.Department)
    }
];
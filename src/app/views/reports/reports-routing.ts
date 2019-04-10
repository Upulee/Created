import { Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';

export const ReportsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'reports',
                component: ReportsComponent,
                data: { title: 'Reports' }
            }
        ]
    }
];

import { Routes } from '@angular/router';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';

export const DashboardRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboards',
                component: DashboardComponentComponent,
                data: { title: 'dashboard' }
            }
        ]
    }
];

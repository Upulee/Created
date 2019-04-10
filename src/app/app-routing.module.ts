import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';
import { DashboardComponentComponent } from './views/dashboard-component/dashboard-component/dashboard-component.component';
import { FundsTransferComponent } from './views/funds-transfer/funds-transfer/funds-transfer.component';
import { ReportsComponent } from './views/reports/reports/reports.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sessions/signin',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: './views/sessions/sessions.module#SessionsModule',
        data: { title: 'Session' }
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'profile',
        loadChildren: './views/profile/profile.module#ProfileModule',
        data: { title: 'Profile' }
      },
      {
        path: 'dashboard',
        // loadChildren: './views/dashboard-component/dashboard-component.module#DashboardModule',
        // data: { title: 'dashboard' }
       component: DashboardComponentComponent
      },
      {
        path: 'reports',
        // loadChildren: './views/reports/reports.module#ReportsModule',
        // data: { title: 'Reports' }
        component: ReportsComponent
      },
      {
        path: 'funds-transfer',
        // loadChildren: './views/funds-transfer/funds-transfer.module#FundsTransferModule',
        // data: { title: 'FundsTransfer' }
       component: FundsTransferComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

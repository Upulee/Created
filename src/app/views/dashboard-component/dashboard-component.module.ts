import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatProgressBarModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardRoutes } from './dashboard-component-routing';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    FlexLayoutModule,
    MatSelectModule,
    MatSnackBarModule,
    RouterModule.forChild(DashboardRoutes)
  ]
})
export class DashboardModule {



}

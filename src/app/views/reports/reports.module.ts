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
import { ReportsRoutes } from './reports-routing';
import { ReportsComponent } from './reports/reports.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReportsComponent],
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
    RouterModule.forChild(ReportsRoutes)
  ]
})
export class ReportsModule { }

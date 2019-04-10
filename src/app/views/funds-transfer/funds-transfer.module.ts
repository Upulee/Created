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
import { FundsTransferRoutes } from './funds-transfer-routing';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FundsTransferComponent],
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
    RouterModule.forChild(FundsTransferRoutes)
  ]
})
export class FundsTransferModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDividerModule } from '@angular/material';
import { DialogpopupComponent } from './dialogpopup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DialogpopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDividerModule
  ]
})
export class DialogPopupModule { }

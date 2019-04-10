import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatProgressBarModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatSelectModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SessionsRoutes } from './sessions-routing';
import { SigninComponent } from './signin/signin.component';
import { SessionsService } from './sessions.service';
// MDB Angular Free
import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsFreeModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [SigninComponent],
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
    RouterModule.forChild(SessionsRoutes),
    CardsFreeModule,
    CheckboxModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    IconsModule
  ],
  providers: [SessionsService]
})
export class SessionsModule { }

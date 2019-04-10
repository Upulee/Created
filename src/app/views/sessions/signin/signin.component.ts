import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionsService } from '../sessions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sessionsService: SessionsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildSignifForm();
  }

  buildSignifForm() {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signin() {
    this.sessionsService.signin(this.signinForm.value);
  }
}

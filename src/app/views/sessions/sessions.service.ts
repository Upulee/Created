import { Injectable } from '@angular/core';
import { UserDb } from './../../shared/fake-db/user-db';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  loading = false;
  constructor(private http: HttpClient, private router: Router) {
   // const endpoint = 'http://213.136.79.138:8080/fishproduct/login/';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  // tslint:disable-next-line:no-shadowed-variable
  signin(signinData: signinData): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const obj = { username: signinData.email, password: signinData.password };
    const obj1 = { userName: signinData.email };

    this.http.post('http://213.136.79.138:9090/login/chkusername', obj1, httpOptions).subscribe( res1 => {
    console.log(res1);
    console.log(res1['returnFlag']);
    if (res1['returnFlag'] === 0) {
        this.http.post('http://213.136.79.138:9090/login', obj, httpOptions).subscribe( res => {
          console.log(res);
          console.log('userid' + '' + res['userid']);

          if (res['returnFlag'] === 0) {
           const userid =  res['userid'] ;

           localStorage.setItem('userid', userid);
           localStorage.setItem('isLoggedIn', 'true');
           console.log('signed in log val:' + localStorage.getItem('isLoggedIn'));

            location.href = 'dashboard';
          // this.router.navigate(['dashboard']);
          } else {
            alert('Username or Password Incorrect');
          }
        },
        err => {
         // this.loading = false;
          console.log(err);
        }
      );
      } else {
        alert('User unavailable.Please Register!');
      }
     },
      err => {
       // this.loading = false;
        console.log(err);
      }
    );
  }
}

// tslint:disable-next-line:class-name
export interface signinData {
  // tslint:disable-next-line:ban-types
  email: String;
  // tslint:disable-next-line:ban-types
  password: String;
}

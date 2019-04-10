import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized, NavigationStart, NavigationEnd } from '@angular/router';
import {MatIconRegistry} from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kasun-login';

  menulist:any;

  isLoggedIn: any;
  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
    ) {
      //console.log(router.url);

  }

  ngOnInit() {
    
    this.isLoggedIn = localStorage.getItem('isLoggedIn');

    if(this.isLoggedIn == null) {
      localStorage.setItem('isLoggedIn','false');
      this.isLoggedIn = localStorage.getItem('isLoggedIn');
    }
    console.log("log",this.isLoggedIn);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post('http://213.136.79.138:9090/getUserTaskList',1, httpOptions)
        .subscribe(response => {
          console.log("response",response);

          this.menulist = response;
        })
  }
}

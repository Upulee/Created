import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { NavComponent } from '../../../components/nav/nav.component';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public reloadForm: FormGroup;
  public summaries: any;
  public typesOfRecharge: any;
  // tslint:disable-next-line:ban-types
  typesOfRechargeSub: Object;

  rechargeId;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // };

    // this.http
    //   .post('http://213.136.79.138:8080/gdp/topup/getsplist', {
    //     serviceid: serviceId,
    //     subserviceid: '1',
    //     userid: localStorage.getItem('userid')
    //   }, httpOptions)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.summaries = res;
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   );


    // const obj = 1;
    // this.http
    //   .post('http://213.136.79.138:9090/topup/getservicelist', obj, httpOptions)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.typesOfRecharge = res;
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   );


  }

  ngOnInit() {
    this.buildReloadForm();

    let rechargeId = '0';
    this.activateRoute.paramMap.subscribe(params => {
      rechargeId = params.get("rid");
      console.log("r",rechargeId);

      let serviceId = '0';
      let servicetypeId = '0';

      if ( rechargeId == '10') {
          serviceId = '1';
          servicetypeId = '1';
          //alert('te');
          localStorage.setItem('serviceid', serviceId);
          localStorage.setItem('servicetypeid', servicetypeId);
      } else if ( rechargeId == '11') {
          serviceId = '2';
          servicetypeId = '2';
          //alert("11");
          localStorage.setItem('serviceid', serviceId);
          localStorage.setItem('servicetypeid', servicetypeId);

      }
      else{
        //alert("elese"+rechargeId);
      }

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      this.http
      .post('http://213.136.79.138:8080/gdp/topup/getsplist', {
        serviceid: serviceId,
        subserviceid: '1',
        userid: localStorage.getItem('userid')
      }, httpOptions)
      .subscribe(
        res => {
          console.log("sum",res);
          this.summaries = res;
        },
        err => {
          console.log(err);
        }
      );


      this.http
          .post('http://213.136.79.138:8080/gdp/topup/getsubservicelist', {
            servicetypeid: servicetypeId,
            userid : localStorage.getItem('userid')
          }, httpOptions)
          .subscribe(
            res => {
              console.log('sum', res);
              this.typesOfRechargeSub = res;
            },
            err => {
              console.log(err);
            }
          );
    });
    //let rechargeId = this.activateRoute.snapshot.paramMap.get('rid');

   // })
  }

buildReloadForm() {
    this.reloadForm = this.fb.group({
      phoneNumber: ['', Validators.required],
      operator: ['', Validators.required],
      ammount: ['', Validators.required],
      rechargetype: ['', Validators.required]
    });
  }

recharge() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const obj = {
      customermobno: this.reloadForm.value.phoneNumber,
      serviceoperatorid: this.reloadForm.value.operator,
      amount: this.reloadForm.value.ammount,
      stvtype: this.reloadForm.value.rechargetype,
      userid: localStorage.getItem('userid')
    };
    this.http
      .post('http://213.136.79.138:8080/gdp/topup', obj, httpOptions)
      .subscribe(
        res => {
          console.log(res[0].returnmessage);
          if (res[0].returnmessage === 'Success') {
            this.snackBar.open(
              'Successfully Recharge : Rs.' +
                this.reloadForm.value.ammount +
                ' to +91' +
                this.reloadForm.value.phoneNumber,
              'close',
              { duration: 3000 }
            );
          } else {
            this.snackBar.open(
              'Failed Recharge : Rs.' +
                this.reloadForm.value.ammount +
                ' to +91' +
                this.reloadForm.value.phoneNumber,
              'close',
              { duration: 3000 }
            );
          }
        },
        err => {
          console.log(err);
        }
      );
  }
}

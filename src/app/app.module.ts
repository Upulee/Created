import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCard, MatCardModule } from '@angular/material';
import { DashboardComponentComponent } from './views/dashboard-component/dashboard-component/dashboard-component.component';
import { ChartsModule } from 'ng2-charts';
import { ReportsComponent } from './views/reports/reports/reports.component';
import { FundsTransferComponent } from './views/funds-transfer/funds-transfer/funds-transfer.component';
import { DialogpopupComponent } from './views/dialogpopup/dialogpopup.component';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AppComponent, AuthLayoutComponent, AdminLayoutComponent, HeaderComponent, FooterComponent, NavComponent, DashboardComponentComponent, ReportsComponent, FundsTransferComponent,  DialogpopupComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogpopupComponent],
})
export class AppModule {}

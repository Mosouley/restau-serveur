import { ReportModule } from './../report/report.module';
import { InvoiceModule } from './../invoice/invoice.module';
import { SharedModule } from './../shared/shared.module';
import { EntitiesModule } from './../entities/entities.module';
import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatSidenavModule } from '@angular/material';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrintModule } from '../shared/print/print.module';
import { LoginComponent } from '../login/login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import { DashComponent } from './components/dash/dash.component';



@NgModule({
  declarations: [
    // DashboardComponent, MainContentComponent,
    // SideNavComponent, ToolbarComponent
  DashComponent],
  imports: [
    CommonModule,
    EntitiesModule,
    SharedModule,
    DashboardRoutingModule,
    NgbModule,
    InvoiceModule,
    MaterialModule,
    PrintModule,
    ReportModule,
    MDBBootstrapModule.forRoot()


  ]
})
export class DashboardModule { }




import { FooterComponent } from './../dashboard/components/footer/footer.component';
import { FormUploadComponent } from './../form-upload/form-upload.component';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SignupModalService } from './../signup/signinup-modal.service';

import { DashboardComponent } from './../dashboard/dashboard.component';
import { EntitiesModule } from './../entities/entities.module';
import { DashboardModule } from './../dashboard/dashboard.module';
import { AppService } from './../services/app.service';
import { TransactionLineService } from './../services/transactionLine.service';
import { SpendingsService } from './../services/spendings.service';
import { PrintModule } from './print/print.module';

import { CompanyService } from './../services/company.service';
import { SampleComponent } from './crud/sample/sample.component';
import { CrudComponent } from './crud/crud.component';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { UploadComponent } from './crud/upload/upload.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {  DataService } from '../services/data.service';
import { ProduitService } from '../services/produit.service';
import { EntreeService } from '../services/entree.service';
import { ClientService } from '../services/client.service';
import { FournisseurService } from '../services/fournisseur.service';
import { CategoryService } from '../services/category.service';
import { SortieService } from '../services/sortie.service';
import { UserService } from '../services/user.service';
import { InvoiceModule } from '../invoice/invoice.module';
import { RouterModule } from '@angular/router';
import { HistoricCashBalanceService } from '../services/HistoricCashBalance.service';
import { HistoricProdBalanceService } from '../services/HistoricProdBalance.service';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavComponent } from '../dashboard/components/side-nav/side-nav.component';
import { ToolbarComponent } from '../dashboard/components/toolbar/toolbar.component';
import { LoginComponent } from '../login/login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MainContentComponent } from '../dashboard/components/main-content/main-content.component';
import { SignupComponent } from '../signup/signup.component';
import { InvoiceCreateComponent } from '../invoice/invoice-create/invoice-create.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CashBalanceResolver } from '../reducers/cashBalance.resolver';
import { ChartsComponent } from '../dashboard/components/charts/charts.component';
import { FileValueAccessor } from './utils/file-control-value-accessor';
import { FileValidator } from './utils/file-input-validator.directive';
import { CustomInputComponent } from './custom-input/custom-input.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SideNavComponent,
    ToolbarComponent,
    CrudComponent,
    UploadComponent,
    SampleComponent,
    LoginComponent,
    SignupComponent,
    MainContentComponent,
    NotificationsComponent,
    FormUploadComponent,
    FooterComponent,
    FileValueAccessor,
    FileValidator,
    CustomInputComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    InvoiceModule,
    RouterModule,
    PrintModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [
    CrudComponent,
    UploadComponent,
    SampleComponent,
    MainContentComponent,
    DashboardComponent,
    SideNavComponent,
    ToolbarComponent,
    LoginComponent,
    SignupComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    InvoiceModule,
    RouterModule,
    PrintModule,
    FormUploadComponent,
    NgbModule,
    FileValueAccessor,
    FileValidator

  ],
  providers:
  [
    CurrencyPipe,
    CompanyService,
    // DataService,
    ProduitService,
    ClientService,
    EntreeService,
    FournisseurService,
    EntreeService,
    SortieService,
    SpendingsService,
    CategoryService,
    UserService,
    TransactionLineService,
    // GeneralService,
    HistoricCashBalanceService,
    HistoricProdBalanceService,
    CashBalanceResolver,
    SignupModalService,
    NgbActiveModal ]
})
export class SharedModule { }

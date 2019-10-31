import { InvoiceCreateComponent } from './invoice/invoice-create/invoice-create.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';

import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { SortieService } from './services/sortie.service';
import { FournisseurService } from './services/fournisseur.service';
import { EntreeService } from './services/entree.service';
import { ClientService } from './services/client.service';

import { HttpErrorInterceptor } from './app-errors/HttpErrorInterceptor';

import { AppErrorHandler } from './app-errors/app-error-handler';

import { AppRoutingModule } from './shared/app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';


import { NgbModule , NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
// import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './services/data.service';
// import { Store, StoreModule } from '@ngrx/store';

import { CookieService } from 'ngx-cookie-service';

import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './shared/material.module';
import { EntitiesModule } from './entities/entities.module';
import { principalReducer } from './shared/model/principal.reducer';
import { SharedModule } from './shared/shared.module';
import { ProduitService } from './services/produit.service';
import { ReportHtmlComponent } from './report/report-html.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { SignupComponent } from './signup/signup.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NotificationsComponent } from './shared/notifications/notifications.component';



@NgModule({
  exports: [],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbCollapseModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    EntitiesModule,
    MaterialModule,
    ReactiveFormsModule .withConfig({warnOnNgModelWithFormControl: 'never'}) ,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    // FlexLayoutModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true
    }

    ),
    // StoreModule.forRoot({principal: principalReducer}),
    LayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
       useClass:  AuthInterceptor,
       multi: true},
      CookieService,
      // JwtHelperService,
      AuthGuard,
      AdminAuthGuard,
      ToastrService,
    // Store
    {
      provide: ErrorHandler, useClass: AppErrorHandler
    },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    { provide: MAT_DIALOG_DATA, useValue: [] },
    {provide: MatDialogRef, useValue: []}
  ],
  entryComponents: [InvoiceCreateComponent, NotificationsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


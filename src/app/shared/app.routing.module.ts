
import { AdminAuthGuard } from './../services/admin-auth-guard.service';
import { AuthGuard } from './../services/auth-guard.service';
import { LoginComponent } from './../login/login.component';

import { PrintLayoutComponent } from './print/print-layout/print-layout.component';

import { DashboardComponent } from './../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../signup/signup.component';
import { InvoiceCreateComponent } from '../invoice/invoice-create/invoice-create.component';
import { CategoryResolver } from '../entities/category/category.resolver';
import { ProduitResolver } from '../entities/produit/produit.resolver';
import { ClientResolver } from '../entities/client/client.resolver';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


export const appRoutes: Routes = [
      {
        path: '',
        redirectTo: '/dashboard', pathMatch: 'full'
      },
          { path: 'dashboard',
      component: DashboardComponent
      },
      {
        path: 'dashboard',
       loadChildren:
       '../dashboard/dashboard.module#DashboardModule'

      },

     {
      path: '**',
      redirectTo: '/dashboard', pathMatch: 'full'
    }
  ];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes,
      {enableTracing: true},
    )
  ],
    exports: [RouterModule],
    entryComponents: [LoginComponent, SignupComponent]

})
export class AppRoutingModule {

}

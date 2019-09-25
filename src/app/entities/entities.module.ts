import { DashboardModule } from './../dashboard/dashboard.module';

import { UserResolver } from './user/user.resolver';
import { SharedModule } from './../shared/shared.module';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { EntreeComponent } from './entree/entree.component';
import { ClientComponent } from './client/client.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { ProduitComponent } from './produit/produit.component';
import { SortieComponent } from './sortie/sortie.component';
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './company/company.component';
import { SpendingsComponent } from './spendings/spendings.component';
import { LoginComponent } from '../login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from '../shared/crud/crud.component';
import { UploadComponent } from '../shared/crud/upload/upload.component';
import { SampleComponent } from '../shared/crud/sample/sample.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

@NgModule({
  declarations: [CategoryComponent, ClientComponent, EntreeComponent,
  FournisseurComponent, ProduitComponent, SortieComponent,
   UserComponent, CompanyComponent, SpendingsComponent, AccessDeniedComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [CategoryComponent, ClientComponent, EntreeComponent,
    FournisseurComponent, ProduitComponent, SortieComponent, SpendingsComponent,
    ],
    providers: [ ]
})
export class EntitiesModule { }

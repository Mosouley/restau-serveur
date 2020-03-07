import { DashComponent } from './components/dash/dash.component';
import { InvoiceItemComponent } from './../invoice/invoice-item/invoice-item.component';
import { InvoiceGenerateComponent } from './../invoice/invoice-generate/invoice-generate.component';
import { InvoiceCreateComponent } from './../invoice/invoice-create/invoice-create.component';
import { AccessDeniedComponent } from './../entities/access-denied/access-denied.component';
import { SpendingsResolver } from './../entities/spendings/spendings.resolver';
import { SpendingsComponent } from './../entities/spendings/spendings.component';
import { SortieResolver } from './../entities/sortie/sortie.resolver';
import { ProduitResolver } from './../entities/produit/produit.resolver';
import { EntreeResolver } from './../entities/entree/entree.resolver';
import { InvoiceHtmlComponent } from './../shared/print/invoice-html/invoice-html.component';
import { ReportHtmlComponent } from './../report/report-html.component';

import { CompanyComponent } from './../entities/company/company.component';
import { UserComponent } from './../entities/user/user.component';
import { ClientResolver } from './../entities/client/client.resolver';
import { CategoryResolver } from './../entities/category/category.resolver';
import { MainContentComponent } from './components/main-content/main-content.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from '../entities/category/category.component';
import { ProduitComponent } from '../entities/produit/produit.component';

import { ClientComponent } from '../entities/client/client.component';
import { FournisseurComponent } from '../entities/fournisseur/fournisseur.component';
import { FournisseurResolver } from '../entities/fournisseur/fournisseur.resolver';
import { EntreeComponent } from '../entities/entree/entree.component';

import { SortieComponent } from '../entities/sortie/sortie.component';

import { UserResolver } from '../entities/user/user.resolver';

import { PrintLayoutComponent } from '../shared/print/print-layout/print-layout.component';

import { InvoiceResolver } from '../invoice/invoice-create/invoice.resolver';
import { TransactionLineResolver } from '../shared/transactionLine.resolver';
import { AuthGuard } from '../services/auth-guard.service';
import { LoginComponent } from '../login/login.component';
import { InvoiceListComponent } from '../invoice/invoice-list/invoice-list.component';
import { CashBalanceResolver } from '../reducers/cashBalance.resolver';




const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    //  canActivateChild: [AuthGuard],
    children: [
      {
        path: 'category',
        component: CategoryComponent,
        canActivate: [AuthGuard],
        resolve: {
          categories: CategoryResolver
        }
      },
      {
        path: 'rapport',
        component: ReportHtmlComponent,
        canActivate: [AuthGuard],
        resolve: {
          entrees: EntreeResolver,
          produits: ProduitResolver,
          invoices: InvoiceResolver,
          spendings: SpendingsResolver,
          transax: TransactionLineResolver
        }
      },
      {
        path: 'print',
        component: PrintLayoutComponent,
        children: [
          {
            path: 'invoice/:id',
            component: InvoiceHtmlComponent

          }
        ]
      },
      {
        path: 'produit',
        component: ProduitComponent,
        canActivate: [AuthGuard],
        resolve: {
          produits: ProduitResolver,
          categories: CategoryResolver
      }
      },
      {
        path: 'client',
        component: ClientComponent,
        resolve: {
            clients: ClientResolver
        }
      },
      {
        path: 'fournisseur',
        component: FournisseurComponent,
        canActivate: [AuthGuard],
        resolve: {
            fournisseurs: FournisseurResolver
        }
      },
      {
        path: 'appro',
        runGuardsAndResolvers: 'always',
        component: EntreeComponent,
        canActivate: [AuthGuard],
        resolve: {
            entrees: EntreeResolver,
            produits: ProduitResolver,
            categories: CategoryResolver

        }
      },
      {
        path: 'spendings',
        component: SpendingsComponent,
        resolve: {
            spendings: SpendingsResolver
        }
      },
      {
        path: 'company',
        component: CompanyComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard],
        resolve: {
            users: UserResolver
                  }
      }
      ,
      {
        path: 'invoice-generate',
        component: InvoiceItemComponent,
        resolve: {
            categories: CategoryResolver,
            produits: ProduitResolver,
            clients: ClientResolver,
            transax: TransactionLineResolver
                }
      },
      {
        path: 'invoice-list',
        component: InvoiceListComponent,
        resolve: {
            invoiceData: InvoiceResolver

                }
      },
      {
        path: 'invoice/edit/:id',
        component: InvoiceHtmlComponent,
        resolve: {
            invoiceData: InvoiceResolver
                }
      },
      {
        path: 'dash',
        component: DashComponent,
        resolve: {

          produits: ProduitResolver,
          invoices: InvoiceResolver,
          spendings: SpendingsResolver,
          transax: TransactionLineResolver,
          // cashBal: CashBalanceResolver
        }
      },
      {
        path: '',
        component: MainContentComponent,
      }
    ]
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  },

  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes
  )],
  exports: [RouterModule],
  providers: [
    ProduitResolver,
    CategoryResolver,
    EntreeResolver,
    SortieResolver,
    FournisseurResolver,
    ClientResolver,
    InvoiceResolver,
    SpendingsResolver,
    UserResolver,
    TransactionLineResolver

  ]
})
export class DashboardRoutingModule { }





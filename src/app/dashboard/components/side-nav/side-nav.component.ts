
import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { InvoiceModalService } from '../../../invoice/invoice-modal.service';

const MAX_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public mediaMatcher: MediaQueryList =
  matchMedia( `(max-width : ${MAX_WIDTH_BREAKPOINT}px)`);
  // test for notification
  messageText = 'This is a demo notification!';
  messageType = '2';
  // create an array of link

  links = [
    {
      name:  'Tableau de bord',
      url: '',
      icon: 'dashboard',
      action: ''
    },
    {
      name:  'Categories',
      url: 'category',
      icon: 'view_list',
      action: ''
    },
    {
      name:  'Produits',
      url: 'produit',
      icon: 'category',
      action: ''
    },

{
  name:  'Fournisseurs',
    url: 'fournisseur',
    icon: 'people_outline',
    action: ''
},
{
  name:  'Clients',
  url: 'client',
  icon: 'people',
  action: ''
},
{
  name:  'Dépenses',
  url: 'spendings',
  icon: 'money',
  action: ''
},

{
  name:  'Entrees Stock',
  url: 'appro',
  icon: 'add_shopping_cart',
  action: ''
},
{
name:  'Rapports',
  url: 'rapport',
  icon: 'account_balance',
  action: ''
},
{
  name:  'Factures',
    url: 'invoice-create',
    icon: 'payment',
    action: 'bill()'
  },
{
  name:  'Utilisateurs',
  url: 'user',
  icon: 'person',
  action: ''
},
{
  name:  'Parametres',
  url: 'company',
  icon: 'build',
  action: ''
},

];


  constructor(zone: NgZone,
    public authService: AuthService,
    public invoiceModal: InvoiceModalService
  ) {
    this.mediaMatcher.addListener( (mql) => {
      zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${MAX_WIDTH_BREAKPOINT}px)`));
    });
  }

  ngOnInit() {
  }

  isScreenSmall() {
    return this.mediaMatcher.matches;
  }

  bill() {
      this.invoiceModal.open();

  }
}

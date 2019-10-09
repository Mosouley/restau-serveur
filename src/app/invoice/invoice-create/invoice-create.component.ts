
import { PrintService } from './../../shared/print/print.service';
// import { GeneralService } from './../../services/data.service';
import { Router , ActivatedRoute } from '@angular/router';
import { Client } from './../../shared/model/client';
import { Category } from './../../shared/model/category';
import { Produit } from './../../shared/model/produit';
// import { CategoryService } from './../../services/category.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
// import { ClientService } from './../../services/client.service';
import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy,
  AfterContentChecked, ChangeDetectorRef, AfterViewInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
// import { ProduitService } from '../../services/produit.service';
import { CurrencyPipe, DatePipe, formatDate } from '@angular/common';
import { LoginComponent } from '../../login/login.component';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice, InvoiceStatus, PaymentMode } from '../../shared/model/invoice';
import { logging, element } from 'protractor';
import { TransactionLine } from '../../shared/model/transactionLine';
import { TransactionLineService } from '../../services/transactionLine.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HistoricCashBalanceService } from '../../services/HistoricCashBalance.service';
import { CashBalance } from '../../shared/model/cashBalance';
import { filter } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceCreateComponent implements OnInit, OnDestroy {

  receiveData;
   public clients: Client[];
  public invoiceForm: FormGroup;
   public produits: Produit[];
   public filteredProduits: Produit[][];
   public categories: Category[];
   public category: Category;
  public totalSum = 0;
   public myFormValueChanges$;
   public clientValueChange$;
   public selectedClient: Client;
  public listTransactions: any;
  public isSaved = false;
  public payMode = PaymentMode;
  public modes = [];
  public today = new Date();
  public  accountBalances: CashBalance[] = [];
  // private  lastCashBalance: CashBalance;
  // @Output()
  // emitInvoice: EventEmitter<Invoice> = new EventEmitter<Invoice>();


  //  @ViewChild(InvoiceHtmlComponent) // referenced the html invoice
  // invoiceHtmlComponent: InvoiceHtmlComponent;

  constructor(
    // private clientService: ClientService,
    public fb: FormBuilder,
    // public categorieService: CategoryService,
    // public produitService: ProduitService,
    public invoiceService: InvoiceService,
    public transactionLineService: TransactionLineService,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe,
    public aRoute: ActivatedRoute,
    public route: Router,
    // private generalService: GeneralService,
    public cashService: HistoricCashBalanceService,
    public printService: PrintService,
    public toastr: ToastrService,
    public activeModal: NgbActiveModal,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<InvoiceCreateComponent>

  ) {
    this.receiveData = data;
    console.log(this.receiveData);

  }

  ngOnInit() {
    // const modes = Object.keys(this.payMode);
    // console.log(modes);
    this.modes = Object.keys(this.payMode).filter(f => !isNaN(Number(f)));
    // Get the arrays of clients, products, and categories
    this.clients = this.receiveData.clients; // this.aRoute.snapshot.data.clients;
    this.categories = this.receiveData.categories;  // this.aRoute.snapshot.data.categories;
    this.produits = this.receiveData.produits;  // this.aRoute.snapshot.data.produits;

    // create the form
    this.initData();
    this.filteredProduits = new Array<Produit[]>();
    // initialize stream on units
    this.myFormValueChanges$ = this.invoiceForm.controls['items'].valueChanges;
    // console.log(this.myFormValueChanges$);
    // subscribe to the stream so listen to changes on units
    this.myFormValueChanges$.subscribe(units => {
      this.updateTotalUnitPrice(units),
        this.updateFilteredProduits(units);
    });
    // Recuperer les changements du client
    this.clientValueChange$ = this.invoiceForm.controls['client'].valueChanges;
    this.clientValueChange$.subscribe(id => {
      this.selectedClient = this.clients.find(n => n.id = id);
    }
    );

    // set the date and the payment mode
    this.invoiceForm.controls['payMode'].patchValue(this.payMode.CASH);
    this.invoiceForm.controls['dateTrans'].patchValue( formatDate(new Date(), 'mediumDate', 'en-US'));



  }
  /**
 * unsubscribe listener
 */
  ngOnDestroy(): void {
    this.myFormValueChanges$.unsubscribe();
    this.clientValueChange$.unsubscribe();
  }
  /**
   * Save form data
   */
  save(model: any, isValid: boolean, e: any) {
    e.preventDefault();

    // Initialize cash data
    // this.initData();
        this.cashService.getAll()
        .subscribe(p => {
          this.accountBalances = p;
          // console.log(this.accountBalances);
        });
        // create a new invoice
    const invoice = new Invoice();
    // Give a static ref to the invoice that will always be unique
    invoice.invoiceRef = (new Date()).getFullYear() + 'F' + Math.round((new Date()).getTime() / 1000);
        //  OrderNo: Math.floor(100000 + Math.random() * 900000).toString(),
    invoice.transactionLines = [];
    this.listTransactions = [];
    this.today = this.invoiceForm.get('dateTrans').value;
    invoice.dateTrans = this.today;
    invoice.statut = InvoiceStatus.PAYE;
    invoice.paymentMode = this.invoiceForm.get('payMode').value;
    invoice.client = this.selectedClient;
    this.getTransactionLines(model['items']);

    invoice.transactionLines = [... this.listTransactions];
    //  invoice.totalInvoice = this.listTransactions.reduce(((sum, x) => sum + x.transAmount));
    invoice.totalInvoice = this.totalSum;


    this.invoiceService.create(invoice).subscribe(
      data => {

        this.toastr.success('Facture generée avec succes : Ref ' + invoice.invoiceRef);

        this.isSaved = true;
      const lastCashBalance = this.accountBalances
        .find( s =>  new Date(s['dateHisto']).getTime() === new Date(data['dateTrans']).getTime() &&
      s['payMode'] === data['paymentMode']);
        // resultat des courses
        if (lastCashBalance === undefined || lastCashBalance === null) {
          const cashEvent = new CashBalance();
          cashEvent.dateHisto = data.dateTrans;
          cashEvent.payMode = data.paymentMode;
          cashEvent.balance =  data.totalInvoice;
          this.cashService.create(cashEvent)
         .subscribe ();
          // send the notification
          this.toastr.success('Caisse initiale du jour : ' + cashEvent);
        //  console.log('caisse initiale du jour :' + cashEvent);
        } else {

          // send notification

          // then update the balance and save
          lastCashBalance.balance = lastCashBalance.balance + data.totalInvoice;
          this.cashService.update(lastCashBalance).subscribe();
          // console.log('caisse bien mise a jour :' + lastCashBalance.balance);
          this.toastr.success('Caisse bien mise a jour  : ' + lastCashBalance.balance);
        }

      },
      err => {
        this.toastr.error('Une erreur est survenue! Aucun enregistrement fait!');
      }
    );

  }

  /**
   * Create form unit
   */
  public getUnit() {
    const numberPatern = '^[0-9.,]+$';
    return this.fb.group({
      category: ['', Validators.required],
      codeProd: ['', Validators.required],
      quantite: [1, [Validators.required, Validators.pattern(numberPatern)]],
      prixUnit: ['', [Validators.required]],
      unitTotalPrice: [{ value: '', disabled: true }]
    });

  }

  // Initialiase the form group
  initData() {
    this.data = { clients: this.clients};
    // this.selectedItem = this.initItem;
    this.createForm();
  }
  // create the form if it does not exist
  createForm() {
    // this.invoiceForm ? this.invoiceForm = this.fb.group({}) :
    this.invoiceForm = this.fb.group({
      client: ['', Validators.required],
      dateTrans: [this.today, Validators.required],
      payMode: ['', Validators.required],
      items: this.fb.array([this.getUnit()])
    }) ;
    // this.invoiceForm.reset();
  }
  /**
   * Add new unit row into form
   */
  public addUnit() {
    const control = <FormArray>this.invoiceForm.controls['items'];
    control.push(this.getUnit());

  }

  /**
   * Remove unit row from form on click delete button
   */
  private removeUnit(i: number) {
    const control = <FormArray>this.invoiceForm.controls['items'];
    control.removeAt(i);
  }

  /**
   * Update prices as soon as something changed on units group
   */
  private updateTotalUnitPrice(items: any) {
    // get our units group controll
    const control = <FormArray>this.invoiceForm.controls['items'];
    // before recount total price need to be reset.
    this.totalSum = 0;
    for (const i in items) {
      if (items.hasOwnProperty(i)) {
        const totalUnitPrice = items[i].quantite * items[i].prixUnit;

        // now format total price with angular currency pipe
        const totalUnitPriceFormatted = this.currencyPipe.transform(totalUnitPrice, 'XOF ', 'symbol-narrow', '1.2-2');
        // update total sum field on unit and do not emit event myFormValueChanges$ in this case on units
        control.at(+i).get('unitTotalPrice').setValue(totalUnitPriceFormatted, { onlySelf: true, emitEvent: false });
        // update total price for all units
        this.totalSum += totalUnitPrice;
      }
    }
  }

  /**
 * Update prices as soon as something changed on units group
 */
  private updateFilteredProduits(items: any) {
    // get our units group controll
    for (const i in items) {
      if (items.hasOwnProperty(i)) {
        if (!(items[i].category === undefined) && !(items[i].category == null)) {
          this.filteredProduits[i] = this.produits.filter(
            produit => produit.category['nameCategory'] === items[i].category
          );

        }

      }
    }
  }

  private getTransactionLines(items: any) {
    // tslint:disable-next-line:forin
    for (const i in items) {
      if (items.hasOwnProperty(i)) {
        const transax = new TransactionLine();
        transax.produit = this.produits.find(n => n['codeProd'] === items[i].codeProd);
        transax.quantity = items[i].quantite;
        transax.unitValue = items[i].prixUnit;
        transax.creditAmount = Number(items[i].quantite) * Number(items[i].prixUnit);
        transax.txDate = this.today;
        this.listTransactions.push(transax);
      }
    }

  }


  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}
  /**
 * Get online geoIp information to pre-fill form fields country, city and zip
 */
  /*  private getCountryByIpOnline(): Observable<any> {
     return this.http.get('https://ipapi.co/json/')
         .map(this.extractData)
         .catch(this.handleError);
   }
  */
  /**
   * responce data extraction from http responce
   */
  /*  private extractData(res: Response) {
     let body = res.json();
     return body || { };
   } */

  /**
   * handle error if geoIp service not available.
   */
  // private handleError (error: Response | any) {
  // In a real world app, you might use a remote logging infrastructure
  /*     let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    } */


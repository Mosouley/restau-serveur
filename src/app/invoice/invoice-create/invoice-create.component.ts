
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


  public invoiceForm: FormGroup;
   public produits: Produit[];
   public filteredProduits: Produit[];
   public categories: Category[];
   public category: Category;
  public totalSum = 0;
   public myFormValueChanges$;
   public myFormCategoryChanges$;
   public myFormProduitChanges$;
   public selectedProduit: Produit;
   public selectedClient: Client;
   public selectedRowData;

  constructor(

    public fb: FormBuilder,
    public invoiceService: InvoiceService,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe,
    public aRoute: ActivatedRoute,
    public route: Router,
    public cashService: HistoricCashBalanceService,
    public printService: PrintService,
    public toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public receiveData,
    public dialogRef: MatDialogRef<InvoiceCreateComponent>

  ) {

  }

  ngOnInit() {

            this.categories = this.receiveData.categories;  // this.aRoute.snapshot.data.categories;
            this.produits = this.receiveData.produits;  // this.aRoute.snapshot.data.produits;
            this.selectedRowData = this.receiveData.selectedRow;
            // create the form
            this.initData();
            this.filteredProduits = new Array<Produit>();

            // initialize stream on category to observe
            this.myFormCategoryChanges$ = this.invoiceForm.controls['category'].valueChanges;

            // initialize stream on prduct codes to observe
            this.myFormProduitChanges$ = this.invoiceForm.controls['codeProd'].valueChanges;

            // subscribe to the stream so listen to changes on categry
            this.myFormCategoryChanges$.subscribe(categ => {
                this.updateFilteredProduits(categ);
            });

                // subscribe to the stream so listen to changes on produit
            this.myFormProduitChanges$.subscribe(prod => {
                    this.updateSelectedProduct(prod);
                });
            this.invoiceForm.valueChanges.subscribe(v => {
              this.updateSomme();
              }
            );
  }
      /**
     * unsubscribe listeners
     */
      ngOnDestroy(): void {
        this.myFormProduitChanges$.unsubscribe();
        this.myFormCategoryChanges$.unsubscribe();
        // this.invoiceForm.valueChanges
      }

        // Initialiase the form group
        initData() {
        //  console.log(this.selectedRowData);

          this.createForm(this.selectedRowData);
        }
        // create the form if it does not exist
        createForm(item) {
        //  item ?  console.log(item.produit) : console.log('rien');


           const numberPatern = '^[0-9.,]+$';
          item ? this.invoiceForm = this.fb.group({
            category: [item.category, Validators.required],
            codeProd: [item.produit, Validators.required],
            quantite: [item.quantite, [Validators.required, Validators.pattern(numberPatern)]],
            prixUnit: [item.prixUnit, [Validators.required, Validators.pattern(numberPatern)]],
            unitTotalPrice: [{ value: item.totalInvoice, disabled: true }]
          }) :

          this.invoiceForm = this.fb.group({
            category: ['', Validators.required],
            codeProd: ['', Validators.required],
            quantite: [1, [Validators.required, Validators.pattern(numberPatern)]],
            prixUnit: ['', [Validators.required, Validators.pattern(numberPatern)]],
            unitTotalPrice: [{ value: '', disabled: true }]
          });

        }

        /**
       * Update products as soon as something changed in the category
       */
        private updateFilteredProduits(category: string) {
          // get the list of produits given their category choosen

              if (!(category === undefined) && !(category == null)) {
                this.filteredProduits = this.produits.filter(
                  produit => produit.category['nameCategory'] === category
                );

          }
        }

        // get the price of a product based on the product code
        private updateSelectedProduct(prod: string) {
            // find the produit which has been selected
              if (!(prod === undefined) && !(prod == null)) {
                this.selectedProduit = this.filteredProduits.find( p => p['codeProd'] === prod);
                // this.invoiceForm.controls['codeProd'].patchValue(this.selectedProduit.codeProd);
                this.invoiceForm.controls['prixUnit'].patchValue(this.selectedProduit.prixUnitaire);
              }

        }

      /**
       * Update prices as soon as something changed on units group
       */
      private updateSomme() {
            // get our units group controll

            // before recount total price need to be reset.
            this.totalSum = 0;

            const totalUnitPrice = this.invoiceForm.controls['quantite'].value * this.invoiceForm.controls['prixUnit'].value;
            // now format total price with angular currency pipe
            const totalUnitPriceFormatted = this.currencyPipe.transform(totalUnitPrice, 'XOF ', 'symbol-narrow', '1.2-2');
           // update total price for all units
            this.totalSum += totalUnitPrice;

          // update total sum field on unit and do not emit event myFormValueChanges$ in this case on units
            this.invoiceForm.controls['unitTotalPrice'].setValue(this.totalSum, { onlySelf: true, emitEvent: false });

      }

      // submit the line added to the invoice
      onSubmit() {
        // console.log(this.invoiceForm.value);

        // add the data on the matdialo to a list of the table
        this.dialogRef.close({data: this.invoiceForm.value});

        }

      closeDialog() {
        this.dialogRef.close();
      }

}


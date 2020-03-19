
import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../../model/company';
import { InvoiceService } from '../../../services/invoice.service';
import { CompanyService } from '../../../services/company.service';


declare let jsPDF;
declare let html2canvas;

@Component({
  selector: 'app-invoice-html',
  templateUrl: './invoice-html.component.html',
  styleUrls: ['./invoice-html.component.scss']
})
export class InvoiceHtmlComponent implements OnInit {

// Recuperer la reference de la facture
  invoiceId: number;
  public invoice;
  theCompany = new Company();

  constructor( public route: ActivatedRoute,
    public router: Router,
  public invoiceService: InvoiceService,
  public companyService: CompanyService) {

  this.invoiceId = route.snapshot.params['id'];
  this.invoiceService.find(this.invoiceId)
  .subscribe( inv => {
    this.invoice = inv;
    // console.log(this.invoice);

  });
}


  ngOnInit() {

    // Get the company details
    this.companyService.getAll().subscribe(
      comp => {this.theCompany = comp[0] ;
      }
    );

  }
  // Method to print the invoice which displayed
  printInvoice() {
    this.router.navigate(['/',
    {
      outlets: {'print': ['print']}
    }
]);
}

}


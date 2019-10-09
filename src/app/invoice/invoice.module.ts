import { InvoiceModalService } from './invoice-modal.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InvoiceService } from '../services/invoice.service';
import { TransactionLineService } from '../services/transactionLine.service';
import { NgxPrintModule} from 'ngx-print';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceItemComponent } from './invoice-item/invoice-item.component';
@NgModule({
  declarations: [InvoiceCreateComponent, InvoiceListComponent, InvoiceItemComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPrintModule,
    MDBBootstrapModule.forRoot()
  ],
  // exports: [InvoiceListComponent],
  providers: [InvoiceService, TransactionLineService, DatePipe, InvoiceModalService]
})
export class InvoiceModule {

}

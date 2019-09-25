import { MaterialModule } from './../material.module';
import { InvoiceHtmlComponent } from './invoice-html/invoice-html.component';
import { RouterModule } from '@angular/router';
import { PrintService } from './print.service';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [PrintLayoutComponent, InvoiceHtmlComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    NgxPrintModule
  ],
  exports: [ PrintLayoutComponent, InvoiceHtmlComponent],
  providers: [PrintService]
})
export class PrintModule { }

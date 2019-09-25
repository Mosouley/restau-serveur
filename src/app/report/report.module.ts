
import { ReportHtmlComponent } from './report-html.component';
import { NgxPrintModule } from 'ngx-print';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ReportHtmlComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPrintModule


  ],
  exports: [MaterialModule],
  providers: []
})
export class ReportModule {

}

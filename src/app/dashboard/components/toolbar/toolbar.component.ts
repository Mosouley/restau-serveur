import { LoginComponent } from './../../../login/login.component';
import { InvoiceModalService } from './../../../invoice/invoice-modal.service';
import { SignupModalService } from './../../../signup/signinup-modal.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginModalService } from '../../../login/login-modal.service';
import { AuthService } from '../../../auth/auth.service';
import { TokenStorageService } from '../../../auth/token-storage.service';
import { truncateSync } from 'fs';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Company } from '../../../shared/model/company';
import { CompanyService } from '../../../services/company.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  // tslint:disable-next-line:no-output-rename
  @Output() toggleSidenav = new EventEmitter<void>();
  private roles: string[];
  private authority: string;
  public theCompany = new Company();
  constructor(private loggingModalService: LoginModalService,
    private signupModalService: SignupModalService,
    public authService: AuthService,
    public invoiceModal: InvoiceModalService,
    private dialog: MatDialog,
    private tokenService: TokenStorageService,
    private companyService: CompanyService) {

  }

  ngOnInit() {
    this.retrieveCompany();
}

login() {
  this.loggingModalService.open();
}

register() {
  this.signupModalService.open();
}
billInvoice() {
  this.invoiceModal.open();
}

dialogOpen() {
  // lanch mat dialog
  const dialogConfig = new MatDialogConfig();
  // dialogConfig.disableClose = false;
  dialogConfig.autoFocus = true;
  this.dialog.open(LoginComponent, dialogConfig);

}

retrieveCompany() {
  this.companyService.getAll().subscribe(
    data => {
     if (!(data.length < 1) && !(data == null)) {
      this.theCompany = data[0];
  }
    });
  }
}

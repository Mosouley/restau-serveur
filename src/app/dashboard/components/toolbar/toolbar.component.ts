import { InvoiceModalService } from './../../../invoice/invoice-modal.service';
import { SignupModalService } from './../../../signup/signinup-modal.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginModalService } from '../../../login/login-modal.service';
import { AuthService } from '../../../auth/auth.service';
import { TokenStorageService } from '../../../auth/token-storage.service';
import { truncateSync } from 'fs';


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

  constructor(private loggingModalService: LoginModalService,
    private signupModalService: SignupModalService,
  public authService: AuthService,
  public invoiceModal: InvoiceModalService,
  private tokenService: TokenStorageService) {

  }

  ngOnInit() {
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
}

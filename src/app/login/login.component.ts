import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../services/app.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth/auth.service';
import { AuthLoginInfo } from '../auth/login-info';
import { TokenStorageService } from '../auth/token-storage.service';
import { MatDialogRef } from '@angular/material';
import { SignupModalService } from '../signup/signinup-modal.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles:  string[] = [];
  private loginInfo:  AuthLoginInfo;

  private dialogRef: MatDialogRef<LoginComponent>;

  constructor(
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private tokenStorage: TokenStorageService,
              private signupModalService: SignupModalService,
              public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }

  signin(credentials) {

    this.loginInfo = new AuthLoginInfo(credentials['username'], credentials['password']);
    this.authService.login(this.loginInfo)
    .subscribe(
      result => {
        if (result) {

        this.tokenStorage.saveToken(result.accessToken);
        this.tokenStorage.saveUsername(result.username);
        this.tokenStorage.saveAuthorities(result.authorities);

        this.isLoginFailed = false;
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/']);
        this.roles = this.tokenStorage.getAuthorities();
        this.activeModal.dismiss('login success');
                    }
        // this.reloadPage();
                },
      error => {

      this.errorMessage = error;
      this.isLoginFailed = true;
    });

  }

  cancel() {
    this.loginInfo = {
        username: null,
        password: null
    };

    this.activeModal.dismiss('cancel');
}

register() {
  this.activeModal.dismiss('to state register');
  this.signupModalService.open();
}

requestResetPassword() {
  this.activeModal.dismiss('to state requestReset');
  this.router.navigate(['/reset', 'request']);
}

reloadPage() {
  window.location.reload();
}
logout() {
  this.isLoginFailed = true;
  this.authService.logout();
  this.activeModal.dismiss('cancel');
}

sortir() {
  this.dialogRef.close();
}
}

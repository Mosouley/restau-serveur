import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth/auth.service';
import { AuthLoginInfo } from '../auth/login-info';
import { SignUpInfo } from '../auth/sigup-info';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: Set<string> = new Set<string>();
  private signupInfo:  SignUpInfo;

  constructor(
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              public toastr: ToastrService,
              public activeModal: NgbActiveModal) {
this.roles.add('admin');
this.roles.add('user');

              }

  ngOnInit() {

  }

  signup(credentials) {
    // console.log(credentials);

    this.signupInfo = new SignUpInfo(
      credentials['name'], credentials['username'], credentials['email'], credentials['password'], credentials['role']);
    this.authService.signUp(this.signupInfo)
    .subscribe(
      result => {
        if (result) {
          this.toastr.success('Utilisateur ' + `${this.signupInfo.username}` + ' Créé avec succès ', 'Restaurant App.');
                    }
                },
      error => {

      this.errorMessage = error;
      this.activeModal.dismiss('Error creating User');

    });

  }

  cancel() {
    this.activeModal.dismiss('cancel');
}

logout() {

  this.activeModal.dismiss('cancel');
}
}

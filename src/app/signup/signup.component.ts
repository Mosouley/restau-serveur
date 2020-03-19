import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth/auth.service';
import { AuthLoginInfo } from '../auth/login-info';
import { SignUpInfo } from '../auth/sigup-info';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../shared/upload-file.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  selectionFiles: FileList;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  theCompany;
  roles: Set<string> = new Set<string>();

  currentFileUpload: File;
  private signupInfo:  SignUpInfo;

  constructor(
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              public toastr: ToastrService,
              private uploadService: UploadFileService,
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

openInput() {
  // your can use ElementRef for this later
  // tslint:disable-next-line:no-unused-expression
  document.getElementById('fileInput').click();
}

checkUpFile(event) {
  const file = event.target.files.item(0);
  // console.log(file);
  // this.nameFile = file.name;

  if (file.type.match('image.*')) {
    this.selectionFiles =  event.target.files;
    this.currentFileUpload = file;
    console.log(this.currentFileUpload);
    // this.onSubmit();
  // this.companyForm.get('logoCompany').setValue(file);
  } else {
    this.toastr.warning('invalid file format');
  }
}
onSubmit() {
  // this.progres.percentage = 0;
  // this.currentFileUpload = this.selectionFiles.item(0);
  // this.currentFileUpload = this.companyForm.get('logoCompany').value;
  // this.logo = '/upload-dir/' + this.currentFileUpload['name'];
  this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe( event => {
    // this.companyForm.get('logoCompany').setValue(this.currentFileUpload['name']);
    if (event.type === HttpEventType.UploadProgress) {
      // this.progres.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event.type === 3) {
        // this.getImage = true;
        // this.companyForm.get('logoCompany').patchValue(event['partialText']);
        // tslint:disable-next-line:no-unused-expression
          // console.log(this.companyForm.get('logoCompany').value);
      } else if (event instanceof HttpResponse) {
        this.toastr.success('Fichier chargé avec succès! ');
    }
  });

  // if (this.getImage = true) {
  //   this.logoCompany = this.companyForm.get('logoCompany').value;
    // console.log(this.companyForm.get('logoCompany').value);
  // }
  // this.update();

}
}

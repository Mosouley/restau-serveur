import { flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { UploadFileService } from './../../shared/upload-file.service';
import { isUndefined } from 'util';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Input, ChangeDetectorRef, ElementRef } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../shared/model/company';
import { MatSnackBar } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileValidator } from '../../shared/utils/file-input-validator.directive';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {


  selectionFiles: FileList;
  listFichiers: string [];
  progres: { percentage: number } = { percentage: 0};

  logoCompany: string;
  nameFile: string;
  getImage = false;
  currentFileUpload: File;
  private companyForm: FormGroup;
  private theCompany = new Company();
  operation = 'add';

  constructor(
    private companyService: CompanyService,
    private fb: FormBuilder,
    private uploadService: UploadFileService,
    private toast: ToastrService,
    private _cdr: ChangeDetectorRef
  ) {

   }

  ngOnInit() {
    this.buildForm();
    this.retrieveCompany();
    this.valueChange();
  }

  buildForm() {

    this.companyForm = this.fb.group({
      id: '',
      nameCompany: ['', Validators.required],
      codeIfuCompany: ['', Validators.required],
      phoneCompany: ['', Validators.required],
      adressCompany: ['', Validators.required],
      logoCompany: this.theCompany.logoCompany,
      file: new FormControl('', [FileValidator.validate])
    });
}

  add() {
    const p = this.companyForm.value;
    // console.log(p);

    this.companyService.create(p).subscribe(res => {
      // console.log(res);

      this.toast.show('Société configurée avec success');
      // this.retrieveCompany();

    });

  }

  update() {
    this.companyService.update(this.companyForm.value).subscribe(res => {
    });
  }

  checkUpFile(event) {
    const file = event.target.files.item(0);
    // console.log(file);
    this.nameFile = file.name;

    if (file.type.match('image.*')) {
      this.selectionFiles =  event.target.files;
      this.currentFileUpload = file;
    //  console.log(this.currentFileUpload);
      this.onSubmit();
    // this.companyForm.get('logoCompany').setValue(file);
    } else {
      this.toast.warning('invalid file format');
    }

  }

  onSubmit() {
    this.progres.percentage = 0;
    // this.currentFileUpload = this.selectionFiles.item(0);
    // this.currentFileUpload = this.companyForm.get('logoCompany').value;
    // this.logo = '/upload-dir/' + this.currentFileUpload['name'];
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe( event => {
      // this.companyForm.get('logoCompany').setValue(this.currentFileUpload['name']);
      if (event.type === HttpEventType.UploadProgress) {
        this.progres.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event.type === 3) {
          this.getImage = true;
          this.companyForm.get('logoCompany').patchValue(event['partialText']);
          // tslint:disable-next-line:no-unused-expression
            // console.log(this.companyForm.get('logoCompany').value);
        } else if (event instanceof HttpResponse) {
          this.toast.success('Fichier chargé avec succès! ');
      }
    });

    // if (this.getImage = true) {
    //   this.logoCompany = this.companyForm.get('logoCompany').value;
      // console.log(this.companyForm.get('logoCompany').value);
    // }
    this.update();

  }

  valueChange() {

    this.companyForm.valueChanges.subscribe(chges =>
      this.theCompany.logoCompany = chges['logoCompany']);
    if (this.companyForm.valid) {
      this.theCompany = this.companyForm.value;
      this.companyService.update(this.theCompany).subscribe();
    }

  }
  // getImageUrl() {
  //   if (this.currentFileUpload) {
  //   return this.uploadService.getFile(this.nameFile);
  // }

    // return this.currentFileUpload ? this.companyForm.get('logoCompany').value : '/assets/yasn logo.jpeg';
  // }
  // this.uploadService.getFile(this.currentFileUpload['name'])

  retrieveCompany() {
    this.companyService.getAll().subscribe(
      data => {
       if (!(data.length < 1) && !(data == null)) {
        this.theCompany = data[0];
         this.companyForm.patchValue(this.theCompany);
            this.operation = 'edit';
          } else {
            this.operation = 'add';
          }
       });
  }

  onFileChange(event) {
  const reader = new FileReader();

  if (event.target.files && event.target.files.length) {
    const [file] = event.target.files;
    console.log(file);

    reader.readAsDataURL(file);

    reader.onload = () => {
      this.companyForm.controls.file.patchValue({
        file: reader.result
      });

      // need to run CD since file load runs outside of zone
      this._cdr.markForCheck();
    };
  }
}

openInput() {
  // your can use ElementRef for this later
  // tslint:disable-next-line:no-unused-expression
  document.getElementById('fileInput').click();
}
}

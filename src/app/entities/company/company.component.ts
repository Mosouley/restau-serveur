import { isUndefined } from 'util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../shared/model/company';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {


  private companyForm: FormGroup;
  private theCompany = new Company();
  operation = 'add';

  constructor(
    private companyService: CompanyService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
  ) {

   }

  ngOnInit() {
    this.buildForm();
   this.companyService.getAll().subscribe(
     data => {
      //  console.log(data);

      if (!(data.length < 1) && !(data == null)) {
       this.theCompany = data[0];
        this.companyForm.patchValue(this.theCompany);
        this.operation = 'edit';
         } else {
           this.operation = 'add';

         }
      });


  }

  buildForm() {

    this.companyForm = this.fb.group({
      nameCompany: ['', Validators.required],
      codeIfuCompany: ['', Validators.required],
      phoneCompany: '',
      adressCompany: '',
      logoCompany: ''
    });
}

  add() {
    const p = this.companyForm.value;
    this.companyService.create(p).subscribe(res => {console.log(res);
      this.snackBar.open('Societe parametree', 'Succes', {
        duration: 1000
      });
      this.companyForm.reset();
      // console.log(this.loadData());
    });

  }

  update() {

    this.companyService.update(this.theCompany).subscribe(res => {

    });
  }

}

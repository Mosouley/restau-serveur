import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FournisseurService } from '../../services/fournisseur.service';
import { ActivatedRoute } from '@angular/router';
import { Fournisseur } from '../../shared/model/fournisseur';
import { DataModel } from '../../shared/model/data.model';


@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {

  fournisseurs: Fournisseur[];

  fournisseurForm: FormGroup;

  fournisseur: Fournisseur = new Fournisseur();

  fournisseursModel: DataModel[];

  constructor(public fournisseurService: FournisseurService,
              private fb: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.fournisseurs = this.route.snapshot.data.fournisseurs;

    this.fournisseurForm = this.fb.group({
      id: '',
      nameSupplier: ['', Validators.required],
      codeIfuSupplier: ['', Validators.required],
      phoneSupplier: ['', Validators.required]
    });

    this.fournisseursModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('nameSupplier', 'Name', 'string', false, []),
      new DataModel('codeIfuSupplier', 'Code IFU', 'string', false, []),
      new DataModel('phoneSupplier', 'Phone', 'string', false, [])

    ];
  }
}

import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SortieService } from '../../services/sortie.service';
import { ActivatedRoute } from '@angular/router';
import { Sortie } from '../../shared/model/sortie';
import { Produit } from '../../shared/model/produit';
import { DataModel } from '../../shared/model/data.model';


@Component({
  selector: 'app-sortie',
  templateUrl: './sortie.component.html',
  styleUrls: ['./sortie.component.scss']
})
export class SortieComponent implements OnInit {

  sorties: Sortie[];

  sortieForm: FormGroup;
  produits: Produit[];
  sortie: Sortie;
  sortiesModel: DataModel[];
  produitsModel: DataModel[];

  constructor(
    public sortieService: SortieService,
    // private categorieService: CategoryService,
    public fb: FormBuilder,
    public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sortieForm = this.fb.group({
      id: '',
      produit: ['', Validators.required],
      quantite: ['', Validators.required],
      prixvente: '',
      date: ''
    });



    this.sorties = this.route.snapshot.data.sorties;
    this.produits = this.route.snapshot.data.produits;
    this.sortiesModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('produit', 'Code Prod', 'Array', false, []),
      new DataModel('quantite', 'Quantite', 'string', false, []),
      new DataModel('prixvente', 'Prix', 'string', false, []),
      new DataModel('date', 'Date', 'date', false, [])
    ];

    this.produitsModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('codeProd', 'Code Prod', 'string', false, [])
    ];

  }

}


import { map } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { ProduitService } from '../../services/produit.service';
import { CategoryService } from '../../services/category.service';
import { Produit } from '../../shared/model/produit';
import { Category } from '../../shared/model/category';
import { DataModel } from '../../shared/model/data.model';


@Component({
  selector: 'app-produit',
  templateUrl: './Produit.component.html',
  styleUrls: ['./Produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  produitForm: FormGroup;
  categories: Category[];
  produit: Produit;
  produitsModel: DataModel[];
  categoriesModel: DataModel[];

  constructor(public produitService: ProduitService,
    public categorieService: CategoryService,
    public fb: FormBuilder, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.produitForm = this.fb.group({
      category: ['', Validators.required],
      codeProd: ['', Validators.required],
      descProduit: '',
      stockMini: '',
      coutUnitaire: '',
      prixUnitaire: ''
    });

    this.produits = this.route.snapshot.data.produits;

    this.categories = this.route.snapshot.data.categories ;

    this.produitsModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('category', 'Categorie', 'Array', false, []),
      new DataModel('codeProd', 'Code Prod', 'string', false, []),
      new DataModel('descProduit', 'Description', 'string', false, []),
      new DataModel('stockMini', 'Stock Alerte', 'number', false, []),
      new DataModel('coutUnitaire', 'Cout Unitaire', 'number', false, []),
      new DataModel('prixUnitaire', 'Prix Unitaire', 'number', false, [])

    ];

    this.categoriesModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('nameCategory', 'Nom Categorie', 'string', false, []),
      new DataModel('createAt', 'Date Creation', 'date', false, [])
    ];

  }

}

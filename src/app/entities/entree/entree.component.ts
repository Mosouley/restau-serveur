import { Category } from './../../shared/model/category';
import { DataModel } from './../../shared/model/data.model';

import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { EntreeService } from '../../services/entree.service';
import { ActivatedRoute } from '@angular/router';
import { Entree } from '../../shared/model/entree';
import { Produit } from '../../shared/model/produit';
import { Appro } from '../../shared/model/appro';
import { TransactionLine } from '../../shared/model/transactionLine';

@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.css']
})
export class EntreeComponent implements OnInit {

  appros: Appro[];
  categories: Category[];
  approForm: FormGroup;
  produits: Produit[];
  appro: Appro = new Appro();
  initItem: any;
  title: string;
  produit: Produit;
  operation = 'add';
  selectedItem: any;
  selectedCategory: Category;
  private categoryValueChange$;
  selectedProduits: Produit[] = [];
  approsModel: DataModel[];
  produitsModel: DataModel[];
  categoriesModel: DataModel[];

  constructor(public entreeService: EntreeService,
              private fb: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.appros = this.route.snapshot.data.entrees;
    // console.log(this.appros);

    this.categories = this.route.snapshot.data.categories;
    this.produits = this.route.snapshot.data.produits;

    this.title = 'Approvisonnements effectues';
    this.initData();
    this.categoryValueChange$ = this.approForm.controls['category'].valueChanges;
    this.categoryValueChange$.subscribe( category => {
      // console.log(category);
      this.updateFilteredProduits(category);
    });
    this.approsModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('dateAppro', 'Date Entree', 'date', false, []),
      new DataModel('category', 'Categorie', 'Array', false, []),
      new DataModel('produit', 'Produit', 'Array', false, []),
      new DataModel('quantite', 'Quantite', 'number', false, []),
      new DataModel('coutUnitaire', 'Cout Unitaire', 'number', false, [])


    ];
    this.produitsModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('codeProd', 'Code Prod', 'string', false, []),
      new DataModel('coutUnitaire', 'Cout Unitaire', 'number', false, [])

    ];
    this.categoriesModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('nameCategory', 'Nom Categorie', 'string', false, [])
    ];
  }

  initData() {
    // this.produit = new Produit();
    this.selectedItem = this.initItem;
    this.createForm();

  }

  createForm() {
    this.approForm = this.fb.group({
      dateAppro: ['', Validators.required],
      category: ['', Validators.required],
      produit: ['', Validators.required],
      quantite: ['', Validators.required],
      coutUnitaire: ['', Validators.required]
    });

  }

  private updateFilteredProduits(item: any) {
        if (!(item === undefined) && !(item == null)) {
          this.selectedProduits = this.produits.filter(
            // tslint:disable-next-line:triple-equals
            produit => produit.category.id === item['id']);
            // console.log(this.selectedProduits);
        }
  }

  add() {
    const appro = new Appro();
    const p = this.approForm.value;
    console.log(p);

    appro.approRef = (new Date()).getFullYear() + 'A' + Math.round((new Date()).getTime() / 1000);
    appro.dateAppro = p['dateAppro'];
    appro.transactionLines = [];
    const transax = new TransactionLine();
        transax.produit = p['produit'];
        transax.quantity = p['quantite'];
        transax.unitValue = p['coutUnitaire'];
        transax.debitAmount = transax.quantity  * transax.unitValue;
        transax.txDate = appro.dateAppro;
        appro.transactionLines.push(transax);
        // console.log(appro);

    this.entreeService.create(appro).subscribe(res => {
      this.loadData();
    });
    this.initData();
  }

  update() {
    this.entreeService.update(this.selectedItem).subscribe(res => {
      this.initData();
    });
  }
  loadData() {
    this.entreeService.getAll().subscribe(data => {
      this.appros = data;
    });
  }
}

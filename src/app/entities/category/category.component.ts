
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { CategoryService } from '../../services/category.service';
import { Category } from '../../shared/model/category';
import { DataModel } from '../../shared/model/data.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  categories: Category[];

  categoryForm: FormGroup;

    category: Category = new Category();

  categoriesModel: DataModel[];

  constructor(public categoryService: CategoryService,
              public fb: FormBuilder, public route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.categories = this.categoryService.getAll().subscribe(cat => cat)
    //   ;      //._embedded.produits;
    // this.categoryService.getAll().subscribe(
    //   response => {
    //     this.categories = response as Category[];
    //     // console.log(this.categories);
    //   }

    // );
    this.categories = this.route.snapshot.data.categories;
    // console.log(this.categories);


    this.categoryForm = this.fb.group({
      id: '',
      nameCategory: ['', Validators.required],
      createAt: ['', Validators.required]
    });

    this.categoriesModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('nameCategory', 'Nom Categorie', 'string', false, []),
      new DataModel('createAt', 'Date Creation', 'date', false, [])


    ];
  }

}

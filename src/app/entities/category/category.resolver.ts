import {Injectable} from '@angular/core';

import {Resolve} from '@angular/router';
import { CategoryService } from '../../services/category.service';


@Injectable()
export class CategoryResolver implements Resolve<any> {

  constructor(private categoryService: CategoryService) {
  }

  resolve() {
    return this.categoryService.getAll();
  }
}

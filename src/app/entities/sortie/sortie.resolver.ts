
import {Injectable} from '@angular/core';

import {Resolve} from '@angular/router';
import { SortieService } from '../../services/sortie.service';



@Injectable()
export class SortieResolver implements Resolve<any> {

  constructor(private sortieService: SortieService) {
  }

  resolve() {
    return this.sortieService.getAll();
  }
}

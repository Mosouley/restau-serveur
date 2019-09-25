
import {Injectable} from '@angular/core';

import {Resolve} from '@angular/router';

import { EntreeService } from '../../services/entree.service';



@Injectable()
export class EntreeResolver implements Resolve<any> {

  constructor(private entreeService: EntreeService) {
  }

  resolve() {
    return this.entreeService.getAll();
  }
}

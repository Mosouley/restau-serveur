
import {Injectable} from '@angular/core';

import {Resolve} from '@angular/router';
import { FournisseurService } from '../../services/fournisseur.service';



@Injectable()
export class FournisseurResolver implements Resolve<any> {

  constructor(private fournisseurService: FournisseurService) {
  }

  resolve() {
    return this.fournisseurService.getAll();
  }
}

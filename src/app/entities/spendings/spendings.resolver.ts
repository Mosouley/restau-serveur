import {Injectable} from '@angular/core';

import {Resolve} from '@angular/router';
import {SpendingsService} from '../../services/spendings.service';


@Injectable()
export class SpendingsResolver implements Resolve<any> {

  constructor(private spendingsService: SpendingsService) {
  }

  resolve() {
    return this.spendingsService.getAll();
  }
}

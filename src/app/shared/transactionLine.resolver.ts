import { TransactionLineService } from './../services/transactionLine.service';
import {Injectable} from '@angular/core';

import {Resolve} from '@angular/router';


@Injectable()
export class TransactionLineResolver implements Resolve<any> {

  constructor(private txService: TransactionLineService) {
  }

  resolve() {
    return this.txService.getAll();
  }
}

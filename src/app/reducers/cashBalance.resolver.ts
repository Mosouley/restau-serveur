import { HistoricCashBalanceService } from './../services/HistoricCashBalance.service';
import {Injectable} from '@angular/core';

import {Resolve} from '@angular/router';


@Injectable()
export class CashBalanceResolver implements Resolve<any> {

  constructor(private cashService: HistoricCashBalanceService) {
  }

  resolve() {
    return this.cashService.getAll();
  }
}

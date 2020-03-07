import { PaymentMode } from './../../../shared/model/invoice';
import { async } from '@angular/core/testing';
import { tap, reduce, groupBy, mergeMap, flatMap, switchMap, map, toArray } from 'rxjs/operators';
import { CashBalance } from './../../../shared/model/cashBalance';
import { HistoricCashBalanceService } from './../../../services/HistoricCashBalance.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../../../shared/model/invoice';
import { TransactionLine } from '../../../shared/model/transactionLine';
import { Spending } from '../../../shared/model/spendings';
import { from, Observable } from 'rxjs';

// const groupedBy = key => tableau =>
//   tableau.reduce((objectsByKeyValue, obj) => {
//     const value = obj[key];
//     objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
//     return objectsByKeyValue;
//   }, {});

const today = new Date();

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  dataInvoices: Invoice[];
  dataTx: TransactionLine[] = [];
  dataSpendings: Spending[];
  data = [];
  accountBalances: Observable<CashBalance[]> ;
  reportPeriod = [
    { id: 1, name: '7 Derniers Jours',
    timePeriod: { startDay: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7),
       endDay: new Date(today.getFullYear(), today.getMonth(), today.getDate()) }} ,
    { id: 2, name: 'Ce Mois',
    timePeriod: { startDay: new Date(today.getFullYear(), today.getMonth()  , 1),
       endDay: new Date(today.getFullYear(), today.getMonth() + 1, 0) } },
    { id: 3, name: ' Ce Trimestre ',
    timePeriod: { startDay: new Date(today.getFullYear(), today.getMonth() - 2, 1),
      endDay: new Date(today.getFullYear(), today.getMonth() + 1, 0) } },
    { id: 4, name: 'Cette année',
    timePeriod: { startDay: new Date(today.getFullYear(), 0, 1),
      endDay: new Date(today.getFullYear(), 11, 31) } },
    // { id: 5, name: 'Selectionner une plage',
    // timePeriod: { startDay: new Date(), endDay: new Date() } }
  ];
  caJour = 0; caMois = 0; caTrim = 0; caAn = 0;
  spendJour = 0; spendMois = 0; spendTrim = 0; spendAn = 0;
  caisJour = 0; caisMois = 0; caisTrim = 0; caisAn = 0;
  comptes = [];

  constructor(private route: ActivatedRoute, public cashService: HistoricCashBalanceService
 ) { }

  ngOnInit() {
    this.dataInvoices = this.route.snapshot.data.invoices;
    // this.dataEntrees = this.route.snapshot.data.entrees;
    this.dataSpendings = this.route.snapshot.data.spendings;
    this.dataTx = this.route.snapshot.data.transax;
    this.accountBalances = this.cashService.cashBal;
   this.accountBalances = this.cashService.cashBal;
   this.cashService.getAll();
    // console.log(this.dataTx);
    this.getChiffreAffaire();
    this.getSpendings();
    this.getCashData();



  }

  getChiffreAffaire() {
    // calculate the turnover and display it

    // turnover of the year
    // this.dataEntity = [...this.dataInvoices];
    this.data = this.dataInvoices.filter((inv: Invoice) => {
      // tslint:disable-next-line:no-unused-expression
      return new Date(inv.dateTrans).setHours(0, 0 , 0, 0)  >= new Date(this.reportPeriod[3].timePeriod.startDay).setHours(0, 0 , 0, 0) &&
      new Date(inv.dateTrans).setHours(0, 0 , 0, 0)  <= new Date(this.reportPeriod[3].timePeriod.endDay).setHours(0, 0 , 0, 0); } );
      this.caAn = this.data.reduce((sum, current) => sum + current.totalInvoice, 0);

      // turnover of the last 7 days
      this.caJour = this.dataInvoices.filter((inv: Invoice) => {
        // tslint:disable-next-line:no-unused-expression
        return new Date(inv.dateTrans).setHours(0, 0 , 0, 0)  >= new Date(this.reportPeriod[0].timePeriod.startDay).setHours(0, 0 , 0, 0) &&
        new Date(inv.dateTrans).setHours(0, 0 , 0, 0)  <= new Date(this.reportPeriod[0].timePeriod.endDay).setHours(0, 0 , 0, 0); } )
      .reduce((sum, current) => sum + current.totalInvoice, 0);

      // turnover of the month
      this.caMois = this.dataInvoices.filter((inv: Invoice) => {
        // tslint:disable-next-line:no-unused-expression
        return new Date(inv.dateTrans).setHours(0, 0 , 0, 0)  >= new Date(this.reportPeriod[1].timePeriod.startDay).setHours(0, 0 , 0, 0) &&
        new Date(inv.dateTrans).setHours(0, 0 , 0, 0)  <= new Date(this.reportPeriod[1].timePeriod.endDay).setHours(0, 0 , 0, 0); } )
      .reduce((sum, current) => sum + current.totalInvoice, 0);

      // turnover of the quarter
      this.caTrim = this.dataInvoices.filter((inv: Invoice) => {
        // tslint:disable-next-line:no-unused-expression
        return new Date(inv.dateTrans).setHours(0, 0 , 0, 0)  >= new Date(this.reportPeriod[2].timePeriod.startDay).setHours(0, 0 , 0, 0) &&
        new Date(inv.dateTrans).setHours(0, 0 , 0, 0)  <= new Date(this.reportPeriod[2].timePeriod.endDay).setHours(0, 0 , 0, 0); } )
      .reduce((sum, current) => sum + current.totalInvoice, 0);
  }

  getSpendings() {
    // calculate the spendings and display it

    // spendings of the year
    this.data = this.dataSpendings.filter((spend: Spending) => {
      // tslint:disable-next-line:no-unused-expression
      return new Date(spend.dateSpending).setHours(0, 0 , 0, 0)
       >= new Date(this.reportPeriod[3].timePeriod.startDay).setHours(0, 0 , 0, 0) &&
      new Date(spend.dateSpending).setHours(0, 0 , 0, 0)  <= new Date(this.reportPeriod[3].timePeriod.endDay).setHours(0, 0 , 0, 0); } );
      this.spendAn = this.data.reduce((sum, current) => sum + current.valueSpending, 0);

      // spendings of the last 7 days
      this.spendJour = this.dataSpendings.filter((spend: Spending) => {
        // tslint:disable-next-line:no-unused-expression
        return new Date(spend.dateSpending).setHours(0, 0 , 0, 0)
        >= new Date(this.reportPeriod[0].timePeriod.startDay).setHours(0, 0 , 0, 0) &&
        new Date(spend.dateSpending).setHours(0, 0 , 0, 0)  <= new Date(this.reportPeriod[0].timePeriod.endDay).setHours(0, 0 , 0, 0); } )
        .reduce((sum, current) => sum + current.valueSpending, 0);

      // spendings of the month
      this.spendMois = this.dataSpendings.filter((spend: Spending) => {
        // tslint:disable-next-line:no-unused-expression
        return new Date(spend.dateSpending).setHours(0, 0 , 0, 0)
        >= new Date(this.reportPeriod[1].timePeriod.startDay).setHours(0, 0 , 0, 0) &&
        new Date(spend.dateSpending).setHours(0, 0 , 0, 0)  <= new Date(this.reportPeriod[1].timePeriod.endDay).setHours(0, 0 , 0, 0); } )
      .reduce((sum, current) => sum + current.valueSpending, 0);

      // spendings of the quarter
      this.spendTrim = this.dataSpendings.filter((spend: Spending) => {
        // tslint:disable-next-line:no-unused-expression
        return new Date(spend.dateSpending).setHours(0, 0 , 0, 0)
         >= new Date(this.reportPeriod[2].timePeriod.startDay).setHours(0, 0 , 0, 0) &&
        new Date(spend.dateSpending).setHours(0, 0 , 0, 0)  <= new Date(this.reportPeriod[2].timePeriod.endDay).setHours(0, 0 , 0, 0); } )
      .reduce((sum, current) => sum + current.valueSpending, 0);
  }

  // getTotal(data: any []) {
  //   return data.map(t => t).reduce((acc, value) => acc + value, 0);
  // }

  getCashData() {

    this.accountBalances
    .pipe(
      switchMap( data => data as CashBalance[]),
      groupBy((cb) => cb.payMode),
      mergeMap(cashBal => cashBal.pipe(
        reduce(
          (acc, curr) => {
            acc.payMode = acc.payMode || curr.payMode;
            acc.balance = acc.balance + curr.balance;
            console.log(acc);

            return acc;
          }, {
            payMode: null, balance: 0
          } )
      ))
    ).subscribe(result => {
      this.comptes.push(result);
      console.log(this.comptes);

    });


    this.accountBalances.subscribe( don => console.log(don)
    );
    const example = this.accountBalances
    .pipe(
      reduce((acc, curr, id) => {
        acc[id].balance = acc[id].balance + curr[id].balance;
        console.log(acc);
        return acc;
      })
      );






    //  return  this.accountBalances;
  }
}


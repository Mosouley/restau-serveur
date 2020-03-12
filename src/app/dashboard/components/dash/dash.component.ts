import { isUndefined } from 'util';
import { PaymentMode } from './../../../shared/model/invoice';
import { async } from '@angular/core/testing';
import { tap, reduce, groupBy, mergeMap, flatMap, switchMap, map, toArray, filter, concatMap, concatAll } from 'rxjs/operators';
import { CashBalance } from './../../../shared/model/cashBalance';
import { HistoricCashBalanceService } from './../../../services/HistoricCashBalance.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../../../shared/model/invoice';
import { TransactionLine } from '../../../shared/model/transactionLine';
import { Spending } from '../../../shared/model/spendings';
import { from, Observable } from 'rxjs';
import { resultMemoize } from '@ngrx/store';

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
  styleUrls: ['./dash.component.scss']
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
  totalInflows = 0;
  comptes = [];
  accountData = [];

  // Charts info
  // object contains the name,centures of the cricketers this is the data we will use to draw the chart

  // meta Info object holds lot of properties describes the title and color and othe meta info for chart
  cricketersInfo;

// Metadata for the chart like width and height of the chart, Title for the chart, Title color etc..
metaInfo ;

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
    this.accountBalances.subscribe( ex => this.accountData = ex);
    this.getCashData(new Date('03/01/2020'), today);

    this.cricketersInfo = [
      {'name': 'Sachin T', 'centuries': 49},
      {'name': 'Kohli  V', 'centuries': 43},
      {'name': 'Rohit  S', 'centuries': 28},
      {'name': ' Ganguly ', 'centuries': 22},
      {'name': 'Dhawan', 'centuries': 17},
    ];

    this.metaInfo = {
      'chartWidth': '300',
      'chartHeight': '200',
      'title': 'Evolution chiffres d Affaires',
      'titleColor': 'white',
      'titleFont': '20px sans-serif',
      'columnTitleColor': 'white',
      'columnFont': '8px sans-serif',
      'footerTitle': 'Cricketer',
      'footerColor': '#c1d0cd',
      'footerFont': '12px sans-serif',
      'leftaxisColor': '#c1d0cd',
      'leftaxisFont': '10px sans-serif',
      };
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

  getCashData(start, end) {



        from(this.accountData).pipe(
          groupBy(tx => tx.payMode),
          // flatMap(group => group.pipe(toArray()))
          mergeMap(transac =>
          transac.pipe(
            reduce(
              (acc, curr) => {
                acc.payMode = acc.payMode || curr.payMode;
                acc.solde += curr.balance;
                return acc;
              },
              {   payMode: null, solde: 0 }
            )
          )
        )
        ).subscribe( result => {
          // console.log(result);
          this.comptes.push(result);
          this.totalInflows = this.comptes.filter(elm => elm !== undefined && elm.payMode !== 'CREDIT')
          .reduce((a, b) => a + (b['solde'] || 0), 0);

        }
);

  }
}


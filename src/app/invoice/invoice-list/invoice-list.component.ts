import { Invoice } from './../../shared/model/invoice';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../../shared/model/client';
import { Produit } from '../../shared/model/produit';
import { Category } from '../../shared/model/category';
import { InvoiceService } from '../../services/invoice.service';
import { MatDialogConfig, MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { InvoiceCreateComponent } from '../invoice-create/invoice-create.component';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit, AfterViewInit {


  invoiceList;
  clients: Client[];
  produits: Produit[];
  categories: Category[];
  public displayedColumns = [ 'dateTrans', 'invoiceRef', 'client',
  'paymentMode', 'statut', 'totalInvoice', 'details', 'delete'
];
  public dataSource = new MatTableDataSource<Invoice>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public aRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private invoiceService: InvoiceService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.clients = this.aRoute.snapshot.data.clients;
    this.categories = this.aRoute.snapshot.data.categories;
    this.produits = this.aRoute.snapshot.data.produits;
    this.refreshList();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  refreshList() {
    this.invoiceService.getAll().subscribe(res => this.dataSource.data = res);
  }

  openForEdit(invoiceID: number) {
    this.router.navigate(['/invoice/edit/' + invoiceID]);
  }

  onInvoiceDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.invoiceService.delete(id).subscribe(res => {
        this.refreshList();
        this.toastr.warning('Deleted Successfully', 'Restaurent App.');
      });
    }
}

// launching the mat dialog of invoic
}

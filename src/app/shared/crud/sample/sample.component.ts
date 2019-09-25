
import {Component, Input, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';

import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { DataModel } from '../../model/data.model';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {


  @Input()
  data: any;

  @Input()
  arrayData;

  @Input()
  service: DataService;

  @Input()
  title: string;

  @Input()
  initItem: any;

  @Input()
  dataModelList: DataModel[];

  @Input()
  arrayModelList: DataModel[];

  @Input()
  initForm: FormGroup;

  crudForm: FormGroup;

  operation = 'add';


  selectedItem: any;

  @Input()
  enumElements = [] ;
  @Input()
  enumType: any;

  @Output ()
  selectedItemChange: EventEmitter<boolean> = new EventEmitter<boolean>();



  constructor(private fb: FormBuilder) {
    this.createForm();

  }

  ngOnInit() {
    this.initData();
    if (this.enumType != null) {
    this.enumElements = Object.keys(this.enumType).filter(f => !isNaN(Number(f)));
    }
    // this.onChange();
  }

  getValues() {
     this.crudForm.patchValue(this.selectedItem);
  }

  onChange() {

    this.crudForm.valueChanges.subscribe(val => {
      // this.selectedItem = event.target.value;
      this.selectedItem = val;
      this.selectedItemChange.emit(this.selectedItem);
      // console.log(this.selectedItem);
      //  this.crudForm.patchValue(this.selectedItem);
    });
  }
  createForm() {
    this.initForm ? this.crudForm = this.initForm : this.crudForm = this.fb.group({});
  }

  loadData() {
    this.service.getAll().subscribe(data => {
      this.data = data;
    });
  }

  add() {
    const p = this.crudForm.value;
    this.service.create(p).subscribe(res => {this.loadData();
    });
    this.initData();
  }

  update() {
    this.service.update(this.selectedItem).subscribe(res => {
      this.initData();
      this.loadData();
    });
  }

  initData() {
    this.selectedItem = this.initItem;
    this.createForm();
  }

  delete() {
    this.service.delete(this.selectedItem.id).subscribe(res => {
      this.selectedItem = this.initItem;
      this.loadData();
    });
  }


}

import { DataService } from './../../services/data.service';
import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CrudService} from '../../services/crud.service';
import { DataModel } from '../model/data.model';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  crudType = 'sample';

  @Input('data')
  data: any;

  @Input('arrayData')
  arrayData: any;

  @Input('service')
  service: DataService;

  @Input('title')
  title: string;

  @Input()
  initItem: any;

  @Input()
  dataModelList: DataModel[];
  @Input()
  arrayModelList: DataModel[];
  @Input()
  enumElements = [];
  @Input()
  enumType;
  @Input()
  initForm: FormGroup;

  crudForm: FormGroup;

  operation = 'add';

  selectedItem: any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }
}

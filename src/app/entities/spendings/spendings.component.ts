import { TypeSpending } from './../../shared/model/spendings';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataModel } from './../../shared/model/data.model';
import { Component, OnInit } from '@angular/core';
import { Spending } from '../../shared/model/spendings';
import { ActivatedRoute } from '@angular/router';
import { SpendingsService } from '../../services/spendings.service';

@Component({
  selector: 'app-spendings',
  templateUrl: './spendings.component.html',
  styleUrls: ['./spendings.component.css']
})
export class SpendingsComponent implements OnInit {

  spendings: Spending [];
  spendingModel: DataModel [];
  spendingForm: FormGroup;
  spending: Spending;
  typeSpending = TypeSpending;
  typeSpendings = [];

  constructor(public spendingService: SpendingsService,
              private fb: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.spendingModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('dateSpending', 'Date Dep', 'date', false, []),
      new DataModel('typeSpending', 'Type Depense', 'enum', false, []),
      new DataModel('valueSpending', 'Montant Depense', 'number', false, []),
      new DataModel('commentSpending', 'Commentaire', 'string', false, [])
    ];
    this.spendings = this.route.snapshot.data.spendings;
    const numberPatern = '^[0-9.,]+$';
    this.spendingForm = this.fb.group({
      dateSpending: ['', Validators.required],
      typeSpending: ['', Validators.required],
      valueSpending: ['', [Validators.required, Validators.pattern(numberPatern)]],
      commentSpending: ''
    });

  }

}

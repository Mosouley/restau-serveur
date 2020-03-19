import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ClientService } from '../../services/client.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../../shared/model/client';
import { DataModel } from '../../shared/model/data.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clients: Client[];

  clientForm: FormGroup;

    client: Client = new Client();

  clientsModel: DataModel[];

  constructor(public clientService: ClientService,
              private fb: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.clientService.getAll().subscribe(
    //   response => {
    //     this.clients = response as Client[];
    //   }

    // );
    this.clients = this.route.snapshot.data.clients;

    this.clientForm = this.fb.group({

      nameClient: ['', Validators.required],
      codeIfuClient: ['', Validators.required],
      phoneClient: ['', Validators.required]

    });

    this.clientsModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('nameClient', 'Nom Client', 'string', false, []),
      new DataModel('codeIfuClient', 'Code Ifu', 'string', false, []),
      new DataModel('phoneClient', 'Phone', 'string', false, [])


    ];
  }

}

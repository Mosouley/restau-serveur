import { ClientService } from './../../services/client.service';
import {Injectable} from '@angular/core';

import {Resolve} from '@angular/router';



@Injectable()
export class ClientResolver implements Resolve<any> {

  constructor(private clientService: ClientService) {
  }

  resolve() {
    return this.clientService.getAll();
  }
}

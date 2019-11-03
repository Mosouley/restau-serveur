import { ToastrService } from 'ngx-toastr';
import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {

  constructor (private tostr: ToastrService) {}

    handleError(error) {
      this.tostr.error('Une erreur est survenue, merci de verifier :' + error);
      //  alert('An expected error occured :' + error);
        console.log(error);
    }
}

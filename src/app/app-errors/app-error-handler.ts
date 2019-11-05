import { ToastrService } from 'ngx-toastr';
import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {

    handleError(error) {
      alert('Une erreur est survenue, merci de verifier :' + error);
    }
}

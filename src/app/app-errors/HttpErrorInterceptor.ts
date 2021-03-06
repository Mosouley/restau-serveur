import { ToastrService } from 'ngx-toastr';
import { HttpInterceptor,
     HttpRequest,
     HttpHandler,
     HttpResponse,
     HttpErrorResponse,
     HttpEvent} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BadInput } from './bad-input';

export class HttpErrorInterceptor implements HttpInterceptor {

  constructor (public toastr: ToastrService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
        .pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = `Error: ${error.error.message}`;

                } else if ( error.status === 400) {
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                }
                window.alert(errorMessage);
                // this.toastr.error(errorMessage);
                return throwError(errorMessage);
            })
        );
    }
}

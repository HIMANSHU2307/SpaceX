// import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(
      // private toastr: ToastrService
      ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const key = sessionStorage.getItem('userToken');
        // const authKey = 'bearer ' + sessionStorage.getItem('userToken');
        // if (authKey && key) {
          // debugger;
            request = request.clone({
                setHeaders: {
                    // Authorization: authKey
                }
            });
        // }

        return next.handle(request)
            .pipe(
              catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                if (error.error instanceof ErrorEvent) {
                  errorMsg = `Error: ${error.error.message}`;
                }
                else {
                  errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                }
                alert(errorMsg);
                return throwError(errorMsg);
              })
            );
    }
}

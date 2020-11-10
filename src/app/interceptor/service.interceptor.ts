import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(
      ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            request = request.clone({
                setHeaders: {
                }
            });
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

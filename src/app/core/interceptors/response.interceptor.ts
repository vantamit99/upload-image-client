import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        let messageErr = '';
        if(err.status == 409) {
          messageErr = err.error.errors.join('<br />')
          return throwError(messageErr)
        }
        messageErr = err.error.errors.join('<br />')      
        return throwError(messageErr);
      })
    );
  }
}

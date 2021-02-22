import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AcortadorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = '00bdb4bae0ccde68c0ba65b97c6b10c623f21918';

    request = request.clone({ setHeaders: {Authorization: 'Bearer '+ TOKEN} })
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error);
    }));
  }
}

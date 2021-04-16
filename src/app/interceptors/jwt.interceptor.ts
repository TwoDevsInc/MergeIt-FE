import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if(token) {
      const tokenObject = JSON.parse(token);
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + tokenObject.jwt)
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}

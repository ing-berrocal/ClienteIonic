import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class HTTPInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headerReq = req.clone({
        headers: req.headers.set('Access-Control-Allow-Origin', '*')
      });
  
      // send cloned request with header to the next handler.
      return next.handle(headerReq);          
  }
}
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.tokenService.possuiToken()) {
      const token = this.tokenService.retornaToken();
      const headers = new HttpHeaders().append('Authorization', `Bearer  ${token}`);

      request = request.clone({ headers });
    }
    console.log('intercepted', request)
    return next.handle(request);
  }
}

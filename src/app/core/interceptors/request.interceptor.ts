import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from 'src/app/core/services/jwt.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.jwtService.getToken()) {
      if(request.headers.has('content-type')) {
        request = request.clone({
          headers: new HttpHeaders({
            "Content-Type": request.headers.get('content-type'),
            "Authorization": this.jwtService.getToken(),
            "Accept": 'application/json'
          })
        })
      } else {
        request = request.clone({
          headers: new HttpHeaders({            
            "Authorization": this.jwtService.getToken()
          })
        })
      }
    } 
    return next.handle(request);    
  }
}

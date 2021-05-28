import { Injectable } from '@angular/core';
import * as COOKIE from '../utils/cookie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  access_token: string;
  token_type: string;
  expires_in: Date;

  constructor() { }

  getToken() {
    if(this.hasSaveToken()) {
      return `${this.token_type} ${this.access_token}`;
    } else {
      return '';
    }
  }
  setToken(data) {
    this.access_token = data.access_token;
    this.token_type = data.token_type;
    this.expires_in = data.expires_in || 10;
    COOKIE.set(environment.cookieKeys.token, this.access_token, this.expires_in);
    COOKIE.set(environment.cookieKeys.type, this.token_type, this.expires_in);
  }  
  removeToken() {
    COOKIE.remove(environment.cookieKeys.token);
    COOKIE.remove(environment.cookieKeys.type);
  }
  hasSaveToken() {
    this.access_token = COOKIE.get(environment.cookieKeys.token);
    this.token_type = COOKIE.get(environment.cookieKeys.type);
    return (this.access_token && this.token_type) ? true : false;
  }
}

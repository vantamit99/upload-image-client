import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as URL from 'src/app/core/utils/url';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(endpoint: string) {  
    return this.http.get(URL.merge(environment.API_URL, endpoint));
  }

  post(endpoint: string, data: any = {}, option: any = null) {
    let httpOptions = {};
    if(!option && option.type != 'multipart/formdata') {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': (option && option.type) ? option.type : 'application/json'
        })
      }
    } else {
      httpOptions = {
        headers: new HttpHeaders({})          
      }
    }
    return this.http.post(URL.merge(environment.API_URL, endpoint), data, httpOptions);
  }

  put(endpoint: string, id: number, data: any = {}, option: any = null) {
    let httpOptions = {};
    if(!option && option.type != 'multipart/formdata') {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': (option && option.type) ? option.type : 'application/json'
        })
      }
    } else {
      httpOptions = {
        headers: new HttpHeaders({})          
      }
    }
    return this.http.put(URL.merge(environment.API_URL, endpoint, id), data, httpOptions);
  }

  patch(endpoint: string, id: number, data: any = {}, option: any = null) {
    let httpOptions = {};
    if(!option && option.type != 'multipart/formdata') {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': (option && option.type) ? option.type : 'application/json'
        })
      }
    } else {
      httpOptions = {
        headers: new HttpHeaders({})          
      }
    }
    return this.http.patch(URL.merge(environment.API_URL, endpoint, id), data, httpOptions);
  }

  delete(endpoint: string, id: number) {
    return this.http.delete(URL.merge(environment.API_URL, endpoint, id));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UPLOAD_ENDPOINT } from 'src/app/core/enums/endpoints.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { Upload } from 'src/app/core/models/upload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  upload: Upload;

  constructor(private http: HttpClient, private apiService: ApiService) { }

  uploadLogin(formData): Observable<Upload> {    
    return this.apiService.post(UPLOAD_ENDPOINT.UPLOAD, formData, {type: 'multipart/form-data'}).pipe(
      map((res: any) => {      
        this.upload = new Upload(res.data.upload);
        return this.upload;
      })
    )
  }

  uploadNoLogin(cloudUrl, formData, options: any = null) {
    let httpOptions = {};
    if(!options || options.type != 'multipart/form-data') {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': (options && options.type) ? options.type : 'application/json'
        })
      }
    } else {
      httpOptions = {
        headers: new HttpHeaders({})
      }
    }

    return this.http.post(cloudUrl, formData, httpOptions).pipe(
      map(res => {
        return res;
      })
    )
  }
}

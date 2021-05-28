import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { USER_ENDPOINT } from 'src/app/core/enums/endpoints.enum';
import { map } from 'rxjs/operators';
import { ListUpload } from 'src/app/core/models/list-upload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  arrListUpload: Array<ListUpload>;

  constructor(private apiService: ApiService) { }

  getAlbum(): Observable<ListUpload[]> {
    return this.apiService.get(USER_ENDPOINT.MANAGER).pipe(
      map((res: any) => {
        this.arrListUpload = res.data.list_upload.map(upload => new ListUpload(upload));
        return this.arrListUpload;
      })
    )
  }
}

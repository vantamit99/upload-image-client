import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AUTH_ENDPOINT } from 'src/app/core/enums/endpoints.enum';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private apiService: ApiService) { }

  updateProfile(formData) {    
    return this.apiService.post(AUTH_ENDPOINT.PROFILE, formData, {type: 'multipart/form-data'}).pipe(
      map(res => {       
        return res;
      })
    )
  }
}

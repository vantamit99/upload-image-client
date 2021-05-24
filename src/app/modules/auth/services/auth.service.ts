import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { AUTH_ENDPOINT } from 'src/app/core/enums/endpoints.enum';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  register(formData) {
    return this.apiService.post(AUTH_ENDPOINT.REGISTER, formData).pipe(
      map(res => {
        return res;
      })
    )
  }
}

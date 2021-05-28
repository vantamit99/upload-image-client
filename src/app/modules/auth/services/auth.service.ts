import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { JwtService } from 'src/app/core/services/jwt.service';
import { AUTH_ENDPOINT } from 'src/app/core/enums/endpoints.enum';
import { map } from 'rxjs/operators';
import { User } from 'src/app/core/models/user';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = false;
  profile$: Subject<User> = new Subject<User>();
  isLogin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUser: User;

  constructor(
    private apiService: ApiService, 
    private jwtService: JwtService,  
  ) { }

  register(formData) {
    return this.apiService.post(AUTH_ENDPOINT.REGISTER, formData).pipe(
      map(res => {
        return res;
      })
    )
  }

  login(formData) {
    return this.apiService.post(AUTH_ENDPOINT.LOGIN, formData).pipe(
      map((res: any) => {
        this.isLogin = true;
        this.isLogin$.next(true);
        this.jwtService.setToken(res.data);        
        return res.data;
      })
    )
  }

  logout() {
    this.isLogin$.next(false);
    this.jwtService.removeToken();
    this.currentUser = null;
    this.profile$.next(this.currentUser);    
  }

  getProfile() {
    return this.apiService.get(AUTH_ENDPOINT.PROFILE).pipe(
      map((res: any) => {
        this.currentUser = new User(res.data);  
        this.profile$.next(this.currentUser);
        console.log(this.currentUser);     
        return res.data;
      })
    )
  }

  isAuthenticated() {  
    if(this.isLogin) true;
    if(this.jwtService.hasSaveToken()) {     
      this.getProfile().subscribe();
      this.isLogin$.next(true);
      return true;
    } else {      
      return false;
    }
  }
}

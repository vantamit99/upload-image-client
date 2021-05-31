import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { language } from 'src/app/core/interfaces/language';
import { LanguageService } from 'src/app/shared/services/language.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { User } from 'src/app/core/models/user';
import { UploadDialog } from 'src/app/shared/dialogs/upload/upload.dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {  
  isLogin: boolean = false;
  profile: User = null;

  arrLanguage: language[] = [
    {
      name: 'Tiếng việt',
      code: 'vn'
    },
    {
      name: 'English',
      code: 'en'
    }
  ];
  languageCode: string;

  constructor(
    private languageService: LanguageService,
    private authService: AuthService,
    public dialog: MatDialog,  
    
  ) { }

  ngOnInit(): void {   
    if(this.authService.isAuthenticated()) {
      this.authService.isLogin$.subscribe((res: boolean) => {
        this.isLogin = res;
      })
      this.authService.profile$.subscribe((res: User) => {
        this.profile = res;
      })
    }
    this.languageService.language$.subscribe(res => {   
      this.languageCode = res;
    })
  }

  updateLanguage(code) {
    this.languageService.language$.next(code);
  }

  onLogout() {
    this.authService.logout();   
  }

  onOpenUpload() {    
    this.dialog.open(UploadDialog, {
      minWidth: 800
    })
  }
}

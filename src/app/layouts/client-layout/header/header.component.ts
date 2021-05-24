import { Component, OnInit } from '@angular/core';
import { language } from 'src/app/core/interfaces/language';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {  
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

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {   
    this.languageService.language$.subscribe(res => {   
      this.languageCode = res;
    })
  }

  updateLanguage(code) {
    this.languageService.language$.next(code);
  }
}

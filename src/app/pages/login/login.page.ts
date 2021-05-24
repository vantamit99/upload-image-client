import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styles: [
  ]
})
export class LoginPage implements OnInit {
  language: string;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.language$.subscribe(res => {
      this.language = res;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styles: [
  ]
})
export class RegisterPage implements OnInit {
  language: string;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.language$.subscribe(res => {
      this.language = res;
    })
  }
}

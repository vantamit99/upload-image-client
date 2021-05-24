import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styles: [
  ]
})
export class HomePage implements OnInit {
  language: string;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.language$.subscribe(res => {
      this.language = res;
    })
  }
}

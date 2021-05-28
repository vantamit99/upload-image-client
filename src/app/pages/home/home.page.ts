import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadDialog } from 'src/app/shared/dialogs/upload/upload.dialog';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styles: [
  ]
})
export class HomePage implements OnInit {
  language: string;

  constructor(
    private languageService: LanguageService,
    public dialog: MatDialog,  
  ) { }

  ngOnInit(): void {
    this.languageService.language$.subscribe(res => {
      this.language = res;
    })
  }

  onOpenUpload() {    
    this.dialog.open(UploadDialog, {
      minWidth: 800
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LanguageService } from 'src/app/shared/services/language.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AlertDialog } from 'src/app/shared/dialogs/alert/alert.dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styles: [
  ]
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  language: string;

  constructor(
    private languageService: LanguageService,
    private authService: AuthService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.languageService.language$.subscribe(res => {
      this.language = res;
    });

    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', Validators.required]
    })
  }

  onLogin() {
    this.authService.login(this.formLogin.value).subscribe(
      res => {
        this.authService.getProfile().subscribe(res => {
          this.router.navigateByUrl('/')
        })        
      },
      err => {
        this.dialog.open(AlertDialog, {
          data: {
            title: 'Errors',
            content: err
          }, 
          minWidth: 450
        })
      }
    )
  }
}

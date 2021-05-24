import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/shared/services/language.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AlertDialog } from 'src/app/shared/dialogs/alert/alert.dialog';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styles: [
  ]
})
export class RegisterPage implements OnInit {
  formRegister: FormGroup;
  language: string;

  constructor(
    private fb: FormBuilder,
    private languageService: LanguageService,
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.languageService.language$.subscribe(res => {
      this.language = res;
    });
    this.formRegister = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', Validators.required]
    })
  }

  onRegister() {
    this.authService.register(this.formRegister.value).subscribe(
      res => {

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

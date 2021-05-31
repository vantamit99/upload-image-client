import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ProfileService } from 'src/app/modules/profile/services/profile.service';
import { User } from 'src/app/core/models/user';
import { changeImage } from 'src/app/shared/functions/changeImage';
import { SpinnerDialog } from 'src/app/shared/dialogs/spinner/spinner.dialog';
import { LanguageService } from 'src/app/shared/services/language.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styles: [
  ]
})
export class ProfilePage implements OnInit {
  formUpdate: FormGroup;
  profile: User;
  selectedFile: File;
  isChange: boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  language: string;

  constructor(
    private authService: AuthService, 
    private profileService: ProfileService,
    private fb: FormBuilder,
    public dialog: MatDialog,  
    private _snackBar: MatSnackBar,
    private languageService: LanguageService,  
  ) { }

  ngOnInit(): void {
    this.languageService.language$.subscribe(res => {
      this.language = res;
    })
    let promise = new Promise((resolve) => {
      this.authService.profile$.subscribe((res: User) => {
        this.profile = res;   
        resolve(this.profile);
      })
    })
    promise.then((profile: User) => {
      this.formUpdate = this.fb.group({
        firstname: [profile.firstname],
        lastname: [profile.lastname],
        email: [profile.email],                
      })
    })    
  }

  onChangeImage(e) {
    this.selectedFile = e.target.files[0];
    changeImage('upload-image', this.selectedFile);
    this.isChange = true;
  }

  onUpdate() {     
    let fData = this.formUpdate.value;
    let formData = new FormData();
    formData.append('firstname', fData.firstname);
    formData.append('lastname', fData.lastname);
    formData.append('email', fData.email);  
    formData.append('id', this.profile.id);  
    if(this.isChange) {     
      formData.append('file', this.selectedFile)
    }
    this.dialog.open(SpinnerDialog);
    this.profileService.updateProfile(formData).subscribe(
      res => {
        this._snackBar.open('Cập nhật thông tin thành công!!!', '', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 2000,   
          panelClass: ['update__profile--success']       
        });
        this.dialog.closeAll();
      }
    );
  }
}

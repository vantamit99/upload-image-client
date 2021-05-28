import { Component, OnInit } from '@angular/core';
import { changeImage } from 'src/app/shared/functions/changeImage';
import { environment } from 'src/environments/environment';
import { UploadService } from '../../services/upload.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Upload } from 'src/app/core/models/upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.dialog.html',
  styleUrls: []
})
export class UploadDialog implements OnInit {
  selectedFile: File;
  isChangeImage: boolean = false;

  constructor(
    private uploadService: UploadService,
    private authService: AuthService  
  ) { }

  ngOnInit(): void {
  }

  onChangeImage(e) {
    let domId = 'upload-image';
    this.selectedFile = e.target.files[0];
    changeImage(domId, this.selectedFile);
    this.isChangeImage = true;
  }

  onUpload() {
    let formData = new FormData();
    formData.append('file', this.selectedFile);
    
    if(this.authService.isAuthenticated()) {     
      this.uploadService.uploadLogin(formData).subscribe((res: Upload) => { 
        console.log(res);       
        let url = res.image;
        let resultUpload = document.getElementById('result-upload') as HTMLInputElement;
        resultUpload.value = url;
        resultUpload.style.display = 'block';
        
      })
    } else {
      formData.append('upload_preset', environment.CLOUNDINARY_UPLOAD_PRESET);    
      this.uploadService.uploadNoLogin(environment.CLOUNDINARY_URL, formData, {type: 'multipart/form-data'}).subscribe(
        (res: any) => {
          let url = res.url;
          let resultUpload = document.getElementById('result-upload') as HTMLInputElement;
          resultUpload.value = url;
          resultUpload.style.display = 'block';
        }
      );
    }
   
  }
}

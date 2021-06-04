import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ManagerService } from 'src/app/modules/manager/services/manager.service';
import { ListUpload } from 'src/app/core/models/list-upload';
import { User } from 'src/app/core/models/user';
import { ConfirmDialog } from 'src/app/shared/dialogs/confirm/confirm.dialog';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styles: [
  ]
})
export class ManagerPage implements OnInit {
  arrListUpload: Array<ListUpload>;
  arrListUploadCopy: Array<ListUpload>;
  profile: User;
  query: any = {};
  language: string;

  constructor(
    private authService: AuthService, 
    private managerService: ManagerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {    
    this.languageService.language$.subscribe(res => {
      this.language = res;
      console.log(this.language)
    })
    this.router.navigate(['/manager'], {queryParams: {album:'all'}});
    this.activatedRoute.queryParams.subscribe(res => {
      this.query = res;
      if(res.album == 'all') {
        this.getAlbum();
      }
      if(res.sort == 'like') {
        this.getAlbumLike();
      }
    })
   
    this.authService.profile$.subscribe((res: User) => {
      this.profile = res;           
    });    
  }

  getAlbum() {
    this.managerService.getAlbum().subscribe((res: ListUpload[]) => {         
      this.arrListUploadCopy = res;       
      if(res.length >= 10) {
        this.arrListUpload = this.showImageMaximum(res, 0, 10);
      } else {
        this.arrListUpload = res;
      }
    })
  }

  getAlbumLike() {
    this.arrListUpload = this.arrListUploadCopy.filter((item: any) => {
      return item._upload.isLike == true;
    })
    this.arrListUploadCopy = this.arrListUpload;
  }

  showImageMaximum(arr, start, end) {    
    let arrNew: ListUpload[] = arr.slice(start, end);
    return arrNew;
  }

  onChangePagination(e) {      
    let start = e.pageIndex * e.pageSize;
    let end = start + e.pageSize;
    this.arrListUpload = this.showImageMaximum(this.arrListUploadCopy, start, end);  
  }

  onLike(id) {
    this.managerService.like(id).subscribe(res => {
      const id = res._id;
      this.arrListUpload = this.arrListUpload.map((item: any) => {
        if(item.id == id) {
          item._upload.isLike = true;
        }
        return item;
      })
      this.arrListUploadCopy = this.arrListUploadCopy.map((item: any) => {
        if(item.id == id) {
          item._upload.isLike = true;
        }
        return item;
      })
    });
  }

  onDelete(id) {
    let dialogData = this.dialog.open(ConfirmDialog, {
      data: {
        title: 'Delete',
        content: 'Do you want delete it?'
      },
      minWidth: 450
    });
    dialogData.afterClosed().subscribe(res => {
      if(res == true) {
        this.managerService.delete(id).subscribe(res => {
          this.getAlbum();          
        });
      }      
    }) 
   
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ManagerService } from 'src/app/modules/manager/services/manager.service';
import { ListUpload } from 'src/app/core/models/list-upload';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styles: [
  ]
})
export class ManagerPage implements OnInit {
  arrListUpload: Array<ListUpload>;
  profile: User;

  constructor(
    private authService: AuthService, 
    private managerService: ManagerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/manager'], {queryParams: {album:'all'}});
    this.activatedRoute.queryParams.subscribe(res => {
      if(res.album == 'all') {
        this.getAlbum();
      }
    })
   
    this.authService.profile$.subscribe((res: User) => {
      this.profile = res;       
    });    
  }

  getAlbum() {
    this.managerService.getAlbum().subscribe((res: ListUpload[]) => {
      this.arrListUpload = res; 
      console.log(res);     
    })
  }
}

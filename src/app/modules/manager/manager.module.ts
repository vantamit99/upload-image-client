import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManagerPage } from '../../pages/manager/manager.page';
import { ManagerAlbumComponent } from '../../pages/manager/manager-album/manager-album.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerPage,    
  }
]

@NgModule({
  declarations: [
    ManagerPage
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ManagerModule { }

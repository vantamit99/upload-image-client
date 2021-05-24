import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { ManagerPage } from '../../pages/manager/manager.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerPage
  }
]

@NgModule({
  declarations: [
    ManagerPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ManagerModule { }
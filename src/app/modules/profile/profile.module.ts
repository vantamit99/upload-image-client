import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProfilePage } from '../../pages/profile/profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
]

@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
    MatSnackBarModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }

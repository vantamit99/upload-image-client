import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

import { SharedModule } from 'src/app/shared/shared.module';
import { ClientLayoutComponent } from './client-layout.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import(`../../modules/home/home.module`).then(m => m.HomeModule)
      },
      {
        path: 'manager',
        loadChildren: () => import(`../../modules/manager/manager.module`).then(m => m.ManagerModule)
      },
      {
        path: 'profile',
        loadChildren: () => import(`../../modules/profile/profile.module`).then(m => m.ProfileModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    ClientLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule, 
    MatMenuModule,
    SharedModule,
    RouterModule.forChild(routes)   
  ]
})
export class ClientLayoutModule { }

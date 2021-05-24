import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NotFoundPage } from './pages/not-found/not-found.page';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./layouts/client-layout/client-layout.module`).then(m => m.ClientLayoutModule)
  },
  {
    path: 'auth',
    loadChildren: () => import(`./layouts/auth-layout/auth-layout.module`).then(m => m.AuthLayoutModule)
  },
  {
    path: '**',
    component: NotFoundPage
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

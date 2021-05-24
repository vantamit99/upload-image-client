import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { RequestInterceptor } from './core/interceptors/request.interceptor';
import { ResponseInterceptor } from './core/interceptors/response.interceptor';


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
    HttpClientModule, 
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

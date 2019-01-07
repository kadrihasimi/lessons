import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BeforeLoginService} from './services/before-login.service';
import {AfterLoginService} from './services/after-login.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
    {
        path: 'login',
        loadChildren: './auth/login/login.module#LoginModule',
        canActivate: [BeforeLoginService]
    },



  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
      canActivate: [BeforeLoginService]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },

    {
        path: 'register',
        loadChildren: './auth/register/register.module#RegisterModule'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

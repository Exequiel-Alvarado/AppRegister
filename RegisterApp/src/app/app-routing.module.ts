import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes,Route } from '@angular/router';
import { ErrorPageModule } from './error/error.module';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate:[GuardGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },{ path: '**', component: ErrorPageModule
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

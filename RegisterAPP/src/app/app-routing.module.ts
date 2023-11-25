import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
 
  
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },

  {
    path: 'menu',
    loadChildren: () => import('./menuexe/alumns/menu/menu.module').then( m => m.MenuPageModule)
  },

  {
    path: 'menu-scan-alumn',
    loadChildren: () => import('./menuexe/alumns/menu-scan-alumn/menu-scan-alumn.module').then( m => m.MenuScanAlumnPageModule)
  },
  {
    path: 'menu-asist-alumn',
    loadChildren: () => import('./menuexe/alumns/menu-asist-alumn/menu-asist-alumn.module').then( m => m.MenuAsistAlumnPageModule)
  },
  {
    path: 'menu-asist-alumn-details',
    loadChildren: () => import('./menuexe/alumns/menu-asist-alumn-details/menu-asist-alumn-details.module').then( m => m.MenuAsistAlumnDetailsPageModule)
  },
 
 
  {
    path: 'menu-prof',
    loadChildren: () => import('./menuexe/prof/menu-prof/menu-prof.module').then( m => m.MenuProfPageModule)
  },
  {
    path: 'menu-add-class-prof',
    loadChildren: () => import('./menuexe/prof/menu-add-class-prof/menu-add-class-prof.module').then( m => m.MenuAddClassProfPageModule)
  },
  {
    path: 'menu-qrprof',
    loadChildren: () => import('./menuexe/prof/menu-qrprof/menu-qrprof.module').then( m => m.MenuQRProfPageModule)
  },
  {
    path: 'menu-asist-prof',
    loadChildren: () => import('./menuexe/prof/menu-asist-prof/menu-asist-prof.module').then( m => m.MenuAsistProfPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },


 
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

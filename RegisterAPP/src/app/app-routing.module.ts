import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./loginexe/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./inoutexe/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menuexe/alumns/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'out',
    loadChildren: () => import('./inoutexe/out/out.module').then( m => m.OutPageModule)
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
    path: 'login-password',
    loadChildren: () => import('./loginexe/login-password/login-password.module').then( m => m.LoginPasswordPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./loginexe/register/register.module').then( m => m.RegisterPageModule)
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
  },  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },
  {
    path: 'guard',
    loadChildren: () => import('./guard/guard.module').then( m => m.GuardPageModule)
  }

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

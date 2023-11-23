import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPasswordPage } from './login-password.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPasswordPageRoutingModule {}

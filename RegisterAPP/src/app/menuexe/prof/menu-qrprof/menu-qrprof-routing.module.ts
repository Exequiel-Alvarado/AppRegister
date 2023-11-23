import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuQRProfPage } from './menu-qrprof.page';

const routes: Routes = [
  {
    path: '',
    component: MenuQRProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuQRProfPageRoutingModule {}

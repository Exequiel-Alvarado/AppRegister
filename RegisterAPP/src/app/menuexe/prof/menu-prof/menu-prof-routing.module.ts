import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuProfPage } from './menu-prof.page';

const routes: Routes = [
  {
    path: '',
    component: MenuProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuProfPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAddClassProfPage } from './menu-add-class-prof.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAddClassProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAddClassProfPageRoutingModule {}

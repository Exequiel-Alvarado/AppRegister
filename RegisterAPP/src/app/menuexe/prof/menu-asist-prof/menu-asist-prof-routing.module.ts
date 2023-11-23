import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAsistProfPage } from './menu-asist-prof.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAsistProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAsistProfPageRoutingModule {}

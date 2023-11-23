import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAsistAlumnPage } from './menu-asist-alumn.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAsistAlumnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAsistAlumnPageRoutingModule {}

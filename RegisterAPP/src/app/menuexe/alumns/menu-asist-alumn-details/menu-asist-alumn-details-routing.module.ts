import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAsistAlumnDetailsPage } from './menu-asist-alumn-details.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAsistAlumnDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAsistAlumnDetailsPageRoutingModule {}

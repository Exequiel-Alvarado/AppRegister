import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuScanAlumnPage } from './menu-scan-alumn.page';

const routes: Routes = [
  {
    path: '',
    component: MenuScanAlumnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuScanAlumnPageRoutingModule {}

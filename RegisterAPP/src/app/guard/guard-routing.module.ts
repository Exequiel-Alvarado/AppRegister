import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardPage } from './guard.page';

const routes: Routes = [
  {
    path: '',
    component: GuardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPage } from './error.page';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch:'full' },{ path: '**', component: ErrorPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorPageRoutingModule {}

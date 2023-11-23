import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAsistAlumnDetailsPageRoutingModule } from './menu-asist-alumn-details-routing.module';

import { MenuAsistAlumnDetailsPage } from './menu-asist-alumn-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAsistAlumnDetailsPageRoutingModule
  ],
  declarations: [MenuAsistAlumnDetailsPage]
})
export class MenuAsistAlumnDetailsPageModule {}

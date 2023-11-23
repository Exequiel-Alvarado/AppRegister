import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAsistAlumnPageRoutingModule } from './menu-asist-alumn-routing.module';

import { MenuAsistAlumnPage } from './menu-asist-alumn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAsistAlumnPageRoutingModule
  ],
  declarations: [MenuAsistAlumnPage]
})
export class MenuAsistAlumnPageModule {}

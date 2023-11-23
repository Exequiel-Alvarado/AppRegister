import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAsistProfPageRoutingModule } from './menu-asist-prof-routing.module';

import { MenuAsistProfPage } from './menu-asist-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAsistProfPageRoutingModule
  ],
  declarations: [MenuAsistProfPage]
})
export class MenuAsistProfPageModule {}

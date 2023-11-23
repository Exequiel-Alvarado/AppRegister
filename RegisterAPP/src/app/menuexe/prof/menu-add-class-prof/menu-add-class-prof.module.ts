import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAddClassProfPageRoutingModule } from './menu-add-class-prof-routing.module';

import { MenuAddClassProfPage } from './menu-add-class-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAddClassProfPageRoutingModule
  ],
  declarations: [MenuAddClassProfPage]
})
export class MenuAddClassProfPageModule {}

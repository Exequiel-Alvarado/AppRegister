import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuQRProfPageRoutingModule } from './menu-qrprof-routing.module';

import { MenuQRProfPage } from './menu-qrprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuQRProfPageRoutingModule
  ],
  declarations: [MenuQRProfPage]
})
export class MenuQRProfPageModule {}

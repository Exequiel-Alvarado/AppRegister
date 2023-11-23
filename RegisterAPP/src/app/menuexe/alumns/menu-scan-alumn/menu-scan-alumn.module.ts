import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuScanAlumnPageRoutingModule } from './menu-scan-alumn-routing.module';

import { MenuScanAlumnPage } from './menu-scan-alumn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuScanAlumnPageRoutingModule
  ],
  declarations: [MenuScanAlumnPage]
})
export class MenuScanAlumnPageModule {}

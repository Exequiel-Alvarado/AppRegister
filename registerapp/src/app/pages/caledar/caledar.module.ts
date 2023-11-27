import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaledarPageRoutingModule } from './caledar-routing.module';

import { CaledarPage } from './caledar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaledarPageRoutingModule
  ],
  declarations: [CaledarPage]
})
export class CaledarPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutPageRoutingModule } from './out-routing.module';

import { OutPage } from './out.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutPageRoutingModule
  ],
  declarations: [OutPage]
})
export class OutPageModule {}

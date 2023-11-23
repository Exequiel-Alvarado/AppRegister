import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardPageRoutingModule } from './guard-routing.module';

import { GuardPage } from './guard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardPageRoutingModule
  ],
  declarations: [GuardPage]
})
export class GuardPageModule {}

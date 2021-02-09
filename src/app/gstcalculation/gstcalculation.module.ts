import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GstcalculationPageRoutingModule } from './gstcalculation-routing.module';

import { GstcalculationPage } from './gstcalculation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GstcalculationPageRoutingModule
  ],
  declarations: [GstcalculationPage]
})
export class GstcalculationPageModule {}

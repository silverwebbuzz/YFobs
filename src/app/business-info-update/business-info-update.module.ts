import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessInfoUpdatePageRoutingModule } from './business-info-update-routing.module';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
import { BusinessInfoUpdatePage } from './business-info-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Ionic4DatepickerModule,
    BusinessInfoUpdatePageRoutingModule
  ],
  declarations: [BusinessInfoUpdatePage]
})
export class BusinessInfoUpdatePageModule {}

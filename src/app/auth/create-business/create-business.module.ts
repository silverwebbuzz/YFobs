import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBusinessPageRoutingModule } from './create-business-routing.module';

import { CreateBusinessPage } from './create-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateBusinessPageRoutingModule
  ],
  declarations: [CreateBusinessPage]
})
export class CreateBusinessPageModule {}

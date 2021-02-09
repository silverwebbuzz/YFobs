import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GstPageRoutingModule } from './gst-routing.module';

import { GstPage } from './gst.page';
import { GstpaidPage } from './paid/gstpaid.page';
import { GstunpaidPage } from './unpaid/gstunpaid.page';
import { GstallPage } from './all/gstall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GstPageRoutingModule
  ],
  declarations: [GstPage,GstpaidPage,GstunpaidPage,GstallPage]
})
export class GstPageModule {}

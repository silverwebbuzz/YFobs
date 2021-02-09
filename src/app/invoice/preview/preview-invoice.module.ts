import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewInvoicePageRoutingModule } from './preview-invoice-routing.module';

import { PreviewInvoicePage } from './preview-invoice.page';
import { PinchZoomModule } from 'ngx-pinch-zoom';


@NgModule({
  imports: [
    CommonModule,
    PinchZoomModule,
    FormsModule,
    IonicModule,
    PreviewInvoicePageRoutingModule
  ],
  declarations: [PreviewInvoicePage]
})
export class PreviewInvoicePageModule {}

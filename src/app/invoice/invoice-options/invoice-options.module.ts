import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceOptionsPageRoutingModule } from './invoice-options-routing.module';

import { InvoiceOptionsPage } from './invoice-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceOptionsPageRoutingModule
  ],
  declarations: [InvoiceOptionsPage]
})
export class InvoiceOptionsPageModule {}

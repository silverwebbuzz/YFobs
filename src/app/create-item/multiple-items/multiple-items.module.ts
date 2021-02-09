import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultipleItemsPageRoutingModule } from './multiple-items-routing.module';

import { MultipleItemsPage } from './multiple-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultipleItemsPageRoutingModule
  ],
  declarations: [MultipleItemsPage]
})
export class MultipleItemsPageModule {}

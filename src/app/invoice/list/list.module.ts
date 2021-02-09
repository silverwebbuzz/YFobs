import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListPage } from './list.page';

import { ListPageRoutingModule } from './list-routing.module';
import { InvoiceViewPage } from '../view/invoice-view.page';
import { NotificationBellPage } from 'src/app/notification-bell/notification-bell.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule
  ],
  declarations: [ListPage,InvoiceViewPage,NotificationBellPage]
})
export class ListPageModule {}

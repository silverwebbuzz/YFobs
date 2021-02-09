import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { DashboardPage } from './dashboard.page';
import { NotificationBellPage } from '../notification-bell/notification-bell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,Ng2GoogleChartsModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage,NotificationBellPage]
})
export class DashboardPageModule {}

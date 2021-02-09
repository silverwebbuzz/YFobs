import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivePaymentPage } from './receive-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ReceivePaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceivePaymentPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewInvoicePage } from './preview-invoice.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewInvoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewInvoicePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GstcalculationPage } from './gstcalculation.page';

const routes: Routes = [
  {
    path: '',
    component: GstcalculationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GstcalculationPageRoutingModule {}

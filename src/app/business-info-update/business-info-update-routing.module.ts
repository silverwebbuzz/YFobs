import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessInfoUpdatePage } from './business-info-update.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessInfoUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessInfoUpdatePageRoutingModule {}

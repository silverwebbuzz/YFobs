import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleItemsPage } from './multiple-items.page';

const routes: Routes = [
  {
    path: '',
    component: MultipleItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultipleItemsPageRoutingModule {}

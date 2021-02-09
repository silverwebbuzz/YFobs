import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateItemPage } from './create-item.page';

const routes: Routes = [
  {
    path: '',
    component: CreateItemPage
  },
  {
    path: 'multiple-items',
    loadChildren: () => import('./multiple-items/multiple-items.module').then( m => m.MultipleItemsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateItemPageRoutingModule {}

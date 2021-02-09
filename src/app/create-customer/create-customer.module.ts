import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CreateCustomerPageRoutingModule } from './create-customer-routing.module';
import { NgxAutocompleteModule } from 'ngx-angular-autocomplete';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NgxAutocompleteModule,
    CreateCustomerPageRoutingModule
  ],
  declarations: []
})
export class CreateCustomerPageModule {}

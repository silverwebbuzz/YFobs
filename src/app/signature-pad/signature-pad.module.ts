import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignaturePadPageRoutingModule } from './signature-pad-routing.module';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SignaturePadPage } from './signature-pad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignaturePadModule,
    SignaturePadPageRoutingModule
  ],
  declarations: [SignaturePadPage]
})
export class SignaturePadPageModule {}

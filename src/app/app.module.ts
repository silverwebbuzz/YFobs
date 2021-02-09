import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateCustomerPage } from './create-customer/create-customer.page';
import { CreateItemPage } from './create-item/create-item.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Contacts } from '@ionic-native/contacts/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

//import { Camera } from '@ionic-native/camera/ngx';
import { PreviewInvoicePage } from './invoice/preview/preview-invoice.page';
import { SignaturePadPage } from './signature-pad/signature-pad.page';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import { NgxAutocompleteModule } from 'ngx-angular-autocomplete';
import { DatePipe } from '@angular/common';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import { ChartsModule } from 'ng2-charts'
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import {QRScanner} from '@ionic-native/qr-scanner/ngx';

@NgModule({
  declarations: [AppComponent, CreateCustomerPage, CreateItemPage, PreviewInvoicePage, SignaturePadPage],
  entryComponents: [CreateCustomerPage, CreateItemPage, PreviewInvoicePage, SignaturePadPage],
  imports: [BrowserModule, AutocompleteLibModule, IonicModule.forRoot({ mode: 'ios' }), AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, Ng2GoogleChartsModule, IonicStorageModule.forRoot(), NgxAutocompleteModule, PinchZoomModule, ChartsModule],
  providers: [
    InAppBrowser,
    SocialSharing,
    DatePipe,
    StatusBar,
    SplashScreen,
    Contacts,
    Network,
    File,
    FileOpener,
    OneSignal,
    Printer,
    AppRate,
    LocalNotifications,
    Firebase,
    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

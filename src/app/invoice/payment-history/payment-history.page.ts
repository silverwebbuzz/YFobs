import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/global/common_service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.page.html',
  styleUrls: ['./payment-history.page.scss'],
})
export class PaymentHistoryPage implements OnInit {

  InvoiceId
  PaymentHistory: any = [];
  PaymentMethods: any = [];

  constructor(
    private modalCtrl: ModalController, 
    private api: CommonService,
    private statusBar: StatusBar,
  ) { }

  ngOnInit() {
    if(this.InvoiceId){
      this.api.presentLoading();
      this.api.Get("invoice/getPaymentHistory/"+ this.InvoiceId).pipe(timeout(this.api.API_TIMEOUT)).subscribe(data => {
        this.PaymentHistory = data['data'].invoice_payments_records;
        this.PaymentMethods = data['data'].payment_methods;
        this.api.dismissLoading();
      },
      err => {
        this.api.dismissLoading();
        this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      });
    }
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFF');
  }

  Modalclose() {
    this.modalCtrl.dismiss();
  }

}

import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController,AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ReceivePaymentPage } from '../receive-payment/receive-payment.page';
import { InvoiceViewPage } from '../view/invoice-view.page';
import { PaymentHistoryPage } from '../payment-history/payment-history.page';
import { CommonService } from 'src/app/global/common_service';
import { timeout } from 'rxjs/operators';
import { RecurringPage } from '../recurring/recurring.page';

@Component({
  selector: 'app-invoice-options',
  templateUrl: './invoice-options.page.html',
  styleUrls: ['./invoice-options.page.scss'],
})
export class InvoiceOptionsPage implements OnInit {

  InvoiceId;
  InvoiceStatus;
  is_completed
  Recurring
  
  constructor(
    private popCtrl: PopoverController,
    public navCtrl: NavController,
    private modalCtrl: ModalController, private router: Router, 
    private alertCtrl: AlertController,
    private api: CommonService,
  ) { }

  ngOnInit() {
    this.Recurring = this.Recurring
    this.is_completed = this.is_completed
   }

  async edit() {
    this.popCtrl.dismiss();
    this.router.navigate(['/edit-invoice'], { queryParams: { InvoiceId: this.InvoiceId } });
  }

  async receive(id) {
    this.popCtrl.dismiss();
    this.router.navigate(['/receive-payment'], { queryParams: { InvoiceId: this.InvoiceId } });
  }

  async recuring(id) {
    this.popCtrl.dismiss();
    this.router.navigate(['/recurring'], { queryParams: { InvoiceId: this.InvoiceId } });
  }

  async history() {
    this.popCtrl.dismiss();
    const modal = await this.modalCtrl.create({
      component: PaymentHistoryPage,
      cssClass: 'payHistory_',
      backdropDismiss: false,
      swipeToClose: true,
      componentProps: {
        InvoiceId:this.InvoiceId
      }
    });
    return await modal.present();
  }
  
  async view(InvoiceId) {
    this.popCtrl.dismiss();
    const modal = await this.modalCtrl.create({
      component: InvoiceViewPage,
      backdropDismiss: false,
      swipeToClose: true,
      componentProps: {
        InvoiceId:InvoiceId
      }
    });
    modal.onDidDismiss().then((res) => {
      this.router.navigate(['/invoice-list']);
    })
    return await modal.present();
  }

  async delete(id, tabs) {
    var body = {
      InvoiceRowId: id
    }
    const alert = await this.alertCtrl.create({
      header: 'Remove invoice',
      message: 'Do you really want to remove?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (cancel) => {
            this.popCtrl.dismiss(false);
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.api.presentLoading();
            this.api.Post("invoice/delete", body).pipe(timeout(this.api.API_TIMEOUT)).subscribe(data => {
              this.api.presentToastWithOptions(data['message']);
              this.popCtrl.dismiss(true);
            },
            err => {
              this.api.dismissLoading();
              this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
          },
        }
      ]
    });
    await alert.present();
  }

  async stop_recuring() {
    var body = {
      id: this.InvoiceId
    }
    const alert = await this.alertCtrl.create({
      header: 'Stop Recurring',
      message: 'Do you really want to stop this recurring invoice?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (cancel) => {
            this.popCtrl.dismiss(false);
          }
        }, {
          text: 'Stop',
          handler: () => {
            this.api.presentLoading();
            this.api.Post("invoice/stopRecurring", body).subscribe(data => {
              this.api.presentToastWithOptions(data['message']);
              this.popCtrl.dismiss(true);
            })
          },
        }
      ]
    });
    await alert.present();
  }
 
}
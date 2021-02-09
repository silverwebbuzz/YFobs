import { Component } from '@angular/core';
import { NavController, PopoverController, Platform, AlertController } from '@ionic/angular';
import { CommonService } from '../../global/common_service';
import { ApiService } from '../../services/api.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Observable, from } from 'rxjs';
import * as _ from 'lodash';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
})

export class ListPage {

  reports: any = 'all';
  expenseAll: any = [];
  InvoicePackage: any = [];
  resp: any;

  constructor(
    private api: CommonService,
    public apiService: ApiService,
    private plt: Platform,
    private navctrl: NavController,
    private popCtrl: PopoverController,
    private statusBar: StatusBar, private alertCtrl: AlertController,
    private router: Router,
  ) { this.apiService.getPackageLimit(this.api.NetworkStatus).subscribe(res => { this.InvoicePackage = res.data.invoice; }) }

  ngOnInit() {

  }

  addExp() {
    this.router.navigate(['/expense-add']);
  }

  editExp(id) {
    this.router.navigate(['/expense-edit'], { queryParams: { id: id } });
  }

  loadData(refresh = false, refresher?) {
    if (!refresher) {
      this.api.presentLoading();
    }
    this.apiService.getExpense(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.resp = res;
      this.expenseAll = res.data ? res.data : [];
      if (refresher) {
        refresher.target.complete();
      } else {
        this.api.dismissLoading();
      }
    },
      err => {
        this.api.dismissLoading();
        this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      }
    );
  }

  searchBar(value) {
    let searchList = this.expenseAll;
    if (value) {
      searchList = _.filter(searchList, function (x) {
        if (x.vendor_name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return x.vendor_name ? x.vendor_name.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
        }
        else if (x.cat_name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return x.cat_name ? x.cat_name.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
        }
        else if (x.net_amount.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return x.net_amount ? x.net_amount.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
        }
      })

    } else {
      searchList = this.resp.data;
    }
    this.expenseAll = searchList;
  }

  async delete(id) {
    var body = {
      id: id
    }
    const alert = await this.alertCtrl.create({
      header: 'Remove expense',
      message: 'Do you really want to remove?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (cancel) => {
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.api.presentLoading();
            this.api.Post("Expense/delete", body).subscribe(data => {
              this.loadData(this.api.NetworkStatus);
              this.api.presentToastWithOptions(data['message']);
              this.api.dismissLoading()
            })
            this.api.dismissLoading()
          },
        }
      ]
    });
    await alert.present();
  }

  ionViewWillEnter() {
    this.plt.ready().then(() => {
      this.loadData(this.api.NetworkStatus);
    });
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFF');
  }

  ngOnDestroy() {

  }

}

import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { CommonService } from 'src/app/global/common_service';
import { ApiService } from 'src/app/services/api.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  customers: any;
  resp: any = [];

  constructor(
    private statusBar: StatusBar,
    public apiService: ApiService,
    private api: CommonService,
    private plt: Platform,
    private alertCtrl: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
    
  }
  
  loadData(refresh = false, refresher?, showLoading = true) {
    if (!refresher && showLoading) {
      this.api.presentLoading();
    }
    this.apiService.getCustomer(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe((res) => {
      this.resp = res;
      this.customers = res.data ? res.data : [];
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
    let searchList = this.customers;
    if (value) {
      searchList = _.filter(searchList, function (x) {
        if (x.name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return x.name ? x.name.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
        }
        else if (x.phone.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return x.phone ? x.phone.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
        }
      })
    } else {
      searchList = this.resp.data;
    }
    this.customers = searchList;
  }

  async delete(id) {
    var body = {
      id: id
    }
    const alert = await this.alertCtrl.create({
      header: 'Remove customer',
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
            this.api.Post("Customer/delete", body).subscribe(data => {
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

  addCust() {
    this.router.navigate(['/customers-add']);
  }

  editCust(id) {
    this.router.navigate(['/customers-edit'], {
      queryParams: { id: id },
    });
  }

}

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
  products: any = [];
  resp: any;

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

  addProd() {
    this.router.navigate(['/products-add']);
  }

  editProd(id) {
    this.router.navigate(['/products-edit'], { queryParams: { id: id } });
  }

  loadData(refresh = false, refresher?) {
    if (!refresher) {
      this.api.presentLoading();
    }
    this.apiService.getProduct(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.resp = res;
      this.products = res.data ? res.data : [];
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
    let searchList = this.products;
    if (value) {
      searchList = _.filter(searchList, function (x) {
        if (x.name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return x.name ? x.name.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
        }
        else if (x.hsncode.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return x.hsncode ? x.hsncode.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
        }
        else if (x.price.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return x.price ? x.price.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
        }
      })

    } else {
      searchList = this.resp.data;
    }
    this.products = searchList;

  }

  async delete(id) {
    var body = {
      id: id
    }
    const alert = await this.alertCtrl.create({
      header: 'Remove product',
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
            this.api.Post("Product/delete", body).pipe(timeout(this.api.API_TIMEOUT)).subscribe(data => {
              this.loadData(this.api.NetworkStatus);
              this.api.presentToastWithOptions(data['message']);
              this.api.dismissLoading()
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

  ionViewWillEnter() {
    this.plt.ready().then(() => {
      this.loadData(this.api.NetworkStatus);
    });
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFF');
  }

}

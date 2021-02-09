import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { timeout } from 'rxjs/operators';
import { CommonService } from 'src/app/global/common_service';
import { ApiService } from 'src/app/services/api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  vendors: any = [];
  resp: any;

  constructor(
    private router: Router,
    public apiService: ApiService,
    private plt: Platform,
    private api: CommonService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
   
  }


  loadData(refresh = false, refresher?) {
    if (!refresher) {
      this.api.presentLoading();
    }
    this.apiService.getVendor(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.resp = res;
      this.vendors = res.data ? res.data : [];
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
    let searchList = this.vendors;
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
    this.vendors = searchList;
  }

  async delete(id) {
    var body = {
      id: id
    }
    const alert = await this.alertCtrl.create({
      header: 'Remove vendor',
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
            this.api.Post("Vendor/delete", body).subscribe(data => {
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
  }



  addVendor() {
    this.router.navigate(['/vendors-add']);
  }

  editVendor(id) {
    this.router.navigate(['/vendors-edit'], { queryParams: { id: id } });
  }
}

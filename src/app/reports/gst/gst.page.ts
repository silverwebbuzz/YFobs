import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/global/common_service';
import { ApiService } from 'src/app/services/api.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-gst',
  templateUrl: './gst.page.html',
  styleUrls: ['./gst.page.scss'],
})
export class GstPage implements OnInit {

  tabReports: any = 'paid';
  gstReports : any = [];

  paidReports : any = [];
  
  constructor(
    private navCtrl: NavController,
    private statusBar: StatusBar,
    private api: CommonService,
    public apiService: ApiService,
    private plt: Platform,
    private route: Router,
    ) { }

  ngOnInit() {
  }

  loadData(refresh = false, refresher?){
    this.api.presentLoading();
    this.apiService.getGstReports(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.gstReports = res.data
      this.paidReports = this.gstReports.paid;
     if (refresher) {
        refresher.target.complete();
      }
      this.api.dismissLoading();
    },
    err => {
      this.api.dismissLoading();
      this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
    });
    
  }

  ionViewWillEnter() {
    this.loadData(this.api.NetworkStatus);
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFF');
  }

  goBack() {
    this.navCtrl.back();
  }

}

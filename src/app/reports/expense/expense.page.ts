import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, Platform } from '@ionic/angular';
import { timeout } from 'rxjs/operators';
import { CommonService } from 'src/app/global/common_service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {
  expenseReports: any;
  paidReports: any;
  Tempvar: number;
  amount: any;
  tax: any;
  net_amount: any;

  constructor(private navCtrl: NavController,
    private statusBar: StatusBar,
    private api: CommonService,
    public apiService: ApiService,
    private plt: Platform,
    private route: Router) {

  }

  ngOnInit() {
  }

  loadData(refresh = false, refresher?) {
    this.api.presentLoading();
    this.apiService.getExpenseReports(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.expenseReports = res.data.reports
      this.amount = this.expenseReports.reduce((sum, item) => sum + Number(item.amount), 0)
      this.tax = this.expenseReports.reduce((sum, item) => sum + Number(item.tax), 0)
      this.net_amount = this.expenseReports.reduce((sum, item) => sum + Number(item.net_amount), 0)
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

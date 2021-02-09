import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { CommonService } from '../global/common_service';
import { ApiService } from '../services/api.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Chart } from 'chart.js';
import { BehaviorSubject, interval, Observable, Subscription, timer } from 'rxjs';
import { Platform, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NotificationService } from '../global/notification.service';
import { map, take, timeout } from 'rxjs/operators';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  @ViewChild('pieChart') pieChart;
  @ViewChild('hrzLineChart') hrzLineChart;
  @ViewChild('barChart') barChart;

  letterObj = {
    to: '',
    from: '',
    text: ''
  }

  pdfObj = null;
  invoiceStatus: any;
  PaidInvoiceTotal: any;
  ParitallyInvoiceTotal: any;
  UnpaidInvoiceTotal: any;
  Income: any;
  Expense: any;
  net_income: any;
  fiscal_year: any;
  overdues: any;
  gross_cgst_price: any;
  gross_sgst_price: any;
  gross_igst_price: any;
  bars: any;
  pie: any;
  InvoicePackage: any = [];
  newNotify = false;

  // qrScan: any;
  verify: string;

  constructor(
    public apiService: ApiService,
    private statusBar: StatusBar,
    private api: CommonService,
    private plt: Platform,
    private navctrl: NavController,
    private router: Router,
    private notify: NotificationService,
    // private qr: QRScanner
  ) {
    this.apiService.getPackageLimit(this.api.NetworkStatus).subscribe(res => { this.InvoicePackage = res.data.invoice; })
    this.plt.backButton.subscribeWithPriority(0, () => {
      document.getElementsByTagName("body")[0].style.opacity = "1";
      // this.qr.hide();
    })
    this.verify = localStorage.getItem("verify")
  }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadData(this.api.NetworkStatus);
    });
  }

  // async StartScaning() {
  //   this.qr.prepare().then((status: QRScannerStatus) => {
  //     if (status.authorized) {
  //       this.qr.show();
  //       document.getElementsByTagName('body')[0].style.opacity = "0";
  //       let qrScan = this.qr.scan().subscribe((qrString) => {
  //         document.getElementsByTagName('body')[0].style.opacity = "1";
  //         console.log("qrString", qrString)
  //         if (qrString) {
  //           this.webLogin(qrString);
  //         }
  //         setTimeout(function () {
  //           this.qr.hide();
  //           qrScan.unsubscribe();
  //         }, 4000);
  //       }, (err) => {
  //         this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
  //       })
  //     } else if (status.denied) {
  //     } else {
  //     }
  //   })
  // }

  // async webLogin(qrString) {
  //   return new Promise((resolve, reject) => {
  //     var body = {
  //       "qrString": qrString
  //     }
  //     this.api.Post("Common/webLogin/", body).subscribe(res => {
  //       console.log("res", res);
  //       if (res['status'] == 1) {
  //         resolve(res);
  //       } else {
  //         this.api.presentToastWithOptions(res['message']);
  //       }
  //     },
  //       err => {
  //         this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
  //       });
  //   })
  // }

  loadData(refresh = false, refresher?) {
    if (!refresher) {
      this.api.presentLoading();
    }
    this.apiService.getDashboardData(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      if (res.data) {
        var data = res.data;
        this.PaidInvoiceTotal = data.PaidInvoiceTotal.replace(/,/g, "") ? data.PaidInvoiceTotal.replace(/,/g, "") : '';
        this.ParitallyInvoiceTotal = data.ParitallyInvoiceTotal.replace(/,/g, "") ? data.ParitallyInvoiceTotal.replace(/,/g, "") : '';
        this.UnpaidInvoiceTotal = data.UnpaidInvoiceTotal.replace(/,/g, "") ? data.UnpaidInvoiceTotal.replace(/,/g, "") : '';
        this.fiscal_year = data.fiscal_year ? data.fiscal_year : '';
        this.Income = data.income ? data.income : '';
        this.Expense = data.expense ? data.expense : '';
        this.net_income = data.net_income ? data.net_income : '';
        this.overdues = data.overdues ? data.overdues : [];
        this.gross_cgst_price = data.gross_cgst_price.replace(/,/g, "") ? data.gross_cgst_price.replace(/,/g, "") : '';
        this.gross_igst_price = data.gross_igst_price.replace(/,/g, "") ? data.gross_igst_price.replace(/,/g, "") : '';
        this.gross_sgst_price = data.gross_sgst_price.replace(/,/g, "") ? data.gross_sgst_price.replace(/,/g, "") : '';
        this.createPieChart()
        this.createBarChart()
      }
      this.api.dismissLoading();
      if (refresher) {
        this.notify.checkUnReadCount();
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

  async fnCreateInvoice() {
    if (this.InvoicePackage.total && this.InvoicePackage.total > this.InvoicePackage.limit) {
      this.api.PackageLimitMessage(this.InvoicePackage.total);
    } else {
      this.router.navigate(['/create-invoice']);
    }
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [{
          label: 'SGST',
          data: [this.gross_sgst_price],
          backgroundColor: [
            'rgb(250, 149, 0)',
          ],
          borderColor: [
            'rgb(250, 149, 0)',
          ],
          borderWidth: 1
        },
        {
          label: 'CGST',
          data: [this.gross_cgst_price],
          backgroundColor: [
            'rgb(83, 141, 34)',
          ],
          borderColor: [
            'rgb(83, 141, 34)',
          ],
          borderWidth: 1
        },
        {
          label: 'IGST',
          data: [this.gross_igst_price],
          backgroundColor: [
            'rgb(208, 0, 0)',

          ],
          borderColor: [
            'rgb(208, 0, 0)',
          ],
          borderWidth: 1
        }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  createPieChart() {
    this.pie = new Chart(this.pieChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Paid', 'Paritally', 'Unpaid'],
        datasets: [{
          label: 'Viewers',
          data: [this.PaidInvoiceTotal, this.ParitallyInvoiceTotal, this.UnpaidInvoiceTotal],
          backgroundColor: [
            'rgb(40, 167, 69)',
            'rgb(152, 243, 164)',
            'rgb(220, 53, 69)',
          ],
          borderColor: [
            'rgb(40, 167, 69)',
            'rgb(152, 243, 164)',
            'rgb(220, 53, 69)',
          ],
          borderWidth: 1
        }]
      },
    });
  }

  ionViewWillEnter() {
    this.notify.checkUnReadCount();
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFF');
  }
}

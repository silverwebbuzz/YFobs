import { Component } from "@angular/core";
import {
  NavController,
  PopoverController,
  Platform,
  AlertController,
  ModalController,
} from "@ionic/angular";
import { CommonService } from "../../global/common_service";
import { ApiService } from "../../services/api.service";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { Observable, from } from "rxjs";
import * as _ from "lodash";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { InvoiceOptionsPage } from "../invoice-options/invoice-options.page";
/* Print */
import { Printer, PrintOptions } from "@ionic-native/printer/ngx";
/* Create Pdf */
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { File, IWriteOptions } from "@ionic-native/file/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { Router } from "@angular/router";
import { InvoiceViewPage } from '../view/invoice-view.page';

var htmlToPdfmake = require("html-to-pdfmake");

import domtoimage from 'dom-to-image';
import * as jsPDF from 'jspdf';
import { DatePipe } from '@angular/common';
import { NotificationService } from 'src/app/global/notification.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"],
})
export class ListPage {
  letterObj = {
    to: "",
    from: "",
    text: "",
  };

  OTP: string = '';

  reports: any = "all";
  InvoiceAll: any = [];
  Invoicelist: any = [];
  ActiveTabes: any = "all";
  InvoicePackage: any = [];
  currentTabs: any = "all";

  AllInvoice: any = [];
  UnpaidInvoice: any = [];
  PaidInvoice: any = [];
  RecurringInvoice: any = [];

  InvoiceLoader: boolean = true;
  shareInvoiceId: number = 0;

  constructor(
    private api: CommonService,
    public apiService: ApiService,
    private plt: Platform,
    private navctrl: NavController,
    private popCtrl: PopoverController,
    private socialSharing: SocialSharing,
    private statusBar: StatusBar,
    private file: File,
    private fileOpener: FileOpener,
    private alertCtrl: AlertController,
    private printer: Printer,
    private router: Router,
    private modalCtrl: ModalController,
    private datePipe: DatePipe,
    private notify: NotificationService
  ) {
    this.apiService.getPackageLimit(this.api.NetworkStatus).subscribe((res) => {
      this.InvoicePackage = res.data.invoice;
    });

  }

  ngOnInit() { }

  loadData(refresh = false, refresher?, showLoading = true) {
    if (!refresher && showLoading) {
      this.api.presentLoading();
    }
    this.apiService.getInvoice(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe((res) => {
      this.InvoiceAll = res.data ? res.data.filter((x) => x.type == "1") : [];
      if (refresher) {
        refresher.target.complete();
        this.InvoiceLoader = false;
      } else {
        this.Invoicelist = [];
        this.Invoicelist = this.InvoiceAll;
        this.AllInvoice = this.Invoicelist;
        this.currentTabs ? this.tabs(this.currentTabs) : null;
        this.api.dismissLoading();
        this.InvoiceLoader = false;
      }
      this.api.dismissLoading();
    },
      err => {
        this.api.dismissLoading();
        this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      }
    );
  }

  tabs(tabs) {
    if (tabs == "all") {
      this.Invoicelist = this.InvoiceAll;
      this.AllInvoice = this.Invoicelist;
    }
    if (tabs == 1) {
      if (this.InvoiceAll != undefined) {
        this.Invoicelist = this.InvoiceAll.filter((x) => x.status == tabs);
        this.UnpaidInvoice = this.Invoicelist;
      }
    }
    if (tabs == 2) {
      if (this.InvoiceAll != undefined) {
        this.Invoicelist = this.InvoiceAll.filter((x) => x.status == tabs);
        this.PaidInvoice = this.Invoicelist;
      }
    }
    if (tabs == 3) {
      if (this.InvoiceAll != undefined) {
        this.Invoicelist = this.InvoiceAll.filter(
          (x) => x.status == tabs || x.recurring == "1"
        );
        this.RecurringInvoice = this.Invoicelist;
      }
    }
    this.currentTabs = tabs;
    return this.Invoicelist;
  }

  async fnCreateInvoice() {
    if (this.InvoicePackage.total && this.InvoicePackage.total > this.InvoicePackage.limit) {
      this.api.PackageLimitMessage(this.InvoicePackage.total);
    } else {
      this.router.navigate(['/create-invoice']);
    }
  }

  async view(InvoiceId) {
    this.popCtrl.dismiss();
    const modal = await this.modalCtrl.create({
      component: InvoiceViewPage,
      backdropDismiss: false,
      swipeToClose: true,
      componentProps: {
        InvoiceId: InvoiceId
      }
    });
    modal.onDidDismiss().then((res) => {
      this.router.navigate(['/invoice-list']);
    })
    return await modal.present();
  }

  edit(InvoiceId, status) {
    if (status == 2) {
      this.view(InvoiceId)
    }
    else {
      this.router.navigate(["/edit-invoice"], {
        queryParams: { InvoiceId: InvoiceId },
      });
    }
    this.popCtrl.dismiss();
  }

  async more(ev, id, status, is_completed, recurring) {
    const popover = await this.popCtrl.create({
      mode: "md",
      component: InvoiceOptionsPage,
      cssClass: "popover_",
      event: ev,
      translucent: true,
      componentProps: {
        InvoiceId: id,
        InvoiceStatus: status,
        is_completed: is_completed,
        Recurring: recurring,
      },
    });

    popover.onDidDismiss().then((val) => {
      console.log("val.data", val.data)
      if (val && val.data) {
        this.loadData(this.api.NetworkStatus, null, false);
      }
    });
    return await popover.present();
  }

  paidsearchBar(value) {
    let searchList = this.InvoiceAll;
    if (value) {
      searchList = _.filter(searchList, function (x) {
        if (
          x.customer_name.toLowerCase().indexOf(value.toLowerCase()) > -1 &&
          x.status == "2"
        ) {
          return x.customer_name
            ? x.customer_name.toLowerCase().indexOf(value.toLowerCase()) > -1
            : null;
        } else if (
          x.number.toLowerCase().indexOf(value.toLowerCase()) > -1 &&
          x.status == "2"
        ) {
          return x.number
            ? x.number.toLowerCase().indexOf(value.toLowerCase()) > -1
            : null;
        }
      });
    } else {
      searchList = this.InvoiceAll.filter((x) => x.status == "2");
    }
    this.Invoicelist = searchList;
  }

  unpaidsearchBar(value) {
    let searchList = this.InvoiceAll;
    if (value) {
      searchList = _.filter(searchList, function (x) {
        if (
          x.customer_name.toLowerCase().indexOf(value.toLowerCase()) > -1 &&
          x.status == "1"
        ) {
          return x.customer_name
            ? x.customer_name.toLowerCase().indexOf(value.toLowerCase()) > -1
            : null;
        } else if (
          x.number.toLowerCase().indexOf(value.toLowerCase()) > -1 &&
          x.status == "1"
        ) {
          return x.number
            ? x.number.toLowerCase().indexOf(value.toLowerCase()) > -1
            : null;
        }
      });
    } else {
      searchList = this.InvoiceAll.filter((x) => x.status == "1");
    }
    this.Invoicelist = searchList;
  }

  draftsearchBar(value) {
    let searchList = this.InvoiceAll;
    if (value) {
      searchList = _.filter(searchList, function (x) {
        if (
          x.customer_name.toLowerCase().indexOf(value.toLowerCase()) > -1 &&
          x.status == "0"
        ) {
          return x.customer_name
            ? x.customer_name.toLowerCase().indexOf(value.toLowerCase()) > -1
            : null;
        } else if (
          x.number.toLowerCase().indexOf(value.toLowerCase()) > -1 &&
          x.status == "0"
        ) {
          return x.number
            ? x.number.toLowerCase().indexOf(value.toLowerCase()) > -1
            : null;
        }
      });
    } else {
      searchList = this.InvoiceAll.filter((x) => x.status == "0");
    }
    this.Invoicelist = searchList;
  }

  recurringsearchBar(value) {
    let searchList = this.InvoiceAll;
    if (value) {
      searchList = _.filter(searchList, function (x) {
        if (
          (x.customer_name.toLowerCase().indexOf(value.toLowerCase()) > -1 &&
            x.status == "3") ||
          x.recurring == "1"
        ) {
          return x.customer_name
            ? x.customer_name.toLowerCase().indexOf(value.toLowerCase()) > -1
            : null;
        } else if (
          (x.number.toLowerCase().indexOf(value.toLowerCase()) > -1 &&
            x.status == "3") ||
          x.recurring == "1"
        ) {
          return x.number
            ? x.number.toLowerCase().indexOf(value.toLowerCase()) > -1
            : null;
        }
      });
    } else {
      searchList = this.InvoiceAll.filter(
        (x) => x.status == "3" || x.recurring == "1"
      );
    }
    this.Invoicelist = searchList;
  }

  allsearchBar(value) {
    let searchList = this.InvoiceAll;
    if (value) {
      searchList = _.filter(searchList, function (x) {
        if (x.customer_name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return x.customer_name
            ? x.customer_name.toLowerCase().indexOf(value.toLowerCase()) > -1
            : null;
        } else if (x.number.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return x.number
            ? x.number.toLowerCase().indexOf(value.toLowerCase()) > -1
            : null;
        }
      });
    } else {
      searchList = this.InvoiceAll;
    }
    this.Invoicelist = searchList;
  }

  async share(InvoiceId) {
    {
      this.plt.ready().then(() => {
        this.api.presentLoading();
        this.api.Get("invoice/exportPdf/" + InvoiceId).pipe(timeout(this.api.API_TIMEOUT)).subscribe((res) => {
          this.socialSharing.share('Here is your PDF file', 'Your PDF', res["data"].link)
            .then((data) => {
              // Share after part
            })
            .catch((err) => {
              // error
            });
          this.api.dismissLoading();
        },
          err => {
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
          });
      });
    }
  }

  sharePdf(InvoiceId, type) {
    this.shareInvoiceId = InvoiceId;
    setTimeout(() => {
      const div = document.getElementById("printable-area");
      //this.api.presentLoading();
      domtoimage.toPng(div).then((dataUrl) => {
        var doc = new jsPDF("p", "mm", "a4");
        //var doc = new jsPDF();
        doc.addImage(dataUrl, 'PNG', 20, 20, 170, 250);
        this.shareInvoiceId = 0;
        //doc.save('MYPdf.pdf');
        let pdfOutput = doc.output();
        let buffer = new ArrayBuffer(pdfOutput.length);
        let array = new Uint8Array(buffer);
        for (var i = 0; i < pdfOutput.length; i++) {
          array[i] = pdfOutput.charCodeAt(i);
        }

        const directory = this.file.dataDirectory;
        var toDayDate = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
        const fileName = "invoice-" + toDayDate + ".pdf";
        let options: IWriteOptions = { replace: true };

        this.file.checkFile(directory, fileName).then((success) => {
          //Writing File to Device
          this.file.writeFile(directory, fileName, buffer, options)
            .then((success) => {
              this.api.dismissLoading();
              if (type == 'share') {
                this.socialSharing.share('Here is your PDF file', 'Your PDF', this.file.dataDirectory + fileName)
                  .then((data) => {
                    // Share after part
                  })
                  .catch((err) => {
                    // error
                  });
              } else {
                this.printer.print(this.file.dataDirectory + fileName);
              }

            })
            .catch((error) => {
              this.api.dismissLoading();
            });
        })
          .catch((error) => {
            //Writing File to Device
            this.file.writeFile(directory, fileName, buffer)
              .then((success) => {
                this.api.dismissLoading();
                this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
                  .then(() => console.log('File is opened'))
                  .catch(e => console.log('Error opening file', e));
              })
              .catch((error) => {
                this.api.dismissLoading();
                /* Cannot Create File */
              });
          });
      })
        .catch(function (error) {
          this.api.dismissLoading();
        });
    }, 3000);


  }

  ionViewWillEnter() {
    this.reports = 'all';
    this.currentTabs = 'all';
    this.loadData(this.api.NetworkStatus);
    this.notify.checkUnReadCount();
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString("#FFFFFF");
  }

  ngOnDestroy() { }
}

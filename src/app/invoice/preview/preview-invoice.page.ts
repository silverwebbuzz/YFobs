import { Component } from "@angular/core";
import { ModalController, Platform, NavController } from "@ionic/angular";
import { SignaturePadPage } from "../../signature-pad/signature-pad.page";
import { ApiService } from "../../services/api.service";
import { CommonService } from "../../global/common_service";
import { environment } from "src/environments/environment";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { Router } from "@angular/router";
import domtoimage from 'dom-to-image';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { LoadingController } from '@ionic/angular';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; 
import { Printer, PrintOptions } from "@ionic-native/printer/ngx";
import { DatePipe } from '@angular/common';
import { timeout } from 'rxjs/operators';

@Component({
  selector: "app-preview-invoice",
  templateUrl: "./preview-invoice.page.html",
  styleUrls: ["./preview-invoice.page.scss"],
  providers: [DatePipe]
})
export class PreviewInvoicePage {
  imageUrl = environment.image_url;

  image: any;
  signatureImage: any;
  privew: any;
  amount: number;
  total_qty: number;
  customer: any;
  businessLogo: any = "";
  defaultPlaceholder = 'assets/imgs/placeholder.png';
  taxValueList: any;
  customerList: any = [];
  CustomerData: any = [];
  ItemData: any = [];

  itemqty: number = 0;
  subTotal: any = 0;
  GrandTotal: any = 0;
  tax: any = 0;
  taxName: any;
  taxDisplay: any = 0;
  discount: any = 0;
  discountrs: any = 0;

  InvoiceId: any;
  ActiveBusiness: any = [];
  state: any;
  payment_due: any = [];
  footer_note: any;

  loading: boolean = false;
  customer_state_id: any;
  country: any;

  TestImage : any;

  constructor(
    private modelctrl: ModalController,
    public apiService: ApiService,
    private api: CommonService,
    private plt: Platform,
    private socialSharing: SocialSharing,
    private router: Router,
    private file: File,
    private fileOpener: FileOpener,
    private printer: Printer,
    private datePipe: DatePipe,
    private navCtrl: NavController,
  ) {
    this.plt.ready().then(() => {
      this.loadData(this.api.NetworkStatus);
    });

    let data = localStorage.getItem("invoice_preview");
    let ActiveBusiness = localStorage.getItem("ActiveBusiness");
    this.privew = JSON.parse(data);
    this.ActiveBusiness = JSON.parse(ActiveBusiness);
    this.InvoiceId = this.privew.InvoiceId;
    this.businessLogo = this.privew.logo ? this.privew.logo : "";
    this.customer =
      this.privew.customer.length >= 1 ? this.privew.customer[0] : [];
    this.ItemData = this.privew.items.length >= 1 ? this.privew.items : [];
    this.tax = this.privew.taxAmt ? this.privew.taxAmt : 0;
    this.discount = this.privew.discount ? this.privew.discount : 0;
    this.footer_note = this.privew.footer_note
    this.laodCalculation();
    this.loading = true;
  }
  
  loadData(refresh = false, refresher?) {
    this.api.presentLoading();
    this.apiService.allApi(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe((res) => {
      this.state = res.data.state;
      this.taxValueList = res.data.taxOptions;
      let taxt_rate = this.taxValueList.filter(
        (x) => x.id == this.privew.taxes
      );
      this.taxName = taxt_rate.length >= 1 ? taxt_rate[0].name : "";

      let state = this.state.filter(
        (x) => x.id == this.ActiveBusiness.state_id
      );
      this.state = state.length >= 1 ? state[0].name : "";
      
      let customerstate =  res.data.state.filter((x => x.id == this.customer.state))
      this.customer_state_id = customerstate.length >= 1 ? customerstate[0].name : '';

      let country = res.data.countries.filter((x => x.id == this.customer.country))
      this.country = country.length >= 1 ? country[0].name : '';
      
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

  laodCalculation() {
    var tota = 0;
    var totq = 0;

    for (var i = 0; i < this.ItemData.length; i++) {
      if (parseInt(this.ItemData[i].qty))
        totq += parseInt(this.ItemData[i].qty);
      this.itemqty = totq;
    }
    for (var i = 0; i < this.ItemData.length; i++) {
      if (parseInt(this.ItemData[i].invoice_item_price)) var tot: any;
      tot = this.ItemData[i].invoice_item_price * this.ItemData[i].qty;
      tota += parseFloat(tot);
      this.subTotal = tota.toFixed(2);
    }
    this.GrandTotal = this.subTotal;
    this.calcTax();
    this.calcGrandTotal();
  }

  calcTax() {
    if (this.tax == undefined || this.tax == 0) {
      this.tax = 0;
      return 1;
    } else {
      if (this.tax) {
        this.tax = this.tax;
      } else {
        this.tax = 0;
      }
      this.tax = this.tax;
      return 1;
    }
  }

  calcGrandTotal() {
    var total_discount = this.discount;
    var tax = this.tax;
    var discountValue = Number(this.subTotal) * (Number(total_discount) / 100);
    this.discountrs = discountValue.toFixed(2);
    var discountedPrice =
      Number(this.subTotal) -
      Number(this.subTotal) * (Number(total_discount) / 100);
    this.taxDisplay = (Number(discountedPrice) * (Number(tax) / 100)).toFixed(
      2
    );
    var grandTotal =
    Number(discountedPrice) + Number(discountedPrice) * (Number(tax) / 100);
    this.GrandTotal = grandTotal.toFixed(2);
    return 1;
  }
  
  async openSignatureModel() {
    const modal = await this.modelctrl.create({
      component: SignaturePadPage,
      backdropDismiss: false,
      swipeToClose: true,
    });
    modal.onDidDismiss().then((res) => {
      if (res.data) {
        this.signatureImage = res["data"]["data"];
      }
    });
    return await modal.present();
  }

  
  sharePdf(type) {
    this.api.presentLoading();
    const div = document.getElementById("printable-area");
    
    domtoimage.toPng(div).then((dataUrl)=> {
      var doc = new jsPDF("p","mm","a4");
      doc.addImage(dataUrl, 'PNG', 20, 20, 170, 250);
      //doc.save('MYPdf.pdf');
      let pdfOutput = doc.output();
      let buffer = new ArrayBuffer(pdfOutput.length);
      let array = new Uint8Array(buffer);
      for (var i = 0; i < pdfOutput.length; i++) {
          array[i] = pdfOutput.charCodeAt(i);
      }
      
      const directory = this.file.dataDirectory ;
      var toDayDate = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
      const fileName = "invoice-" + toDayDate + ".pdf";
      let options: IWriteOptions = { replace: true };
  
      this.file.checkFile(directory, fileName).then((success)=> {
        //Writing File to Device
        this.file.writeFile(directory,fileName,buffer, options)
        .then((success)=> {
          this.api.dismissLoading();
          if(type == 'share'){
            this.socialSharing.share('Here is your PDF file', 'Your PDF',this.file.dataDirectory + fileName)
            .then((data) => {
                // Share after part
            })
            .catch((err) => {
                // error
            });
          }else{
            this.printer.print(this.file.dataDirectory + fileName);
          }
          
        })
        .catch((error)=> {
          this.api.dismissLoading();
        });
      })
      .catch((error)=> {
        //Writing File to Device
        this.file.writeFile(directory,fileName,buffer)
        .then((success)=> {
          this.api.dismissLoading();
          this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
            .then(() => console.log('File is opened'))
            .catch(e => console.log('Error opening file', e));
        })
        .catch((error)=> {
          this.api.dismissLoading();
        });
      });
    })
    .catch(function (error) {
      this.api.dismissLoading();
      console.error('oops, something went wrong!', error);
    });
  }

  modalClose() {
    this.modelctrl.dismiss();
    this.router.navigate(["/invoice-list"]);
  }
  
  businessProfile() {
    this.modelctrl.dismiss();
    this.router.navigate(["/business-info-update"], {
      queryParams: { returnUrl: "preview-invoice" },
    });
  }
}

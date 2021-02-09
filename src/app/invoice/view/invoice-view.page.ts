import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { CommonService } from 'src/app/global/common_service';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.page.html',
  styleUrls: ['./invoice-view.page.scss'],
})
export class InvoiceViewPage implements OnInit {

  //InvoiceId
  @Input() InvoiceId: any;
  @Input() Share: any;
  //@Input() InvoiceNumber: any;

  imageUrl = environment.image_url;
  defaultPlaceholder = 'assets/imgs/placeholder.png';
  image: any;
  signatureImage: any;
  privew: any = [];
  amount: number;
  total_qty: number;
  customer: any = [];
  businessLogo : any = "";

  taxValueList : any;
  customerList : any = [];
  CustomerData : any = [];
  ItemData     : any = [];

  itemqty  : number = 0;
  subTotal : any = 0;
  GrandTotal : any = 0;
  tax: any = 0;
  taxName : any;
  taxDisplay: any = 0;
  discount : any = 0;
  discountrs: any = 0;
  ActiveBusiness: any = [];
  state: any;

  footer_note: any;

  loading: boolean = false;
  customer_state_id: any;
  country: any;

  constructor(
    private plt: Platform,
    private socialSharing: SocialSharing,
    public apiService: ApiService, 
    private api: CommonService, 
    public route: ActivatedRoute,
    private modelctrl : ModalController,
    private router : Router,
    private file: File,
    private fileOpener: FileOpener,
    private printer: Printer,
    private datePipe: DatePipe) 
    {
      this.businessLogo = this.api.getBusinessDetails() ? this.api.getBusinessDetails().logo : '';
    }

  ngOnInit() {
    if(this.InvoiceId){
      this.getInvoiceData(this.InvoiceId);
    }
  }

  getInvoiceData(InvoiceId){
    var body = {
      businessId: this.api.getBusinessId(),
      business_state_id: this.api.getBusinessDetails().state_id
    }
    this.api.presentLoading();
    this.api.Post("invoice/invoiceEdit/" + InvoiceId, body).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.customer = res.data.selectedCustomer.length >= 1 ? res.data.selectedCustomer[0] : [];
      this.ItemData = res.data.items.length >=1 ? res.data.items : [];
      let ActiveBusiness = localStorage.getItem("ActiveBusiness")
      this.ActiveBusiness = JSON.parse(ActiveBusiness)
      this.privew = res.data.invoice ? res.data.invoice : '';
      this.tax = this.privew.tax ? this.privew.tax : 0;
      this.discount = this.privew.discount ? this.privew.discount : 0;
      //this.loadData(this.api.NetworkStatus,this.privew.taxes_id,this.ActiveBusiness.state_id);
      this.loadData(this.api.NetworkStatus,this.privew.taxes_id,this.ActiveBusiness.state_id,this.customer.country,this.customer.state);
      this.footer_note = this.privew.footer_note
      this.laodCalculation();
      this.loading = true;
      if(!this.Share){
        this.api.dismissLoading();
      }
    },
    err => {
      this.api.dismissLoading();
      this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
    });
  }
  

  loadData(refresh = false,taxes_id,state_id,customer_country_id,customer_state_id){
    this.apiService.allApi(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.state = res.data.state
      this.taxValueList = res.data.taxOptions;
      let taxt_rate = this.taxValueList.filter((x => x.id == taxes_id))
      this.taxName = taxt_rate.length >= 1 ? taxt_rate[0].name : '';
      let state = this.state.filter((x => x.id == state_id))
      this.state = state.length >= 1 ? state[0].name : '';
      let customerstate =  res.data.state.filter((x => x.id == customer_state_id))
      this.customer_state_id = customerstate.length >= 1 ? customerstate[0].name : '';

      let country = res.data.countries.filter((x => x.id == customer_country_id))
      this.country = country.length >= 1 ? country[0].name : '';
    },err => {
      this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
    });
  }

  laodCalculation() {
    var tota = 0;
    var totq = 0;

    for (var i = 0; i < this.ItemData.length; i++) {
      if (parseInt(this.ItemData[i].qty))
        totq += parseInt(this.ItemData[i].qty);
      this.itemqty = totq
    }
    for (var i = 0; i < this.ItemData.length; i++) {
      if (parseInt(this.ItemData[i].invoice_item_price))
        var tot: any;
      tot = this.ItemData[i].invoice_item_price * this.ItemData[i].qty;
      tota += parseFloat(tot);
      this.subTotal = (tota).toFixed(2);
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
    var discountedPrice = (Number(this.subTotal) - Number(this.subTotal) * (Number(total_discount) / 100));
    this.taxDisplay = (Number(discountedPrice) * (Number(tax) / 100)).toFixed(2);
    var grandTotal = Number(discountedPrice) + (Number(discountedPrice) * (Number(tax) / 100));
    this.GrandTotal = grandTotal.toFixed(2);
    return 1;
  }

  async share() {
    {
      this.plt.ready()
        .then(() => {
          this.api.presentLoading();
          this.api.Get("invoice/exportPdf/" + this.InvoiceId).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
            this.api.dismissLoading();
            this.socialSharing.share(res['data'].business_name, res['data'].invoice_number,res['data'].link)
            .then((data) => {})
            .catch((err) => {});
          },
          err => {
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
          });
        });
    }
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
    });
  }

  Modalclose(){
    this.modelctrl.dismiss();
  }

  businessProfile() {
    this.modelctrl.dismiss();
    this.router.navigate(['/business-info-update'],{ queryParams: { returnUrl: 'invoice-view' }});
  }
}

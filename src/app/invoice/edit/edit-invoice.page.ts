import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { CreateCustomerPage } from '../../create-customer/create-customer.page';
import { CreateItemPage } from '../../create-item/create-item.page';
import { PreviewInvoicePage } from '../preview/preview-invoice.page';
import { ApiService } from '../../services/api.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../global/common_service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timeout } from 'rxjs/operators';
import { MultipleItemsPage } from 'src/app/create-item/multiple-items/multiple-items.page';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.page.html',
  styleUrls: ['./edit-invoice.page.scss'],
})

export class EditInvoicePage implements OnInit {
 
  invoiceForm: FormGroup;
  
  ActiveBusiness : any = [];
  taxValueList : any;
  customerList : any = [];
  CustomerData : any = [];
  ItemData     : any = [];

  itemqty  : number = 0;
  subTotal : any = 0;
  GrandTotal : any = 0;
  tax: any = 0;
  taxDisplay: any = 0;
  discount : any;
  discountrs: any = 0;

  SelectedInvoice : any = [];
  get_due_limit: any;
  date: Date;
  submitted: Boolean = false;
  
  constructor(
    public modelctrl: ModalController,
    public navCtrl: NavController,
    private statusBar: StatusBar,
    private plt: Platform, 
    public datepipe: DatePipe,
    private api: CommonService, 
    private route: ActivatedRoute,
    public apiService: ApiService, 
    private router: Router,
    public formBuilder: FormBuilder,
  ) {  }

  ngOnInit() {
    this.invoice_fb();
    this.plt.ready().then(() => {
      this.loadData(false);
    });
  }

  loadData(refresh = false, refresher?){
    this.apiService.allApi(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.taxValueList = res.data.taxOptions;
      if (refresher) {
        refresher.target.complete();
      }
      this.getInvoiceData(this.api.NetworkStatus);
    },
    err => {
      this.api.dismissLoading();
      this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
    });
  }

  getInvoiceData(refresh = false, refresher?){
    let InvoiceId = this.route.snapshot.queryParams.InvoiceId;
    this.api.presentLoading();
    this.apiService.getEditInvoice(InvoiceId,refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.CustomerData = res['data'].selectedCustomer;
      this.ItemData = res['data'].items;
      this.SelectedInvoice = res['data'].invoice;

      var total = 0;
      this.ItemData.forEach(x => total += Number(x.qty));
      this.itemqty = total

      this.get_due_limit = this.SelectedInvoice.due_limit ? this.SelectedInvoice.due_limit : '';
      this.GrandTotal = Number(this.SelectedInvoice.grand_total)
      this.discount=this.SelectedInvoice.discount
      this.invoiceForm.patchValue({
        invoice: this.SelectedInvoice.title,
        invoiceNo: this.SelectedInvoice.number,
        proName: this.SelectedInvoice.summary,
        psNo: this.SelectedInvoice.poso_number,
        invoiceDate: this.SelectedInvoice.date,
        subTotal: this.SelectedInvoice.sub_total,
        footer_note: this.SelectedInvoice.footer_note.replace(/<[^>]+>/gm, '').replace('&nbsp;', ''),
        amt: Number(this.SelectedInvoice.grand_total),
        tax : this.SelectedInvoice.taxes_id,
        discount : this.SelectedInvoice.discount
      });
      this.tax = this.SelectedInvoice.tax;
      this.laodCalculation();
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

  getBusinessDetails(refresh = false){
    this.apiService.getBusinessDetails(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.ActiveBusiness = res.data?.length >= 1 ? res.data[0] : [];
    },
    err => {
      this.api.dismissLoading();
      this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
    });
    
  }
 
  invoice_fb() {
    this.invoiceForm = this.formBuilder.group({
      invoice: ['', Validators.required],
      invoiceNo: ['', Validators.required],
      proName: ['', null],
      psNo: ['', null],
      invoiceDate: ['', Validators.required],
      due_limit: ['', Validators.required],
      subTotal: [''],
      discount: [''],
      discAmt: [''],
      tax: [''],
      taxAmt: [''],
      amt: [''],
      footer_note: ['',null],
    });
  }

  async businessProfile() {
    this.router.navigate(['/business-info-update'],{ queryParams: { returnUrl: 'edit-invoice' }});
  }

  async fnredirectcustomer(data: any, index) {
    const modal = await this.modelctrl.create({
      component: CreateCustomerPage,
      backdropDismiss: false,
      swipeToClose: true,
      componentProps: { data: data },
    });
    modal.onDidDismiss().then((res) => {
      if (res['data']) {
        if (res['data'].status == 'update') {
          this.CustomerData.splice(index, 1);
          this.CustomerData.push(res['data']['data']);
        } else if (res.data) {
          this.CustomerData.push(res['data']['data']);
        }
      }
    })
    return await modal.present();
  }

  async fnredirectitem() {
    const modal = await this.modelctrl.create({
      component: MultipleItemsPage,
      backdropDismiss: false,
      swipeToClose: true,
      componentProps:{
        "getItemData" : this.ItemData
      }
    });
    modal.onDidDismiss().then((res) => {
      if (res.data) {
        this.ItemData = res['data'];
        this.laodCalculation();
      }
    })
    return await modal.present();
  }

  // async addMultiple() {
  //   const modal = await this.modelctrl.create({
  //     component: MultipleItemsPage,
  //     backdropDismiss: false,
  //     swipeToClose: true
  //   });
  //   return await modal.present();
  // }

  deleteItem(index: any) {
    this.ItemData.splice(index, 1);
    if (this.ItemData.length == 0) {
      this.GrandTotal = 0;
      this.subTotal = 0;
      this.itemqty = 0;
      this.discountrs = 0;
      this.discount = 0;
      this.tax = 0;
      this.invoiceForm;
      this.invoiceForm.controls.discount.reset();
      this.invoiceForm.controls.tax.reset();
    }
    this.laodCalculation();
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

  loadAmount(value, type) {
    if(type == "tax"){
      let taxt_rate = this.taxValueList.filter((x => x.id == value.detail.value))
      this.tax = taxt_rate[0].rate ? taxt_rate[0].rate : 0;
    }
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
    var total_discount = this.discount ? this.discount : 0;
    var tax = this.tax;
    var discountValue = Number(this.subTotal) * (Number(total_discount) / 100);
    this.discountrs = discountValue.toFixed(2);
    var discountedPrice = (Number(this.subTotal) - Number(this.subTotal) * (Number(total_discount) / 100));
    this.taxDisplay = (Number(discountedPrice) * (Number(tax) / 100)).toFixed(2);
    var grandTotal = Number(discountedPrice) + (Number(discountedPrice) * (Number(tax) / 100));
    this.GrandTotal = grandTotal.toFixed(2);
    return 1;
  }

  async InvoicePreview(InvoiceId) {
    if(this.invoiceForm.value.due_limit != 1){ 
      this.date = new Date(this.invoiceForm.value.invoiceDate);
      this.date.setDate( this.date.getDate() + Number(this.invoiceForm.value.due_limit));
    }else{
      this.date = new Date(this.invoiceForm.value.invoiceDate);
    }
    var body = {
      InvoiceId : InvoiceId,
      title: this.invoiceForm.value.invoice,
      number: this.invoiceForm.value.invoiceNo,
      summary: this.invoiceForm.value.proName,
      poso_number: this.invoiceForm.value.psNo,
      date: this.invoiceForm.value.invoiceDate,
      due_limit: this.invoiceForm.value.due_limit,
      payment_due : this.date,
      sub_total: this.invoiceForm.value.subTotal,
      discount: this.invoiceForm.value.discount,
      taxes: this.invoiceForm.value.tax,
      taxAmt: this.tax ? this.tax : 0,
      grand_total: this.invoiceForm.value.amt,
      recurring: 0,
      businessId: this.api.getBusinessId(),
      customer: this.CustomerData,
      items: this.ItemData,
      logo : this.ActiveBusiness.logo,
      footer_note: this.invoiceForm.value.footer_note,
    };
    localStorage.setItem("invoice_preview", JSON.stringify(body))
    const modal = await this.modelctrl.create({
      component: PreviewInvoicePage,
      backdropDismiss: false,
      swipeToClose: true,
    });
    return await modal.present();
  }

  InvoiceAdd() {
    this.submitted = true;
    for (let v in this.invoiceForm.controls) {
      this.invoiceForm.controls[v].markAsTouched();
    }
    if(this.invoiceForm.valid && this.CustomerData.length > 0 && this.ItemData.length > 0) {
      this.api.presentLoading(); 
      var body = {
        id: this.route.snapshot.queryParams.InvoiceId,
        businessId: this.api.getBusinessId(),
        title: this.invoiceForm.value.invoice,
        summary: this.invoiceForm.value.proName,
        customer: this.CustomerData[0].id ? this.CustomerData[0].id : '',
        number: this.invoiceForm.value.invoiceNo,
        poso_number: this.invoiceForm.value.psNo,
        recurring: 0,
        date: this.invoiceForm.value.invoiceDate,
        discount: this.invoiceForm.value.discount,
        payment_due: this.invoiceForm.value.invoiceDate,
        due_limit: this.invoiceForm.value.due_limit,
        footer_note: this.invoiceForm.value.footer_note,
        sub_total: this.invoiceForm.value.subTotal,
        tax: this.tax,
        taxes:this.invoiceForm.value.tax,
        grand_total: this.invoiceForm.value.amt,
        items: this.ItemData,
        convert_total: this.invoiceForm.value.amt
      };
      this.api.Post("invoice/invoiceAdd", body).pipe(timeout(this.api.API_TIMEOUT)).subscribe(data => {
        if (data.status == 1) {
          this.InvoicePreview(this.route.snapshot.queryParams.InvoiceId);
        }
        this.api.dismissLoading();
      }, err => {
        this.api.dismissLoading();
        this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      })
    }
  }

  goBack() {
    this.navCtrl.back();
  }

  ionViewWillEnter() {
    this.getBusinessDetails(this.api.NetworkStatus);
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
  }

}


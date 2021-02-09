import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/global/common_service';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-receive-payment',
  templateUrl: './receive-payment.page.html',
  styleUrls: ['./receive-payment.page.scss'],
})
export class ReceivePaymentPage implements OnInit {

  InvoiceId;
  RecordPay: FormGroup;
  selectedInvoice : any = [];
  dueAmount : number = 0;  

  constructor(
    public formBuilder: FormBuilder,
    private modalCtrl: ModalController,
    private api: CommonService,
    public apiService: ApiService,
    private plt: Platform,
    public datepipe: DatePipe,
    private router : Router,
    public modelctrl: ModalController,
    public route : ActivatedRoute,
    private navCtrl: NavController,
    private statusBar: StatusBar,
  ) { 
    this.pay_fb();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFF');
  }

  pay_fb() {
    this.RecordPay = this.formBuilder.group({
      payment_date: ['', Validators.required],
      due_date : ['',null],
      amount: ['', Validators.required],
      payment_method: ['', Validators.required],
      note: ['', null],
    });
  }

  submit() {
    for (let v in this.RecordPay.controls) {
      this.RecordPay.controls[v].markAsTouched();
    }
    if (this.RecordPay.valid) {
      this.api.presentLoading();
      var body = {
        businessId : this.api.getBusinessId(),
        businessRowId : this.api.getBusinessDetails().id,
        invoiceId : this.InvoiceId,
        payment_date: this.RecordPay.value.payment_date,
        due_date: this.RecordPay.value.due_date,
        amount: this.RecordPay.value.amount.replace(/,/g, ''),
        payment_method: this.RecordPay.value.payment_method,
        note: this.RecordPay.value.note,
      };
      this.api.Post("invoice/recordPayment", body).pipe(timeout(this.api.API_TIMEOUT)).subscribe(data => {
        if (data.status == 1) {
          this.api.presentToastWithOptions(data['message']);
          this.router.navigate(['/invoice-list']);
        }
        this.api.dismissLoading();
      },err => {
        this.api.dismissLoading();
        this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      })
    }
  }

  ngOnInit() {
    this.InvoiceId = this.route.snapshot.queryParams.InvoiceId;
    this.plt.ready().then(() => {
      this.api.presentLoading();
      this.api.Get("invoice/getDueAmount/" + this.InvoiceId).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
         this.selectedInvoice = res['data'].invoice;
         this.dueAmount = res['data'].DueAmount;
         this.RecordPay.patchValue({
          amount : res['data'].DueAmount,
          payment_date: this.datepipe.transform(Date.now(), 'y-MM-d'),
         });
         this.api.dismissLoading();
      },
      err => {
        this.api.dismissLoading();
        this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      });
      
    });
  }

  

  back(){
    this.navCtrl.back();
  }

}

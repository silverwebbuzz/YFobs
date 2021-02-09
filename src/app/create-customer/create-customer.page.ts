import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NumberOnlyService } from '../../Services/number-only.service';
import { ModalController, NavParams, Platform } from '@ionic/angular';
import { Contacts } from '@ionic-native/contacts/ngx';
import { CommonService } from '../global/common_service';
import { ApiService } from '../services/api.service';
import * as _ from 'lodash';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.page.html',
  styleUrls: ['./create-customer.page.scss'],
})

export class CreateCustomerPage implements OnInit {

  CustomerData: FormGroup;
  Contacts: any;
  contactName: any;
  contactNumber: any;
  data: any;
  customer: any;
  allInvoice: any;
  customers: any = [];
  id: any;
  contactEmail: any;
  customer_process: boolean;
  contactdata: any = [];

  keyword = 'name';
  customerselect: any;

  constructor(
    public numberonly: NumberOnlyService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar,
    private navparam: NavParams,
    private api: CommonService,
    public modelctrl: ModalController,
    public apiService: ApiService,
    private plt: Platform,
    private contacts: Contacts) {

    this.data = this.navparam.get('data');
    this.customer_fb();
  }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadData(this.api.NetworkStatus);
    });
  }

  loadData(refresh = false, refresher?) {
    this.apiService.getCustomer(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.customers = res.data;
      if (refresher) {
        refresher.target.complete();
      }
    },
    err => {
      this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
    });
  }

  selectEventValue: number = 0;
  selectContactValue: number = 0;
  selectEvent(event) {
    this.customerselect = event
    this.id = event["id"];
    this.selectEventValue = 1 
    this.CustomerData.patchValue({
      name: event.name,
      phone: event.phone,
      gstno: event.vat_code ? event.vat_code : "",
      email: event.email ? event.email : "",
    });

  }

  Modalclose() {
    this.modelctrl.dismiss();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
  }

  customer_fb() {
    if (this.data) {
      this.CustomerData = this.formBuilder.group({
        name: [this.data.name, Validators.required],
        phone: [this.data.phone, Validators.required],
        gstno: [this.data.vat_code],
        email: [this.data.email]
      });
    } else {
      this.CustomerData = this.formBuilder.group({
        name: ['', Validators.required],
        phone: ['', Validators.required],
        email: [null, Validators.compose([
          Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        ])],
        gstno: [''],
      });
    }
  }


  fnAddCustomer() {
    for (let v in this.CustomerData.controls) {
      this.CustomerData.controls[v].markAsTouched();
    }
    if (this.CustomerData.valid) {
      this.api.presentLoading();
      this.customer_process = true;
      if (this.data) {
        if (this.CustomerData.value['name'].name) {
          var data = {
            businessId: this.api.getBusinessId(),
            name: this.CustomerData.value['name'].name,
            phone: this.CustomerData.value['phone'],
            email: this.CustomerData.value['email'],
            vat_code: this.CustomerData.value['gstno'],
            id: this.data['id'],
            country: this.api.INDIA,
            state: this.customerselect.state,
            address: this.customerselect.address,
            city: this.customerselect.city,
            postal_code:this.customerselect.postal_code,
            cus_number: this.customerselect.cus_number,
          }
        }
        else{
          var data = {
            businessId: this.api.getBusinessId(),
            name: this.CustomerData.value['name'],
            phone: this.CustomerData.value['phone'],
            email: this.CustomerData.value['email'],
            vat_code: this.CustomerData.value['gstno'],
            id: this.data['id'],
            country : this.api.INDIA,
            state: this.data.state,
            address: this.data.address,
            city: this.data.city,
            postal_code:this.data.postal_code,
            cus_number: this.data.cus_number,
          }
        }
        this.api.Post("Customer/add", data).pipe(timeout(this.api.API_TIMEOUT)).subscribe(data => {
          this.customer_process = false;
          this.api.dismissLoading();
          this.customer = data.data;

          if (data.status == 1) {
            this.api.presentToastWithOptions(data['message']);
            this.modelctrl.dismiss({ data: this.customer, status: 'update' });
          }
        },
        err => {
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        });

      }
      else if (this.selectEventValue == 1) {
        var olddata = {
          id: this.id,
          email: this.CustomerData.value['email'],
          vat_code: this.CustomerData.value['gstno'],
          name: this.CustomerData.value['name'].name,
          phone: this.CustomerData.value['phone'],
          address: this.customerselect.address,
          state: this.customerselect.state,
          city: this.customerselect.city,
          postal_code:this.customerselect.postal_code,
          country: this.api.INDIA,
          cus_number: this.customerselect.cus_number,
        }
        this.customer_process = false;
        this.api.dismissLoading();
        this.modelctrl.dismiss({ data: olddata });
      }
      else if (this.contactdata.length > 0) {
        var contactdata = {
          businessId: this.api.getBusinessId(),
          name: this.CustomerData.value['name'],
          phone: this.CustomerData.value['phone'],
          email: this.CustomerData.value['email'],
          vat_code: this.CustomerData.value['gstno'],
          country: this.api.INDIA,
          state: this.api.getBusinessDetails().state_id
        }
        this.api.Post("Customer/add", contactdata).pipe(timeout(this.api.API_TIMEOUT)).subscribe(data => {
          this.customer_process = false;
          this.api.dismissLoading();
          this.customer = data;
          if (data.status == 1) {
            this.api.presentToastWithOptions(data['message']);
            this.modelctrl.dismiss(this.customer);
          }
        },
        err => {
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        }
        );
      }
      else {
        var body = {
          businessId: this.api.getBusinessId(),
          name: this.CustomerData.value['name'],
          phone: this.CustomerData.value['phone'],
          email: this.CustomerData.value['email'],
          vat_code: this.CustomerData.value['gstno'],
          country: this.api.INDIA,
          state: this.api.getBusinessDetails().state_id
        }
        this.api.Post("Customer/add", body).pipe(timeout(this.api.API_TIMEOUT)).subscribe(data => {
          this.customer_process = false;
          this.api.dismissLoading();
          this.customer = data;
          if (data.status == 1) {
            this.api.presentToastWithOptions(data['message']);
            this.modelctrl.dismiss(this.customer);
          }
        },
          err => {
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
          }
        );
      }
    }
  }

  fnContactphone() {
    if (this.plt.is('cordova')) {
      this.contacts.pickContact().then((contact) => {
        this.contactdata = []
        this.selectContactValue = 1
  
        if (contact.emails != null) {
          var body = {
            name: contact.displayName,
            phone: contact.phoneNumbers[0].value,
            email: contact.emails[0].value
          }
        }
        if (contact.emails == null) {
          var body = {
            name: contact.displayName,
            phone: contact.phoneNumbers[0].value,
            email: ""
          }
        }
        if (body.name) {
          this.CustomerData.patchValue({
            name: body.name,
            phone: body.phone,
            email: body.email,
            gstno: ''
  
          });
        }
        this.contactdata.push(body)
      });
    }
    
  }
}

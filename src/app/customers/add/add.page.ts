import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/global/common_service';
import { ApiService } from 'src/app/services/api.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  custData: FormGroup;
  customer_process: boolean;
  state: any;
  country: any;
  statelist: any;
  currency: any;
  selected_currency: string;
  selectedcountry: any;
  country_name: any;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    public apiService: ApiService,
    private api: CommonService,
    private plt: Platform,
  ) {
    this.cust_fb();
  }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.countryData(this.api.NetworkStatus);
    });
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFF');
  }

  countryData(refresh = false, refresher?) {
    this.api.presentLoading();
    this.apiService.allApi(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.statelist = res.data.state
      this.country = res.data.countries
      this.selectedcountry = '79'
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

  goBack() {
    this.navCtrl.back();
  }
  
  stateList(e) {
    this.state = this.statelist.filter(x=> x.country_id == e.detail.value)
    this.currency = this.country.filter(x=> x.id == e.detail.value)
    this.country_name = this.currency[0].currency_code
    console.log("currency",this.currency)
    this.custData.patchValue({
      currency: this.currency[0].currency_code + '-' + this.currency[0].currency_name,
    });
    
  }

  cust_fb() {
    this.custData = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      address: [''],
      country: [''],
      state: [''],
      city: ['', Validators.required],
      postal_code: [''],
      currency: [''],
      cus_number: [''],
      vat_code: [''],
    });
  }

  save() {
    for (let v in this.custData.controls) {
      this.custData.controls[v].markAsTouched();
    }
    if (this.custData.valid) {
      this.api.presentLoading()
      var body = {
        name: this.custData.value.name,
        email: this.custData.value.email,
        phone: this.custData.value.phone,
        address: this.custData.value.address,
        country: this.custData.value.country,
        state: this.currency[0].currency_code == 'INR' ? this.custData.value.state : '',
        city: this.custData.value.city,
        postal_code: this.custData.value.postal_code,
        currency: this.currency[0].currency_code,
        // country : this.api.INDIA,
        cus_number: this.custData.value.cus_number,
        vat_code: this.custData.value.vat_code,
        businessId: this.api.getBusinessId()
      };
      this.api.Post("Customer/add", body).pipe(timeout(this.api.API_TIMEOUT)).subscribe(data => {
        this.customer_process = false;
        this.api.dismissLoading();
        if (data.status == 1) {
          this.api.presentToastWithOptions(data['message']);
          this.router.navigate(["/customers-list"]);
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

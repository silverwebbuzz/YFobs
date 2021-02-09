import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from 'src/app/global/common_service';
import { ApiService } from 'src/app/services/api.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  custData: FormGroup;
  customer_process: boolean;
  reqData: any;
  customers: any;
  customerdata: any;
  state: any;
  selectedstate: any;
  country: any;
  statelist: any;
  currency: any;
  selectedcountry: any;
  selectedcurrency: any;
  country_name: any;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    public apiService: ApiService,
    private api: CommonService,
    private plt: Platform,
    private route: ActivatedRoute
  ) {
    this.cust_fb();
  }

  ngOnInit() {

    this.reqData = this.route.snapshot.queryParams;
  }

  countryData(refresh = false, refresher?) {
    this.api.presentLoading();
    this.apiService.allApi(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.statelist = res.data.state
      this.country = res.data.countries
      this.loadData(this.api.NetworkStatus);
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


  stateList(e) {
    this.state = this.statelist.filter(x => x.country_id == e.detail.value)
    this.currency = this.country.filter(x => x.id == e.detail.value)
    this.country_name = this.currency[0].currency_code
    this.custData.patchValue({
      currency: this.currency[0].currency_code + '-' + this.currency[0].currency_name,
    });
  }

  loadData(refresh = false, refresher?) {
    this.apiService.getCustomer(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      if (res.data) {
        let customerdata = res.data.filter((x) => x.id == this.reqData.id);
        let customerdetails = customerdata[0]
        this.selectedcountry = customerdetails.country
        this.state = this.statelist.filter(x => x.country_id == customerdetails.country)
        this.selectedstate = customerdetails.state
        this.currency = this.country.filter(x => x.id == customerdetails.country)
        this.country_name = this.currency[0].currency_code
        // this.selectedcurrency = this.currency[0].currency_code
        this.custData.patchValue({
          name: customerdetails.name,
          email: customerdetails.email,
          phone: customerdetails.phone,
          address: customerdetails.address,
          country: customerdetails.country,
          city: customerdetails.city,
          postal_code: customerdetails.postal_code,
          cus_number: customerdetails.cus_number,
          vat_code: customerdetails.vat_code,
          currency: this.currency[0].currency_code + '-' + this.currency[0].currency_name,
        });
        setTimeout(() => {

        }, 1000);
      }
      this.api.dismissLoading();
    },
      err => {
        this.api.dismissLoading();
        this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      }
    );
  }

  ionViewWillEnter() {
    this.plt.ready().then(() => {
      this.countryData(this.api.NetworkStatus);
    });
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFF');
  }

  goBack() {
    this.navCtrl.back();
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
      this.api.presentLoading();
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
        businessId: this.api.getBusinessId(),
        id: this.reqData.id,
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

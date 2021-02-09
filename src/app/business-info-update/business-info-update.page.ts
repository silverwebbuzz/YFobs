import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController, Platform } from '@ionic/angular';
import { NumberOnlyService } from '../../Services/number-only.service';
import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';
import { CommonService } from '../global/common_service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Validations } from '../global/Validations';
import { timeout } from 'rxjs/operators';


@Component({
  selector: 'app-business-info-update',
  templateUrl: './business-info-update.page.html',
  styleUrls: ['./business-info-update.page.scss'],
})

export class BusinessInfoUpdatePage implements OnInit {

  imageUrl = environment.image_url;
  defaultPlaceholder = 'assets/imgs/placeholder.png';
  BusinessDataUpdate: FormGroup;

  ActiveBusiness: any = [];
  state: any = [];
  category: any = [];
  businessLogo: any = "";
  businessLogoUrl: any = "";
  selectedstate: any;
  selectedcategory: any;
  returnUrl: any;

  constructor(
    public formBuilder: FormBuilder, 
    private route: Router,
    private statusBar: StatusBar, 
    public datepipe: DatePipe,
    private navCtrl: NavController, 
    private api: CommonService,
    public numberonly: NumberOnlyService, 
    public apiService: ApiService, 
    private plt: Platform, 
    private httpClient: HttpClient, 
    private activeRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.business_fb();
    this.isGstOption();
    this.plt.ready().then(() => {
      this.loadData(this.api.NetworkStatus);
      this.getBusinessDetails(this.api.NetworkStatus);
    });
    this.returnUrl = this.activeRoute.snapshot.queryParams.returnUrl;
  }

  loadData(refresh = false, refresher?) {
    this.api.presentLoading();
    this.apiService.allApi(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.state = res.data.state
      this.category = res.data.categories
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

  getBusinessDetails(refresh = false) {
    this.apiService.getBusinessDetails(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      if (res) {
        this.ActiveBusiness = res.data?.length >= 1 ? res.data[0] : [];
        this.BusinessDataUpdate.patchValue({
          businessRowId: this.ActiveBusiness.id,
          name: this.ActiveBusiness.name,
          title: this.ActiveBusiness.title,
          buslicno: this.ActiveBusiness.biz_number,
          gstno: this.ActiveBusiness.vat_code ?  this.ActiveBusiness.vat_code : '',
          mydate: this.ActiveBusiness.gst_register_date,
          is_registered_gst: this.ActiveBusiness.is_registered_gst ? this.ActiveBusiness.is_registered_gst.toString() : '2',
          city: this.ActiveBusiness.city,
          adrress: this.ActiveBusiness.address,
          code: this.ActiveBusiness.post_code,
        });
        setTimeout(() => {
          this.selectedstate = this.ActiveBusiness.state_id
          this.selectedcategory = this.ActiveBusiness.category
        }, 1000);

        this.businessLogo = this.ActiveBusiness.logo ? this.ActiveBusiness.logo : '';
      }
    },
    err => {
      this.api.dismissLoading();
      this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
    });
  }

  business_fb() {
    this.BusinessDataUpdate = this.formBuilder.group({
      businessRowId: ['', Validators.required],
      name: ['', Validators.required],
      title: [''],
      buslicno: [''],
      gstno: [''],
      mydate: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', [Validators.required, Validators.minLength(2), Validators.pattern(Validations.name_pattern)]],
      adrress: ['', Validators.required],
      code: ['', Validators.required],
      is_registered_gst: ['', Validators.required],
      image: [''],
      category: ['', Validators.required],
    });
  }

  imageUpload(e) {
    let file = e.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onloadend = (e: any) => {
        this.businessLogo = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      this.businessLogoUrl = file;
    }
  }

 
  isGstOption() {
    this.BusinessDataUpdate.get('is_registered_gst')
      .valueChanges.subscribe(
        (val: any) => {
          const gstno = this.BusinessDataUpdate.get('gstno');
          const mydate = this.BusinessDataUpdate.get('mydate');
          if (val == 1) {
            gstno.setValidators(Validators.compose([Validators.required, Validators.minLength(15)]));
            mydate.setValidators([Validators.required]);
          } else {
            gstno.clearValidators();
            gstno.updateValueAndValidity();

            mydate.clearValidators();
            mydate.updateValueAndValidity();
          }
        });
  }

  BusinessUpdate() {
    for (let v in this.BusinessDataUpdate.controls) {
      this.BusinessDataUpdate.controls[v].markAsTouched();
    }
    if (this.BusinessDataUpdate.valid) {
      this.api.presentLoading();

      var formData = new FormData();
      formData.append('id', this.BusinessDataUpdate.value.businessRowId);
      formData.append('user_id', this.api.getUserId());
      formData.append('name', this.BusinessDataUpdate.value.name);
      formData.append('title', this.BusinessDataUpdate.value.title);
      formData.append('biz_number', this.BusinessDataUpdate.value.buslicno);
      formData.append('vat_code', this.BusinessDataUpdate.value.gstno);
      formData.append('gst_registered_date', this.BusinessDataUpdate.value.mydate);
      formData.append('country', '79');
      formData.append('state_id', this.BusinessDataUpdate.value.state);
      formData.append('city', this.BusinessDataUpdate.value.city);
      formData.append('category', this.BusinessDataUpdate.value.category);
      formData.append('address', this.BusinessDataUpdate.value.adrress);
      formData.append('post_code', this.BusinessDataUpdate.value.code);
      formData.append('is_registered_gst', this.BusinessDataUpdate.value.is_registered_gst);
      if (this.businessLogoUrl) {
        formData.append('image', this.businessLogoUrl);
      }

      const myHeaders = new HttpHeaders({ 'Authorization': this.api.getToken() });
      this.httpClient.post<any>(environment.base_url + "invoice/businessUpdate", formData, { headers: myHeaders }).pipe(timeout(this.api.API_TIMEOUT)).subscribe((res) => {
        if (res.status == 1) {
          let bussiness = JSON.stringify(res.data[0]);
          localStorage.setItem('ActiveBusiness', bussiness);
          this.api.presentToastWithOptions(res.message);
          this.route.navigateByUrl(this.returnUrl);
        } else {
          this.api.presentToastWithOptions(res.message);
        }
        this.api.dismissLoading();
      },
        err => {
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        }
      );
    }
  }

  goBack() {
    this.navCtrl.navigateBack([this.returnUrl]);
  }

  radioButtonValue(val) { if (val != null && val != "") { if (val == 1) { return true; } else { return false; } } else { return ''; } }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFF');
  }

}

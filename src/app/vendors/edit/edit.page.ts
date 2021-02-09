import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NumberOnlyService } from 'src/Services/number-only.service';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/global/common_service';
import { Contacts } from '@ionic-native/contacts/ngx';
import { timeout } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  VendorsData: FormGroup;
  keyword = 'name';
  vendors: any;
  vendorselect: any;
  id: any;
  contactdata: any[];
  reqData: any;
  getvendor: any;

  constructor(
    public numberonly: NumberOnlyService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar,
    public modelctrl: ModalController,
    private navCtrl: NavController,
    public apiService: ApiService,
    private plt: Platform,
    private api: CommonService,
    private contacts: Contacts,
    private route: ActivatedRoute,
    private router :Router
  ) {
    this.vendors_fb();
  }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadData(this.api.NetworkStatus);
    });
    this.reqData = this.route.snapshot.queryParams;
  }

  loadData(refresh = false, refresher?) {
    this.apiService.getVendor(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.vendors = res.data ? res.data : [];
      if (this.reqData.id) {
        let vendordata = this.vendors.filter((x) => x.id == this.reqData.id);
        let vendordetails = vendordata[0]
        this.VendorsData.patchValue({
          name: vendordetails.name,
          phone: vendordetails.phone,
          address: vendordetails.address,
          email: vendordetails.email,
        });
        this.api.dismissLoading();
      }
    });
  }

  selectEvent(event) {
    this.vendorselect = event
    this.id = event.id
    this.VendorsData.patchValue({
      name: event.name,
      phone: event.phone,
      address: event.address ? event.address : "",
      email: event.email ? event.email : "",
    });
  }

  modalClose() {
    this.navCtrl.back();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
  }

  vendors_fb() {
    this.VendorsData = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  fnAddVendor() {
    for (let v in this.VendorsData.controls) {
      this.VendorsData.controls[v].markAsTouched();
    }
    if (this.VendorsData.valid) {
      this.api.presentLoading()
      var body = {
        name: this.VendorsData.value.name.name ? this.VendorsData.value.name.name : this.VendorsData.value.name,
        phone: this.VendorsData.value.phone,
        email: this.VendorsData.value.email,
        address: this.VendorsData.value.address,
        businessId: this.api.getBusinessId(),
        id: this.reqData.id,
      };
      this.api.Post("Vendor/VendorAdd", body).pipe(timeout(this.api.API_TIMEOUT)).subscribe(data => {
        this.api.dismissLoading();
        if (data.status == 1) {
          this.api.presentToastWithOptions(data['message']);
          this.router.navigate(["/vendors-list"]);
        }
      },
        err => {
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        }
      );
    }
  }

  fnContactphone() {
    if (this.plt.is('cordova')) {
      this.contacts.pickContact().then((contact) => {
        this.contactdata = []
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
          this.VendorsData.patchValue({
            name: body.name,
            phone: body.phone,
            email: body.email,
            address: ''
          });
        }
      });
    }
  }
}
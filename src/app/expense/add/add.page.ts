import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/global/common_service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  expData: FormGroup;
  customer_process: boolean;
  expense_process: boolean;
  vendors: any;
  expense_category: any;
  vendor_keyword = 'name';
  category_keyword = 'name';
  id: any;
  category_id: any;
  vendorId: any;
  vendorName: any;
  categoryName: any;
  categoryId: any;


  constructor(
    private router: Router,
    private navCtrl: NavController,
    private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    public apiService: ApiService,
    private api: CommonService,
    private plt: Platform,
  ) {
    this.exp_fb();
  }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.dropdownData(this.api.NetworkStatus);
    });
  }

  dropdownData(refresh = false, refresher?) {
    this.api.presentLoading();
    this.apiService.allApi(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.expense_category = res.data.expense_category
      this.vendors = res.data.vendors
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

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFF');
  }

  goBack() {
    this.navCtrl.back();
  }

  exp_fb() {
    this.expData = this.formBuilder.group({
      amount: ['', Validators.required],
      tax: ['', null],
      vendor: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      notes: ['', null],
    });
  }

  vendorselectEvent(event) {
    this.id = event["id"];
    this.expData.patchValue({
      name: event.name,
    });

  }

  categoryselectEvent(event) {
    this.category_id = event["id"];
    this.expData.patchValue({
      name: event.name,
    });

  }

  save() {
    for (let v in this.expData.controls) {
      this.expData.controls[v].markAsTouched();
    }
    if (this.id) {
      this.vendorId = this.id ? this.id : null;
      this.vendorName = null;
    } else {
      this.vendorId = null;
      this.vendorName = this.expData.value.vendor;
    }

    if (this.category_id) {
      this.categoryId = this.category_id ? this.category_id : null;
      this.categoryName = null;
    } else {
      this.categoryId = null;
      this.categoryName = this.expData.value.category;
    }
    if (this.expData.valid) {
      this.api.presentLoading()
      var body = {
        amount: this.expData.value.amount,
        tax: this.expData.value.tax,
        vendor: this.vendorId,
        category: this.categoryId,
        vendor_name: this.vendorName,
        category_name: this.categoryName,
        date: this.expData.value.date,
        notes: this.expData.value.notes,
        businessId: this.api.getBusinessId(),
      };
      this.api.Post("Expense/expenseAdd", body).pipe(timeout(this.api.API_TIMEOUT)).subscribe(data => {
        this.expense_process = false;
        this.api.dismissLoading();
        if (data.status == 1) {
          this.api.presentToastWithOptions(data['message']);
          this.router.navigate(["/expense-list"]);
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

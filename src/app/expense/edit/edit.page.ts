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

  expData: FormGroup;
  expense_process: boolean;
  expense_category: any;
  vendors: any;
  reqData: any;
  expenseAll: any;
  selectedcategory: any;
  selectedvendor: any;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    public apiService: ApiService,
    private api: CommonService,
    private route: ActivatedRoute, private plt: Platform,
  ) {
    this.exp_fb();
  }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.dropdownData(this.api.NetworkStatus);
    });
    this.reqData = this.route.snapshot.queryParams;
  }

  dropdownData(refresh = false, refresher?) {
    this.api.presentLoading();
    this.apiService.allApi(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.expense_category = res.data.expense_category
      this.vendors = res.data.vendors
      this.loadData(this.api.NetworkStatus);
      if (refresher) {
        refresher.target.complete();
      }
    },
    err => {
      this.api.dismissLoading();
      this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
    });
    
  }

  loadData(refresh = false, refresher?) {
    this.apiService.getExpense(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      if (res.data) {
        this.expenseAll = res.data
        let expensedata = this.expenseAll.filter((x) => x.id == this.reqData.id);
        let expensedetails = expensedata[0]
        this.selectedcategory = expensedetails.category
        this.selectedvendor = expensedetails.vendor
        this.expData.patchValue({
          amount: expensedetails.amount,
          tax: expensedetails.tax,
          vendor: expensedetails.vendor,
          category: expensedetails.category,
          notes: expensedetails.notes,
          date: expensedetails.date,
        });
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

  save() {
    for (let v in this.expData.controls) {
      this.expData.controls[v].markAsTouched();
    }
    if (this.expData.valid) {
      this.api.presentLoading()
      var body = {
        amount: this.expData.value.amount,
        tax: this.expData.value.tax,
        vendor: this.expData.value.vendor,
        category: this.expData.value.category,
        notes: this.expData.value.notes,
        date: this.expData.value.date,
        businessId: this.api.getBusinessId(),
        id: this.reqData.id,
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

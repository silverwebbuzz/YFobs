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

  prodData: FormGroup;
  product_process: boolean;
  reqData: any;
  products: any;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    private api: CommonService,
    private route: ActivatedRoute,
    private plt: Platform,
    public apiService: ApiService,
  ) {
    this.prod_fb();
  }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadData(this.api.NetworkStatus);
    });
    this.reqData = this.route.snapshot.queryParams;
  }

  loadData(refresh = false, refresher?) {
    if (!refresher) {
      this.api.presentLoading();
    }
    this.apiService.getProduct(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      if (res.data) {
        this.products = res.data
        let productdata = this.products.filter((x) => x.id == this.reqData.id);
        let productdetails = productdata[0]
        this.prodData.patchValue({
          name: productdetails.name,
          price: productdetails.price,
          hsncode: productdetails.hsncode,
          details: productdetails.details,
        });
      }
      this.api.dismissLoading();
      if (refresher) {
        refresher.target.complete();
      }   
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

  prod_fb() {
    this.prodData = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      hsncode: ['', null],
      details: ['', null],
    });
  }

  save() {
    for (let v in this.prodData.controls) {
      this.prodData.controls[v].markAsTouched();
    }
    if (this.prodData.valid) {
      this.api.presentLoading()
      var body = {
        name: this.prodData.value.name,
        price: this.prodData.value.price,
        hsncode: this.prodData.value.hsncode,
        details: this.prodData.value.details,
        businessId: this.api.getBusinessId(),
        id: this.reqData.id
      };
      this.api.Post("product/add", body).pipe(timeout(this.api.API_TIMEOUT)).subscribe(data => {
        this.product_process = false;
        this.api.dismissLoading();
        if (data.status == 1) {
          this.api.presentToastWithOptions(data['message']);
          this.router.navigate(["/products-list"]);
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from 'src/app/global/common_service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  prodData: FormGroup;
  product_process: boolean;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private statusBar: StatusBar,
    private formBuilder: FormBuilder,
    private api: CommonService,
  ) { 
    this.prod_fb();
  }

  ngOnInit() {
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
    if(this.prodData.valid) {
      this.api.presentLoading()
      var body = {
        name: this.prodData.value.name,
        price: this.prodData.value.price,
        hsncode: this.prodData.value.hsncode,
        details: this.prodData.value.details,
        businessId: this.api.getBusinessId(),
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

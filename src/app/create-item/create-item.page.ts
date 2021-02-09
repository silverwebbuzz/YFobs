import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ModalController, Platform } from '@ionic/angular';
import { CommonService } from '../global/common_service';
import { ApiService } from '../services/api.service';
import * as _ from 'lodash';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timeout } from 'rxjs/operators';

@Component({
  selector: "app-create-item",
  templateUrl: "./create-item.page.html",
  styleUrls: ["./create-item.page.scss"],
})
export class CreateItemPage implements OnInit {
  ItemData: FormGroup;
  product: any;
  data: number;
  id: any;
  public input: string = '';
  public products: string[] = [];

  selectEventValue: number = 0;
  event: any;
  keyword = 'name';

  constructor(
    private formBuilder: FormBuilder,
    private api: CommonService,
    public modelctrl: ModalController,
    public apiService: ApiService,
    private statusBar: StatusBar,
    private plt: Platform,
  ) {
    this.item_fb();
  }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadData(this.api.NetworkStatus);
    });
  }

  loadData(refresh = false, refresher?) {
    this.apiService.getProduct(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      this.products = res.data;
      if (refresher) {
        refresher.target.complete();
      }
    },
      err => {
        this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      });
  }

  selectEvent(event) {
    this.event = event
    this.id = event["id"];
    this.selectEventValue = 1
    this.ItemData.patchValue({
      name: event.name,
      price: event.price,
      qty: '',
      hsncode: event.hsncode ? event.hsncode : "",
      descname: event.details ? event.details : "",
    });
  }

  item_fb() {
    this.ItemData = this.formBuilder.group({
      name: ["", null],
      price: ["", Validators.required],
      qty: ["", Validators.required],
      hsncode: [""],
      descname: [""],
    });
  }

  Modalclose() {
    this.modelctrl.dismiss();
  }

  fnAddItem() {
    for (let v in this.ItemData.controls) {
      this.ItemData.controls[v].markAsTouched();
    }
    if (this.ItemData.valid) {
      this.api.presentLoading();
      // if (this.selectEventValue) {
      //   if (this.ItemData.value['name'].name) {
      //     var edit_res_data = {
      //       id: this.id,
      //       businessId: this.api.getBusinessId(),
      //       product_name: this.ItemData.value.name.name,
      //       invoice_item_price: this.ItemData.value.price,
      //       hsncode: this.ItemData.value.hsncode,
      //       details: this.ItemData.value.descname,
      //       qty: this.ItemData.value.qty,
      //       total: Number(this.ItemData.value.qty) * (this.ItemData.value.price),
      //     };
      //     this.modelctrl.dismiss({ data: edit_res_data });
      //   }
      //   else {
      //     var edit_body = {
      //       businessId: this.api.getBusinessId(),
      //       product_name: this.ItemData.value.name,
      //       invoice_item_price: this.ItemData.value.price,
      //       hsncode: this.ItemData.value.hsncode,
      //       details: this.ItemData.value.descname,
      //       qty: this.ItemData.value.qty,
      //       total: Number(this.ItemData.value.qty) * (this.ItemData.value.price),
      //     };
      //     this.modelctrl.dismiss({ data: edit_body });
      //   }
      //   this.api.dismissLoading();
      // }
      // else {
        var edit_itemdata = {
          businessId: this.api.getBusinessId(),
          name: this.ItemData.value.name,
          price: this.ItemData.value.price,
          hsncode: this.ItemData.value.hsncode,
          details: this.ItemData.value.descname,
        };
        this.api.Post("product/add", edit_itemdata).pipe(timeout(this.api.API_TIMEOUT)).subscribe((data) => {
          var edit_res_data = {
            id: data.data.id,
            businessId: this.api.getBusinessId(),
            product_name: this.ItemData.value.name,
            invoice_item_price: this.ItemData.value.price,
            hsncode: this.ItemData.value.hsncode,
            details: this.ItemData.value.descname,
            qty: this.ItemData.value.qty,
            total: Number(this.ItemData.value.qty) * (this.ItemData.value.price),
          };
          if (data.status == 1) {
            this.api.presentToastWithOptions(data["message"]);
            this.modelctrl.dismiss({ data: edit_res_data });
          }
          this.api.dismissLoading();
        },
          err => {
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
          });

      // }
    }
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFF');
  }
}

import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { CreateItemPage } from '../create-item.page';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/global/common_service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-multiple-items',
  templateUrl: './multiple-items.page.html',
  styleUrls: ['./multiple-items.page.scss'],
})
export class MultipleItemsPage implements OnInit {
  
  public ItemData: any = [];
  InvoiceLoader: boolean = true;

  getItemData
  temp: any = [];
  selectqty: any;
  SelectedItem: any;
  constructor(
    private modelCtrl: ModalController,
    public apiService: ApiService,
    private api: CommonService,
    private plt: Platform,
  ) { }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadData(this.api.NetworkStatus);
    });
  }

  loadData(refresh = false, refresher?, showLoading = true) {
    if (!refresher && showLoading) {
      this.api.presentLoading();
    }
    this.apiService.getProduct(refresh).pipe(timeout(this.api.API_TIMEOUT)).subscribe(res => {
      if (refresher) {
        refresher.target.complete();
        this.InvoiceLoader = false;
      } else {
        if(res.data){
        var i = 0;
        this.ItemData = res.data.map(x => {
          if(this.getItemData.length > i && this.getItemData.length > 0){
            if(this.getItemData[i].id == x.id && this.getItemData.length >= i)
            {
              x.qty = this.getItemData[i].qty;
              i++;
            }else{
              x.qty = 0;
            }
          }else{
            x.qty = 0;
          }
          
          this.api.dismissLoading();
          this.InvoiceLoader = false;
          return x;
        });
      }
        console.log("temp", this.ItemData);
      }
      this.api.dismissLoading();
    },
      err => {
        this.api.dismissLoading();
        this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      }
    );
   
  }


  modalClose() {
    this.modelCtrl.dismiss();
  }

  decrementCartItem(pro): boolean {
    let decrement: boolean = false;
    let pos: number = -1;
    for (let i = 0; i < this.ItemData.length; i++) {
      if (pro.id == this.ItemData[i].id) {
        pos = i;
        break;
      }
    }
    if (pos != -1) {
      if (this.ItemData[pos].qty > 0) {
        this.ItemData[pos].qty = Number(this.ItemData[pos].qty) - 1;
        decrement = true;
        this.temp = this.ItemData.filter(x => x.qty >= 1)
        window.localStorage.setItem('cartItems', JSON.stringify(this.ItemData));
      }


    }
    return decrement;
  }

  async incrementCartItem(pro) {
    let increment: boolean = false;
    let pos: number = -1;
    for (let i = 0; i < this.ItemData.length; i++) {
      if (pro.id == this.ItemData[i].id) {
        pos = i;
        break;
      }
    }
    if (pos != -1) {
      this.ItemData[pos].qty = Number(this.ItemData[pos].qty) + 1;
      this.temp = this.ItemData.filter(x => x.qty >= 1)
      console.log()
      window.localStorage.setItem('cartItems', JSON.stringify(this.ItemData));
    }
  }

  // checkExist(value, formcontrolname) {
  //   let checkvalue = value.toString();
  //   const checkArray = this.getItemData
  //   return checkArray.value.includes(checkvalue) ? true : false;

  // }

  // setPropertyFetures(values) {
  //   const checkArray: FormArray = this.editResidentialPropertyForm.get(
  //     "property_features"
  //   ) as FormArray;
  //   if (values && values.length > 0) {
  //     let valueArray = values.split(",");
  //     for (let i = 0; i < valueArray.length; i++) {
  //       checkArray.push(new FormControl(valueArray[i]));
  //     }
  //   }


  itemDec(item) {
    console.log("Decrements_item",item);
    this.decrementCartItem(item)
  }

  itemInc(item) {
    console.log("item_Increments",item);
    this.incrementCartItem(item)
  }

  async addNew() {
    const modal = await this.modelCtrl.create({
      component: CreateItemPage,
      backdropDismiss: false,
      swipeToClose: true
    });
    modal.onDidDismiss().then((val) => {
      if (val && val.data) {
        this.loadData(this.api.NetworkStatus, null, false);
      }
    })
    return await modal.present();
  }

  submit() {
    var newRelated = [];
    
    for (let j in this.temp) {
      newRelated.push({
        'id': this.temp[j].id,
        'product_name': this.temp[j].name,
        'invoice_item_price': this.temp[j].price,
        'hsncode': this.temp[j].hsncode,
        'qty': this.temp[j].qty,
      });
    }
    // console.log("this.ItemData",this.temp)
    // var edit_res_data = {
    //   id:this.ItemData.id,
    //   product_name: this.ItemData.name,
    //   invoice_item_price: this.ItemData.price,
    //   hsncode: this.ItemData.hsncode,
    //   qty: this.ItemData.qty,
    // };
    console.log("len", newRelated.length);
    console.log("this.ItemData", newRelated.length ? newRelated : this.getItemData)
    this.modelCtrl.dismiss(newRelated.length ? newRelated : this.getItemData);
  }


}

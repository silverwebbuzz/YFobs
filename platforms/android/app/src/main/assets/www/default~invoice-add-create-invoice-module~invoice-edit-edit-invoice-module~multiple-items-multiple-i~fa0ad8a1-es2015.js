(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~invoice-add-create-invoice-module~invoice-edit-edit-invoice-module~multiple-items-multiple-i~fa0ad8a1"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-item/multiple-items/multiple-items.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-item/multiple-items/multiple-items.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Select Multiple Items</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"modalClose()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"isEmptyImg\" *ngIf=\"(ItemData?.length == 0 || ItemData == null) && InvoiceLoader\">\n    <img src=\"/assets/imgs/noItems.png\" class=\"img_profile\" />\n  </div>\n\n  <div class=\"div_item\">\n    <ion-row class=\"row_item\" *ngFor=\"let item of ItemData;let i = index\">\n      <ion-col size=\"8\" class=\"col_item\">\n        <ion-label class=\"lbl_Name\">Name: {{item.name}} <span *ngIf=\"item.hsncode\">[{{item.hsncode}}]</span></ion-label>\n        <ion-label class=\"lbl_Price\">Price: {{item.price | number:'2.2'}} </ion-label>\n        <ion-label class=\"lbl_Price total_\">Total: {{item.qty * item.price | number:'2.2'}}</ion-label>\n        <!-- {{item.qty}} * {{item.price }} =  -->\n      </ion-col>\n      <ion-col size=\"4\" class=\"col_item center_\">\n        <ion-label class=\"lbl_DecInc\" (click)=\"itemDec(item)\">-</ion-label>\n        <ion-label class=\"lbl_Qty\">{{item.qty}}</ion-label>\n        <ion-label class=\"lbl_DecInc\" (click)=\"itemInc(item)\">+</ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" color=\"primary\" class=\"btn_bottom\" *ngIf=\"(ItemData?.length == 0 || ItemData == null)\"\n    (click)=\"addNew()\">Add New Item</ion-button>\n  <ion-row class=\"row_footer\" *ngIf=\"(ItemData?.length >= 1)\">\n    <ion-col size=\"6\" class=\"col_footer\">\n      <ion-button expand=\"full\" color=\"secondary\" class=\"btn_footer\" (click)=\"addNew()\">\n        Add New</ion-button>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_footer\">\n      <ion-button expand=\"full\" color=\"primary\" class=\"btn_footer\" (click)=\"submit()\">\n        Submit</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "./src/app/create-item/multiple-items/multiple-items.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/create-item/multiple-items/multiple-items.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .div_item .row_item {\n  padding: 8px;\n  background: var(--ion-color-light);\n  margin: 8px;\n  border-radius: 8px;\n}\nion-content .div_item .row_item .col_item {\n  padding: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\nion-content .div_item .row_item .col_item .lbl_Name {\n  display: block;\n  font-size: 14px;\n  padding: 4px 0px;\n}\nion-content .div_item .row_item .col_item .lbl_Price {\n  display: block;\n  font-size: 14px;\n  padding: 4px 0px;\n}\nion-content .div_item .row_item .col_item .lbl_Qty {\n  display: inline-block;\n  font-size: 16px;\n  padding: 4px 0px;\n  margin: 0 auto;\n  font-weight: bold;\n  width: 28px;\n  text-align: center;\n  color: var(--ion-color-primary);\n  background: var(--ion-color-secondary);\n}\nion-content .div_item .row_item .col_item .lbl_DecInc {\n  display: inline-block;\n  font-size: 16px;\n  padding: 4px 0px;\n  font-weight: bold;\n  margin: 0px 0px;\n  width: 28px;\n  text-align: center;\n  color: var(--ion-color-light);\n  background: var(--ion-color-primary);\n}\n.isEmptyImg {\n  height: 100%;\n}\n.isEmptyImg .img_profile {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.center_ {\n  text-align: center;\n}\n.total_ {\n  color: var(--ion-color-primary) !important;\n  font-weight: bold;\n}\nion-footer .btn_bottom {\n  margin: 0px;\n  font-size: 14px;\n}\nion-footer .row_footer .col_footer {\n  padding: 0px;\n}\nion-footer .row_footer .col_footer .btn_footer {\n  margin: 0px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWl0ZW0vbXVsdGlwbGUtaXRlbXMvbXVsdGlwbGUtaXRlbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksWUFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRFI7QUFFTTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQVY7QUFDUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDVjtBQUNRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNWO0FBQ1E7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7QUFDWjtBQUNRO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FBQ1o7QUFLQTtFQUNFLFlBQUE7QUFGRjtBQUdFO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFESjtBQUlBO0VBQ0ksa0JBQUE7QUFESjtBQUdBO0VBQ0UsMENBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUFKO0FBR0k7RUFDRSxZQUFBO0FBRE47QUFFTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtaXRlbS9tdWx0aXBsZS1pdGVtcy9tdWx0aXBsZS1pdGVtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC5kaXZfaXRlbSB7XG4gICAgLnJvd19pdGVtIHtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgLmNvbF9pdGVtIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgICAubGJsX05hbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5sYmxfUHJpY2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5sYmxfUXR5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIH1cbiAgICAgICAgLmxibF9EZWNJbmMge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmlzRW1wdHlJbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIC5pbWdfcHJvZmlsZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG59XG4uY2VudGVyX3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udG90YWxfe1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWZvb3RlciB7XG4gIC5idG5fYm90dG9te1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAucm93X2Zvb3RlciB7XG4gICAgLmNvbF9mb290ZXIge1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgLmJ0bl9mb290ZXIge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/create-item/multiple-items/multiple-items.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/create-item/multiple-items/multiple-items.page.ts ***!
  \*******************************************************************/
/*! exports provided: MultipleItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleItemsPage", function() { return MultipleItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-item.page */ "./src/app/create-item/create-item.page.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let MultipleItemsPage = class MultipleItemsPage {
    constructor(modelCtrl, apiService, api, plt) {
        this.modelCtrl = modelCtrl;
        this.apiService = apiService;
        this.api = api;
        this.plt = plt;
        this.ItemData = [];
        this.InvoiceLoader = true;
        this.temp = [];
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            this.loadData(this.api.NetworkStatus);
        });
    }
    loadData(refresh = false, refresher, showLoading = true) {
        if (!refresher && showLoading) {
            this.api.presentLoading();
        }
        this.apiService.getProduct(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
            if (refresher) {
                refresher.target.complete();
                this.InvoiceLoader = false;
            }
            else {
                if (res.data) {
                    var i = 0;
                    this.ItemData = res.data.map(x => {
                        if (this.getItemData.length > i && this.getItemData.length > 0) {
                            if (this.getItemData[i].id == x.id && this.getItemData.length >= i) {
                                x.qty = this.getItemData[i].qty;
                                i++;
                            }
                            else {
                                x.qty = 0;
                            }
                        }
                        else {
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
        }, err => {
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        });
    }
    modalClose() {
        this.modelCtrl.dismiss();
    }
    decrementCartItem(pro) {
        let decrement = false;
        let pos = -1;
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
                this.temp = this.ItemData.filter(x => x.qty >= 1);
                window.localStorage.setItem('cartItems', JSON.stringify(this.ItemData));
            }
        }
        return decrement;
    }
    incrementCartItem(pro) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let increment = false;
            let pos = -1;
            for (let i = 0; i < this.ItemData.length; i++) {
                if (pro.id == this.ItemData[i].id) {
                    pos = i;
                    break;
                }
            }
            if (pos != -1) {
                this.ItemData[pos].qty = Number(this.ItemData[pos].qty) + 1;
                this.temp = this.ItemData.filter(x => x.qty >= 1);
                console.log();
                window.localStorage.setItem('cartItems', JSON.stringify(this.ItemData));
            }
        });
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
        console.log("Decrements_item", item);
        this.decrementCartItem(item);
    }
    itemInc(item) {
        console.log("item_Increments", item);
        this.incrementCartItem(item);
    }
    addNew() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modelCtrl.create({
                component: _create_item_page__WEBPACK_IMPORTED_MODULE_3__["CreateItemPage"],
                backdropDismiss: false,
                swipeToClose: true
            });
            modal.onDidDismiss().then((val) => {
                if (val && val.data) {
                    this.loadData(this.api.NetworkStatus, null, false);
                }
            });
            return yield modal.present();
        });
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
        console.log("this.ItemData", newRelated.length ? newRelated : this.getItemData);
        this.modelCtrl.dismiss(newRelated.length ? newRelated : this.getItemData);
    }
};
MultipleItemsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
MultipleItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-multiple-items',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./multiple-items.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-item/multiple-items/multiple-items.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./multiple-items.page.scss */ "./src/app/create-item/multiple-items/multiple-items.page.scss")).default]
    })
], MultipleItemsPage);



/***/ })

}]);
//# sourceMappingURL=default~invoice-add-create-invoice-module~invoice-edit-edit-invoice-module~multiple-items-multiple-i~fa0ad8a1-es2015.js.map
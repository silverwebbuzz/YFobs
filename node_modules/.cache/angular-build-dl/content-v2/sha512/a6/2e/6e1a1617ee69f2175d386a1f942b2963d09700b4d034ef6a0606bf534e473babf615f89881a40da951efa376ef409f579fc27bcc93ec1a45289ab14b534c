(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-add-create-invoice-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/add/create-invoice.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/add/create-invoice.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>New Invoice</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <form [formGroup]=\"invoiceForm\">\n\n    <ion-item no-padding lines=\"none\" class=\"items_\" (click)=\"businessProfile()\">\n      <ion-label class=\"lbl_name\">{{ActiveBusiness ? ActiveBusiness.name : ''}}</ion-label>\n      <ion-icon color=\"primary\" slot=\"end\" name=\"create-sharp\" class=\"icon_\"></ion-icon>\n    </ion-item>\n\n    <div class=\"div_top\">\n      <ion-row class=\"row_top\">\n        <ion-col size=\"6\" class=\"col_top right_ bottom_\">\n          <ion-input type=\"text\" formControlName=\"invoice\" placeholder=\"Tax - Invoice\" class=\"input_\"></ion-input>\n\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\n            *ngIf=\"invoiceForm.controls.invoice.hasError('required') && invoiceForm.controls.invoice.touched\">\n            <p class=\"content\">Please Enter Invoice!</p>\n          </ion-item>\n\n        </ion-col>\n        <ion-col size=\"6\" class=\"col_top\">\n          <ion-input type=\"text\" formControlName=\"invoiceNo\" placeholder=\"Invoice number\" class=\"input_\"></ion-input>\n\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\n            *ngIf=\"invoiceForm.controls.invoiceNo.hasError('required') && invoiceForm.controls.invoiceNo.touched\">\n            <p class=\"content\">Please Enter Invoice No.!</p>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"row_top\">\n        <ion-col size=\"6\" class=\"col_top right_\">\n          <ion-input type=\"text\" formControlName=\"proName\" placeholder=\"Project name\" class=\"input_\"></ion-input>\n\n        </ion-col>\n        <ion-col size=\"6\" class=\"col_top\">\n          <ion-input type=\"text\" formControlName=\"psNo\" placeholder=\"P.O/S.O number\" class=\"input_\"></ion-input>\n\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <!-- <li-ionic4-datepicker style=\"margin-left: 50px;\" [(ngModel)]=\"mydate\" [inputDateConfig]=\"datePickerObj\"></li-ionic4-datepicker> -->\n\n    <ion-row class=\"row_date\">\n      <ion-col size=\"6\" class=\"col_date right_\">\n        <ion-item no-padding lines=\"none\" class=\"item_drop\">\n          <ion-datetime displayFormat=\"DD-MM-YYYY\" formControlName=\"invoiceDate\" placeholder=\"Invoice Date\"\n            class=\"date_\"></ion-datetime>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"invoiceForm.controls.invoiceDate.hasError('required') && invoiceForm.controls.invoiceDate.touched\">\n          <p class=\"content\">Please Select Invoice Date!</p>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"6\" class=\"col_date\">\n        <ion-item no-padding lines=\"none\" class=\"item_drop\">\n          <ion-select interface=\"action-sheet\" formControlName=\"due_limit\" placeholder=\"Payment Due\" class=\"dropWidth_\"\n            mode=\"md\" [(ngModel)]=\"get_due_limit\">\n            <ion-select-option value=\"1\">On receipt</ion-select-option>\n            <ion-select-option value=\"3\">Within 03 days</ion-select-option>\n            <ion-select-option value=\"7\">Within 07 days</ion-select-option>\n            <ion-select-option value=\"15\">Within 15 days</ion-select-option>\n            <ion-select-option value=\"30\">Within 30 days</ion-select-option>\n            <ion-select-option value=\"45\">Within 45 days</ion-select-option>\n            <ion-select-option value=\"60\">Within 60 days</ion-select-option>\n            <ion-select-option value=\"90\">Within 90 days</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"invoiceForm.controls.due_limit.hasError('required') && invoiceForm.controls.due_limit.touched\">\n          <p class=\"content\">Please Select Due Date!</p>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n    <div class=\"div_cust\" *ngFor=\"let customer of CustomerData\">\n      <ion-item lines=\"none\" class=\"item_cust\">\n        <ion-label slot=\"start\" class=\"lbl_cust bold_\">{{customer.name}}</ion-label>\n        <ion-label class=\"lbl_cust rights_\">{{customer.phone}}</ion-label>\n      </ion-item>\n      <ion-button fill=\"clear\" size=\"small\" shape=\"round\" class=\"btn\" (click)=\"fnredirectcustomer(customer,i)\">\n        <ion-icon name=\"create-sharp\" class=\"icon_btn\"></ion-icon>\n      </ion-button>\n    </div>\n\n    <div *ngIf=\"CustomerData == ''\">\n      <ion-item no-padding lines=\"full\" class=\"item_btn\" (click)=\"fnredirectcustomer('')\">\n        <ion-icon color=\"primary\" name=\"add-circle-outline\" class=\"icons_\"></ion-icon>\n        <ion-label color=\"primary\" class=\"lbl_add\">Add Customer</ion-label>\n      </ion-item>\n    </div>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\" *ngIf=\"submitted && this.CustomerData ==  0\">\n      <p class=\"content\">Please select customers.</p>\n    </ion-item>\n\n\n    <div *ngFor=\"let item of ItemData;let i = index\" class=\"div_items\">\n\n      <ion-item lines=\"none\" class=\"item_items\">\n        <ion-label slot=\"start\" class=\"lbls_ bold_\" color=\"primary\">{{item.product_name}} <span\n            *ngIf=\"item.hsncode\">[{{item.hsncode}}]</span>\n        </ion-label>\n        <ion-label class=\"lbls_ rights_\" color=\"primary\">{{item.qty * item.invoice_item_price | number:'2.2'}}\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"item_items bottoms_\">\n        <ion-label slot=\"start\" class=\"lbls_\">Item Subtotal</ion-label>\n        <ion-label class=\"lbls_ rights_\">{{item.qty}} * ₹ {{item.invoice_item_price | number:'2.2-2'}}\n          <!-- = {{item.qty * item.price | number:'2.2'}} -->\n        </ion-label>\n      </ion-item>\n      <ion-button class=\"btn\" fill=\"clear\" size=\"small\" shape=\"round\" (click)=\"deleteItem(i)\">\n        <ion-icon name=\"close-sharp\" class=\"icon_btn\"></ion-icon>\n      </ion-button>\n\n    </div>\n\n    <div *ngIf=\"ItemData == ''\">\n      <ion-item no-padding lines=\"none\" class=\"item_btn\" (click)=\"fnredirectitem()\">\n        <ion-icon color=\"primary\" name=\"add-circle-outline\" class=\"icons_\"></ion-icon>\n        <ion-label color=\"primary\" class=\"lbl_add\">Add Item</ion-label>\n      </ion-item>\n    </div>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\" *ngIf=\"submitted && this.ItemData ==  0\">\n      <p class=\"content\">Please select items.</p>\n    </ion-item>\n\n    <div *ngIf=\"ItemData != ''\" class=\"div_btns\">\n      <ion-row class=\"row_btns\">\n        <ion-col size=\"3\" class=\"col_btns\">\n          <ion-button expand=\"block\" fill=\"outline\" size=\"small\" class=\"btns_\" (click)=\"fnredirectitem()\">Add Item\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"4\" class=\"col_btns auto_\">\n          <ion-label class=\"lbl_qty rights_ bold_\">Total Qty : {{itemqty}}</ion-label>\n        </ion-col>\n        <ion-col size=\"5\" class=\"col_btns auto_\">\n          <ion-label class=\"lbl_qty rights_ bold_\">Total : {{subTotal | number:'2.2-2'}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class=\"div_bottom\">\n      <ion-row class=\"row_bottom\">\n        <ion-col size=\"4\" class=\"col_bottom\">\n          <ion-label class=\"lbl_\">Subtotal</ion-label>\n        </ion-col>\n        <ion-col size=\"8\" class=\"col_bottom\">\n          <ion-input type=\"number\" formControlName=\"subTotal\" disabled value=\"{{subTotal}}\" class=\"inputs_ bold_ size_\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"row_bottom\">\n        <ion-col size=\"4\" class=\"col_bottom\">\n          <ion-label class=\"lbl_\">Discount&nbsp;%</ion-label>\n        </ion-col>\n        <ion-col size=\"4\" class=\"col_bottom right_\">\n          <ion-input type=\"number\" formControlName=\"discount\" (ionChange)=\"loadAmount($event,'discount')\"\n            [(ngModel)]=\"discount\" placeholder=\"0\" class=\"inputs_ bold_ size_ color_\">\n          </ion-input>\n        </ion-col>\n        <!-- <ion-col size=\"4\" class=\"col_bottom\" *ngIf=\"!discountrs\">\n          <ion-input type=\"number\" formControlName=\"discAmt\" disabled  class=\"inputs_\">₹\n          </ion-input>\n        </ion-col> -->\n\n        <ion-col size=\"4\" class=\"col_bottom\">\n          <ion-input type=\"number\" formControlName=\"discAmt\" disabled value=\"{{discountrs}}\" class=\"inputs_\">₹\n          </ion-input>\n        </ion-col>\n\n      </ion-row>\n      <ion-row class=\"row_bottom\">\n        <ion-col size=\"4\" class=\"col_bottom\">\n          <ion-label class=\"lbl_\">Tax&nbsp;%</ion-label>\n        </ion-col>\n        <ion-col size=\"4\" class=\"col_bottom right_\">\n          <ion-select mode=\"md\" formControlName=\"tax\" interface=\"action-sheet\" (ionChange)=\"loadAmount($event,'tax')\"\n            class=\"inputs_ select_\">\n            <ion-select-option *ngFor=\"let opt of taxValueList\" [value]=\"opt.id\">{{opt.name}}[{{opt.rate}}]%\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col size=\"4\" class=\"col_bottom\">\n          <ion-input type=\"number\" formControlName=\"taxAmt\" disabled value=\"{{taxDisplay}}\" class=\"inputs_ bold_ size_\">\n            ₹</ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"row_bottom\">\n        <ion-col size=\"8\" class=\"col_bottom\">\n          <ion-label class=\"lbl_total\">Total Amount</ion-label>\n        </ion-col>\n        <!-- <ion-col size=\"4\" class=\"col_bottom\" *ngIf=\"!grandtotle\">\n          <ion-input type=\"number\" formControlName=\"amt\" disabled  class=\"inputs_\"></ion-input>\n        </ion-col> -->\n\n        <ion-col size=\"4\" class=\"col_bottom\">\n          <ion-input type=\"number\" formControlName=\"amt\" disabled value=\"{{GrandTotal}}\" class=\"inputs_\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-item lines=\"full\" class=\"items_Note\">\n      <ion-textarea rows=\"3\" placeholder=\"Notes\" formControlName=\"footer_note\" class=\"input_Note\"></ion-textarea>\n    </ion-item>\n  </form>\n\n</ion-content>\n\n<ion-footer>\n\n  <div class=\"div_fab\">\n    <ion-button expand=\"full\" size=\"large\" shape=\"round\" class=\"btn_ shadow_btn\" (click)=\"InvoiceAdd()\">Save and\n      Preview\n    </ion-button>\n  </div>\n\n</ion-footer>");

/***/ }),

/***/ "./src/app/invoice/add/create-invoice-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/invoice/add/create-invoice-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: CreateInvoicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInvoicePageRoutingModule", function() { return CreateInvoicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_invoice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-invoice.page */ "./src/app/invoice/add/create-invoice.page.ts");




const routes = [
    {
        path: '',
        component: _create_invoice_page__WEBPACK_IMPORTED_MODULE_3__["CreateInvoicePage"]
    }
];
let CreateInvoicePageRoutingModule = class CreateInvoicePageRoutingModule {
};
CreateInvoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateInvoicePageRoutingModule);



/***/ }),

/***/ "./src/app/invoice/add/create-invoice.module.ts":
/*!******************************************************!*\
  !*** ./src/app/invoice/add/create-invoice.module.ts ***!
  \******************************************************/
/*! exports provided: CreateInvoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInvoicePageModule", function() { return CreateInvoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-invoice-routing.module */ "./src/app/invoice/add/create-invoice-routing.module.ts");
/* harmony import */ var _create_invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-invoice.page */ "./src/app/invoice/add/create-invoice.page.ts");
/* harmony import */ var _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @logisticinfotech/ionic4-datepicker */ "./node_modules/@logisticinfotech/ionic4-datepicker/__ivy_ngcc__/fesm2015/logisticinfotech-ionic4-datepicker.js");








let CreateInvoicePageModule = class CreateInvoicePageModule {
};
CreateInvoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_7__["Ionic4DatepickerModule"],
            _create_invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateInvoicePageRoutingModule"]
        ],
        declarations: [_create_invoice_page__WEBPACK_IMPORTED_MODULE_6__["CreateInvoicePage"]]
    })
], CreateInvoicePageModule);



/***/ }),

/***/ "./src/app/invoice/add/create-invoice.page.scss":
/*!******************************************************!*\
  !*** ./src/app/invoice/add/create-invoice.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .items_ {\n  --padding-start: 16px;\n  --inner-padding-end: 0px;\n  --background: var(--ion-color-light);\n  margin-bottom: 8px;\n  --min-height: 40px;\n}\nion-content .items_ .lbl_name {\n  display: block;\n  font-size: 16px;\n  color: var(--ion-color-dark);\n}\nion-content .items_ .icon_ {\n  font-size: 18px;\n  margin: 0px 4px;\n}\nion-content .div_top {\n  padding: 0px;\n}\nion-content .div_top .row_top {\n  width: 95%;\n  margin: 0 auto;\n}\nion-content .div_top .row_top .col_top {\n  padding: 0px;\n}\nion-content .div_top .row_top .col_top .input_ {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  background: var(--ion-color-light);\n  font-size: 14px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  border-radius: 6px;\n  box-shadow: 0 4px 4px var(--ion-color-light-shade);\n  color: var(--ion-color-dark);\n}\nion-content .row_date {\n  width: 95%;\n  margin: 0 auto;\n}\nion-content .row_date .col_date {\n  padding: 0px;\n}\nion-content .row_date .col_date .item_drop {\n  --min-height: 34px;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  border-radius: 6px;\n  box-shadow: 0 4px 4px var(--ion-color-light-shade);\n}\nion-content .row_date .col_date .item_drop .date_ {\n  color: var(--ion-color-dark);\n  width: 100%;\n  --padding-end: 8px;\n  --padding-start: 8px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  font-size: 14px;\n}\nion-content .row_date .col_date .item_drop .dropWidth_ {\n  color: var(--ion-color-dark);\n  min-width: 100%;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --placeholder-opacity: 0.5;\n  font-size: 14px;\n}\nion-content .div_cust {\n  margin: 8px 8px;\n  position: relative;\n}\nion-content .div_cust .item_cust {\n  --background: var(--ion-color-light);\n  --padding-start: 8px;\n  --inner-padding-end: 8px;\n  border-radius: 6px;\n  box-shadow: 0 4px 4px var(--ion-color-light-shade);\n  --min-height: 34px;\n}\nion-content .div_cust .item_cust .lbl_cust {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .div_cust .btn {\n  --padding-start: 7px;\n  --padding-end: 7px;\n  position: absolute;\n  right: -14px;\n  top: -8px;\n  z-index: 999;\n  margin: 0;\n}\nion-content .div_cust .btn .icon_btn {\n  font-size: 18px;\n  padding: 4px;\n  border-radius: 12px;\n}\nion-content .div_items {\n  margin: 8px 8px;\n  position: relative;\n}\nion-content .div_items .item_items {\n  --background: var(--ion-color-light);\n  --padding-start: 8px;\n  --inner-padding-end: 8px;\n  box-shadow: 0 4px 4px var(--ion-color-light-shade);\n  --min-height: 34px;\n}\nion-content .div_items .item_items .lbls_ {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  margin: 0px 8px 0px 0px;\n}\nion-content .div_items .btn {\n  --padding-start: 7px;\n  --padding-end: 7px;\n  position: absolute;\n  right: -14px;\n  top: -8px;\n  z-index: 999;\n  margin: 0;\n}\nion-content .div_items .btn .icon_btn {\n  font-size: 18px;\n  padding: 4px;\n  border-radius: 12px;\n}\nion-content .item_btn {\n  --padding-start: 16px;\n  --inner-padding-end: 16px;\n  --padding-top: 4px;\n  --padding-bottom: 4px;\n}\nion-content .item_btn .icons_ {\n  padding-right: 8px;\n  font-size: 22px;\n}\nion-content .item_btn .lbl_add {\n  font-size: 18px;\n}\nion-content .div_btns {\n  margin: 12px 8px;\n}\nion-content .div_btns .row_btns .col_btns {\n  padding: 0px;\n}\nion-content .div_btns .row_btns .col_btns .btns_ {\n  font-size: 14px;\n  margin: 0px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --border-radius: 75px;\n}\nion-content .div_btns .row_btns .col_btns .lbl_qty {\n  color: var(--ion-color-dark);\n  display: block;\n  font-size: 12px;\n}\nion-content .div_btns .btn_multi {\n  margin: 10px 0px;\n  font-size: 14px;\n}\nion-content .items_Note {\n  --padding-start: 16px;\n  --inner-padding-end: 16px;\n}\nion-content .items_Note .input_Note {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .div_bottom {\n  padding: 8px 16px;\n  background: var(--ion-color-light);\n}\nion-content .div_bottom .row_bottom .col_bottom {\n  padding: 0px;\n  margin: auto;\n}\nion-content .div_bottom .row_bottom .col_bottom .lbl_ {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .div_bottom .row_bottom .col_bottom .lbl_total {\n  display: block;\n  font-size: 14px;\n  font-weight: bold;\n  color: var(--ion-color-dark);\n}\nion-content .div_bottom .row_bottom .col_bottom .inputs_ {\n  font-size: 12px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  text-align: right;\n  border-bottom: 1px solid var(--ion-color-medium);\n  color: var(--ion-color-dark);\n}\n.right_ {\n  padding-right: 8px !important;\n}\n.bottom_ {\n  padding-bottom: 8px !important;\n}\n.tops_ {\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n.bottoms_ {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.rights_ {\n  text-align: right !important;\n}\n.bold_ {\n  font-weight: bold;\n}\n.size_ {\n  font-size: 14px !important;\n}\n.color_ {\n  color: var(--ion-color-dark);\n}\n.auto_ {\n  margin: auto !important;\n}\n.select_ {\n  font-size: 10px !important;\n  --padding-start: 0px !important;\n  font-weight: bold !important;\n}\nion-footer {\n  background: var(--ion-color-light);\n}\nion-footer .div_fab {\n  width: 100%;\n  text-align: center;\n  padding: 8px;\n}\nion-footer .div_fab .btn_ {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  font-size: 14px;\n}\n.validator-error {\n  --padding-start: 8px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  color: #d44848;\n  --min-height: 18px;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 8px !important;\n  margin-bottom: 4px !important;\n}\n.validator-error .content {\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS9hZGQvY3JlYXRlLWludm9pY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBQ047QUFDSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ047QUFFRTtFQUNFLFlBQUE7QUFBSjtBQUNJO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFDTjtBQUFNO0VBQ0UsWUFBQTtBQUVSO0FBRFE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSw0QkFBQTtBQUdWO0FBRUU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQUFKO0FBQ0k7RUFDRSxZQUFBO0FBQ047QUFBTTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7QUFFUjtBQURRO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBR1Y7QUFEUTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBR1Y7QUFFRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDRSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUFNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUVSO0FBQ0k7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQ047QUFBTTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNFLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtEQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUFNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FBRVI7QUFDSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFDTjtBQUFNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRUU7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUFKO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFDTjtBQUNJO0VBQ0UsZUFBQTtBQUNOO0FBRUU7RUFDRSxnQkFBQTtBQUFKO0FBRU07RUFDRSxZQUFBO0FBQVI7QUFDUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EscUJBQUE7QUFDVjtBQUNRO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNWO0FBR0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFETjtBQUlFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQUZKO0FBR0k7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7QUFETjtBQUlFO0VBQ0UsaUJBQUE7RUFDQSxrQ0FBQTtBQUZKO0FBSU07RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUZSO0FBR1E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBRFY7QUFHUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQURWO0FBR1E7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0RBQUE7RUFDQSw0QkFBQTtBQURWO0FBT0E7RUFDRSw2QkFBQTtBQUpGO0FBTUE7RUFDRSw4QkFBQTtBQUhGO0FBS0E7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBRkY7QUFJQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFERjtBQUdBO0VBQ0UsNEJBQUE7QUFBRjtBQUVBO0VBQ0UsaUJBQUE7QUFDRjtBQUNBO0VBQ0UsMEJBQUE7QUFFRjtBQUFBO0VBQ0UsNEJBQUE7QUFHRjtBQURBO0VBQ0UsdUJBQUE7QUFJRjtBQUZBO0VBQ0UsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FBS0Y7QUFIQTtFQUNFLGtDQUFBO0FBTUY7QUFMRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFPSjtBQU5JO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFRTjtBQUhBO0VBQ0Usb0JBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBTUY7QUFKRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFNSiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvYWRkL2NyZWF0ZS1pbnZvaWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLml0ZW1zXyB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIC0tbWluLWhlaWdodDogNDBweDtcbiAgICAubGJsX25hbWUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIH1cbiAgICAuaWNvbl8ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbWFyZ2luOiAwcHggNHB4O1xuICAgIH1cbiAgfVxuICAuZGl2X3RvcCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIC5yb3dfdG9wIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIC5jb2xfdG9wIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAuaW5wdXRfIHtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNHB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAucm93X2RhdGUge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLmNvbF9kYXRlIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIC5pdGVtX2Ryb3Age1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IDM0cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICAuZGF0ZV8ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kcm9wV2lkdGhfIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgICAgICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRpdl9jdXN0IHtcbiAgICBtYXJnaW46IDhweCA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5pdGVtX2N1c3Qge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA0cHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIC0tbWluLWhlaWdodDogMzRweDtcbiAgICAgIC5sYmxfY3VzdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICB9XG4gICAgfVxuICAgIC5idG4ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA3cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiA3cHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogLTE0cHg7XG4gICAgICB0b3A6IC04cHg7XG4gICAgICB6LWluZGV4OiA5OTk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICAuaWNvbl9idG4ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRpdl9pdGVtcyB7XG4gICAgbWFyZ2luOiA4cHggOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuaXRlbV9pdGVtcyB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgLS1taW4taGVpZ2h0OiAzNHB4O1xuICAgICAgLmxibHNfIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgbWFyZ2luOiAwcHggOHB4IDBweCAwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5idG4ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA3cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiA3cHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogLTE0cHg7XG4gICAgICB0b3A6IC04cHg7XG4gICAgICB6LWluZGV4OiA5OTk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICAuaWNvbl9idG4ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLml0ZW1fYnRuIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAtLXBhZGRpbmctdG9wOiA0cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIC5pY29uc18ge1xuICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICAubGJsX2FkZCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICB9XG4gIC5kaXZfYnRucyB7XG4gICAgbWFyZ2luOiAxMnB4IDhweDtcbiAgICAucm93X2J0bnMge1xuICAgICAgLmNvbF9idG5zIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAuYnRuc18ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA3NXB4O1xuICAgICAgICB9XG4gICAgICAgIC5sYmxfcXR5IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYnRuX211bHRpIHtcbiAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG4gIC5pdGVtc19Ob3RlIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAuaW5wdXRfTm90ZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIH1cbiAgfVxuICAuZGl2X2JvdHRvbSB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAucm93X2JvdHRvbSB7XG4gICAgICAuY29sX2JvdHRvbSB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAubGJsXyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgICAgLmxibF90b3RhbCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0c18ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5yaWdodF8ge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcbn1cbi5ib3R0b21fIHtcbiAgcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xufVxuLnRvcHNfIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xufVxuLmJvdHRvbXNfIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xufVxuLnJpZ2h0c18ge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuLmJvbGRfIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2l6ZV8ge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cbi5jb2xvcl8ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuLmF1dG9fIHtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG59XG4uc2VsZWN0XyB7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC5kaXZfZmFiIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIC5idG5fIHtcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cblxuLnZhbGlkYXRvci1lcnJvciB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZDQ0ODQ4O1xuICAtLW1pbi1oZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xuXG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuLy8gbGktaW9uaWM0LWRhdGVwaWNrZXIge1xuLy8gICBtYXJnaW46IDBweCAtODBweCAwcHggMHB4O1xuLy8gfVxuIl19 */");

/***/ }),

/***/ "./src/app/invoice/add/create-invoice.page.ts":
/*!****************************************************!*\
  !*** ./src/app/invoice/add/create-invoice.page.ts ***!
  \****************************************************/
/*! exports provided: CreateInvoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInvoicePage", function() { return CreateInvoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_customer_create_customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../create-customer/create-customer.page */ "./src/app/create-customer/create-customer.page.ts");
/* harmony import */ var _preview_preview_invoice_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../preview/preview-invoice.page */ "./src/app/invoice/preview/preview-invoice.page.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _global_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_create_item_multiple_items_multiple_items_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/create-item/multiple-items/multiple-items.page */ "./src/app/create-item/multiple-items/multiple-items.page.ts");













let CreateInvoicePage = class CreateInvoicePage {
    constructor(modelctrl, navCtrl, statusBar, plt, datepipe, api, apiService, router, formBuilder) {
        this.modelctrl = modelctrl;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.plt = plt;
        this.datepipe = datepipe;
        this.api = api;
        this.apiService = apiService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.ActiveBusiness = [];
        this.taxValueList = [];
        this.customerList = [];
        this.CustomerData = [];
        this.ItemData = [];
        this.itemqty = 0;
        this.subTotal = 0;
        this.GrandTotal = 0;
        this.tax = 0;
        this.taxDisplay = 0;
        this.discountrs = 0;
        this.submitted = false;
    }
    ngOnInit() {
        this.invoice_fb();
        this.plt.ready().then(() => {
            this.loadData(false);
        });
    }
    loadData(refresh = false, refresher) {
        if (!refresher) {
            this.api.presentLoading();
        }
        this.apiService.allApi(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
            this.taxValueList = res.data.taxOptions;
            if (refresher) {
                refresher.target.complete();
            }
            else {
                this.api.dismissLoading();
            }
        }, err => {
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        });
    }
    getBusinessDetails(refresh = false) {
        this.apiService.getBusinessDetails(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
            this.ActiveBusiness = res.data.length >= 1 ? res.data[0] : [];
        }, err => {
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        });
    }
    invoice_fb() {
        this.invoiceForm = this.formBuilder.group({
            invoice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            invoiceNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            proName: ['', null],
            psNo: ['', null],
            invoiceDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            due_limit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            subTotal: [''],
            discount: [''],
            discAmt: [''],
            tax: [''],
            taxAmt: [''],
            amt: [''],
            footer_note: ['', null],
        });
    }
    businessProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['/business-info-update'], { queryParams: { returnUrl: 'create-invoice' } });
        });
    }
    fnredirectcustomer(data, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modelctrl.create({
                component: _create_customer_create_customer_page__WEBPACK_IMPORTED_MODULE_3__["CreateCustomerPage"],
                backdropDismiss: false,
                swipeToClose: true,
                componentProps: { data: data },
            });
            modal.onDidDismiss().then((res) => {
                if (res['data']) {
                    if (res['data'].status == 'update') {
                        this.CustomerData.splice(index, 1);
                        this.CustomerData.push(res['data']['data']);
                    }
                    else if (res.data) {
                        this.CustomerData.push(res['data']['data']);
                    }
                }
            });
            return yield modal.present();
        });
    }
    // async fnredirectitem() {
    //   const modal = await this.modelctrl.create({
    //     component: MultipleItemsPage,
    //     backdropDismiss: false,
    //     swipeToClose: true,
    //     componentProps:{
    //       "getItemData" : this.ItemData
    //     }
    //   });
    //   modal.onDidDismiss().then((res) => {
    //     console.log("res",res.data)
    //     if (res.data) {
    //       this.ItemData = res['data'];
    //       this.laodCalculation();
    //     }
    //   })
    //   return await modal.present();
    // }
    fnredirectitem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modelctrl.create({
                component: src_app_create_item_multiple_items_multiple_items_page__WEBPACK_IMPORTED_MODULE_12__["MultipleItemsPage"],
                backdropDismiss: false,
                swipeToClose: true,
                componentProps: {
                    "getItemData": this.ItemData
                }
            });
            modal.onDidDismiss().then((res) => {
                console.log("res", res.data);
                if (res.data) {
                    //this.ItemData.push(res['data']['data']);
                    this.ItemData = res['data'];
                    this.laodCalculation();
                }
            });
            return yield modal.present();
        });
    }
    deleteItem(index) {
        console.log("index", index);
        this.ItemData.splice(index, 1);
        if (this.ItemData.length == 0) {
            this.GrandTotal = 0;
            this.subTotal = 0;
            this.itemqty = 0;
            this.discountrs = 0;
            this.discount = 0;
            this.tax = 0;
            this.invoiceForm;
            this.invoiceForm.controls.discount.reset();
            this.invoiceForm.controls.tax.reset();
        }
        console.log("delteafter", this.ItemData);
        this.laodCalculation();
    }
    laodCalculation() {
        var tota = 0;
        var totq = 0;
        for (var i = 0; i < this.ItemData.length; i++) {
            if (parseInt(this.ItemData[i].qty))
                totq += parseInt(this.ItemData[i].qty);
            this.itemqty = totq;
        }
        for (var i = 0; i < this.ItemData.length; i++) {
            if (parseInt(this.ItemData[i].invoice_item_price))
                var tot;
            tot = this.ItemData[i].invoice_item_price * this.ItemData[i].qty;
            tota += parseFloat(tot);
            this.subTotal = (tota).toFixed(2);
        }
        this.GrandTotal = this.subTotal;
        this.calcTax();
        this.calcGrandTotal();
    }
    loadAmount(value, type) {
        if (type == "tax") {
            if (this.taxValueList.length && this.taxValueList.length >= 1) {
                let taxt_rate = this.taxValueList.filter((x => x.id == value.detail.value));
                this.tax = taxt_rate[0].rate ? taxt_rate[0].rate : 0;
            }
        }
        this.calcTax();
        this.calcGrandTotal();
    }
    calcTax() {
        if (this.tax == undefined || this.tax == 0) {
            this.tax = 0;
            return 1;
        }
        else {
            if (this.tax) {
                this.tax = this.tax;
            }
            else {
                this.tax = 0;
            }
            this.tax = this.tax;
            return 1;
        }
    }
    calcGrandTotal() {
        var total_discount = this.discount ? this.discount : 0;
        var tax = this.tax;
        var discountValue = Number(this.subTotal) * (Number(total_discount) / 100);
        this.discountrs = discountValue.toFixed(2);
        var discountedPrice = (Number(this.subTotal) - Number(this.subTotal) * (Number(total_discount) / 100));
        this.taxDisplay = (Number(discountedPrice) * (Number(tax) / 100)).toFixed(2);
        var grandTotal = Number(discountedPrice) + (Number(discountedPrice) * (Number(tax) / 100));
        this.GrandTotal = grandTotal.toFixed(2);
        return 1;
    }
    InvoicePreview(InvoiceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.invoiceForm.value.due_limit != 1) {
                this.date = new Date(this.invoiceForm.value.invoiceDate);
                this.date.setDate(this.date.getDate() + Number(this.invoiceForm.value.due_limit));
            }
            else {
                this.date = new Date(this.invoiceForm.value.invoiceDate);
            }
            var body = {
                InvoiceId: InvoiceId,
                title: this.invoiceForm.value.invoice,
                number: this.invoiceForm.value.invoiceNo,
                summary: this.invoiceForm.value.proName,
                poso_number: this.invoiceForm.value.psNo,
                date: this.invoiceForm.value.invoiceDate,
                due_limit: this.invoiceForm.value.due_limit,
                payment_due: this.date,
                sub_total: this.invoiceForm.value.subTotal,
                discount: this.invoiceForm.value.discount,
                taxes: this.invoiceForm.value.tax,
                taxAmt: this.tax ? this.tax : 0,
                grand_total: this.invoiceForm.value.amt,
                recurring: 0,
                businessId: this.api.getBusinessId(),
                customer: this.CustomerData,
                items: this.ItemData,
                logo: this.ActiveBusiness.logo,
                footer_note: this.invoiceForm.value.footer_note,
            };
            localStorage.setItem("invoice_preview", JSON.stringify(body));
            const modal = yield this.modelctrl.create({
                component: _preview_preview_invoice_page__WEBPACK_IMPORTED_MODULE_4__["PreviewInvoicePage"],
                backdropDismiss: false,
                swipeToClose: true,
            });
            return yield modal.present();
        });
    }
    InvoiceAdd() {
        this.submitted = true;
        for (let v in this.invoiceForm.controls) {
            this.invoiceForm.controls[v].markAsTouched();
        }
        if (this.invoiceForm.valid && this.CustomerData.length > 0 && this.ItemData.length > 0) {
            this.api.presentLoading();
            var body = {
                businessId: this.api.getBusinessId(),
                title: this.invoiceForm.value.invoice,
                summary: this.invoiceForm.value.proName,
                customer: this.CustomerData[0]['id'] ? this.CustomerData[0]['id'] : '',
                number: this.invoiceForm.value.invoiceNo,
                poso_number: this.invoiceForm.value.psNo,
                recurring: 0,
                date: this.invoiceForm.value.invoiceDate,
                discount: this.invoiceForm.value.discount,
                due_limit: this.invoiceForm.value.due_limit,
                footer_note: this.invoiceForm.value.footer_note,
                sub_total: this.invoiceForm.value.subTotal,
                tax: this.tax,
                taxes: this.invoiceForm.value.tax,
                grand_total: this.invoiceForm.value.amt,
                items: this.ItemData,
                convert_total: this.invoiceForm.value.amt
            };
            this.api.Post("invoice/invoiceAdd", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["timeout"])(this.api.API_TIMEOUT)).subscribe(data => {
                if (data.status == 1) {
                    this.InvoicePreview(data.data.id);
                }
                this.api.dismissLoading();
            }, err => {
                this.api.dismissLoading();
                this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
        }
    }
    goBack() {
        this.navCtrl.back();
    }
    getInvoiceNumber() {
        if (this.api.getBusinessId()) {
            this.api.Get("Common/getInvoiceNumber/" + this.api.getBusinessId()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["timeout"])(this.api.API_TIMEOUT)).subscribe(data => {
                this.invoiceForm.patchValue({
                    //invoice: "Invoice "+ data['data'].split('-')[1],
                    invoice: "Tax - Invoice",
                    invoiceNo: data['data'],
                    invoiceDate: new Date().toISOString(),
                    due_limit: "1",
                    tax: "11",
                    footer_note: this.api.getFooterNote().replace(/<[^>]+>/gm, '').replace('&nbsp;', '')
                });
            }, err => {
                this.api.dismissLoading();
                this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
        }
    }
    ionViewWillEnter() {
        this.getBusinessDetails(this.api.NetworkStatus);
        this.getInvoiceNumber();
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#FFFFFF');
    }
    ngOnDestroy() {
        this.CustomerData = [];
        this.ItemData = [];
    }
};
CreateInvoicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
    { type: _global_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
CreateInvoicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-invoice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-invoice.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/add/create-invoice.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-invoice.page.scss */ "./src/app/invoice/add/create-invoice.page.scss")).default]
    })
], CreateInvoicePage);



/***/ })

}]);
//# sourceMappingURL=invoice-add-create-invoice-module-es2015.js.map
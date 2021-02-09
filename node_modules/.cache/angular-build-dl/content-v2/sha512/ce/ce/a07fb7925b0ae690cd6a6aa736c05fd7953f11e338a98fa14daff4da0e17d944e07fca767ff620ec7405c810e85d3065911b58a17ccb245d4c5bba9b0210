(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-edit-edit-invoice-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/edit/edit-invoice.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/edit/edit-invoice.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Edit Invoice</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <form [formGroup]=\"invoiceForm\">\n\n    <ion-item no-padding lines=\"none\" class=\"items_\" (click)=\"businessProfile()\">\n      <ion-label class=\"lbl_name\">{{ActiveBusiness ? ActiveBusiness.name : ''}}</ion-label>\n      <ion-icon color=\"primary\" slot=\"end\" name=\"create-sharp\" class=\"icon_\"></ion-icon>\n    </ion-item>\n\n    <div class=\"div_top\">\n      <ion-row class=\"row_top\">\n        <ion-col size=\"6\" class=\"col_top right_ bottom_\">\n          <ion-input type=\"text\" formControlName=\"invoice\" placeholder=\"Invoice 3\" class=\"input_\"></ion-input>\n\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\n            *ngIf=\"invoiceForm.controls.invoice.hasError('required') && invoiceForm.controls.invoice.touched\">\n            <p class=\"content\">Please Enter Invoice!</p>\n          </ion-item>\n\n        </ion-col>\n        <ion-col size=\"6\" class=\"col_top\">\n          <ion-input type=\"text\" formControlName=\"invoiceNo\" placeholder=\"Invoice number\" class=\"input_\"></ion-input>\n\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\n            *ngIf=\"invoiceForm.controls.invoiceNo.hasError('required') && invoiceForm.controls.invoiceNo.touched\">\n            <p class=\"content\">Please Enter Invoice No.!</p>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"row_top\">\n        <ion-col size=\"6\" class=\"col_top right_\">\n          <ion-input type=\"text\" formControlName=\"proName\" placeholder=\"Project name\" class=\"input_\"></ion-input>\n\n        </ion-col>\n        <ion-col size=\"6\" class=\"col_top\">\n          <ion-input type=\"text\" formControlName=\"psNo\" placeholder=\"P.O/S.O number\" class=\"input_\"></ion-input>\n\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <!-- <li-ionic4-datepicker style=\"margin-left: 50px;\" [(ngModel)]=\"mydate\" [inputDateConfig]=\"datePickerObj\"></li-ionic4-datepicker> -->\n\n    <ion-row class=\"row_date\">\n      <ion-col size=\"6\" class=\"col_date right_\">\n        <ion-item no-padding lines=\"none\" class=\"item_drop\">\n          <ion-datetime displayFormat=\"DD-MM-YYYY\" formControlName=\"invoiceDate\" placeholder=\"Invoice Date\"\n            class=\"date_\"></ion-datetime>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"invoiceForm.controls.invoiceDate.hasError('required') && invoiceForm.controls.invoiceDate.touched\">\n          <p class=\"content\">Please Select Invoice Date!</p>\n        </ion-item>\n\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_date\">\n        <ion-item no-padding lines=\"none\" class=\"item_drop\">\n          <ion-select interface=\"action-sheet\" formControlName=\"due_limit\" placeholder=\"Payment Due\" class=\"dropWidth_\"\n            mode=\"md\" [(ngModel)]=\"get_due_limit\">\n            <ion-select-option value=\"1\">On receipt</ion-select-option>\n            <ion-select-option value=\"3\">Within 03 days</ion-select-option>\n            <ion-select-option value=\"7\">Within 07 days</ion-select-option>\n            <ion-select-option value=\"15\">Within 15 days</ion-select-option>\n            <ion-select-option value=\"30\">Within 30 days</ion-select-option>\n            <ion-select-option value=\"45\">Within 45 days</ion-select-option>\n            <ion-select-option value=\"60\">Within 60 days</ion-select-option>\n            <ion-select-option value=\"90\">Within 90 days</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"invoiceForm.controls.due_limit.hasError('required') && invoiceForm.controls.due_limit.touched\">\n          <p class=\"content\">Please Select Due Date!</p>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n    <div class=\"div_cust\" *ngFor=\"let customer of CustomerData\">\n      <ion-item lines=\"none\" class=\"item_cust\">\n        <ion-label slot=\"start\" class=\"lbl_cust bold_\">{{customer.name}}</ion-label>\n        <ion-label class=\"lbl_cust rights_\">{{customer.phone}}</ion-label>\n      </ion-item>\n      <ion-button fill=\"clear\" size=\"small\" shape=\"round\" class=\"btn\" (click)=\"fnredirectcustomer(customer,i)\">\n        <ion-icon name=\"create-sharp\" class=\"icon_btn\"></ion-icon>\n      </ion-button>\n    </div>\n\n    <div *ngIf=\"CustomerData == ''\">\n      <ion-item no-padding lines=\"full\" class=\"item_btn\" (click)=\"fnredirectcustomer('')\">\n        <ion-icon color=\"primary\" name=\"add-circle-outline\" class=\"icons_\"></ion-icon>\n        <ion-label color=\"primary\" class=\"lbl_add\">Add Customer</ion-label>\n      </ion-item>\n    </div>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\" *ngIf=\"submitted && this.CustomerData ==  0\">\n      <p class=\"content\">Please select customers.</p>\n    </ion-item>\n\n\n    <div *ngFor=\"let item of ItemData;let i = index\" class=\"div_items\">\n\n      <ion-item lines=\"none\" class=\"item_items\">\n        <ion-label slot=\"start\" class=\"lbls_ bold_\" color=\"primary\">{{item.product_name}} <span\n            *ngIf=\"item.hsncode\">[{{item.hsncode}}]</span>\n        </ion-label>\n        <ion-label class=\"lbls_ rights_\" color=\"primary\">{{item.qty * item.invoice_item_price | number:'2.2'}}\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"item_items bottoms_\">\n        <ion-label slot=\"start\" class=\"lbls_\">Item Subtotal</ion-label>\n        <ion-label class=\"lbls_ rights_\">{{item.qty}} * ₹ {{item.invoice_item_price}}\n          <!-- = {{item.qty * item.price | number:'2.2'}} -->\n        </ion-label>\n      </ion-item>\n      <ion-button class=\"btn\" fill=\"clear\" size=\"small\" shape=\"round\" (click)=\"deleteItem(i)\">\n        <ion-icon name=\"close-sharp\" class=\"icon_btn\"></ion-icon>\n      </ion-button>\n\n    </div>\n\n    <div *ngIf=\"ItemData == ''\">\n      <ion-item no-padding lines=\"none\" class=\"item_btn\" (click)=\"fnredirectitem()\">\n        <ion-icon color=\"primary\" name=\"add-circle-outline\" class=\"icons_\"></ion-icon>\n        <ion-label color=\"primary\" class=\"lbl_add\">Add Item</ion-label>\n      </ion-item>\n    </div>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\" *ngIf=\"submitted && this.ItemData ==  0\">\n      <p class=\"content\">Please select items.</p>\n    </ion-item>\n\n    <div *ngIf=\"ItemData != ''\" class=\"div_btns\">\n      <ion-row class=\"row_btns\">\n        <ion-col size=\"3\" class=\"col_btns\">\n          <ion-button expand=\"block\" fill=\"outline\" size=\"small\" class=\"btns_\" (click)=\"fnredirectitem()\">Add Item\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"4\" class=\"col_btns auto_\">\n          <ion-label class=\"lbl_qty rights_ bold_\">Total Qty : {{itemqty}}</ion-label>\n        </ion-col>\n        <ion-col size=\"5\" class=\"col_btns auto_\">\n          <ion-label class=\"lbl_qty rights_ bold_\">Total : {{subTotal | number:'2.2-2'}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" size=\"small\" class=\"btn_multi\" (click)=\"addMultiple()\">Add\n        Multiple Items</ion-button> -->\n    </div>\n\n    <div class=\"div_bottom\">\n      <ion-row class=\"row_bottom\">\n        <ion-col size=\"4\" class=\"col_bottom\">\n          <ion-label class=\"lbl_\">Subtotal</ion-label>\n        </ion-col>\n        <ion-col size=\"8\" class=\"col_bottom\">\n          <ion-input type=\"number\" formControlName=\"subTotal\" disabled value=\"{{subTotal}}\" class=\"inputs_ bold_ size_\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"row_bottom\">\n        <ion-col size=\"4\" class=\"col_bottom\">\n          <ion-label class=\"lbl_\">Discount&nbsp;%</ion-label>\n        </ion-col>\n        <ion-col size=\"4\" class=\"col_bottom right_\">\n          <ion-input type=\"number\" formControlName=\"discount\" placeholder=\"0\" placeholder=\"0\"\n            (ionChange)=\"loadAmount($event,'discount')\" [(ngModel)]=\"discount\" class=\"inputs_ bold_ size_ color_\">\n          </ion-input>\n        </ion-col>\n        <!-- <ion-col size=\"4\" class=\"col_bottom\" *ngIf=\"!discountrs\">\n          <ion-input type=\"number\" formControlName=\"discAmt\" disabled  class=\"inputs_\">₹\n          </ion-input>\n        </ion-col> -->\n\n        <ion-col size=\"4\" class=\"col_bottom\">\n          <ion-input type=\"number\" formControlName=\"discAmt\" disabled value=\"{{discountrs}}\" class=\"inputs_\">₹\n          </ion-input>\n        </ion-col>\n\n      </ion-row>\n      <ion-row class=\"row_bottom\">\n        <ion-col size=\"4\" class=\"col_bottom\">\n          <ion-label class=\"lbl_\">Tax&nbsp;%</ion-label>\n        </ion-col>\n        <ion-col size=\"4\" class=\"col_bottom right_\">\n          <ion-select mode=\"md\" formControlName=\"tax\" interface=\"action-sheet\" (ionChange)=\"loadAmount($event,'tax')\"\n            class=\"inputs_ select_\">\n            <ion-select-option *ngFor=\"let opt of taxValueList\" [value]=\"opt.id\">{{opt.name}}[{{opt.rate}}]%\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col size=\"4\" class=\"col_bottom\">\n          <ion-input type=\"number\" formControlName=\"taxAmt\" disabled value=\"{{taxDisplay}}\" class=\"inputs_ bold_ size_\">\n            ₹</ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"row_bottom\">\n        <ion-col size=\"8\" class=\"col_bottom\">\n          <ion-label class=\"lbl_total\">Total Amount</ion-label>\n        </ion-col>\n        <!-- <ion-col size=\"4\" class=\"col_bottom\" *ngIf=\"!grandtotle\">\n          <ion-input type=\"number\" formControlName=\"amt\" disabled  class=\"inputs_\"></ion-input>\n        </ion-col> -->\n\n        <ion-col size=\"4\" class=\"col_bottom\">\n          <ion-input type=\"number\" formControlName=\"amt\" disabled value=\"{{GrandTotal}}\" class=\"inputs_\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-item lines=\"full\" class=\"items_Note\">\n      <ion-textarea rows=\"3\" placeholder=\"Notes\" formControlName=\"footer_note\" class=\"input_Note\"></ion-textarea>\n    </ion-item>\n  </form>\n\n</ion-content>\n\n<ion-footer>\n\n  <div class=\"div_fab\">\n    <ion-button expand=\"full\" size=\"large\" shape=\"round\" class=\"btn_ shadow_btn\" (click)=\"InvoiceAdd()\">Save and\n      Preview\n    </ion-button>\n  </div>\n\n</ion-footer>");

/***/ }),

/***/ "./src/app/invoice/edit/edit-invoice-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/invoice/edit/edit-invoice-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditInvoicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInvoicePageRoutingModule", function() { return EditInvoicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_invoice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-invoice.page */ "./src/app/invoice/edit/edit-invoice.page.ts");




const routes = [
    {
        path: '',
        component: _edit_invoice_page__WEBPACK_IMPORTED_MODULE_3__["EditInvoicePage"]
    }
];
let EditInvoicePageRoutingModule = class EditInvoicePageRoutingModule {
};
EditInvoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditInvoicePageRoutingModule);



/***/ }),

/***/ "./src/app/invoice/edit/edit-invoice.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/invoice/edit/edit-invoice.module.ts ***!
  \*****************************************************/
/*! exports provided: EditInvoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInvoicePageModule", function() { return EditInvoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-invoice-routing.module */ "./src/app/invoice/edit/edit-invoice-routing.module.ts");
/* harmony import */ var _edit_invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-invoice.page */ "./src/app/invoice/edit/edit-invoice.page.ts");
/* harmony import */ var _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @logisticinfotech/ionic4-datepicker */ "./node_modules/@logisticinfotech/ionic4-datepicker/__ivy_ngcc__/fesm2015/logisticinfotech-ionic4-datepicker.js");








let EditInvoicePageModule = class EditInvoicePageModule {
};
EditInvoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_7__["Ionic4DatepickerModule"],
            _edit_invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditInvoicePageRoutingModule"]
        ],
        declarations: [_edit_invoice_page__WEBPACK_IMPORTED_MODULE_6__["EditInvoicePage"]]
    })
], EditInvoicePageModule);



/***/ }),

/***/ "./src/app/invoice/edit/edit-invoice.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/invoice/edit/edit-invoice.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .items_ {\n  --padding-start: 16px;\n  --inner-padding-end: 0px;\n  --background: var(--ion-color-light);\n  margin-bottom: 8px;\n  --min-height: 40px;\n}\nion-content .items_ .lbl_name {\n  display: block;\n  font-size: 16px;\n  color: var(--ion-color-dark);\n}\nion-content .items_ .icon_ {\n  font-size: 18px;\n  margin: 0px 4px;\n}\nion-content .div_top {\n  padding: 0px;\n}\nion-content .div_top .row_top {\n  width: 95%;\n  margin: 0 auto;\n}\nion-content .div_top .row_top .col_top {\n  padding: 0px;\n}\nion-content .div_top .row_top .col_top .input_ {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  background: var(--ion-color-light);\n  font-size: 14px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  border-radius: 6px;\n  box-shadow: 0 4px 4px var(--ion-color-light-shade);\n  color: var(--ion-color-dark);\n}\nion-content .row_date {\n  width: 95%;\n  margin: 0 auto;\n}\nion-content .row_date .col_date {\n  padding: 0px;\n}\nion-content .row_date .col_date .item_drop {\n  --min-height: 34px;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  border-radius: 6px;\n  box-shadow: 0 4px 4px var(--ion-color-light-shade);\n}\nion-content .row_date .col_date .item_drop .date_ {\n  color: var(--ion-color-dark);\n  width: 100%;\n  --padding-end: 8px;\n  --padding-start: 8px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  font-size: 14px;\n}\nion-content .row_date .col_date .item_drop .dropWidth_ {\n  color: var(--ion-color-dark);\n  min-width: 100%;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --placeholder-opacity: 0.5;\n  font-size: 14px;\n}\nion-content .div_cust {\n  margin: 8px 8px;\n  position: relative;\n}\nion-content .div_cust .item_cust {\n  --background: var(--ion-color-light);\n  --padding-start: 8px;\n  --inner-padding-end: 8px;\n  border-radius: 6px;\n  box-shadow: 0 4px 4px var(--ion-color-light-shade);\n  --min-height: 34px;\n}\nion-content .div_cust .item_cust .lbl_cust {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .div_cust .btn {\n  --padding-start: 7px;\n  --padding-end: 7px;\n  position: absolute;\n  right: -14px;\n  top: -8px;\n  z-index: 999;\n  margin: 0;\n}\nion-content .div_cust .btn .icon_btn {\n  font-size: 18px;\n  padding: 4px;\n  border-radius: 12px;\n}\nion-content .div_items {\n  margin: 8px 8px;\n  position: relative;\n}\nion-content .div_items .item_items {\n  --background: var(--ion-color-light);\n  --padding-start: 8px;\n  --inner-padding-end: 8px;\n  box-shadow: 0 4px 4px var(--ion-color-light-shade);\n  --min-height: 34px;\n}\nion-content .div_items .item_items .lbls_ {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  margin: 0px 8px 0px 0px;\n}\nion-content .div_items .btn {\n  --padding-start: 7px;\n  --padding-end: 7px;\n  position: absolute;\n  right: -14px;\n  top: -8px;\n  z-index: 999;\n  margin: 0;\n}\nion-content .div_items .btn .icon_btn {\n  font-size: 18px;\n  padding: 4px;\n  border-radius: 12px;\n}\nion-content .item_btn {\n  --padding-start: 16px;\n  --inner-padding-end: 16px;\n  --padding-top: 4px;\n  --padding-bottom: 4px;\n}\nion-content .item_btn .icons_ {\n  padding-right: 8px;\n  font-size: 22px;\n}\nion-content .item_btn .lbl_add {\n  font-size: 18px;\n}\nion-content .div_btns {\n  margin: 12px 8px;\n}\nion-content .div_btns .row_btns .col_btns {\n  padding: 0px;\n}\nion-content .div_btns .row_btns .col_btns .btns_ {\n  font-size: 14px;\n  margin: 0px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --border-radius: 75px;\n}\nion-content .div_btns .row_btns .col_btns .lbl_qty {\n  color: var(--ion-color-dark);\n  display: block;\n  font-size: 12px;\n}\nion-content .div_btns .btn_multi {\n  margin: 10px 0px;\n  font-size: 14px;\n}\nion-content .items_Note {\n  --padding-start: 16px;\n  --inner-padding-end: 16px;\n}\nion-content .items_Note .input_Note {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .div_bottom {\n  padding: 8px 16px;\n  background: var(--ion-color-light);\n}\nion-content .div_bottom .row_bottom .col_bottom {\n  padding: 0px;\n  margin: auto;\n}\nion-content .div_bottom .row_bottom .col_bottom .lbl_ {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .div_bottom .row_bottom .col_bottom .lbl_total {\n  display: block;\n  font-size: 14px;\n  font-weight: bold;\n  color: var(--ion-color-dark);\n}\nion-content .div_bottom .row_bottom .col_bottom .inputs_ {\n  font-size: 12px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  text-align: right;\n  border-bottom: 1px solid var(--ion-color-medium);\n  color: var(--ion-color-dark);\n}\n.right_ {\n  padding-right: 8px !important;\n}\n.bottom_ {\n  padding-bottom: 8px !important;\n}\n.tops_ {\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n.bottoms_ {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.rights_ {\n  text-align: right !important;\n}\n.bold_ {\n  font-weight: bold;\n}\n.size_ {\n  font-size: 14px !important;\n}\n.color_ {\n  color: var(--ion-color-dark);\n}\n.auto_ {\n  margin: auto !important;\n}\n.select_ {\n  font-size: 10px !important;\n  --padding-start: 0px !important;\n  font-weight: bold !important;\n}\nion-footer {\n  background: var(--ion-color-light);\n}\nion-footer .div_fab {\n  width: 100%;\n  text-align: center;\n  padding: 8px;\n}\nion-footer .div_fab .btn_ {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  font-size: 14px;\n}\n.validator-error {\n  --padding-start: 8px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  color: #d44848;\n  --min-height: 18px;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 8px !important;\n  margin-bottom: 4px !important;\n}\n.validator-error .content {\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS9lZGl0L2VkaXQtaW52b2ljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFDTjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFDTjtBQUVFO0VBQ0UsWUFBQTtBQUFKO0FBQ0k7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQUNOO0FBQU07RUFDRSxZQUFBO0FBRVI7QUFEUTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNBLDRCQUFBO0FBR1Y7QUFFRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBQUo7QUFDSTtFQUNFLFlBQUE7QUFDTjtBQUFNO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtBQUVSO0FBRFE7RUFDRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFHVjtBQURRO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFHVjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNFLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtBQUNOO0FBQU07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBRVI7QUFDSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFDTjtBQUFNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUNJO0VBQ0Usb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtBQUNOO0FBQU07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7QUFFUjtBQUNJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUNOO0FBQU07RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRVI7QUFFRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQUo7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUNOO0FBQ0k7RUFDRSxlQUFBO0FBQ047QUFFRTtFQUNFLGdCQUFBO0FBQUo7QUFFTTtFQUNFLFlBQUE7QUFBUjtBQUNRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxxQkFBQTtBQUNWO0FBQ1E7RUFDRSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ1Y7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUROO0FBSUU7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FBRko7QUFHSTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtBQUROO0FBSUU7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0FBRko7QUFJTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBRlI7QUFHUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFEVjtBQUdRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBRFY7QUFHUTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtFQUNBLDRCQUFBO0FBRFY7QUFPQTtFQUNFLDZCQUFBO0FBSkY7QUFNQTtFQUNFLDhCQUFBO0FBSEY7QUFLQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUFGRjtBQUlBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQURGO0FBR0E7RUFDRSw0QkFBQTtBQUFGO0FBRUE7RUFDRSxpQkFBQTtBQUNGO0FBQ0E7RUFDRSwwQkFBQTtBQUVGO0FBQUE7RUFDRSw0QkFBQTtBQUdGO0FBREE7RUFDRSx1QkFBQTtBQUlGO0FBRkE7RUFDRSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QUFLRjtBQUhBO0VBQ0Usa0NBQUE7QUFNRjtBQUxFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQU9KO0FBTkk7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVFOO0FBSEE7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFNRjtBQUpFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQU1KIiwiZmlsZSI6InNyYy9hcHAvaW52b2ljZS9lZGl0L2VkaXQtaW52b2ljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC5pdGVtc18ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgLmxibF9uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICB9XG4gICAgLmljb25fIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIG1hcmdpbjogMHB4IDRweDtcbiAgICB9XG4gIH1cbiAgLmRpdl90b3Age1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAucm93X3RvcCB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAuY29sX3RvcCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgLmlucHV0XyB7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIC0tcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnJvd19kYXRlIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC5jb2xfZGF0ZSB7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAuaXRlbV9kcm9wIHtcbiAgICAgICAgLS1taW4taGVpZ2h0OiAzNHB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA0cHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgLmRhdGVfIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAuZHJvcFdpZHRoXyB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAgICAgICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5kaXZfY3VzdCB7XG4gICAgbWFyZ2luOiA4cHggOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuaXRlbV9jdXN0IHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggNHB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAtLW1pbi1oZWlnaHQ6IDM0cHg7XG4gICAgICAubGJsX2N1c3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgfVxuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogN3B4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogN3B4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IC0xNHB4O1xuICAgICAgdG9wOiAtOHB4O1xuICAgICAgei1pbmRleDogOTk5O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgLmljb25fYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5kaXZfaXRlbXMge1xuICAgIG1hcmdpbjogOHB4IDhweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLml0ZW1faXRlbXMge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA0cHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIC0tbWluLWhlaWdodDogMzRweDtcbiAgICAgIC5sYmxzXyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIG1hcmdpbjogMHB4IDhweCAwcHggMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogN3B4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogN3B4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IC0xNHB4O1xuICAgICAgdG9wOiAtOHB4O1xuICAgICAgei1pbmRleDogOTk5O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgLmljb25fYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5pdGVtX2J0biB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAuaWNvbnNfIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gICAgLmxibF9hZGQge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgfVxuICAuZGl2X2J0bnMge1xuICAgIG1hcmdpbjogMTJweCA4cHg7XG4gICAgLnJvd19idG5zIHtcbiAgICAgIC5jb2xfYnRucyB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgLmJ0bnNfIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNzVweDtcbiAgICAgICAgfVxuICAgICAgICAubGJsX3F0eSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmJ0bl9tdWx0aSB7XG4gICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuICAuaXRlbXNfTm90ZSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLmlucHV0X05vdGUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICB9XG4gIH1cbiAgLmRpdl9ib3R0b20ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgLnJvd19ib3R0b20ge1xuICAgICAgLmNvbF9ib3R0b20ge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgLmxibF8ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB9XG4gICAgICAgIC5sYmxfdG90YWwge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB9XG4gICAgICAgIC5pbnB1dHNfIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ucmlnaHRfIHtcbiAgcGFkZGluZy1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XG59XG4uYm90dG9tXyB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn1cbi50b3BzXyB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbn1cbi5ib3R0b21zXyB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcbn1cbi5yaWdodHNfIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cbi5ib2xkXyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNpemVfIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG4uY29sb3JfIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbi5hdXRvXyB7XG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xufVxuLnNlbGVjdF8ge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAuZGl2X2ZhYiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICAuYnRuXyB7XG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59XG5cbi52YWxpZGF0b3ItZXJyb3Ige1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2Q0NDg0ODtcbiAgLS1taW4taGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA0cHggIWltcG9ydGFudDtcblxuICAuY29udGVudCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbi8vIGxpLWlvbmljNC1kYXRlcGlja2VyIHtcbi8vICAgbWFyZ2luOiAwcHggLTgwcHggMHB4IDBweDtcbi8vIH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/invoice/edit/edit-invoice.page.ts":
/*!***************************************************!*\
  !*** ./src/app/invoice/edit/edit-invoice.page.ts ***!
  \***************************************************/
/*! exports provided: EditInvoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInvoicePage", function() { return EditInvoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_customer_create_customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../create-customer/create-customer.page */ "./src/app/create-customer/create-customer.page.ts");
/* harmony import */ var _preview_preview_invoice_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../preview/preview-invoice.page */ "./src/app/invoice/preview/preview-invoice.page.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _global_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_create_item_multiple_items_multiple_items_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/create-item/multiple-items/multiple-items.page */ "./src/app/create-item/multiple-items/multiple-items.page.ts");














let EditInvoicePage = class EditInvoicePage {
    constructor(modelctrl, navCtrl, statusBar, plt, datepipe, api, route, apiService, router, formBuilder) {
        this.modelctrl = modelctrl;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.plt = plt;
        this.datepipe = datepipe;
        this.api = api;
        this.route = route;
        this.apiService = apiService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.ActiveBusiness = [];
        this.customerList = [];
        this.CustomerData = [];
        this.ItemData = [];
        this.itemqty = 0;
        this.subTotal = 0;
        this.GrandTotal = 0;
        this.tax = 0;
        this.taxDisplay = 0;
        this.discountrs = 0;
        this.SelectedInvoice = [];
        this.submitted = false;
    }
    ngOnInit() {
        this.invoice_fb();
        this.plt.ready().then(() => {
            this.loadData(false);
        });
    }
    loadData(refresh = false, refresher) {
        this.apiService.allApi(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
            this.taxValueList = res.data.taxOptions;
            if (refresher) {
                refresher.target.complete();
            }
            this.getInvoiceData(this.api.NetworkStatus);
        }, err => {
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        });
    }
    getInvoiceData(refresh = false, refresher) {
        let InvoiceId = this.route.snapshot.queryParams.InvoiceId;
        this.api.presentLoading();
        this.apiService.getEditInvoice(InvoiceId, refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
            this.CustomerData = res['data'].selectedCustomer;
            this.ItemData = res['data'].items;
            this.SelectedInvoice = res['data'].invoice;
            var total = 0;
            this.ItemData.forEach(x => total += Number(x.qty));
            this.itemqty = total;
            this.get_due_limit = this.SelectedInvoice.due_limit ? this.SelectedInvoice.due_limit : '';
            this.GrandTotal = Number(this.SelectedInvoice.grand_total);
            this.discount = this.SelectedInvoice.discount;
            this.invoiceForm.patchValue({
                invoice: this.SelectedInvoice.title,
                invoiceNo: this.SelectedInvoice.number,
                proName: this.SelectedInvoice.summary,
                psNo: this.SelectedInvoice.poso_number,
                invoiceDate: this.SelectedInvoice.date,
                subTotal: this.SelectedInvoice.sub_total,
                footer_note: this.SelectedInvoice.footer_note.replace(/<[^>]+>/gm, '').replace('&nbsp;', ''),
                amt: Number(this.SelectedInvoice.grand_total),
                tax: this.SelectedInvoice.taxes_id,
                discount: this.SelectedInvoice.discount
            });
            this.tax = this.SelectedInvoice.tax;
            this.laodCalculation();
            if (refresher) {
                refresher.target.complete();
            }
            this.api.dismissLoading();
        }, err => {
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        });
    }
    getBusinessDetails(refresh = false) {
        this.apiService.getBusinessDetails(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
            var _a;
            this.ActiveBusiness = ((_a = res.data) === null || _a === void 0 ? void 0 : _a.length) >= 1 ? res.data[0] : [];
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
            this.router.navigate(['/business-info-update'], { queryParams: { returnUrl: 'edit-invoice' } });
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
                if (res.data) {
                    this.ItemData = res['data'];
                    this.laodCalculation();
                }
            });
            return yield modal.present();
        });
    }
    // async addMultiple() {
    //   const modal = await this.modelctrl.create({
    //     component: MultipleItemsPage,
    //     backdropDismiss: false,
    //     swipeToClose: true
    //   });
    //   return await modal.present();
    // }
    deleteItem(index) {
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
            let taxt_rate = this.taxValueList.filter((x => x.id == value.detail.value));
            this.tax = taxt_rate[0].rate ? taxt_rate[0].rate : 0;
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
                id: this.route.snapshot.queryParams.InvoiceId,
                businessId: this.api.getBusinessId(),
                title: this.invoiceForm.value.invoice,
                summary: this.invoiceForm.value.proName,
                customer: this.CustomerData[0].id ? this.CustomerData[0].id : '',
                number: this.invoiceForm.value.invoiceNo,
                poso_number: this.invoiceForm.value.psNo,
                recurring: 0,
                date: this.invoiceForm.value.invoiceDate,
                discount: this.invoiceForm.value.discount,
                payment_due: this.invoiceForm.value.invoiceDate,
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
                    this.InvoicePreview(this.route.snapshot.queryParams.InvoiceId);
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
    ionViewWillEnter() {
        this.getBusinessDetails(this.api.NetworkStatus);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#FFFFFF');
    }
};
EditInvoicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] },
    { type: _global_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
EditInvoicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-invoice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-invoice.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/edit/edit-invoice.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-invoice.page.scss */ "./src/app/invoice/edit/edit-invoice.page.scss")).default]
    })
], EditInvoicePage);



/***/ })

}]);
//# sourceMappingURL=invoice-edit-edit-invoice-module-es2015.js.map
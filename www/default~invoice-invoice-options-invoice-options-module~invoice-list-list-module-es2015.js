(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~invoice-invoice-options-invoice-options-module~invoice-list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice-options/invoice-options.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice-options/invoice-options.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-item *ngIf=\"InvoiceStatus == 0 || InvoiceStatus == 1\" lines=\"none\" class=\"item_opt\" (click)=\"edit()\" >\n  <ion-label  class=\"lbl_opt\">Edit</ion-label>\n</ion-item>\n<ion-item lines=\"none\" class=\"item_opt\" (click)=\"view(InvoiceId)\" *ngIf=\"InvoiceStatus == 2\">\n  <ion-label class=\"lbl_opt\">View</ion-label>\n</ion-item>\n\n<ion-item lines=\"none\" class=\"item_opt\" (click)=\"receive(InvoiceId)\" *ngIf=\"InvoiceStatus != 2\">\n  <ion-label class=\"lbl_opt\">Receive Payment</ion-label>\n</ion-item>\n<ion-item lines=\"none\" class=\"item_opt\" (click)=\"recuring()\" *ngIf=\"Recurring == 0 \">\n  <ion-label class=\"lbl_opt\">Start Recurring</ion-label>\n</ion-item>\n<ion-item lines=\"none\" class=\"item_opt\" (click)=\"stop_recuring()\" *ngIf=\"Recurring == 1 && is_completed == 0\">\n  <ion-label class=\"lbl_opt\">Stop Recurring</ion-label>\n</ion-item>\n<ion-item lines=\"none\" class=\"item_opt\" (click)=\"history()\">\n  <ion-label class=\"lbl_opt\">Payment History</ion-label>\n</ion-item>\n\n<ion-item lines=\"none\" class=\"item_opt\" (click)=\"delete(InvoiceId)\">\n  <ion-label class=\"lbl_opt\">Delete</ion-label>\n</ion-item>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/payment-history/payment-history.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/payment-history/payment-history.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Payment History</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"Modalclose()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"div_pay\">\n  <!-- <ion-label color=\"primary\" class=\"lbl_head\"></ion-label> -->\n  \n  <ion-row class=\"rows_ border_\">\n    <ion-col size=\"6\" class=\"cols_\">\n      <ion-label class=\"lbls_ bold_\">Received Payment</ion-label>\n    </ion-col>\n    <ion-col size=\"6\" class=\"cols_\">\n      <ion-label class=\"lbls_ right_\">Amount</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"rows_ bg_\">\n    <ion-col size=\"4\" class=\"cols_\">\n      <ion-label class=\"lbls_ bold_\">Date</ion-label>\n    </ion-col>\n    <ion-col size=\"4\" class=\"cols_\">\n      <ion-label class=\"lbls_ center_ bold_\">Type</ion-label>\n    </ion-col>\n    <ion-col size=\"4\" class=\"cols_\">\n      <ion-label class=\"lbls_ right_ bold_\">Amount</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"rows_\" *ngFor=\"let opt of PaymentHistory; let i = index\">\n    <ion-col size=\"4\" class=\"cols_\">\n      <ion-label class=\"lbls_\">{{opt.payment_date}}</ion-label>\n    </ion-col>\n    <ion-col size=\"4\" class=\"cols_\">\n      <ion-label class=\"lbls_ center_\">{{ this.PaymentMethods[opt.payment_method] }}</ion-label>\n    </ion-col>\n    <ion-col size=\"4\" class=\"cols_\">\n      <ion-label class=\"lbls_ right_\">₹{{opt.amount}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"rows_\" *ngIf=\"PaymentHistory.length == 0\">\n    <ion-col size=\"12\" class=\"cols_\">\n      <ion-label class=\"lbls_\"><strong>Status:</strong> Your invoice is awaiting payment</ion-label>\n    </ion-col>\n  </ion-row>\n  <!-- <div class=\"div_btns\">\n  <ion-button expand=\"full\" class=\"btns_\" (click)=\"cancel()\">Cancel</ion-button>\n  </div> -->\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/invoice/invoice-options/invoice-options.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/invoice/invoice-options/invoice-options.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item_opt {\n  --min-height: 40px;\n}\n.item_opt .lbl_opt {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS9pbnZvaWNlLW9wdGlvbnMvaW52b2ljZS1vcHRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvaW52b2ljZS1vcHRpb25zL2ludm9pY2Utb3B0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbV9vcHR7XG4gICAgLS1taW4taGVpZ2h0OiA0MHB4O1xuICAgIC5sYmxfb3B0e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/invoice/invoice-options/invoice-options.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/invoice/invoice-options/invoice-options.page.ts ***!
  \*****************************************************************/
/*! exports provided: InvoiceOptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceOptionsPage", function() { return InvoiceOptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _view_invoice_view_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/invoice-view.page */ "./src/app/invoice/view/invoice-view.page.ts");
/* harmony import */ var _payment_history_payment_history_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../payment-history/payment-history.page */ "./src/app/invoice/payment-history/payment-history.page.ts");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let InvoiceOptionsPage = class InvoiceOptionsPage {
    constructor(popCtrl, navCtrl, modalCtrl, router, alertCtrl, api) {
        this.popCtrl = popCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.api = api;
    }
    ngOnInit() {
        this.Recurring = this.Recurring;
        this.is_completed = this.is_completed;
    }
    edit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popCtrl.dismiss();
            this.router.navigate(['/edit-invoice'], { queryParams: { InvoiceId: this.InvoiceId } });
        });
    }
    receive(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popCtrl.dismiss();
            this.router.navigate(['/receive-payment'], { queryParams: { InvoiceId: this.InvoiceId } });
        });
    }
    recuring(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popCtrl.dismiss();
            this.router.navigate(['/recurring'], { queryParams: { InvoiceId: this.InvoiceId } });
        });
    }
    history() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popCtrl.dismiss();
            const modal = yield this.modalCtrl.create({
                component: _payment_history_payment_history_page__WEBPACK_IMPORTED_MODULE_5__["PaymentHistoryPage"],
                cssClass: 'payHistory_',
                backdropDismiss: false,
                swipeToClose: true,
                componentProps: {
                    InvoiceId: this.InvoiceId
                }
            });
            return yield modal.present();
        });
    }
    view(InvoiceId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popCtrl.dismiss();
            const modal = yield this.modalCtrl.create({
                component: _view_invoice_view_page__WEBPACK_IMPORTED_MODULE_4__["InvoiceViewPage"],
                backdropDismiss: false,
                swipeToClose: true,
                componentProps: {
                    InvoiceId: InvoiceId
                }
            });
            modal.onDidDismiss().then((res) => {
                this.router.navigate(['/invoice-list']);
            });
            return yield modal.present();
        });
    }
    delete(id, tabs) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var body = {
                InvoiceRowId: id
            };
            const alert = yield this.alertCtrl.create({
                header: 'Remove invoice',
                message: 'Do you really want to remove?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (cancel) => {
                            this.popCtrl.dismiss(false);
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.api.presentLoading();
                            this.api.Post("invoice/delete", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["timeout"])(this.api.API_TIMEOUT)).subscribe(data => {
                                this.api.presentToastWithOptions(data['message']);
                                this.popCtrl.dismiss(true);
                            }, err => {
                                this.api.dismissLoading();
                                this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
                            });
                        },
                    }
                ]
            });
            yield alert.present();
        });
    }
    stop_recuring() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var body = {
                id: this.InvoiceId
            };
            const alert = yield this.alertCtrl.create({
                header: 'Stop Recurring',
                message: 'Do you really want to stop this recurring invoice?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (cancel) => {
                            this.popCtrl.dismiss(false);
                        }
                    }, {
                        text: 'Stop',
                        handler: () => {
                            this.api.presentLoading();
                            this.api.Post("invoice/stopRecurring", body).subscribe(data => {
                                this.api.presentToastWithOptions(data['message']);
                                this.popCtrl.dismiss(true);
                            });
                        },
                    }
                ]
            });
            yield alert.present();
        });
    }
};
InvoiceOptionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
InvoiceOptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice-options',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./invoice-options.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice-options/invoice-options.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./invoice-options.page.scss */ "./src/app/invoice/invoice-options/invoice-options.page.scss")).default]
    })
], InvoiceOptionsPage);



/***/ }),

/***/ "./src/app/invoice/payment-history/payment-history.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/invoice/payment-history/payment-history.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-top: 8px;\n  --padding-bottom: 16px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\nion-content .div_pay {\n  border: 1px solid var(--ion-color-light-shade);\n}\nion-content .div_pay .lbl_head {\n  display: block;\n  padding: 16px;\n  text-align: center;\n  background: var(--ion-color-secondary);\n  font-weight: bold;\n}\nion-content .div_pay .rows_ {\n  padding: 8px 8px;\n}\nion-content .div_pay .rows_ .cols_ {\n  padding: 0px;\n}\nion-content .div_pay .rows_ .cols_ .lbls_ {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .div_pay .div_btns .btns_ {\n  margin: 0px;\n  font-size: 14px;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n.right_ {\n  text-align: right;\n}\n.center_ {\n  text-align: center;\n}\n.bold_ {\n  font-weight: bold;\n}\n.border_ {\n  border-bottom: 1px dashed var(--ion-color-primary);\n}\n.bg_ {\n  background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS9wYXltZW50LWhpc3RvcnkvcGF5bWVudC1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLDhDQUFBO0FBQ0o7QUFBSTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0FBRU47QUFBSTtFQUNFLGdCQUFBO0FBRU47QUFETTtFQUNFLFlBQUE7QUFHUjtBQUZRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUlWO0FBQ007RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDUjtBQUtBO0VBQ0UsaUJBQUE7QUFGRjtBQUlBO0VBQ0Usa0JBQUE7QUFERjtBQUdBO0VBQ0UsaUJBQUE7QUFBRjtBQUVBO0VBQ0Usa0RBQUE7QUFDRjtBQUNBO0VBQ0Usa0NBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvcGF5bWVudC1oaXN0b3J5L3BheW1lbnQtaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDhweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuXG4gIC5kaXZfcGF5IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgIC5sYmxfaGVhZCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAucm93c18ge1xuICAgICAgcGFkZGluZzogOHB4IDhweDtcbiAgICAgIC5jb2xzXyB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgLmxibHNfIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZGl2X2J0bnMge1xuICAgICAgLmJ0bnNfIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucmlnaHRfIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2VudGVyXyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib2xkXyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJvcmRlcl8ge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5iZ18ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/invoice/payment-history/payment-history.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/invoice/payment-history/payment-history.page.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHistoryPage", function() { return PaymentHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let PaymentHistoryPage = class PaymentHistoryPage {
    constructor(modalCtrl, api, statusBar) {
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.statusBar = statusBar;
        this.PaymentHistory = [];
        this.PaymentMethods = [];
    }
    ngOnInit() {
        if (this.InvoiceId) {
            this.api.presentLoading();
            this.api.Get("invoice/getPaymentHistory/" + this.InvoiceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(this.api.API_TIMEOUT)).subscribe(data => {
                this.PaymentHistory = data['data'].invoice_payments_records;
                this.PaymentMethods = data['data'].payment_methods;
                this.api.dismissLoading();
            }, err => {
                this.api.dismissLoading();
                this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
        }
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#FFF');
    }
    Modalclose() {
        this.modalCtrl.dismiss();
    }
};
PaymentHistoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] }
];
PaymentHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment-history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/payment-history/payment-history.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment-history.page.scss */ "./src/app/invoice/payment-history/payment-history.page.scss")).default]
    })
], PaymentHistoryPage);



/***/ })

}]);
//# sourceMappingURL=default~invoice-invoice-options-invoice-options-module~invoice-list-list-module-es2015.js.map
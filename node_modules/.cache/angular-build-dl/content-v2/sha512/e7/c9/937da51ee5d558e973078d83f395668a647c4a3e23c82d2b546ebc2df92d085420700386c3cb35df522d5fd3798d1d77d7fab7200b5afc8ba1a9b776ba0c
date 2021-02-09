(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-receive-payment-receive-payment-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/receive-payment/receive-payment.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/receive-payment/receive-payment.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppInvoiceReceivePaymentReceivePaymentPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Receive Payment</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button expand=\"block\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"div_top\">\n    <ion-label color=\"primary\" class=\"lbl_head bottom_\">\n      <span class=\"spn_head\">Customer Name: </span>\n      <span class=\"spn_details\">{{selectedInvoice.customer_name ? selectedInvoice.customer_name : ''}}</span>\n    </ion-label>\n    <ion-row class=\"row_top bottom_\">\n      <ion-col size=\"6\" class=\"col_top\">\n        <ion-label class=\"lbl_\">\n          <span class=\"spn_head\">Invoice No: </span>\n          <span class=\"spn_details\">{{selectedInvoice.number ? selectedInvoice.number : '' }}</span>\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_top\">\n        <ion-label class=\"lbl_ right_\">\n          <span class=\"spn_head\">Invoice Date: </span>\n          <span class=\"spn_details\">{{selectedInvoice.date ? selectedInvoice.date : '' }}</span>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row_top\">\n      <ion-col size=\"6\" class=\"col_top\">\n        <ion-label class=\"lbl_\">\n          <span class=\"spn_head\">Invoice Amount: </span>\n          <span class=\"spn_details\">{{selectedInvoice.grand_total ? selectedInvoice.grand_total : '' }}</span>\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_top\">\n        <ion-label class=\"lbl_ right_\">\n          <span class=\"spn_head\">Due Amount: </span>\n          <span class=\"spn_details\">{{dueAmount ? dueAmount : 0 }}</span>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <form [formGroup]=\"RecordPay\" class=\"form_\">\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-datetime type=\"date\" formControlName=\"payment_date\" displayFormat=\"DD-MM-YYYY\" placeholder=\"Payment Date\"\n        class=\"date_\">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"RecordPay.controls.payment_date.hasError('required') && RecordPay.controls.payment_date.touched\">\n      <p class=\"content\">Please Select Date!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-datetime type=\"date\" formControlName=\"due_date\" displayFormat=\"DD-MM-YYYY\" placeholder=\"Due Date\"\n        class=\"date_\">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Due Amount\" formControlName=\"amount\" value=\"\" autofocus=\"true\" class=\"input_\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"RecordPay.controls.amount.hasError('required') && RecordPay.controls.amount.touched\">\n      <p class=\"content\">Please Enter Due Amount!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-select interface=\"action-sheet\" placeholder=\"Payment Method\" formControlName=\"payment_method\"\n        class=\"dropWidth_\" mode=\"md\">\n        <ion-select-option value=\"1\">Bank payment</ion-select-option>\n        <ion-select-option value=\"2\">Cash</ion-select-option>\n        <ion-select-option value=\"3\">Cheque</ion-select-option>\n        <ion-select-option value=\"4\">Credit card</ion-select-option>\n        <ion-select-option value=\"5\">Paypal</ion-select-option>\n        <ion-select-option value=\"6\">Others</ion-select-option>\n\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"RecordPay.controls.payment_method.hasError('required') && RecordPay.controls.payment_method.touched\">\n      <p class=\"content\">Please Select Payment Method!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-input tyep=\"text\" placeholder=\"Note\" formControlName=\"note\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <div class=\"div_btn\">\n      <ion-button expand=\"block\" shape=\"round\" class=\"btn_ shadow_btn\" (click)=\"submit()\">Add Payment</ion-button>\n    </div>\n\n  </form>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/invoice/receive-payment/receive-payment-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/invoice/receive-payment/receive-payment-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ReceivePaymentPageRoutingModule */

    /***/
    function srcAppInvoiceReceivePaymentReceivePaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReceivePaymentPageRoutingModule", function () {
        return ReceivePaymentPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _receive_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./receive-payment.page */
      "./src/app/invoice/receive-payment/receive-payment.page.ts");

      var routes = [{
        path: '',
        component: _receive_payment_page__WEBPACK_IMPORTED_MODULE_3__["ReceivePaymentPage"]
      }];

      var ReceivePaymentPageRoutingModule = function ReceivePaymentPageRoutingModule() {
        _classCallCheck(this, ReceivePaymentPageRoutingModule);
      };

      ReceivePaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReceivePaymentPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/invoice/receive-payment/receive-payment.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/invoice/receive-payment/receive-payment.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ReceivePaymentPageModule */

    /***/
    function srcAppInvoiceReceivePaymentReceivePaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReceivePaymentPageModule", function () {
        return ReceivePaymentPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _receive_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./receive-payment-routing.module */
      "./src/app/invoice/receive-payment/receive-payment-routing.module.ts");
      /* harmony import */


      var _receive_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./receive-payment.page */
      "./src/app/invoice/receive-payment/receive-payment.page.ts");

      var ReceivePaymentPageModule = function ReceivePaymentPageModule() {
        _classCallCheck(this, ReceivePaymentPageModule);
      };

      ReceivePaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _receive_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReceivePaymentPageRoutingModule"]],
        declarations: [_receive_payment_page__WEBPACK_IMPORTED_MODULE_6__["ReceivePaymentPage"]]
      })], ReceivePaymentPageModule);
      /***/
    },

    /***/
    "./src/app/invoice/receive-payment/receive-payment.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/invoice/receive-payment/receive-payment.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppInvoiceReceivePaymentReceivePaymentPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .div_top {\n  margin-bottom: 16px !important;\n  padding: 12px;\n  background: var(--ion-color-light);\n}\nion-content .div_top .row_top .col_top {\n  padding: 0px;\n}\nion-content .div_top .row_top .col_top .lbl_ {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .div_top .lbl_head {\n  display: block;\n  font-size: 14px;\n}\nion-content .form_ {\n  margin: 16px 0px;\n}\nion-content .form_ .item_ {\n  --background: var(--ion-color-light);\n  border-radius: 24px;\n  width: 84%;\n  margin: 0 auto;\n  --padding-start: 24px;\n  --inner-padding-end: 12px;\n  margin-top: 16px;\n}\nion-content .form_ .item_ .input_ {\n  background: var(--ion-color-light);\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .form_ .item_ .dropWidth_ {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  min-width: 100%;\n  --padding-start: 0px;\n  --padding-end: 6px;\n  --placeholder-opacity: 0.5;\n}\nion-content .form_ .item_ .date_ {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  width: 100%;\n  --padding-top: 4px;\n  --padding-end: 0px;\n  --padding-bottom: 4px;\n  --padding-start: 0px;\n}\nion-content .form_ .div_btn {\n  margin: 32px 0px;\n}\nion-content .form_ .div_btn .btn_ {\n  width: 84%;\n  margin: 0 auto;\n  font-size: 14px;\n}\n.spn_head {\n  font-size: 11px;\n}\n.spn_details {\n  font-size: 12px;\n  font-weight: bold;\n}\n.right_ {\n  text-align: right;\n}\n.bottom_ {\n  padding-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS9yZWNlaXZlLXBheW1lbnQvcmVjZWl2ZS1wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FBQUo7QUFFTTtFQUNFLFlBQUE7QUFBUjtBQUNRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUNWO0FBR0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQURSO0FBSUU7RUFDRSxnQkFBQTtBQUZKO0FBR0k7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUVNO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFBUjtBQUVNO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUFSO0FBRU07RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUdJO0VBQ0ksZ0JBQUE7QUFEUjtBQUVRO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQVY7QUFLQTtFQUNFLGVBQUE7QUFGRjtBQUlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBREY7QUFHQTtFQUNJLGlCQUFBO0FBQUo7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9pbnZvaWNlL3JlY2VpdmUtcGF5bWVudC9yZWNlaXZlLXBheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAuZGl2X3RvcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAucm93X3RvcCB7XG4gICAgICAuY29sX3RvcCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgLmxibF8ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5sYmxfaGVhZHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbiAgLmZvcm1fIHtcbiAgICBtYXJnaW46IDE2cHggMHB4O1xuICAgIC5pdGVtXyB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgd2lkdGg6IDg0JTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAuaW5wdXRfIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgfVxuICAgICAgLmRyb3BXaWR0aF8ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDZweDtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gICAgICB9XG4gICAgICAuZGF0ZV8ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtLXBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmRpdl9idG4ge1xuICAgICAgICBtYXJnaW46IDMycHggMHB4O1xuICAgICAgICAuYnRuXyB7XG4gICAgICAgICAgd2lkdGg6IDg0JTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuLnNwbl9oZWFke1xuICBmb250LXNpemU6IDExcHg7XG59XG4uc3BuX2RldGFpbHN7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucmlnaHRfe1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmJvdHRvbV97XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/invoice/receive-payment/receive-payment.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/invoice/receive-payment/receive-payment.page.ts ***!
      \*****************************************************************/

    /*! exports provided: ReceivePaymentPage */

    /***/
    function srcAppInvoiceReceivePaymentReceivePaymentPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReceivePaymentPage", function () {
        return ReceivePaymentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/global/common_service */
      "./src/app/global/common_service.ts");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/api.service */
      "./src/app/services/api.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var ReceivePaymentPage = /*#__PURE__*/function () {
        function ReceivePaymentPage(formBuilder, modalCtrl, api, apiService, plt, datepipe, router, modelctrl, route, navCtrl, statusBar) {
          _classCallCheck(this, ReceivePaymentPage);

          this.formBuilder = formBuilder;
          this.modalCtrl = modalCtrl;
          this.api = api;
          this.apiService = apiService;
          this.plt = plt;
          this.datepipe = datepipe;
          this.router = router;
          this.modelctrl = modelctrl;
          this.route = route;
          this.navCtrl = navCtrl;
          this.statusBar = statusBar;
          this.selectedInvoice = [];
          this.dueAmount = 0;
          this.pay_fb();
        }

        _createClass(ReceivePaymentPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.statusBar.show();
            this.statusBar.styleDefault();
            this.statusBar.backgroundColorByHexString('#FFF');
          }
        }, {
          key: "pay_fb",
          value: function pay_fb() {
            this.RecordPay = this.formBuilder.group({
              payment_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              due_date: ['', null],
              amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              payment_method: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              note: ['', null]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            for (var v in this.RecordPay.controls) {
              this.RecordPay.controls[v].markAsTouched();
            }

            if (this.RecordPay.valid) {
              this.api.presentLoading();
              var body = {
                businessId: this.api.getBusinessId(),
                businessRowId: this.api.getBusinessDetails().id,
                invoiceId: this.InvoiceId,
                payment_date: this.RecordPay.value.payment_date,
                due_date: this.RecordPay.value.due_date,
                amount: this.RecordPay.value.amount.replace(/,/g, ''),
                payment_method: this.RecordPay.value.payment_method,
                note: this.RecordPay.value.note
              };
              this.api.Post("invoice/recordPayment", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["timeout"])(this.api.API_TIMEOUT)).subscribe(function (data) {
                if (data.status == 1) {
                  _this.api.presentToastWithOptions(data['message']);

                  _this.router.navigate(['/invoice-list']);
                }

                _this.api.dismissLoading();
              }, function (err) {
                _this.api.dismissLoading();

                _this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.InvoiceId = this.route.snapshot.queryParams.InvoiceId;
            this.plt.ready().then(function () {
              _this2.api.presentLoading();

              _this2.api.Get("invoice/getDueAmount/" + _this2.InvoiceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["timeout"])(_this2.api.API_TIMEOUT)).subscribe(function (res) {
                _this2.selectedInvoice = res['data'].invoice;
                _this2.dueAmount = res['data'].DueAmount;

                _this2.RecordPay.patchValue({
                  amount: res['data'].DueAmount,
                  payment_date: _this2.datepipe.transform(Date.now(), 'y-MM-d')
                });

                _this2.api.dismissLoading();
              }, function (err) {
                _this2.api.dismissLoading();

                _this2.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
              });
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.back();
          }
        }]);

        return ReceivePaymentPage;
      }();

      ReceivePaymentPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]
        }];
      };

      ReceivePaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-receive-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./receive-payment.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/receive-payment/receive-payment.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./receive-payment.page.scss */
        "./src/app/invoice/receive-payment/receive-payment.page.scss"))["default"]]
      })], ReceivePaymentPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=invoice-receive-payment-receive-payment-module-es5.js.map
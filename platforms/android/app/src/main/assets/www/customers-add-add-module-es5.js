(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-add-add-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/add/add.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/add/add.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCustomersAddAddPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>New Customer</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"custData\" class=\"form_\">\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Customer Name\" formControlName=\"name\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.name.hasError('required') && custData.controls.name.touched\">\n      <p class=\"content\">Please Enter Customer Name!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.email.hasError('required') && custData.controls.email.touched\">\n      <p class=\"content\">Please Enter Email!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.email.hasError('pattern') && custData.controls.email.touched\">\n      <p class=\"content\">Please Enter Valid Email!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"tel\" placeholder=\"Phone Number\" formControlName=\"phone\" class=\"input_\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.phone.hasError('required') && custData.controls.phone.touched\">\n      <p class=\"content\">Please Enter Phone number!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"!custData.get('phone').errors?.pattern && custData.get('phone').errors?.minlength && custData.get('phone').touched\">\n      <p class=\"content\">Please Enter Valid Phone number!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Address\" formControlName=\"address\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.address.hasError('required') && custData.controls.address.touched\">\n      <p class=\"content\">Please Enter Address!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-select interface=\"action-sheet\" placeholder=\"Country\" formControlName=\"country\" class=\"dropWidth_\" mode=\"md\"\n        (ionChange)=\"stateList($event)\" [(ngModel)]=\"selectedcountry\">\n        <ion-select-option *ngFor=\"let opt of country\" [value]=\"opt.id\">{{opt.name | uppercase}}</ion-select-option>\n        <!-- <ion-select-option value=\"0\">India</ion-select-option> -->\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.country.hasError('required') && custData.controls.country.touched\">\n      <p class=\"content\">Please Select Country!</p>\n    </ion-item>\n\n    <div *ngIf=\"country_name == 'INR'\">\n      <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n        <ion-select interface=\"action-sheet\" placeholder=\"State\" formControlName=\"state\" class=\"dropWidth_\" mode=\"md\">\n          <ion-select-option *ngFor=\"let opt of state\" [value]=\"opt.id\">{{opt.name }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"custData.controls.state.hasError('required') && custData.controls.state.touched\">\n        <p class=\"content\">Please Select State!</p>\n      </ion-item>\n    </div>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input placeholder=\"City\" formControlName=\"city\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.city.hasError('required') && custData.controls.city.touched\">\n      <p class=\"content\">Please Enter City!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"!custData.controls.city.hasError('required') && custData.controls.city.touched && custData.controls.city.hasError('pattern')\">\n      <p class=\"content\">Please Enter Only Characters!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"tel\" placeholder=\"Post Code\" formControlName=\"postal_code\" class=\"input_\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.postal_code.hasError('required') && custData.controls.postal_code.touched\">\n      <p class=\"content\">Please Enter Post Code!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"!custData.get('postal_code').errors?.pattern && custData.get('postal_code').errors?.minlength && custData.get('postal_code').touched\">\n      <p class=\"content\">Please Enter 6 Digits Post Code!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Currency\" formControlName=\"currency\" class=\"input_\" readonly=\"true\">\n      </ion-input>\n    </ion-item>\n\n    <!-- <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-select interface=\"action-sheet\" placeholder=\"Currency\" formControlName=\"currency\"\n        class=\"dropWidth_\" mode=\"md\" [(ngModel)]=\"selected_currency\">\n        <ion-select-option *ngFor=\"let opt of currency\" [value]=\"opt.currency_code\">{{opt.currency_code}} - {{opt.currency_name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.currency.hasError('required') && custData.controls.currency.touched\">\n      <p class=\"content\">Please Select Currency!</p>\n    </ion-item> -->\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Business Number\" formControlName=\"cus_number\" class=\"input_\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.cus_number.hasError('required') && custData.controls.cus_number.touched\">\n      <p class=\"content\">Please Enter Business Number!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" minlength=\"15\" maxlength=\"15\" placeholder=\"GST Number\" formControlName=\"vat_code\"\n        class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.vat_code.hasError('required') && custData.controls.vat_code.touched\">\n      <p class=\"content\">Please Enter GST Number!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"!custData.get('vat_code').errors?.pattern && custData.get('vat_code').errors?.minlength && custData.get('vat_code').touched\">\n      <p class=\"content\">Please Enter Valid GST Number!</p>\n    </ion-item>\n\n  </form>\n\n</ion-content>\n\n<ion-footer>\n  <div class=\"div_btn\">\n    <ion-button expand=\"full\" size=\"large\" class=\"btn_ shadow_btn\" (click)=\"save()\">Save\n    </ion-button>\n  </div>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/customers/add/add-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/customers/add/add-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AddPageRoutingModule */

    /***/
    function srcAppCustomersAddAddRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPageRoutingModule", function () {
        return AddPageRoutingModule;
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


      var _add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add.page */
      "./src/app/customers/add/add.page.ts");

      var routes = [{
        path: '',
        component: _add_page__WEBPACK_IMPORTED_MODULE_3__["AddPage"]
      }];

      var AddPageRoutingModule = function AddPageRoutingModule() {
        _classCallCheck(this, AddPageRoutingModule);
      };

      AddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/customers/add/add.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/customers/add/add.module.ts ***!
      \*********************************************/

    /*! exports provided: AddPageModule */

    /***/
    function srcAppCustomersAddAddModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPageModule", function () {
        return AddPageModule;
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


      var _add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-routing.module */
      "./src/app/customers/add/add-routing.module.ts");
      /* harmony import */


      var _add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add.page */
      "./src/app/customers/add/add.page.ts");

      var AddPageModule = function AddPageModule() {
        _classCallCheck(this, AddPageModule);
      };

      AddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPageRoutingModule"]],
        declarations: [_add_page__WEBPACK_IMPORTED_MODULE_6__["AddPage"]]
      })], AddPageModule);
      /***/
    },

    /***/
    "./src/app/customers/add/add.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/customers/add/add.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppCustomersAddAddPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 16px;\n  --keyboard-offset: 0px !important;\n}\nion-content .form_ {\n  margin: 0px 0px;\n  position: relative;\n}\nion-content .form_ .items_ {\n  --background: var(--ion-color-light);\n  width: 84%;\n  border-radius: 24px;\n  margin: 0 auto;\n  --padding-start: 24px;\n  --inner-padding-end: 12px;\n  margin-top: 16px !important;\n}\nion-content .form_ .items_ .input_ {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .form_ .items_ .dropWidth_ {\n  font-size: 14px;\n  min-width: 100%;\n  --padding-start: 0px;\n  --padding-end: 6px;\n  --placeholder-opacity: 0.5;\n}\nion-footer .div_btn {\n  margin: 0px 0px 0px 0px;\n}\nion-footer .div_btn .btn_ {\n  margin: 0;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJzL2FkZC9hZGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDRSxpQ0FBQTtBQUNKO0FBQUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFFTjtBQURNO0VBQ0Usb0NBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBR1I7QUFGUTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtBQUlWO0FBRlE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUlWO0FBRUk7RUFDRSx1QkFBQTtBQUNOO0FBQU07RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXJzL2FkZC9hZGQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIC0ta2V5Ym9hcmQtb2Zmc2V0OiAwcHggIWltcG9ydGFudDtcbiAgICAuZm9ybV8ge1xuICAgICAgbWFyZ2luOiAwcHggMHB4O1xuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAuaXRlbXNfIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICB3aWR0aDogODQlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC5pbnB1dF97XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgICAgLmRyb3BXaWR0aF8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogNnB4O1xuICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1mb290ZXJ7XG4gICAgLmRpdl9idG4ge1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gICAgICAuYnRuXyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/customers/add/add.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/customers/add/add.page.ts ***!
      \*******************************************/

    /*! exports provided: AddPage */

    /***/
    function srcAppCustomersAddAddPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPage", function () {
        return AddPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/global/common_service */
      "./src/app/global/common_service.ts");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/api.service */
      "./src/app/services/api.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var AddPage = /*#__PURE__*/function () {
        function AddPage(router, navCtrl, statusBar, formBuilder, apiService, api, plt) {
          _classCallCheck(this, AddPage);

          this.router = router;
          this.navCtrl = navCtrl;
          this.statusBar = statusBar;
          this.formBuilder = formBuilder;
          this.apiService = apiService;
          this.api = api;
          this.plt = plt;
          this.cust_fb();
        }

        _createClass(AddPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.plt.ready().then(function () {
              _this.countryData(_this.api.NetworkStatus);
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.statusBar.show();
            this.statusBar.styleDefault();
            this.statusBar.backgroundColorByHexString('#FFF');
          }
        }, {
          key: "countryData",
          value: function countryData() {
            var _this2 = this;

            var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var refresher = arguments.length > 1 ? arguments[1] : undefined;
            this.api.presentLoading();
            this.apiService.allApi(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(this.api.API_TIMEOUT)).subscribe(function (res) {
              _this2.statelist = res.data.state;
              _this2.country = res.data.countries;
              _this2.selectedcountry = '79';

              if (refresher) {
                refresher.target.complete();
              }

              _this2.api.dismissLoading();
            }, function (err) {
              _this2.api.dismissLoading();

              _this2.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }, {
          key: "stateList",
          value: function stateList(e) {
            this.state = this.statelist.filter(function (x) {
              return x.country_id == e.detail.value;
            });
            this.currency = this.country.filter(function (x) {
              return x.id == e.detail.value;
            });
            this.country_name = this.currency[0].currency_code;
            console.log("currency", this.currency);
            this.custData.patchValue({
              currency: this.currency[0].currency_code + '-' + this.currency[0].currency_name
            });
          }
        }, {
          key: "cust_fb",
          value: function cust_fb() {
            this.custData = this.formBuilder.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              phone: [''],
              address: [''],
              country: [''],
              state: [''],
              city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              postal_code: [''],
              currency: [''],
              cus_number: [''],
              vat_code: ['']
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this3 = this;

            for (var v in this.custData.controls) {
              this.custData.controls[v].markAsTouched();
            }

            if (this.custData.valid) {
              this.api.presentLoading();
              var body = {
                name: this.custData.value.name,
                email: this.custData.value.email,
                phone: this.custData.value.phone,
                address: this.custData.value.address,
                country: this.custData.value.country,
                state: this.currency[0].currency_code == 'INR' ? this.custData.value.state : '',
                city: this.custData.value.city,
                postal_code: this.custData.value.postal_code,
                currency: this.currency[0].currency_code,
                // country : this.api.INDIA,
                cus_number: this.custData.value.cus_number,
                vat_code: this.custData.value.vat_code,
                businessId: this.api.getBusinessId()
              };
              this.api.Post("Customer/add", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(this.api.API_TIMEOUT)).subscribe(function (data) {
                _this3.customer_process = false;

                _this3.api.dismissLoading();

                if (data.status == 1) {
                  _this3.api.presentToastWithOptions(data['message']);

                  _this3.router.navigate(["/customers-list"]);
                }
              }, function (err) {
                _this3.api.dismissLoading();

                _this3.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
              });
            }
          }
        }]);

        return AddPage;
      }();

      AddPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }];
      };

      AddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/add/add.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add.page.scss */
        "./src/app/customers/add/add.page.scss"))["default"]]
      })], AddPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=customers-add-add-module-es5.js.map
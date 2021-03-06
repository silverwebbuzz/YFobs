(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors-add-add-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/vendors/add/add.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendors/add/add.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVendorsAddAddPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"modalClose()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Add Vendor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"VendorsData\" class=\"form_\">\n\n    <div class=\"div_import\">\n      <ion-button expand=\"full\" shape=\"round\" fill=\"outline\" class=\"btn_import\" (click)=\"fnContactphone()\">Import From\n        Contacts\n      </ion-button>\n    </div>\n\n    <!-- <ng-autocomplete [data]=\"vendors\" [searchKeyword]=\"keyword\" placeHolder=\"Vendor Name\"\n      (selected)='selectEvent($event)' [itemTemplate]=\"itemTemplate\" [notFoundTemplate]=\"notFoundTemplate\"\n      formControlName=\"name\">\n    </ng-autocomplete> -->\n\n    <!-- <ng-template #itemTemplate let-item>\n      <div class=\"div_data\">\n        <a [innerHTML]=\"item.name\" class=\"name_data\"></a>\n        <a [innerHTML]=\"item.phone\" class=\"phn_data\"></a>\n      </div>\n    </ng-template> -->\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Vendor Name\" formControlName=\"name\" class=\"input_\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"VendorsData.controls.name.hasError('required') && VendorsData.controls.name.touched\">\n      <p class=\"content\">Please Enter Vendor Name!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"number\" placeholder=\"Phone\" formControlName=\"phone\" class=\"input_\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"VendorsData.controls.phone.hasError('required') && VendorsData.controls.phone.touched\">\n      <p class=\"content\">Please Enter Phone!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"!VendorsData.get('phone').errors?.pattern && VendorsData.get('phone').errors?.minlength  &&   VendorsData.get('phone').touched\">\n      <p class=\"content\">Please Enter Valid Phone number!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"VendorsData.controls.email.hasError('required') && VendorsData.controls.email.touched\">\n      <p class=\"content\">Please Enter Email!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"VendorsData.controls.email.hasError('pattern') && VendorsData.controls.email.touched\">\n      <p class=\"content\">Please Enter Valid Email!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Address\" formControlName=\"address\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"VendorsData.controls.address.hasError('required') && VendorsData.controls.address.touched\">\n      <p class=\"content\">Please Enter Address!</p>\n    </ion-item>\n\n    <div class=\"div_btn\">\n      <ion-button expand=\"full\" size=\"large\" shape=\"round\" class=\"btn_ shadow_btn\" (click)=\"fnAddVendor()\">Add\n        Vendor\n      </ion-button>\n    </div>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/vendors/add/add-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/vendors/add/add-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AddPageRoutingModule */

    /***/
    function srcAppVendorsAddAddRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/vendors/add/add.page.ts");

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
    "./src/app/vendors/add/add.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/vendors/add/add.module.ts ***!
      \*******************************************/

    /*! exports provided: AddPageModule */

    /***/
    function srcAppVendorsAddAddModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/vendors/add/add-routing.module.ts");
      /* harmony import */


      var _add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add.page */
      "./src/app/vendors/add/add.page.ts");
      /* harmony import */


      var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-ng-autocomplete */
      "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");

      var AddPageModule = function AddPageModule() {
        _classCallCheck(this, AddPageModule);
      };

      AddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"], _add_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPageRoutingModule"]],
        declarations: [_add_page__WEBPACK_IMPORTED_MODULE_6__["AddPage"]]
      })], AddPageModule);
      /***/
    },

    /***/
    "./src/app/vendors/add/add.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/vendors/add/add.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppVendorsAddAddPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --keyboard-offset: 0px !important;\n}\nion-content .form_ {\n  margin: 32px 0px;\n  position: relative;\n}\nion-content .form_ .div_import .btn_import {\n  width: 84%;\n  margin: 0 auto;\n  text-transform: none;\n  font-weight: normal;\n  --box-shadow: 0 4px 4px var(--ion-color-light-shade);\n}\nion-content .form_ .items_ {\n  --background: var(--ion-color-light);\n  width: 84%;\n  border-radius: 24px;\n  margin: 0 auto;\n  --padding-start: 24px;\n  --inner-padding-end: 12px;\n  margin-top: 16px !important;\n}\nion-content .form_ .items_ .input_ {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .form_ .items_ .dropWidth_ {\n  min-width: 100%;\n  --padding-start: 0px;\n  --padding-end: 6px;\n  --placeholder-opacity: 0.5;\n}\nion-content .form_ .div_btn {\n  margin: 32px 0px;\n}\nion-content .form_ .div_btn .btn_ {\n  width: 84%;\n  margin: 0 auto;\n  font-size: 14px;\n}\nion-content .div_list {\n  width: 75%;\n  margin: 0 auto;\n  position: absolute;\n  height: auto !important;\n  max-height: 200px !important;\n  visibility: visible;\n  overflow: visible;\n  z-index: 999;\n  box-shadow: 0 2px 4px #bbb;\n  text-align: center;\n  left: 0;\n  right: 0;\n  overflow: scroll;\n  border-radius: 8px;\n  background: white;\n  margin-top: 4px !important;\n}\nion-content .div_list .item_list {\n  --min-height: 40px;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\n.items_.item-has-focus + .div_list, .items_.ion-invalid + .div_list {\n  height: auto !important;\n  max-height: 200px !important;\n  z-index: 999;\n  box-shadow: 0 2px 4px #bbb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9ycy9hZGQvYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0FBQ0o7QUFBSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFFTjtBQUFRO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0RBQUE7QUFFVjtBQUNNO0VBQ0Usb0NBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBQ1I7QUFBUTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtBQUVWO0FBQVE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBRVY7QUFDTTtFQUNFLGdCQUFBO0FBQ1I7QUFBUTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUVWO0FBRU07RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFBUjtBQUNRO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFDVjtBQUlFO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9ycy9hZGQvYWRkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWtleWJvYXJkLW9mZnNldDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLmZvcm1fIHtcbiAgICAgIG1hcmdpbjogMzJweCAwcHg7XG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgIC5kaXZfaW1wb3J0IHtcbiAgICAgICAgLmJ0bl9pbXBvcnQge1xuICAgICAgICAgIHdpZHRoOiA4NCU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAtLWJveC1zaGFkb3c6IDAgNHB4IDRweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuaXRlbXNfIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICB3aWR0aDogODQlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC5pbnB1dF97XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgICAgLmRyb3BXaWR0aF8ge1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiA2cHg7XG4gICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5kaXZfYnRuIHtcbiAgICAgICAgbWFyZ2luOiAzMnB4IDBweDtcbiAgICAgICAgLmJ0bl8ge1xuICAgICAgICAgIHdpZHRoOiA4NCU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICAgLmRpdl9saXN0e1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4ICNiYmI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweCAhaW1wb3J0YW50O1xuICAgICAgICAuaXRlbV9saXN0eyBcbiAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICBcbiAgLml0ZW1zXy5pdGVtLWhhcy1mb2N1cyArIC5kaXZfbGlzdCwgLml0ZW1zXy5pb24taW52YWxpZCArIC5kaXZfbGlzdHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggI2JiYjtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/vendors/add/add.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/vendors/add/add.page.ts ***!
      \*****************************************/

    /*! exports provided: AddPage */

    /***/
    function srcAppVendorsAddAddPageTs(module, __webpack_exports__, __webpack_require__) {
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_Services_number_only_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/Services/number-only.service */
      "./src/Services/number-only.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
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
      /* harmony import */


      var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/contacts/ngx */
      "./node_modules/@ionic-native/contacts/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AddPage = /*#__PURE__*/function () {
        function AddPage(numberonly, formBuilder, statusBar, modelctrl, navCtrl, apiService, plt, api, contacts, router) {
          _classCallCheck(this, AddPage);

          this.numberonly = numberonly;
          this.formBuilder = formBuilder;
          this.statusBar = statusBar;
          this.modelctrl = modelctrl;
          this.navCtrl = navCtrl;
          this.apiService = apiService;
          this.plt = plt;
          this.api = api;
          this.contacts = contacts;
          this.router = router;
          this.keyword = 'name';
          this.vendors_fb();
        }

        _createClass(AddPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.plt.ready().then(function () {
              _this.loadData(_this.api.NetworkStatus);
            });
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this2 = this;

            var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var refresher = arguments.length > 1 ? arguments[1] : undefined;
            this.apiService.getVendor(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(this.api.API_TIMEOUT)).subscribe(function (res) {
              _this2.vendors = res.data ? res.data : [];

              if (refresher) {
                refresher.target.complete();
              }
            }, function (err) {
              _this2.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
          }
        }, {
          key: "selectEvent",
          value: function selectEvent(event) {
            this.vendorselect = event;
            this.id = event.id;
            this.VendorsData.patchValue({
              name: event.name,
              phone: event.phone,
              address: event.address ? event.address : "",
              email: event.email ? event.email : ""
            });
          }
        }, {
          key: "modalClose",
          value: function modalClose() {
            this.navCtrl.back();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.statusBar.show();
            this.statusBar.styleDefault();
            this.statusBar.backgroundColorByHexString('#FFFFFF');
          }
        }, {
          key: "vendors_fb",
          value: function vendors_fb() {
            this.VendorsData = this.formBuilder.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
          }
        }, {
          key: "fnAddVendor",
          value: function fnAddVendor() {
            var _this3 = this;

            for (var v in this.VendorsData.controls) {
              this.VendorsData.controls[v].markAsTouched();
            }

            if (this.VendorsData.valid) {
              this.api.dismissLoading();
              var body = {
                name: this.VendorsData.value.name.name ? this.VendorsData.value.name.name : this.VendorsData.value.name,
                phone: this.VendorsData.value.phone,
                email: this.VendorsData.value.email,
                address: this.VendorsData.value.address,
                businessId: this.api.getBusinessId()
              };
              this.api.Post("Vendor/VendorAdd", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(this.api.API_TIMEOUT)).subscribe(function (data) {
                _this3.api.dismissLoading();

                if (data.status == 1) {
                  _this3.api.presentToastWithOptions(data['message']);

                  _this3.router.navigate(["/vendors-list"]);
                }
              }, function (err) {
                _this3.api.dismissLoading();

                _this3.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
              });
            }
          }
        }, {
          key: "fnContactphone",
          value: function fnContactphone() {
            var _this4 = this;

            if (this.plt.is('cordova')) {
              this.contacts.pickContact().then(function (contact) {
                _this4.contactdata = [];

                if (contact.emails != null) {
                  var body = {
                    name: contact.displayName,
                    phone: contact.phoneNumbers[0].value,
                    email: contact.emails[0].value
                  };
                }

                if (contact.emails == null) {
                  var body = {
                    name: contact.displayName,
                    phone: contact.phoneNumbers[0].value,
                    email: ""
                  };
                }

                if (body.name) {
                  _this4.VendorsData.patchValue({
                    name: body.name,
                    phone: body.phone,
                    email: body.email,
                    address: ''
                  });
                }
              });
            }
          }
        }]);

        return AddPage;
      }();

      AddPage.ctorParameters = function () {
        return [{
          type: src_Services_number_only_service__WEBPACK_IMPORTED_MODULE_3__["NumberOnlyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
        }, {
          type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_9__["Contacts"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }];
      };

      AddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/vendors/add/add.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add.page.scss */
        "./src/app/vendors/add/add.page.scss"))["default"]]
      })], AddPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=vendors-add-add-module-es5.js.map
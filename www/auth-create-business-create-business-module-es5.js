(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-create-business-create-business-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/create-business/create-business.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/create-business/create-business.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthCreateBusinessCreateBusinessPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"div_main\">\n    <div class=\"div_img\">\n      <img class=\"img_\" src=\"../../assets/imgs/logo1.png\">\n    </div>\n  </div>\n\n  <form [formGroup]=\"CreateBusinessForm\" class=\"form_\">\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Name\" formControlName=\"name\"  class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"CreateBusinessForm.controls.name.hasError('required') && CreateBusinessForm.controls.name.touched\">\n      <p class=\"content\">Please Enter Name!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\"  class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"CreateBusinessForm.controls.email.hasError('required') && CreateBusinessForm.controls.email.touched\">\n      <p class=\"content\">Please Enter Email!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"CreateBusinessForm.controls.email.hasError('pattern') && CreateBusinessForm.controls.email.touched\">\n      <p class=\"content\">Please Enter Valid Email!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"CreateBusinessForm.controls.email.hasError('incorrect') && CreateBusinessForm.controls.email.touched\">\n      <p class=\"content\">Email already exists!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Business Name\" formControlName=\"businessname\" required  class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"CreateBusinessForm.controls.businessname.hasError('required') && CreateBusinessForm.controls.businessname.touched\">\n      <p class=\"content\">Please Enter Business Name!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-select interface=\"action-sheet\" formControlName=\"businesstype\" placeholder=\"Business Type\"\n        class=\"dropWidth_\" mode=\"md\">\n        <ion-select-option *ngFor=\"let cat of BusinessCategory\" [value]=\"cat.id\">{{cat.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"CreateBusinessForm.controls.businesstype.hasError('required') && CreateBusinessForm.controls.businesstype.touched\">\n      <p class=\"content\">Please Select Business Type!</p>\n    </ion-item>\n\n    <div class=\"div_btn\">\n      <ion-button expand=\"block\" shape=\"round\" class=\"btn_ shadow_btn\" (click)=\"fnHome()\">Continue</ion-button>\n    </div>\n\n  </form>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/auth/create-business/create-business-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/auth/create-business/create-business-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: CreateBusinessPageRoutingModule */

    /***/
    function srcAppAuthCreateBusinessCreateBusinessRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateBusinessPageRoutingModule", function () {
        return CreateBusinessPageRoutingModule;
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


      var _create_business_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-business.page */
      "./src/app/auth/create-business/create-business.page.ts");

      var routes = [{
        path: '',
        component: _create_business_page__WEBPACK_IMPORTED_MODULE_3__["CreateBusinessPage"]
      }];

      var CreateBusinessPageRoutingModule = function CreateBusinessPageRoutingModule() {
        _classCallCheck(this, CreateBusinessPageRoutingModule);
      };

      CreateBusinessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CreateBusinessPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/auth/create-business/create-business.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/auth/create-business/create-business.module.ts ***!
      \****************************************************************/

    /*! exports provided: CreateBusinessPageModule */

    /***/
    function srcAppAuthCreateBusinessCreateBusinessModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateBusinessPageModule", function () {
        return CreateBusinessPageModule;
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


      var _create_business_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./create-business-routing.module */
      "./src/app/auth/create-business/create-business-routing.module.ts");
      /* harmony import */


      var _create_business_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-business.page */
      "./src/app/auth/create-business/create-business.page.ts");

      var CreateBusinessPageModule = function CreateBusinessPageModule() {
        _classCallCheck(this, CreateBusinessPageModule);
      };

      CreateBusinessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _create_business_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateBusinessPageRoutingModule"]],
        declarations: [_create_business_page__WEBPACK_IMPORTED_MODULE_6__["CreateBusinessPage"]]
      })], CreateBusinessPageModule);
      /***/
    },

    /***/
    "./src/app/auth/create-business/create-business.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/auth/create-business/create-business.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthCreateBusinessCreateBusinessPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .div_main {\n  height: 148px;\n  padding: 28px;\n}\nion-content .div_main .div_img {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  background: var(--ion-color-light);\n  box-shadow: 0 4px 4px var(--ion-color-light-shade);\n  border-radius: 50px;\n  padding: 26px 21px;\n  text-align: center;\n}\nion-content .div_main .div_img .img_ {\n  height: 48px;\n  padding-left: 6px;\n}\nion-content .form_ {\n  margin: 16px 0px;\n}\nion-content .form_ .item_ {\n  --background: var(--ion-color-light);\n  border-radius: 24px;\n  width: 84%;\n  margin: 0 auto;\n  --padding-start: 24px;\n  --inner-padding-end: 12px;\n  margin-top: 16px !important;\n}\nion-content .form_ .item_ .input_ {\n  background: var(--ion-color-light);\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .form_ .item_ .dropWidth_ {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  min-width: 100%;\n  --padding-start: 0px;\n  --padding-end: 6px;\n  --placeholder-opacity: .5;\n}\nion-content .form_ .div_btn {\n  margin: 32px 0px;\n}\nion-content .form_ .div_btn .btn_ {\n  width: 84%;\n  margin: 0 auto;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jcmVhdGUtYnVzaW5lc3MvY3JlYXRlLWJ1c2luZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBQUo7QUFDSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUFNO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBRVI7QUFFRTtFQUNFLGdCQUFBO0FBQUo7QUFDSTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQUNOO0FBQU07RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUVSO0FBQU07RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRVI7QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFBTTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jcmVhdGUtYnVzaW5lc3MvY3JlYXRlLWJ1c2luZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLmRpdl9tYWluIHtcbiAgICBoZWlnaHQ6IDE0OHB4O1xuICAgIHBhZGRpbmc6IDI4cHg7XG4gICAgLmRpdl9pbWcge1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIHBhZGRpbmc6IDI2cHggMjFweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIC5pbWdfIHtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmZvcm1fIHtcbiAgICBtYXJnaW46IDE2cHggMHB4O1xuICAgIC5pdGVtXyB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgd2lkdGg6IDg0JTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHggIWltcG9ydGFudDtcbiAgICAgIC5pbnB1dF8ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICB9XG4gICAgICAuZHJvcFdpZHRoXyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNnB4O1xuICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC41O1xuICAgICAgfVxuICAgIH1cbiAgICAuZGl2X2J0biB7XG4gICAgICBtYXJnaW46IDMycHggMHB4O1xuICAgICAgLmJ0bl8ge1xuICAgICAgICB3aWR0aDogODQlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/auth/create-business/create-business.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/auth/create-business/create-business.page.ts ***!
      \**************************************************************/

    /*! exports provided: CreateBusinessPage */

    /***/
    function srcAppAuthCreateBusinessCreateBusinessPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateBusinessPage", function () {
        return CreateBusinessPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _global_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../global/common_service */
      "./src/app/global/common_service.ts");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/api.service */
      "./src/app/services/api.service.ts");

      var CreateBusinessPage = /*#__PURE__*/function () {
        function CreateBusinessPage(formBuilder, router, api, statusBar, apiService) {
          _classCallCheck(this, CreateBusinessPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.api = api;
          this.statusBar = statusBar;
          this.apiService = apiService;
          this.BusinessCategory = [];
          this.emailvalue = 0;
          this.info_fb();
          this.Optionlist();
        }

        _createClass(CreateBusinessPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.statusBar.show();
            this.statusBar.styleDefault();
            this.statusBar.backgroundColorByHexString('#FFF');
          }
        }, {
          key: "Optionlist",
          value: function Optionlist() {
            var _this = this;

            this.api.Get("common/OptionValue").subscribe(function (data) {
              if (data['status'] == 1) {
                _this.BusinessCategory = data['data'].businessCategory;
              }
            });
          }
        }, {
          key: "info_fb",
          value: function info_fb() {
            this.CreateBusinessForm = this.formBuilder.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
              businessname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              businesstype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
          }
        }, {
          key: "fnHome",
          value: function fnHome() {
            var _this2 = this;

            for (var v in this.CreateBusinessForm.controls) {
              this.CreateBusinessForm.controls[v].markAsTouched();
            }

            if (this.CreateBusinessForm.valid) {
              this.api.presentLoading();
              var body = {
                name: this.CreateBusinessForm.value.name,
                email: this.CreateBusinessForm.value.email,
                business_name: this.CreateBusinessForm.value.businessname,
                business_type: this.CreateBusinessForm.value.businesstype
              };
              this.api.Post("Authentication/createBusiness/", body).subscribe(function (business) {
                if (business['status'] == 1) {
                  localStorage.setItem("businessId", business['business_unique_id']);

                  if (business["data"] != null && business["data"] != "") {
                    var bussiness = JSON.stringify(business["data"]);
                    localStorage.setItem('ActiveBusiness', bussiness);
                    var userInfo = JSON.stringify(business["userInfo"]);
                    localStorage.setItem('ActiveUser', userInfo);
                  }

                  _this2.apiService.allApi(true).subscribe(function (res) {
                    if (res['status'] == 1) {
                      _this2.api.dismissLoading();

                      _this2.api.presentToastWithOptions(business['message']);

                      _this2.router.navigate(['/invoice-list']);
                    } else {
                      _this2.api.presentToastWithOptions(business['message']);

                      _this2.api.dismissLoading();
                    }
                  });
                } else if (business['status'] == 0 && business['email']) {
                  if (business['email']) {
                    _this2.CreateBusinessForm.controls['email'].setErrors({
                      'incorrect': true
                    });

                    _this2.CreateBusinessForm.controls['email'].markAsTouched();
                  } else {
                    _this2.CreateBusinessForm.controls['email'].setErrors({
                      'incorrect': true
                    });

                    _this2.CreateBusinessForm.controls['email'].markAsTouched();
                  }

                  _this2.api.dismissLoading();
                } else {
                  _this2.api.presentToastWithOptions(business['message']);

                  _this2.api.dismissLoading();
                }
              }, function (err) {
                _this2.api.dismissLoading();

                _this2.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
              });
            }
          }
        }]);

        return CreateBusinessPage;
      }();

      CreateBusinessPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }];
      };

      CreateBusinessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-business',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./create-business.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/create-business/create-business.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./create-business.page.scss */
        "./src/app/auth/create-business/create-business.page.scss"))["default"]]
      })], CreateBusinessPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-create-business-create-business-module-es5.js.map
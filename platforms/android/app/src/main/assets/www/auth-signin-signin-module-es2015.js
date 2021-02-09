(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signin-signin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"div_main\">\n    <div class=\"div_img\">\n      <img class=\"img_\" src=\"../../assets/imgs/logo1.png\">\n    </div>\n    <ion-label class=\"lbl_join\">Join Now</ion-label>\n  </div>\n\n  <form [formGroup]=\"SignInForm\" class=\"form_\">\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-icon slot=\"start\" src=\"../../../assets/imgs/in.svg\" class=\"flag_\"></ion-icon>\n      <span class=\"lbl_91\">+91</span>\n      <ion-input type=\"tel\" (keypress)=\"numberonly.FnNumberOnly($event)\" minlength=\"10\" maxlength=\"10\" pattern=\"^[0-9]+$\" placeholder=\"Phone Number\" formControlName=\"phone\"  class=\"input_\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"SignInForm.controls.phone.hasError('required') && SignInForm.controls.phone.touched\">\n      <p class=\"content\">Please Enter Phone number!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n    *ngIf=\"!SignInForm.get('phone').errors?.pattern && SignInForm.get('phone').errors?.minlength  &&   SignInForm.get('phone').touched\">\n      <p class=\"content\">Please Enter Valid Phone number!</p>\n    </ion-item>\n\n    <div class=\"div_btn\">\n      <ion-button expand=\"block\" shape=\"round\" class=\"btn_ shadow_btn\" (click)=\"fnSignin()\">Sign In</ion-button>\n    </div>\n\n  </form>\n\n</ion-content>\n\n<ion-footer>\n  <ion-row class=\"row_\">\n    <ion-col size=\"6\" class=\"col_secure\">\n      <img src=\"../../assets/imgs/secure-logo.png\" class=\"img_secure\"/>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_india\">\n      <img src=\"../../assets/imgs/made-with-pride-in-india-logo-809449EC9E-seeklogo.com.png\" class=\"img_india\"/>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "./src/app/auth/signin/signin-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/signin/signin-routing.module.ts ***!
  \******************************************************/
/*! exports provided: SigninPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageRoutingModule", function() { return SigninPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.page */ "./src/app/auth/signin/signin.page.ts");




const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_3__["SigninPage"]
    }
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SigninPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/signin/signin.module.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/signin/signin.module.ts ***!
  \**********************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin-routing.module */ "./src/app/auth/signin/signin-routing.module.ts");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.page */ "./src/app/auth/signin/signin.page.ts");







let SigninPageModule = class SigninPageModule {
};
SigninPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninPageRoutingModule"]
        ],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
    })
], SigninPageModule);



/***/ }),

/***/ "./src/app/auth/signin/signin.page.scss":
/*!**********************************************!*\
  !*** ./src/app/auth/signin/signin.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .div_main {\n  height: 200px;\n  padding: 28px;\n}\nion-content .div_main .div_img {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  background: var(--ion-color-light);\n  box-shadow: 0 4px 4px var(--ion-color-light-shade);\n  border-radius: 50px;\n  padding: 26px 21px;\n  text-align: center;\n}\nion-content .div_main .div_img .img_ {\n  height: 48px;\n  padding-left: 6px;\n}\nion-content .div_main .lbl_join {\n  display: block;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  padding: 16px 0px;\n  color: var(--ion-color-primary);\n}\nion-content .form_ {\n  margin: 16px 0px;\n}\nion-content .form_ .item_ {\n  --background: var(--ion-color-light);\n  border-radius: 24px;\n  width: 84%;\n  margin: 0 auto;\n  --padding-start: 24px;\n  --inner-padding-end: 12px;\n}\nion-content .form_ .item_ .flag_ {\n  font-size: 20px;\n  margin-right: 12px;\n}\nion-content .form_ .item_ .lbl_91 {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .form_ .item_ .lbl_91 {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .form_ .item_ .input_ {\n  background: var(--ion-color-light);\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  --padding-start: 8px;\n}\nion-content .form_ .div_btn {\n  margin: 32px 0px;\n}\nion-content .form_ .div_btn .btn_ {\n  height: 44px;\n  width: 84%;\n  margin: 0 auto;\n  font-size: 14px;\n}\nion-footer {\n  padding: 8px;\n  background: var(--ion-color-primary-contrast);\n}\nion-footer .row_ .col_secure {\n  padding: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  text-align: right;\n}\nion-footer .row_ .col_secure .img_secure {\n  width: 75%;\n}\nion-footer .row_ .col_india {\n  padding: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  text-align: left;\n}\nion-footer .row_ .col_india .img_india {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBQUo7QUFDSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUFNO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBRVI7QUFDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFDTjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSjtBQUNJO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNOO0FBQU07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUFNO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FBRVI7QUFBTTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtBQUVSO0FBQU07RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0FBRVI7QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFBTTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFFUjtBQUdBO0VBQ0UsWUFBQTtFQUNBLDZDQUFBO0FBQUY7QUFFSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUNNO0VBQ0UsVUFBQTtBQUNSO0FBRUk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQU47QUFDTTtFQUNFLFVBQUE7QUFDUiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC5kaXZfbWFpbiB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwYWRkaW5nOiAyOHB4O1xuICAgIC5kaXZfaW1nIHtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA0cHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAyNnB4IDIxcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaW1nXyB7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5sYmxfam9pbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTZweCAwcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuICAuZm9ybV8ge1xuICAgIG1hcmdpbjogMTZweCAwcHg7XG4gICAgLml0ZW1fIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgICB3aWR0aDogODQlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgLmZsYWdfe1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgIH1cbiAgICAgIC5sYmxfOTF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIH1cbiAgICAgIC5sYmxfOTF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIH1cbiAgICAgIC5pbnB1dF8ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuZGl2X2J0biB7XG4gICAgICBtYXJnaW46IDMycHggMHB4O1xuICAgICAgLmJ0bl8ge1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIHdpZHRoOiA4NCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5pb24tZm9vdGVyIHtcbiAgcGFkZGluZzogOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIC5yb3dfIHtcbiAgICAuY29sX3NlY3VyZSB7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgLmltZ19zZWN1cmUge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgfVxuICAgIH1cbiAgICAuY29sX2luZGlhIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIC5pbWdfaW5kaWEge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/signin/signin.page.ts":
/*!********************************************!*\
  !*** ./src/app/auth/signin/signin.page.ts ***!
  \********************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Services_number_only_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/number-only.service */ "./src/Services/number-only.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _global_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");









// declare var SMSReceive: any;
let SigninPage = class SigninPage {
    constructor(formBuilder, numberonly, router, api, apiService, statusBar) {
        this.formBuilder = formBuilder;
        this.numberonly = numberonly;
        this.router = router;
        this.api = api;
        this.apiService = apiService;
        this.statusBar = statusBar;
        this.signin_fb();
    }
    ionViewWillEnter() {
        // this.getSimData();
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#FFF');
    }
    ngOnInit() { }
    signin_fb() {
        this.SignInForm = this.formBuilder.group({
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    fnSignin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let v in this.SignInForm.controls) {
                this.SignInForm.controls[v].markAsTouched();
            }
            if (this.SignInForm.valid) {
                this.api.presentLoading();
                var body = { phone: this.SignInForm.value.phone };
                this.attemptRemaining = yield this.sendOtp(body);
                this.api.dismissLoading();
                this.router.navigate(['/otp'], { queryParams: { phone: this.SignInForm.value.phone, attemptRemaining: this.attemptRemaining } });
            }
        });
    }
    sendOtp(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.api.sendOtp(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(this.api.API_TIMEOUT)).subscribe(data => {
                    if (data['status'] == 1) {
                        resolve(data['attemptRemaining']);
                    }
                    else {
                        this.api.dismissLoading();
                        this.api.presentToastWithOptions(data['message']);
                    }
                }, err => {
                    this.api.dismissLoading();
                    this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
                });
            });
        });
    }
};
SigninPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _Services_number_only_service__WEBPACK_IMPORTED_MODULE_3__["NumberOnlyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
];
SigninPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signin.page.scss */ "./src/app/auth/signin/signin.page.scss")).default]
    })
], SigninPage);



/***/ })

}]);
//# sourceMappingURL=auth-signin-signin-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-edit-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/edit/edit.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/edit/edit.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Edit Customer</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"custData\" class=\"form_\">\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Customer Name\" formControlName=\"name\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.name.hasError('required') && custData.controls.name.touched\">\n      <p class=\"content\">Please Enter Customer Name!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.email.hasError('required') && custData.controls.email.touched\">\n      <p class=\"content\">Please Enter Email!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.email.hasError('pattern') && custData.controls.email.touched\">\n      <p class=\"content\">Please Enter Valid Email!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"tel\" placeholder=\"Phone Number\" formControlName=\"phone\" class=\"input_\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.phone.hasError('required') && custData.controls.phone.touched\">\n      <p class=\"content\">Please Enter Phone number!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"!custData.get('phone').errors?.pattern && custData.get('phone').errors?.minlength && custData.get('phone').touched\">\n      <p class=\"content\">Please Enter Valid Phone number!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Address\" formControlName=\"address\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.address.hasError('required') && custData.controls.address.touched\">\n      <p class=\"content\">Please Enter Address!</p>\n    </ion-item>\n\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-select interface=\"action-sheet\" placeholder=\"Country\" formControlName=\"country\" class=\"dropWidth_\" mode=\"md\"\n        [(ngModel)]=\"selectedcountry\" (ionChange)=\"stateList($event)\">\n        <ion-select-option *ngFor=\"let opt of country\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.country.hasError('required') && custData.controls.country.touched\">\n      <p class=\"content\">Please Select Country!</p>\n    </ion-item>\n\n    <div *ngIf=\"country_name == 'INR'\">\n      <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n        <ion-select interface=\"action-sheet\" placeholder=\"State\" formControlName=\"state\" class=\"dropWidth_\" mode=\"md\"\n          [(ngModel)]=\"selectedstate\">\n          <ion-select-option *ngFor=\"let opt of state\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"custData.controls.state.hasError('required') && custData.controls.state.touched\">\n        <p class=\"content\">Please Select State!</p>\n      </ion-item>\n    </div>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input placeholder=\"City\" formControlName=\"city\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.city.hasError('required') && custData.controls.city.touched\">\n      <p class=\"content\">Please Enter City!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"!custData.controls.city.hasError('required') && custData.controls.city.touched && custData.controls.city.hasError('pattern')\">\n      <p class=\"content\">Please Enter Only Characters!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"tel\" placeholder=\"Post Code\" formControlName=\"postal_code\" class=\"input_\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.postal_code.hasError('required') && custData.controls.postal_code.touched\">\n      <p class=\"content\">Please Enter Post Code!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"!custData.get('postal_code').errors?.pattern && custData.get('postal_code').errors?.minlength && custData.get('postal_code').touched\">\n      <p class=\"content\">Please Enter 6 Digits Post Code!</p>\n    </ion-item>\n\n    <!-- <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-select interface=\"action-sheet\" placeholder=\"Currency\" formControlName=\"currency\"\n        class=\"dropWidth_\" mode=\"md\" [(ngModel)]=\"selectedcurrency\">\n        <ion-select-option *ngFor=\"let opt of currency\" [value]=\"opt.currency_code\">{{opt.currency_code}} - {{opt.currency_name}}</ion-select-option>\n      </ion-select>\n    </ion-item> -->\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Currency\" formControlName=\"currency\" class=\"input_\" readonly=\"true\">\n      </ion-input>\n    </ion-item>\n\n    <!-- <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.currency.hasError('required') && custData.controls.currency.touched\">\n      <p class=\"content\">Please Select Currency!</p>\n    </ion-item> -->\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Business Number\" formControlName=\"cus_number\" class=\"input_\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.cus_number.hasError('required') && custData.controls.cus_number.touched\">\n      <p class=\"content\">Please Enter Business Number!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" minlength=\"15\" maxlength=\"15\" placeholder=\"GST Number\" formControlName=\"vat_code\"\n        class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"custData.controls.vat_code.hasError('required') && custData.controls.vat_code.touched\">\n      <p class=\"content\">Please Enter GST Number!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"!custData.get('vat_code').errors?.pattern && custData.get('vat_code').errors?.minlength && custData.get('vat_code').touched\">\n      <p class=\"content\">Please Enter Valid GST Number!</p>\n    </ion-item>\n\n  </form>\n\n</ion-content>\n\n<ion-footer>\n  <div class=\"div_btn\">\n    <ion-button expand=\"full\" size=\"large\" class=\"btn_ shadow_btn\" (click)=\"save()\">Save\n    </ion-button>\n  </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/customers/edit/edit-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/edit/edit-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function() { return EditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.page */ "./src/app/customers/edit/edit.page.ts");




const routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_3__["EditPage"]
    }
];
let EditPageRoutingModule = class EditPageRoutingModule {
};
EditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditPageRoutingModule);



/***/ }),

/***/ "./src/app/customers/edit/edit.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/edit/edit.module.ts ***!
  \***********************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-routing.module */ "./src/app/customers/edit/edit-routing.module.ts");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/customers/edit/edit.page.ts");







let EditPageModule = class EditPageModule {
};
EditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"]
        ],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
    })
], EditPageModule);



/***/ }),

/***/ "./src/app/customers/edit/edit.page.scss":
/*!***********************************************!*\
  !*** ./src/app/customers/edit/edit.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-bottom: 16px;\n  --keyboard-offset: 0px !important;\n}\nion-content .form_ {\n  margin: 0px 0px;\n  position: relative;\n}\nion-content .form_ .items_ {\n  --background: var(--ion-color-light);\n  width: 84%;\n  border-radius: 24px;\n  margin: 0 auto;\n  --padding-start: 24px;\n  --inner-padding-end: 12px;\n  margin-top: 16px !important;\n}\nion-content .form_ .items_ .input_ {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .form_ .items_ .dropWidth_ {\n  font-size: 14px;\n  min-width: 100%;\n  --padding-start: 0px;\n  --padding-end: 6px;\n  --placeholder-opacity: 0.5;\n}\nion-footer .div_btn {\n  margin: 0px 0px 0px 0px;\n}\nion-footer .div_btn .btn_ {\n  margin: 0;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJzL2VkaXQvZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNFLGlDQUFBO0FBQ0o7QUFBSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUVOO0FBRE07RUFDRSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFHUjtBQUZRO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FBSVY7QUFGUTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBSVY7QUFFSTtFQUNFLHVCQUFBO0FBQ047QUFBTTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcnMvZWRpdC9lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAtLWtleWJvYXJkLW9mZnNldDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLmZvcm1fIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweDtcbiAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgLml0ZW1zXyB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgd2lkdGg6IDg0JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAuaW5wdXRfe1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB9XG4gICAgICAgIC5kcm9wV2lkdGhfIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDZweDtcbiAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpb24tZm9vdGVye1xuICAgIC5kaXZfYnRuIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xuICAgICAgLmJ0bl8ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/customers/edit/edit.page.ts":
/*!*********************************************!*\
  !*** ./src/app/customers/edit/edit.page.ts ***!
  \*********************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");









let EditPage = class EditPage {
    constructor(router, navCtrl, statusBar, formBuilder, apiService, api, plt, route) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.api = api;
        this.plt = plt;
        this.route = route;
        this.cust_fb();
    }
    ngOnInit() {
        this.reqData = this.route.snapshot.queryParams;
    }
    countryData(refresh = false, refresher) {
        this.api.presentLoading();
        this.apiService.allApi(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
            this.statelist = res.data.state;
            this.country = res.data.countries;
            this.loadData(this.api.NetworkStatus);
            if (refresher) {
                refresher.target.complete();
            }
            this.api.dismissLoading();
        }, err => {
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        });
    }
    stateList(e) {
        this.state = this.statelist.filter(x => x.country_id == e.detail.value);
        this.currency = this.country.filter(x => x.id == e.detail.value);
        this.country_name = this.currency[0].currency_code;
        this.custData.patchValue({
            currency: this.currency[0].currency_code + '-' + this.currency[0].currency_name,
        });
    }
    loadData(refresh = false, refresher) {
        this.apiService.getCustomer(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
            if (res.data) {
                let customerdata = res.data.filter((x) => x.id == this.reqData.id);
                let customerdetails = customerdata[0];
                this.selectedcountry = customerdetails.country;
                this.state = this.statelist.filter(x => x.country_id == customerdetails.country);
                this.selectedstate = customerdetails.state;
                this.currency = this.country.filter(x => x.id == customerdetails.country);
                this.country_name = this.currency[0].currency_code;
                // this.selectedcurrency = this.currency[0].currency_code
                this.custData.patchValue({
                    name: customerdetails.name,
                    email: customerdetails.email,
                    phone: customerdetails.phone,
                    address: customerdetails.address,
                    country: customerdetails.country,
                    city: customerdetails.city,
                    postal_code: customerdetails.postal_code,
                    cus_number: customerdetails.cus_number,
                    vat_code: customerdetails.vat_code,
                    currency: this.currency[0].currency_code + '-' + this.currency[0].currency_name,
                });
                setTimeout(() => {
                }, 1000);
            }
            this.api.dismissLoading();
        }, err => {
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        });
    }
    ionViewWillEnter() {
        this.plt.ready().then(() => {
            this.countryData(this.api.NetworkStatus);
        });
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#FFF');
    }
    goBack() {
        this.navCtrl.back();
    }
    cust_fb() {
        this.custData = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: [''],
            address: [''],
            country: [''],
            state: [''],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            postal_code: [''],
            currency: [''],
            cus_number: [''],
            vat_code: [''],
        });
    }
    save() {
        for (let v in this.custData.controls) {
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
                businessId: this.api.getBusinessId(),
                id: this.reqData.id,
            };
            this.api.Post("Customer/add", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(this.api.API_TIMEOUT)).subscribe(data => {
                this.customer_process = false;
                this.api.dismissLoading();
                if (data.status == 1) {
                    this.api.presentToastWithOptions(data['message']);
                    this.router.navigate(["/customers-list"]);
                }
            }, err => {
                this.api.dismissLoading();
                this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
        }
    }
};
EditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/edit/edit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit.page.scss */ "./src/app/customers/edit/edit.page.scss")).default]
    })
], EditPage);



/***/ })

}]);
//# sourceMappingURL=customers-edit-edit-module-es2015.js.map
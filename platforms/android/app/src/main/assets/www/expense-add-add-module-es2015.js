(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expense-add-add-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/expense/add/add.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expense/add/add.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>New Expenses</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"expData\" class=\"form_\">\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"number\" placeholder=\"Expense Amount\" formControlName=\"amount\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"expData.controls.amount.hasError('required') && expData.controls.amount.touched\">\n      <p class=\"content\">Please Enter Expense Amount!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"number\" placeholder=\"Tax %\" formControlName=\"tax\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"expData.controls.tax.hasError('required') && expData.controls.tax.touched\">\n      <p class=\"content\">Please Enter Tax!</p>\n    </ion-item>\n\n    <!-- <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-select interface=\"action-sheet\" placeholder=\"Vendors\" formControlName=\"vendor\" class=\"dropWidth_\" mode=\"md\">\n        <ion-select-option *ngFor=\"let opt of vendors\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n      </ion-select>\n    </ion-item> -->\n\n    <ng-autocomplete [data]=\"vendors\" [searchKeyword]=\"vendor_keyword\" placeHolder=\"Vendors\"\n      (selected)='vendorselectEvent($event)' [itemTemplate]=\"itemTemplate\" [notFoundTemplate]=\"notFoundTemplate\"\n      formControlName=\"vendor\">\n    </ng-autocomplete>\n\n    <ng-template #itemTemplate let-item>\n      <div class=\"div_data\" *ngIf=\"vendors?.length > 0\">\n        <a [innerHTML]=\"item.name\" class=\"name_data\"></a>\n      </div>\n    </ng-template>\n\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"expData.controls.vendor.hasError('required') && expData.controls.vendor.touched\">\n      <p class=\"content\">Please Select Vendors!</p>\n    </ion-item>\n\n    <!-- <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-select interface=\"action-sheet\" placeholder=\"Expense Category\" formControlName=\"category\" class=\"dropWidth_\"\n        mode=\"md\">\n        <ion-select-option *ngFor=\"let opt of expense_category\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n      </ion-select>\n    </ion-item> -->\n\n    <ng-autocomplete [data]=\"expense_category\" [searchKeyword]=\"category_keyword\" placeHolder=\"Expense Category\"\n    (selected)='categoryselectEvent($event)' [itemTemplate]=\"itemTemplate\" [notFoundTemplate]=\"notFoundTemplate\"\n    formControlName=\"category\">\n  </ng-autocomplete>\n\n  <ng-template #itemTemplate let-item>\n    <div class=\"div_data\" *ngIf=\"expense_category?.length > 0\">\n      <a [innerHTML]=\"item.name\" class=\"name_data\"></a>\n    </div>\n  </ng-template>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"expData.controls.category.hasError('required') && expData.controls.category.touched\">\n      <p class=\"content\">Please Select Expense Category!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-datetime displayFormat=\"DD-MM-YYYY\" formControlName=\"date\" placeholder=\"Date\"\n        class=\"dropWidth_\"></ion-datetime>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"expData.controls.date.hasError('required') && expData.controls.date.touched\">\n      <p class=\"content\">Please Select Date!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Notes\" formControlName=\"notes\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"expData.controls.notes.hasError('required') && expData.controls.notes.touched\">\n      <p class=\"content\">Please Enter Notes!</p>\n    </ion-item>\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <div class=\"div_btn\">\n    <ion-button expand=\"full\" size=\"large\" class=\"btn_ shadow_btn\" (click)=\"save()\">Save\n    </ion-button>\n  </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/expense/add/add-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/expense/add/add-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageRoutingModule", function() { return AddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add.page */ "./src/app/expense/add/add.page.ts");




const routes = [
    {
        path: '',
        component: _add_page__WEBPACK_IMPORTED_MODULE_3__["AddPage"]
    }
];
let AddPageRoutingModule = class AddPageRoutingModule {
};
AddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddPageRoutingModule);



/***/ }),

/***/ "./src/app/expense/add/add.module.ts":
/*!*******************************************!*\
  !*** ./src/app/expense/add/add.module.ts ***!
  \*******************************************/
/*! exports provided: AddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageModule", function() { return AddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-routing.module */ "./src/app/expense/add/add-routing.module.ts");
/* harmony import */ var _add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add.page */ "./src/app/expense/add/add.page.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");








let AddPageModule = class AddPageModule {
};
AddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPageRoutingModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"]
        ],
        declarations: [_add_page__WEBPACK_IMPORTED_MODULE_6__["AddPage"]]
    })
], AddPageModule);



/***/ }),

/***/ "./src/app/expense/add/add.page.scss":
/*!*******************************************!*\
  !*** ./src/app/expense/add/add.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-bottom: 16px;\n  --keyboard-offset: 0px !important;\n}\nion-content .form_ {\n  margin: 0px 0px;\n  position: relative;\n}\nion-content .form_ .items_ {\n  --background: var(--ion-color-light);\n  width: 84%;\n  border-radius: 24px;\n  margin: 0 auto;\n  --padding-start: 24px;\n  --inner-padding-end: 12px;\n  margin-top: 16px !important;\n}\nion-content .form_ .items_ .input_ {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .form_ .items_ .dropWidth_ {\n  font-size: 14px;\n  min-width: 100%;\n  --padding-start: 0px;\n  --padding-end: 6px;\n  --placeholder-opacity: 0.5;\n}\nion-content .form_ .items_ .date_ {\n  font-size: 14px;\n}\nion-footer .div_btn {\n  margin: 0px 0px 0px 0px;\n}\nion-footer .div_btn .btn_ {\n  margin: 0;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZW5zZS9hZGQvYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsaUNBQUE7QUFDSjtBQUFJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBRU47QUFETTtFQUNFLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQUdSO0FBRlE7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7QUFJVjtBQUZRO0VBQ0ksZUFBQTtFQUNGLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFJVjtBQUZRO0VBQ0ksZUFBQTtBQUlaO0FBRUk7RUFDSSx1QkFBQTtBQUNSO0FBQVE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQUVWIiwiZmlsZSI6InNyYy9hcHAvZXhwZW5zZS9hZGQvYWRkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIC0ta2V5Ym9hcmQtb2Zmc2V0OiAwcHggIWltcG9ydGFudDtcbiAgICAuZm9ybV8ge1xuICAgICAgbWFyZ2luOiAwcHggMHB4O1xuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAuaXRlbXNfIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICB3aWR0aDogODQlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC5pbnB1dF97XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgICAgLmRyb3BXaWR0aF8ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiA2cHg7XG4gICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgLmRhdGVfe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5pb24tZm9vdGVye1xuICAgIC5kaXZfYnRuIHtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gICAgICAgIC5idG5fIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/expense/add/add.page.ts":
/*!*****************************************!*\
  !*** ./src/app/expense/add/add.page.ts ***!
  \*****************************************/
/*! exports provided: AddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPage", function() { return AddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");









let AddPage = class AddPage {
    constructor(router, navCtrl, statusBar, formBuilder, apiService, api, plt) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.api = api;
        this.plt = plt;
        this.vendor_keyword = 'name';
        this.category_keyword = 'name';
        this.exp_fb();
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            this.dropdownData(this.api.NetworkStatus);
        });
    }
    dropdownData(refresh = false, refresher) {
        this.api.presentLoading();
        this.apiService.allApi(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
            this.expense_category = res.data.expense_category;
            this.vendors = res.data.vendors;
            if (refresher) {
                refresher.target.complete();
            }
            this.api.dismissLoading();
        }, err => {
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        });
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#FFF');
    }
    goBack() {
        this.navCtrl.back();
    }
    exp_fb() {
        this.expData = this.formBuilder.group({
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tax: ['', null],
            vendor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            notes: ['', null],
        });
    }
    vendorselectEvent(event) {
        this.id = event["id"];
        this.expData.patchValue({
            name: event.name,
        });
    }
    categoryselectEvent(event) {
        this.category_id = event["id"];
        this.expData.patchValue({
            name: event.name,
        });
    }
    save() {
        for (let v in this.expData.controls) {
            this.expData.controls[v].markAsTouched();
        }
        if (this.id) {
            this.vendorId = this.id ? this.id : null;
            this.vendorName = null;
        }
        else {
            this.vendorId = null;
            this.vendorName = this.expData.value.vendor;
        }
        if (this.category_id) {
            this.categoryId = this.category_id ? this.category_id : null;
            this.categoryName = null;
        }
        else {
            this.categoryId = null;
            this.categoryName = this.expData.value.category;
        }
        if (this.expData.valid) {
            this.api.presentLoading();
            var body = {
                amount: this.expData.value.amount,
                tax: this.expData.value.tax,
                vendor: this.vendorId,
                category: this.categoryId,
                vendor_name: this.vendorName,
                category_name: this.categoryName,
                date: this.expData.value.date,
                notes: this.expData.value.notes,
                businessId: this.api.getBusinessId(),
            };
            this.api.Post("Expense/expenseAdd", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(this.api.API_TIMEOUT)).subscribe(data => {
                this.expense_process = false;
                this.api.dismissLoading();
                if (data.status == 1) {
                    this.api.presentToastWithOptions(data['message']);
                    this.router.navigate(["/expense-list"]);
                }
            }, err => {
                this.api.dismissLoading();
                this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
        }
    }
};
AddPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
AddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/expense/add/add.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add.page.scss */ "./src/app/expense/add/add.page.scss")).default]
    })
], AddPage);



/***/ })

}]);
//# sourceMappingURL=expense-add-add-module-es2015.js.map
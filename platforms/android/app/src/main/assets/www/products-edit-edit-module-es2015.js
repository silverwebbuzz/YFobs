(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-edit-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/edit/edit.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/edit/edit.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Edit Product</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"prodData\" class=\"form_\">\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Product Name\" formControlName=\"name\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"prodData.controls.name.hasError('required') && prodData.controls.name.touched\">\n      <p class=\"content\">Please Enter Product Name!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"number\" placeholder=\"Price\" formControlName=\"price\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"prodData.controls.price.hasError('required') && prodData.controls.price.touched\">\n      <p class=\"content\">Please Enter Price!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"number\" placeholder=\"HSN Code\" formControlName=\"hsncode\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"prodData.controls.hsncode.hasError('required') && prodData.controls.hsncode.touched\">\n      <p class=\"content\">Please Enter HSN Code!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Product Details\" formControlName=\"details\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"prodData.controls.details.hasError('required') && prodData.controls.details.touched\">\n      <p class=\"content\">Please Enter Product Details!</p>\n    </ion-item>\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <div class=\"div_btn\">\n    <ion-button expand=\"full\" size=\"large\" class=\"btn_ shadow_btn\" (click)=\"save()\">Save\n    </ion-button>\n  </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/products/edit/edit-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/products/edit/edit-routing.module.ts ***!
  \******************************************************/
/*! exports provided: EditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function() { return EditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.page */ "./src/app/products/edit/edit.page.ts");




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

/***/ "./src/app/products/edit/edit.module.ts":
/*!**********************************************!*\
  !*** ./src/app/products/edit/edit.module.ts ***!
  \**********************************************/
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
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-routing.module */ "./src/app/products/edit/edit-routing.module.ts");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/products/edit/edit.page.ts");







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

/***/ "./src/app/products/edit/edit.page.scss":
/*!**********************************************!*\
  !*** ./src/app/products/edit/edit.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-bottom: 16px;\n  --keyboard-offset: 0px !important;\n}\nion-content .form_ {\n  margin: 0px 0px;\n  position: relative;\n}\nion-content .form_ .items_ {\n  --background: var(--ion-color-light);\n  width: 84%;\n  border-radius: 24px;\n  margin: 0 auto;\n  --padding-start: 24px;\n  --inner-padding-end: 12px;\n  margin-top: 16px !important;\n}\nion-content .form_ .items_ .input_ {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .form_ .items_ .dropWidth_ {\n  font-size: 14px;\n  min-width: 100%;\n  --padding-start: 0px;\n  --padding-end: 6px;\n  --placeholder-opacity: 0.5;\n}\nion-footer .div_btn {\n  margin: 0px 0px 0px 0px;\n}\nion-footer .div_btn .btn_ {\n  margin: 0;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvZWRpdC9lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsaUNBQUE7QUFDSjtBQUFJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBRU47QUFETTtFQUNFLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQUdSO0FBRlE7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7QUFJVjtBQUZRO0VBQ0ksZUFBQTtFQUNGLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFJVjtBQUVJO0VBQ0ksdUJBQUE7QUFDUjtBQUFRO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUFFViIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2VkaXQvZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAtLWtleWJvYXJkLW9mZnNldDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgLmZvcm1fIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweDtcbiAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgLml0ZW1zXyB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgd2lkdGg6IDg0JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAuaW5wdXRfe1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB9XG4gICAgICAgIC5kcm9wV2lkdGhfIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogNnB4O1xuICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5pb24tZm9vdGVye1xuICAgIC5kaXZfYnRuIHtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gICAgICAgIC5idG5fIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/products/edit/edit.page.ts":
/*!********************************************!*\
  !*** ./src/app/products/edit/edit.page.ts ***!
  \********************************************/
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
    constructor(router, navCtrl, statusBar, formBuilder, api, route, plt, apiService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.api = api;
        this.route = route;
        this.plt = plt;
        this.apiService = apiService;
        this.prod_fb();
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            this.loadData(this.api.NetworkStatus);
        });
        this.reqData = this.route.snapshot.queryParams;
    }
    loadData(refresh = false, refresher) {
        if (!refresher) {
            this.api.presentLoading();
        }
        this.apiService.getProduct(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
            if (res.data) {
                this.products = res.data;
                let productdata = this.products.filter((x) => x.id == this.reqData.id);
                let productdetails = productdata[0];
                this.prodData.patchValue({
                    name: productdetails.name,
                    price: productdetails.price,
                    hsncode: productdetails.hsncode,
                    details: productdetails.details,
                });
            }
            this.api.dismissLoading();
            if (refresher) {
                refresher.target.complete();
            }
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
    prod_fb() {
        this.prodData = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            hsncode: ['', null],
            details: ['', null],
        });
    }
    save() {
        for (let v in this.prodData.controls) {
            this.prodData.controls[v].markAsTouched();
        }
        if (this.prodData.valid) {
            this.api.presentLoading();
            var body = {
                name: this.prodData.value.name,
                price: this.prodData.value.price,
                hsncode: this.prodData.value.hsncode,
                details: this.prodData.value.details,
                businessId: this.api.getBusinessId(),
                id: this.reqData.id
            };
            this.api.Post("product/add", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(this.api.API_TIMEOUT)).subscribe(data => {
                this.product_process = false;
                this.api.dismissLoading();
                if (data.status == 1) {
                    this.api.presentToastWithOptions(data['message']);
                    this.router.navigate(["/products-list"]);
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
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }
];
EditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/edit/edit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit.page.scss */ "./src/app/products/edit/edit.page.scss")).default]
    })
], EditPage);



/***/ })

}]);
//# sourceMappingURL=products-edit-edit-module-es2015.js.map
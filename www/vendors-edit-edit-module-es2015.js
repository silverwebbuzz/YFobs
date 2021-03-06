(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors-edit-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vendors/edit/edit.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vendors/edit/edit.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"modalClose()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Edit Vendor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"VendorsData\" class=\"form_\">\n\n    <div class=\"div_import\">\n      <ion-button expand=\"full\" shape=\"round\" fill=\"outline\" class=\"btn_import\" (click)=\"fnContactphone()\">Import From\n        Contacts\n      </ion-button>\n    </div>\n\n    <!-- <ng-autocomplete [data]=\"vendors\" [searchKeyword]=\"keyword\" placeHolder=\"Vendor Name\"\n      (selected)='selectEvent($event)' [itemTemplate]=\"itemTemplate\" [notFoundTemplate]=\"notFoundTemplate\"\n      formControlName=\"name\">\n    </ng-autocomplete>\n\n    <ng-template #itemTemplate let-item>\n      <div class=\"div_data\">\n        <a [innerHTML]=\"item.name\" class=\"name_data\"></a>\n        <a [innerHTML]=\"item.phone\" class=\"phn_data\"></a>\n      </div>\n    </ng-template> -->\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Vendor Name\" formControlName=\"name\" class=\"input_\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"VendorsData.controls.name.hasError('required') && VendorsData.controls.name.touched\">\n      <p class=\"content\">Please Enter Vendor Name!</p>\n    </ion-item> \n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"number\" placeholder=\"Phone\" formControlName=\"phone\" class=\"input_\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"VendorsData.controls.phone.hasError('required') && VendorsData.controls.phone.touched\">\n      <p class=\"content\">Please Enter Phone!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"!VendorsData.get('phone').errors?.pattern && VendorsData.get('phone').errors?.minlength  &&   VendorsData.get('phone').touched\">\n      <p class=\"content\">Please Enter Valid Phone number!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"VendorsData.controls.email.hasError('required') && VendorsData.controls.email.touched\">\n      <p class=\"content\">Please Enter Email!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"VendorsData.controls.email.hasError('pattern') && VendorsData.controls.email.touched\">\n      <p class=\"content\">Please Enter Valid Email!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"items_ shadow_input\">\n      <ion-input type=\"text\" placeholder=\"Address\" formControlName=\"address\" class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"VendorsData.controls.address.hasError('required') && VendorsData.controls.address.touched\">\n      <p class=\"content\">Please Enter Address!</p>\n    </ion-item>\n\n    <div class=\"div_btn\">\n      <ion-button expand=\"full\" size=\"large\" shape=\"round\" class=\"btn_ shadow_btn\" (click)=\"fnAddVendor()\">Save\n      </ion-button>\n    </div>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/vendors/edit/edit-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/vendors/edit/edit-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function() { return EditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.page */ "./src/app/vendors/edit/edit.page.ts");




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

/***/ "./src/app/vendors/edit/edit.module.ts":
/*!*********************************************!*\
  !*** ./src/app/vendors/edit/edit.module.ts ***!
  \*********************************************/
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
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-routing.module */ "./src/app/vendors/edit/edit-routing.module.ts");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/vendors/edit/edit.page.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");








let EditPageModule = class EditPageModule {
};
EditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"],
            _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"]
        ],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
    })
], EditPageModule);



/***/ }),

/***/ "./src/app/vendors/edit/edit.page.scss":
/*!*********************************************!*\
  !*** ./src/app/vendors/edit/edit.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --keyboard-offset: 0px !important;\n}\nion-content .form_ {\n  margin: 32px 0px;\n  position: relative;\n}\nion-content .form_ .div_import .btn_import {\n  width: 84%;\n  margin: 0 auto;\n  text-transform: none;\n  font-weight: normal;\n  --box-shadow: 0 4px 4px var(--ion-color-light-shade);\n}\nion-content .form_ .items_ {\n  --background: var(--ion-color-light);\n  width: 84%;\n  border-radius: 24px;\n  margin: 0 auto;\n  --padding-start: 24px;\n  --inner-padding-end: 12px;\n  margin-top: 16px !important;\n}\nion-content .form_ .items_ .input_ {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .form_ .items_ .dropWidth_ {\n  min-width: 100%;\n  --padding-start: 0px;\n  --padding-end: 6px;\n  --placeholder-opacity: 0.5;\n}\nion-content .form_ .div_btn {\n  margin: 32px 0px;\n}\nion-content .form_ .div_btn .btn_ {\n  width: 84%;\n  margin: 0 auto;\n  font-size: 14px;\n}\nion-content .div_list {\n  width: 75%;\n  margin: 0 auto;\n  position: absolute;\n  height: auto !important;\n  max-height: 200px !important;\n  visibility: visible;\n  overflow: visible;\n  z-index: 999;\n  box-shadow: 0 2px 4px #bbb;\n  text-align: center;\n  left: 0;\n  right: 0;\n  overflow: scroll;\n  border-radius: 8px;\n  background: white;\n  margin-top: 4px !important;\n}\nion-content .div_list .item_list {\n  --min-height: 40px;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\n.items_.item-has-focus + .div_list, .items_.ion-invalid + .div_list {\n  height: auto !important;\n  max-height: 200px !important;\n  z-index: 999;\n  box-shadow: 0 2px 4px #bbb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9ycy9lZGl0L2VkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7QUFDSjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUVOO0FBQVE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvREFBQTtBQUVWO0FBQ007RUFDRSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFDUjtBQUFRO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FBRVY7QUFBUTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFFVjtBQUNNO0VBQ0UsZ0JBQUE7QUFDUjtBQUFRO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRVY7QUFFTTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUFSO0FBQ1E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUNWO0FBSUU7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3JzL2VkaXQvZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1rZXlib2FyZC1vZmZzZXQ6IDBweCAhaW1wb3J0YW50O1xuICAgIC5mb3JtXyB7XG4gICAgICBtYXJnaW46IDMycHggMHB4O1xuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAuZGl2X2ltcG9ydCB7XG4gICAgICAgIC5idG5faW1wb3J0IHtcbiAgICAgICAgICB3aWR0aDogODQlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgLS1ib3gtc2hhZG93OiAwIDRweCA0cHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLml0ZW1zXyB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgd2lkdGg6IDg0JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAuaW5wdXRfe1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB9XG4gICAgICAgIC5kcm9wV2lkdGhfIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogNnB4O1xuICAgICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZGl2X2J0biB7XG4gICAgICAgIG1hcmdpbjogMzJweCAwcHg7XG4gICAgICAgIC5idG5fIHtcbiAgICAgICAgICB3aWR0aDogODQlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAgIC5kaXZfbGlzdHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjYmJiO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcbiAgICAgICAgLml0ZW1fbGlzdHsgXG4gICAgICAgICAgLS1taW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgXG4gIC5pdGVtc18uaXRlbS1oYXMtZm9jdXMgKyAuZGl2X2xpc3QsIC5pdGVtc18uaW9uLWludmFsaWQgKyAuZGl2X2xpc3R7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4ICNiYmI7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/vendors/edit/edit.page.ts":
/*!*******************************************!*\
  !*** ./src/app/vendors/edit/edit.page.ts ***!
  \*******************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_Services_number_only_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Services/number-only.service */ "./src/Services/number-only.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











let EditPage = class EditPage {
    constructor(numberonly, formBuilder, statusBar, modelctrl, navCtrl, apiService, plt, api, contacts, route, router) {
        this.numberonly = numberonly;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.modelctrl = modelctrl;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.plt = plt;
        this.api = api;
        this.contacts = contacts;
        this.route = route;
        this.router = router;
        this.keyword = 'name';
        this.vendors_fb();
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            this.loadData(this.api.NetworkStatus);
        });
        this.reqData = this.route.snapshot.queryParams;
    }
    loadData(refresh = false, refresher) {
        this.apiService.getVendor(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
            this.vendors = res.data ? res.data : [];
            if (this.reqData.id) {
                let vendordata = this.vendors.filter((x) => x.id == this.reqData.id);
                let vendordetails = vendordata[0];
                this.VendorsData.patchValue({
                    name: vendordetails.name,
                    phone: vendordetails.phone,
                    address: vendordetails.address,
                    email: vendordetails.email,
                });
                this.api.dismissLoading();
            }
        });
    }
    selectEvent(event) {
        this.vendorselect = event;
        this.id = event.id;
        this.VendorsData.patchValue({
            name: event.name,
            phone: event.phone,
            address: event.address ? event.address : "",
            email: event.email ? event.email : "",
        });
    }
    modalClose() {
        this.navCtrl.back();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#FFFFFF');
    }
    vendors_fb() {
        this.VendorsData = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    fnAddVendor() {
        for (let v in this.VendorsData.controls) {
            this.VendorsData.controls[v].markAsTouched();
        }
        if (this.VendorsData.valid) {
            this.api.presentLoading();
            var body = {
                name: this.VendorsData.value.name.name ? this.VendorsData.value.name.name : this.VendorsData.value.name,
                phone: this.VendorsData.value.phone,
                email: this.VendorsData.value.email,
                address: this.VendorsData.value.address,
                businessId: this.api.getBusinessId(),
                id: this.reqData.id,
            };
            this.api.Post("Vendor/VendorAdd", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["timeout"])(this.api.API_TIMEOUT)).subscribe(data => {
                this.api.dismissLoading();
                if (data.status == 1) {
                    this.api.presentToastWithOptions(data['message']);
                    this.router.navigate(["/vendors-list"]);
                }
            }, err => {
                this.api.dismissLoading();
                this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
        }
    }
    fnContactphone() {
        if (this.plt.is('cordova')) {
            this.contacts.pickContact().then((contact) => {
                this.contactdata = [];
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
                    this.VendorsData.patchValue({
                        name: body.name,
                        phone: body.phone,
                        email: body.email,
                        address: ''
                    });
                }
            });
        }
    }
};
EditPage.ctorParameters = () => [
    { type: src_Services_number_only_service__WEBPACK_IMPORTED_MODULE_3__["NumberOnlyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_8__["Contacts"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
];
EditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vendors/edit/edit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit.page.scss */ "./src/app/vendors/edit/edit.page.scss")).default]
    })
], EditPage);



/***/ })

}]);
//# sourceMappingURL=vendors-edit-edit-module-es2015.js.map
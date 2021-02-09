(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gstcalculation-gstcalculation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gstcalculation/gstcalculation.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gstcalculation/gstcalculation.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>GST Calculate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"div_top\">\n    <ion-row class=\"row_date\">\n      <ion-col size=\"6\" class=\"col_date right_\">\n        <ion-item no-padding lines=\"none\" class=\"item_drop\">\n          <ion-input type=\"number\" placeholder=\"Amount\" class=\"input_\" (ionChange)=\"loadAmount($event,'amount')\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_date left_\">\n        <ion-item no-padding lines=\"none\" class=\"item_drop\">\n          <ion-select interface=\"action-sheet\" placeholder=\"Tax Value\" class=\"dropWidth_\" mode=\"md\"\n            (ionChange)=\"loadAmount($event,'tax')\">\n            <ion-select-option value=\"0\">0%</ion-select-option>\n            <ion-select-option value=\"5\">5%</ion-select-option>\n            <ion-select-option value=\"12\">12%</ion-select-option>\n            <ion-select-option value=\"18\">18%</ion-select-option>\n            <ion-select-option value=\"28\">28%</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"div_tax\">\n    <ion-label class=\"lbl_tax\">Exclusive Tax</ion-label>\n    <div class=\"hr_\"></div>\n    <ion-row class=\"row_tax\">\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_L\">Original Amount :</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_R\">{{orignal_amount}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row_tax\">\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_L\">Tax :</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_R\">{{tax ? tax : 0}}%</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row_tax\">\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_L\">CGST Amount :</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_R\">{{gst / 2 ? gst / 2 : ''}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row_tax\">\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_L\">SGST Amount :</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_R\">{{gst / 2 ? gst / 2 : ''}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row_tax\">\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_L\">IGST Amount :</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_R\">{{gst ? gst : ''}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row_tax\">\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_L\">Total Amount :</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_R\">{{total_amount}}</ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"div_tax\">\n    <ion-label class=\"lbl_tax\">Inclusive Tax</ion-label>\n    <div class=\"hr_\"></div>\n    <ion-row class=\"row_tax\">\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_L\">Original Amount :</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_R\">{{invoice_orignal_amount}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row_tax\">\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_L\">Tax :</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_R\">{{tax ? tax : 0}}%</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row_tax\">\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_L\">CGST Amount :</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_R\">{{gst / 2 ? gst / 2 : ''}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row_tax\">\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_L\">SGST Amount :</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_R\">{{gst / 2 ? gst / 2 : ''}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row_tax\">\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_L\">IGST Amount :</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_R\">{{gst ? gst : ''}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row_tax\">\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_L\">Total Amount :</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" class=\"col_tax\">\n        <ion-label class=\"lbl_R\">{{orignal_amount}}</ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/gstcalculation/gstcalculation-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/gstcalculation/gstcalculation-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: GstcalculationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstcalculationPageRoutingModule", function() { return GstcalculationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gstcalculation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gstcalculation.page */ "./src/app/gstcalculation/gstcalculation.page.ts");




const routes = [
    {
        path: '',
        component: _gstcalculation_page__WEBPACK_IMPORTED_MODULE_3__["GstcalculationPage"]
    }
];
let GstcalculationPageRoutingModule = class GstcalculationPageRoutingModule {
};
GstcalculationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GstcalculationPageRoutingModule);



/***/ }),

/***/ "./src/app/gstcalculation/gstcalculation.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/gstcalculation/gstcalculation.module.ts ***!
  \*********************************************************/
/*! exports provided: GstcalculationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstcalculationPageModule", function() { return GstcalculationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _gstcalculation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gstcalculation-routing.module */ "./src/app/gstcalculation/gstcalculation-routing.module.ts");
/* harmony import */ var _gstcalculation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gstcalculation.page */ "./src/app/gstcalculation/gstcalculation.page.ts");







let GstcalculationPageModule = class GstcalculationPageModule {
};
GstcalculationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gstcalculation_routing_module__WEBPACK_IMPORTED_MODULE_5__["GstcalculationPageRoutingModule"]
        ],
        declarations: [_gstcalculation_page__WEBPACK_IMPORTED_MODULE_6__["GstcalculationPage"]]
    })
], GstcalculationPageModule);



/***/ }),

/***/ "./src/app/gstcalculation/gstcalculation.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/gstcalculation/gstcalculation.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div_top {\n  padding: 0;\n}\n.div_top .row_date .col_date {\n  padding: 0px;\n}\n.div_top .row_date .col_date .item_drop {\n  --min-height: 34px;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  border-radius: 6px;\n  --background: var(--ion-color-light);\n  box-shadow: 0 4px 4px var(--ion-color-light-shade);\n}\n.div_top .row_date .col_date .item_drop .input_ {\n  --padding-start: 12px;\n  --padding-end: 12px;\n  background: var(--ion-color-light);\n  font-size: 14px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  border-radius: 6px;\n  box-shadow: 0 4px 4px var(--ion-color-light-shade);\n  color: var(--ion-color-dark);\n}\n.div_top .row_date .col_date .item_drop .dropWidth_ {\n  color: var(--ion-color-dark);\n  min-width: 100%;\n  height: 40px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  --placeholder-opacity: 0.5;\n  font-size: 14px;\n}\n.div_tax {\n  margin: 8px;\n  padding: 8px;\n  box-shadow: 0 0px 4px var(--ion-color-light-shade);\n}\n.div_tax .lbl_tax {\n  display: block;\n  color: var(--ion-color-primary);\n  font-size: 14px;\n  font-weight: bold;\n  padding: 4px 0px;\n}\n.div_tax .hr_ {\n  height: 1px;\n  background: var(--ion-color-light-shade);\n  width: 100%;\n  margin: 4px 0px;\n}\n.div_tax .row_tax .col_tax {\n  padding: 0px;\n}\n.div_tax .row_tax .col_tax .lbl_L {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  padding: 4px 0px;\n}\n.div_tax .row_tax .col_tax .lbl_R {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-dark-tint);\n  padding: 4px 0px;\n  font-weight: bold;\n}\n.right_ {\n  padding: 10px 6px 0px 10px !important;\n}\n.left_ {\n  padding: 10px 10px 0px 6px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3N0Y2FsY3VsYXRpb24vZ3N0Y2FsY3VsYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGO0FBR0k7RUFDRSxZQUFBO0FBRE47QUFFTTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrREFBQTtBQUFSO0FBQ1E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSw0QkFBQTtBQUNWO0FBQ1E7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFDVjtBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtBQUZGO0FBR0U7RUFDRSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBR0U7RUFDRSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUk7RUFDRSxZQUFBO0FBRk47QUFHTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQURSO0FBR007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQURSO0FBTUE7RUFDRSxxQ0FBQTtBQUhGO0FBS0E7RUFDRSxxQ0FBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvZ3N0Y2FsY3VsYXRpb24vZ3N0Y2FsY3VsYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdl90b3Age1xuICBwYWRkaW5nOiAwO1xuICAucm93X2RhdGUge1xuICAgIC8vIHdpZHRoOiA5NSU7XG4gICAgLy8gbWFyZ2luOiAwIGF1dG87XG4gICAgLmNvbF9kYXRlIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIC5pdGVtX2Ryb3Age1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IDM0cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNHB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgIC5pbnB1dF8ge1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNHB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgfVxuICAgICAgICAuZHJvcFdpZHRoXyB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5kaXZfdGF4IHtcbiAgbWFyZ2luOiA4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm94LXNoYWRvdzogMCAwcHggNHB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIC5sYmxfdGF4IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xuICB9XG4gIC5ocl8ge1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiA0cHggMHB4O1xuICB9XG4gIC5yb3dfdGF4IHtcbiAgICAuY29sX3RheCB7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAubGJsX0wge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICBwYWRkaW5nOiA0cHggMHB4O1xuICAgICAgfVxuICAgICAgLmxibF9SIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgICBwYWRkaW5nOiA0cHggMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5yaWdodF8ge1xuICBwYWRkaW5nOiAxMHB4IDZweCAwcHggMTBweCAhaW1wb3J0YW50O1xufVxuLmxlZnRfIHtcbiAgcGFkZGluZzogMTBweCAxMHB4IDBweCA2cHggIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/gstcalculation/gstcalculation.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/gstcalculation/gstcalculation.page.ts ***!
  \*******************************************************/
/*! exports provided: GstcalculationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstcalculationPage", function() { return GstcalculationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let GstcalculationPage = class GstcalculationPage {
    constructor() { }
    ngOnInit() {
    }
    loadAmount(event, value) {
        if (value == 'amount') {
            this.orignal_amount = event.detail.value;
        }
        if (value == 'tax') {
            this.tax = event.detail.value;
        }
        this.gst = Number((this.orignal_amount) * (this.tax) / 100);
        this.total_amount = this.gst ? (Number(this.orignal_amount) + this.gst).toFixed(2) : this.orignal_amount;
        this.invoice_orignal_amount = this.gst ? (Number(this.orignal_amount) - this.gst).toFixed(2) : this.orignal_amount;
    }
};
GstcalculationPage.ctorParameters = () => [];
GstcalculationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gstcalculation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gstcalculation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gstcalculation/gstcalculation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gstcalculation.page.scss */ "./src/app/gstcalculation/gstcalculation.page.scss")).default]
    })
], GstcalculationPage);



/***/ })

}]);
//# sourceMappingURL=gstcalculation-gstcalculation-module-es2015.js.map
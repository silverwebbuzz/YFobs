(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-preview-preview-invoice-module"],{

/***/ "./src/app/invoice/preview/preview-invoice-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/invoice/preview/preview-invoice-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PreviewInvoicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewInvoicePageRoutingModule", function() { return PreviewInvoicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _preview_invoice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview-invoice.page */ "./src/app/invoice/preview/preview-invoice.page.ts");




const routes = [
    {
        path: '',
        component: _preview_invoice_page__WEBPACK_IMPORTED_MODULE_3__["PreviewInvoicePage"]
    }
];
let PreviewInvoicePageRoutingModule = class PreviewInvoicePageRoutingModule {
};
PreviewInvoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PreviewInvoicePageRoutingModule);



/***/ }),

/***/ "./src/app/invoice/preview/preview-invoice.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/invoice/preview/preview-invoice.module.ts ***!
  \***********************************************************/
/*! exports provided: PreviewInvoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewInvoicePageModule", function() { return PreviewInvoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _preview_invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preview-invoice-routing.module */ "./src/app/invoice/preview/preview-invoice-routing.module.ts");
/* harmony import */ var _preview_invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview-invoice.page */ "./src/app/invoice/preview/preview-invoice.page.ts");
/* harmony import */ var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pinch-zoom */ "./node_modules/ngx-pinch-zoom/__ivy_ngcc__/fesm2015/ngx-pinch-zoom.js");








let PreviewInvoicePageModule = class PreviewInvoicePageModule {
};
PreviewInvoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__["PinchZoomModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _preview_invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreviewInvoicePageRoutingModule"]
        ],
        declarations: [_preview_invoice_page__WEBPACK_IMPORTED_MODULE_6__["PreviewInvoicePage"]]
    })
], PreviewInvoicePageModule);



/***/ })

}]);
//# sourceMappingURL=invoice-preview-preview-invoice-module-es2015.js.map
(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-view-invoice-view-module"], {
    /***/
    "./src/app/invoice/view/invoice-view-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/invoice/view/invoice-view-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: InvoiceViewPageRoutingModule */

    /***/
    function srcAppInvoiceViewInvoiceViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceViewPageRoutingModule", function () {
        return InvoiceViewPageRoutingModule;
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


      var _invoice_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./invoice-view.page */
      "./src/app/invoice/view/invoice-view.page.ts");

      var routes = [{
        path: '',
        component: _invoice_view_page__WEBPACK_IMPORTED_MODULE_3__["InvoiceViewPage"]
      }];

      var InvoiceViewPageRoutingModule = function InvoiceViewPageRoutingModule() {
        _classCallCheck(this, InvoiceViewPageRoutingModule);
      };

      InvoiceViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InvoiceViewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/invoice/view/invoice-view.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/invoice/view/invoice-view.module.ts ***!
      \*****************************************************/

    /*! exports provided: InvoiceViewPageModule */

    /***/
    function srcAppInvoiceViewInvoiceViewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceViewPageModule", function () {
        return InvoiceViewPageModule;
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


      var _invoice_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./invoice-view-routing.module */
      "./src/app/invoice/view/invoice-view-routing.module.ts");
      /* harmony import */


      var _view_invoice_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../view/invoice-view.page */
      "./src/app/invoice/view/invoice-view.page.ts");

      var InvoiceViewPageModule = function InvoiceViewPageModule() {
        _classCallCheck(this, InvoiceViewPageModule);
      };

      InvoiceViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _invoice_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvoiceViewPageRoutingModule"]],
        declarations: [_view_invoice_view_page__WEBPACK_IMPORTED_MODULE_6__["InvoiceViewPage"]]
      })], InvoiceViewPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=invoice-view-invoice-view-module-es5.js.map
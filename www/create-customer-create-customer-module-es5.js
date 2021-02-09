(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-customer-create-customer-module"], {
    /***/
    "./src/app/create-customer/create-customer-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/create-customer/create-customer-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CreateCustomerPageRoutingModule */

    /***/
    function srcAppCreateCustomerCreateCustomerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateCustomerPageRoutingModule", function () {
        return CreateCustomerPageRoutingModule;
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


      var _create_customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-customer.page */
      "./src/app/create-customer/create-customer.page.ts");

      var routes = [{
        path: '',
        component: _create_customer_page__WEBPACK_IMPORTED_MODULE_3__["CreateCustomerPage"]
      }];

      var CreateCustomerPageRoutingModule = function CreateCustomerPageRoutingModule() {
        _classCallCheck(this, CreateCustomerPageRoutingModule);
      };

      CreateCustomerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CreateCustomerPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/create-customer/create-customer.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/create-customer/create-customer.module.ts ***!
      \***********************************************************/

    /*! exports provided: CreateCustomerPageModule */

    /***/
    function srcAppCreateCustomerCreateCustomerModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateCustomerPageModule", function () {
        return CreateCustomerPageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _create_customer_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./create-customer-routing.module */
      "./src/app/create-customer/create-customer-routing.module.ts");
      /* harmony import */


      var ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-angular-autocomplete */
      "./node_modules/ngx-angular-autocomplete/__ivy_ngcc__/fesm2015/ngx-angular-autocomplete.js");

      var CreateCustomerPageModule = function CreateCustomerPageModule() {
        _classCallCheck(this, CreateCustomerPageModule);
      };

      CreateCustomerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_5__["NgxAutocompleteModule"], _create_customer_routing_module__WEBPACK_IMPORTED_MODULE_4__["CreateCustomerPageRoutingModule"]],
        declarations: []
      })], CreateCustomerPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=create-customer-create-customer-module-es5.js.map
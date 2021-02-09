(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["multiple-items-multiple-items-module"], {
    /***/
    "./src/app/create-item/multiple-items/multiple-items-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/create-item/multiple-items/multiple-items-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: MultipleItemsPageRoutingModule */

    /***/
    function srcAppCreateItemMultipleItemsMultipleItemsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultipleItemsPageRoutingModule", function () {
        return MultipleItemsPageRoutingModule;
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


      var _multiple_items_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./multiple-items.page */
      "./src/app/create-item/multiple-items/multiple-items.page.ts");

      var routes = [{
        path: '',
        component: _multiple_items_page__WEBPACK_IMPORTED_MODULE_3__["MultipleItemsPage"]
      }];

      var MultipleItemsPageRoutingModule = function MultipleItemsPageRoutingModule() {
        _classCallCheck(this, MultipleItemsPageRoutingModule);
      };

      MultipleItemsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MultipleItemsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/create-item/multiple-items/multiple-items.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/create-item/multiple-items/multiple-items.module.ts ***!
      \*********************************************************************/

    /*! exports provided: MultipleItemsPageModule */

    /***/
    function srcAppCreateItemMultipleItemsMultipleItemsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultipleItemsPageModule", function () {
        return MultipleItemsPageModule;
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


      var _multiple_items_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./multiple-items-routing.module */
      "./src/app/create-item/multiple-items/multiple-items-routing.module.ts");
      /* harmony import */


      var _multiple_items_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./multiple-items.page */
      "./src/app/create-item/multiple-items/multiple-items.page.ts");

      var MultipleItemsPageModule = function MultipleItemsPageModule() {
        _classCallCheck(this, MultipleItemsPageModule);
      };

      MultipleItemsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _multiple_items_routing_module__WEBPACK_IMPORTED_MODULE_5__["MultipleItemsPageRoutingModule"]],
        declarations: [_multiple_items_page__WEBPACK_IMPORTED_MODULE_6__["MultipleItemsPage"]]
      })], MultipleItemsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=multiple-items-multiple-items-module-es5.js.map
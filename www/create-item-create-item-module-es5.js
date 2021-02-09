(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-item-create-item-module"], {
    /***/
    "./src/app/create-item/create-item-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/create-item/create-item-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CreateItemPageRoutingModule */

    /***/
    function srcAppCreateItemCreateItemRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateItemPageRoutingModule", function () {
        return CreateItemPageRoutingModule;
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


      var _create_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-item.page */
      "./src/app/create-item/create-item.page.ts");

      var routes = [{
        path: '',
        component: _create_item_page__WEBPACK_IMPORTED_MODULE_3__["CreateItemPage"]
      }, {
        path: 'multiple-items',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | multiple-items-multiple-items-module */
          [__webpack_require__.e("default~invoice-add-create-invoice-module~invoice-edit-edit-invoice-module~multiple-items-multiple-i~fa0ad8a1"), __webpack_require__.e("multiple-items-multiple-items-module")]).then(__webpack_require__.bind(null,
          /*! ./multiple-items/multiple-items.module */
          "./src/app/create-item/multiple-items/multiple-items.module.ts")).then(function (m) {
            return m.MultipleItemsPageModule;
          });
        }
      }];

      var CreateItemPageRoutingModule = function CreateItemPageRoutingModule() {
        _classCallCheck(this, CreateItemPageRoutingModule);
      };

      CreateItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CreateItemPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/create-item/create-item.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/create-item/create-item.module.ts ***!
      \***************************************************/

    /*! exports provided: CreateItemPageModule */

    /***/
    function srcAppCreateItemCreateItemModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateItemPageModule", function () {
        return CreateItemPageModule;
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


      var _create_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./create-item-routing.module */
      "./src/app/create-item/create-item-routing.module.ts");

      var CreateItemPageModule = function CreateItemPageModule() {
        _classCallCheck(this, CreateItemPageModule);
      };

      CreateItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_item_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateItemPageRoutingModule"]],
        declarations: []
      })], CreateItemPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=create-item-create-item-module-es5.js.map
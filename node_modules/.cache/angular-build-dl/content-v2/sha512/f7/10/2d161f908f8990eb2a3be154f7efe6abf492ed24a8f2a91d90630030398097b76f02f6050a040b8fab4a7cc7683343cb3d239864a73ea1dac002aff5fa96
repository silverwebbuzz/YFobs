(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expense-expense-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/expense/expense.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/expense/expense.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppReportsExpenseExpensePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Expense</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"div_scroll\" *ngIf=\"expenseReports?.length > 0\">\n    <table>\n      <div class=\"div_heads\">\n        <tr>\n          <th class=\"lbl_head\">#</th>\n          <th class=\"lbl_head\">Vendors</th>\n          <th class=\"lbl_head\">Tax</th>\n          <th class=\"lbl_head\">Amount</th>\n          <th class=\"lbl_head\">Net Amount</th>\n          <th class=\"lbl_head\">Date</th>\n        </tr>\n        <ng-container *ngFor=\"let report of expenseReports; let r = index\">\n          <ng-container>\n            <tr>\n              <ng-container>\n                <td class=\"lbl_entry\">{{r + 1}}</td>\n                <td class=\"lbl_entry\">{{report.vendor_name}}</td>\n                <td class=\"lbl_entry\">{{report.tax}}<span *ngIf=\"tax\">%</span></td>\n                <td class=\"lbl_entry\">{{report.amount | number:'2.2'}}</td>\n                <td class=\"lbl_entry\">{{report.net_amount | number:'2.2'}}</td>\n                <td class=\"lbl_entry\">{{report.date}}</td>\n              </ng-container>\n            </tr>\n          </ng-container>\n          \n        </ng-container>\n        <ng-container>\n          <tr>\n            <td class=\"lbl_gross\"></td>\n            <th class=\"lbl_gross\"><strong></strong></th>\n            <td class=\"lbl_gross\">{{tax}}<span *ngIf=\"tax\">%</span></td>\n            <td class=\"lbl_gross\">{{amount | number:'2.2'}}</td>\n            <td class=\"lbl_gross\">{{net_amount | number:'2.2'}}</td>\n            <td class=\"lbl_gross\"></td>\n          </tr>\n\n        </ng-container>\n\n        <!-- Gross Total Row -->\n        <!-- <ng-container *ngIf=\"grossTotal\">\n          <tr>\n            <td class=\"lbl_gross\" colspan=\"7\"></td>\n            <th class=\"lbl_gross\"><strong>Gross Total</strong></th>\n            <td class=\"lbl_gross\">{{grossTotal.grossAmount}}</td>\n            <td class=\"lbl_gross\">{{grossTotal.grossAmount}}</td>\n            <td class=\"lbl_gross\">-</td>\n            <td class=\"lbl_gross\">{{grossTotal.gross_sgst_price}}</td>\n            <td class=\"lbl_gross\">-</td>\n            <td class=\"lbl_gross\">{{grossTotal.gross_cgst_price}}</td>\n            <td class=\"lbl_gross\">-</td>\n            <td class=\"lbl_gross\">{{grossTotal.gross_igst_price}}</td>\n          </tr>\n        </ng-container> -->\n      </div>\n    </table>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/reports/expense/expense-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/reports/expense/expense-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ExpensePageRoutingModule */

    /***/
    function srcAppReportsExpenseExpenseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpensePageRoutingModule", function () {
        return ExpensePageRoutingModule;
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


      var _expense_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./expense.page */
      "./src/app/reports/expense/expense.page.ts");

      var routes = [{
        path: '',
        component: _expense_page__WEBPACK_IMPORTED_MODULE_3__["ExpensePage"]
      }];

      var ExpensePageRoutingModule = function ExpensePageRoutingModule() {
        _classCallCheck(this, ExpensePageRoutingModule);
      };

      ExpensePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExpensePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/reports/expense/expense.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/reports/expense/expense.module.ts ***!
      \***************************************************/

    /*! exports provided: ExpensePageModule */

    /***/
    function srcAppReportsExpenseExpenseModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpensePageModule", function () {
        return ExpensePageModule;
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


      var _expense_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./expense-routing.module */
      "./src/app/reports/expense/expense-routing.module.ts");
      /* harmony import */


      var _expense_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./expense.page */
      "./src/app/reports/expense/expense.page.ts");

      var ExpensePageModule = function ExpensePageModule() {
        _classCallCheck(this, ExpensePageModule);
      };

      ExpensePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _expense_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpensePageRoutingModule"]],
        declarations: [_expense_page__WEBPACK_IMPORTED_MODULE_6__["ExpensePage"]]
      })], ExpensePageModule);
      /***/
    },

    /***/
    "./src/app/reports/expense/expense.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/reports/expense/expense.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppReportsExpenseExpensePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".div_scroll {\n  overflow-x: scroll;\n  white-space: nowrap;\n}\n.div_scroll .div_heads .lbl_head {\n  font-size: 14px;\n  font-weight: bold;\n  padding: 8px 8px;\n  color: var(--ion-color-primary-contrast);\n  background: var(--ion-color-primary);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n  vertical-align: middle;\n}\n.div_scroll .div_heads .lbl_entry {\n  font-size: 14px;\n  padding: 8px 8px;\n  color: var(--ion-color-dark);\n  background: var(--ion-color-light-shade);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n}\n.div_scroll .div_heads .lbl_total {\n  font-size: 14px;\n  padding: 8px 8px;\n  color: var(--ion-color-dark);\n  background: var(--ion-color-secondary);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n}\n.div_scroll .div_heads .lbl_gross {\n  font-size: 14px;\n  font-weight: bold;\n  padding: 8px 8px;\n  color: var(--ion-color-primary-contrast);\n  background: var(--ion-color-primary);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9leHBlbnNlL2V4cGVuc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxREFBQTtFQUNBLHNCQUFBO0FBQ1I7QUFDTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0NBQUE7RUFDQSxxREFBQTtBQUNSO0FBQ007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EscURBQUE7QUFDUjtBQUNNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EscURBQUE7QUFDUiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvZXhwZW5zZS9leHBlbnNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZfc2Nyb2xsIHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAuZGl2X2hlYWRzIHtcbiAgICAgIC5sYmxfaGVhZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgICAubGJsX2VudHJ5IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgIH1cbiAgICAgIC5sYmxfdG90YWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgIH1cbiAgICAgIC5sYmxfZ3Jvc3N7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/reports/expense/expense.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/reports/expense/expense.page.ts ***!
      \*************************************************/

    /*! exports provided: ExpensePage */

    /***/
    function srcAppReportsExpenseExpensePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpensePage", function () {
        return ExpensePage;
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


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/global/common_service */
      "./src/app/global/common_service.ts");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/api.service */
      "./src/app/services/api.service.ts");

      var ExpensePage = /*#__PURE__*/function () {
        function ExpensePage(navCtrl, statusBar, api, apiService, plt, route) {
          _classCallCheck(this, ExpensePage);

          this.navCtrl = navCtrl;
          this.statusBar = statusBar;
          this.api = api;
          this.apiService = apiService;
          this.plt = plt;
          this.route = route;
        }

        _createClass(ExpensePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loadData",
          value: function loadData() {
            var _this = this;

            var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var refresher = arguments.length > 1 ? arguments[1] : undefined;
            this.api.presentLoading();
            this.apiService.getExpenseReports(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(this.api.API_TIMEOUT)).subscribe(function (res) {
              _this.expenseReports = res.data.reports;
              _this.amount = _this.expenseReports.reduce(function (sum, item) {
                return sum + Number(item.amount);
              }, 0);
              _this.tax = _this.expenseReports.reduce(function (sum, item) {
                return sum + Number(item.tax);
              }, 0);
              _this.net_amount = _this.expenseReports.reduce(function (sum, item) {
                return sum + Number(item.net_amount);
              }, 0);

              if (refresher) {
                refresher.target.complete();
              }

              _this.api.dismissLoading();
            }, function (err) {
              _this.api.dismissLoading();

              _this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.loadData(this.api.NetworkStatus);
            this.statusBar.show();
            this.statusBar.styleDefault();
            this.statusBar.backgroundColorByHexString('#FFF');
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return ExpensePage;
      }();

      ExpensePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
        }, {
          type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      ExpensePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expense',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./expense.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/expense/expense.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./expense.page.scss */
        "./src/app/reports/expense/expense.page.scss"))["default"]]
      })], ExpensePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=expense-expense-module-es5.js.map
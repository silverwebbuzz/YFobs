(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"StartScaning()\">\n        <ion-icon name=\"qr-code-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    <app-notification-bell slot=\"end\"></app-notification-bell>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-label class=\"lbl_stick\">Invoice Status</ion-label>\n\n  <div class=\"divs_\">\n    <canvas #pieChart></canvas>\n  </div>\n\n  <ion-label class=\"lbl_stick\">GST</ion-label>\n\n  <div class=\"divs_\">\n    <canvas #barChart></canvas>\n  </div>\n\n  <div class=\"div_bills\" *ngIf=\"overdues?.length > 0\">\n    <ion-label class=\"lbl_stick\">Overdue Invoices</ion-label>\n    <div class=\"row_bills\">\n      <ion-row class=\"row_\">\n        <ion-col size=\"6\" class=\"col_cust\">\n          <ion-label class=\"lbl_cust specific_\">Customer</ion-label>\n        </ion-col>\n        <ion-col size=\"6\" class=\"col_cust\">\n          <ion-label class=\"lbl_amt specific_\">Amount</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let opt of overdues\" class=\"row_\">\n        <ion-col size=\"6\" class=\"col_cust\">\n          <ion-label class=\"lbl_cust\">{{opt.customer_name}}</ion-label>\n        </ion-col>\n        <ion-col size=\"6\" class=\"col_cust\">\n          <ion-label class=\"lbl_amt\">{{opt.grand_total | number:'1.2-2'}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <!-- Create Invoice Button -->\n  <div class=\"div_fab\">\n    <ion-button shape=\"round\" size=\"large\" class=\"btn_ shadow_btn\" (click)=\"fnCreateInvoice()\">\n      <ion-icon name=\"add-circle\" class=\"btn_icon\"></ion-icon>Create Invoice\n    </ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/dashboard/dashboard-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: DashboardPageRoutingModule */

    /***/
    function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
        return DashboardPageRoutingModule;
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


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.page */
      "./src/app/dashboard/dashboard.page.ts");

      var routes = [{
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
      }];

      var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
        _classCallCheck(this, DashboardPageRoutingModule);
      };

      DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/dashboard/dashboard.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.module.ts ***!
      \***********************************************/

    /*! exports provided: DashboardPageModule */

    /***/
    function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
        return DashboardPageModule;
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


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "./src/app/dashboard/dashboard-routing.module.ts");
      /* harmony import */


      var ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-google-charts */
      "./node_modules/ng2-google-charts/__ivy_ngcc__/fesm2015/ng2-google-charts.js");
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dashboard.page */
      "./src/app/dashboard/dashboard.page.ts");
      /* harmony import */


      var _notification_bell_notification_bell_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../notification-bell/notification-bell.page */
      "./src/app/notification-bell/notification-bell.page.ts");

      var DashboardPageModule = function DashboardPageModule() {
        _classCallCheck(this, DashboardPageModule);
      };

      DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__["Ng2GoogleChartsModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"], _notification_bell_notification_bell_page__WEBPACK_IMPORTED_MODULE_8__["NotificationBellPage"]]
      })], DashboardPageModule);
      /***/
    },

    /***/
    "./src/app/dashboard/dashboard.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 48px;\n}\nion-content .lbl_stick {\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 12px;\n  background: var(--ion-color-light);\n  color: var(--ion-color-primary);\n}\nion-content .divs_ {\n  margin: 8px;\n  padding: 8px;\n  box-shadow: 0 0px 4px var(--ion-color-light-shade);\n}\nion-content .div_bills .row_bills {\n  margin: 8px;\n  padding: 8px;\n  box-shadow: 0 0px 4px var(--ion-color-light-shade);\n}\nion-content .div_bills .row_bills .col_bills {\n  padding: 0px;\n  margin: auto;\n}\nion-content .div_bills .row_bills .col_bills .img_bills {\n  height: 32px;\n}\nion-content .div_bills .row_bills .col_bills .lbl_bill_amt {\n  display: block;\n  font-weight: bold;\n  font-size: 14px;\n  padding: 2px 0px;\n  color: var(--ion-color-dark);\n}\nion-content .div_bills .row_bills .col_bills .lbl_bill {\n  display: block;\n  font-size: 14px;\n  padding: 2px 0px;\n  text-transform: uppercase;\n  color: var(--ion-color-medium);\n}\nion-content .div_bills .row_bills .col_cust {\n  padding: 0px;\n}\nion-content .div_bills .row_bills .col_cust .lbl_cust {\n  display: block;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 4px 0px;\n  color: var(--ion-color-medium);\n}\nion-content .div_bills .row_bills .col_cust .lbl_amt {\n  display: block;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 4px 0px;\n  color: var(--ion-color-dark);\n}\nion-content .div_status {\n  margin: 12px;\n  padding: 8px;\n  box-shadow: 0 2px 4px #bbb;\n  border-radius: 8px;\n  background: var(--ion-color-secondary);\n}\nion-content .div_status .lbl_head {\n  display: block;\n  font-size: 16px;\n  padding: 4px 0px;\n  border-bottom: 0.5px solid #bbb;\n  font-weight: bold;\n}\nion-content .div_status .row_ .col_left {\n  padding: 0px;\n}\nion-content .div_status .row_ .col_left .lbl_L {\n  display: block;\n  color: var(--ion-color-dark);\n  font-size: 14px;\n  padding: 4px 0px;\n  font-weight: bold;\n}\nion-content .div_status .row_ .col_right {\n  padding: 0px;\n}\nion-content .div_status .row_ .col_right .lbl_R {\n  display: block;\n  color: var(--ion-color-dark);\n  font-size: 14px;\n  padding: 4px 0px;\n  text-align: right;\n}\n.div_fab {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 0px 0px 8px 0px;\n}\n.div_fab .btn_ {\n  font-size: 14px;\n  margin: 0px;\n}\n.div_fab .btn_ .btn_icon {\n  padding-right: 8px;\n}\n.bold_ {\n  font-weight: bold !important;\n  color: var(--ion-color-primary) !important;\n}\n.center_ {\n  text-align: center;\n}\n.border_right {\n  border-right: 2px solid #bbb;\n}\n.spc_Left {\n  padding-left: 8px !important;\n}\n.color_ {\n  color: var(--ion-color-primary);\n}\n.specific_ {\n  font-size: 12px !important;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: var(--ion-color-primary) !important;\n  padding: 0px 0px 8px 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGO0FBQUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0FBRUo7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7QUFFSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtBQUNOO0FBQU07RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUVSO0FBRFE7RUFDRSxZQUFBO0FBR1Y7QUFEUTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBR1Y7QUFEUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FBR1Y7QUFBTTtFQUNFLFlBQUE7QUFFUjtBQURRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFHVjtBQURRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFHVjtBQUVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUFBSjtBQUNJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUVNO0VBQ0UsWUFBQTtBQUFSO0FBQ1E7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNWO0FBRU07RUFDRSxZQUFBO0FBQVI7QUFDUTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ1Y7QUFLQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBRkY7QUFHRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBREo7QUFFSTtFQUNFLGtCQUFBO0FBQU47QUFJQTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7QUFERjtBQUdBO0VBQ0Usa0JBQUE7QUFBRjtBQUVBO0VBQ0UsNEJBQUE7QUFDRjtBQUNBO0VBQ0UsNEJBQUE7QUFFRjtBQUFBO0VBQ0UsK0JBQUE7QUFHRjtBQURBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDQ4cHg7XG4gIC5sYmxfc3RpY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICAuZGl2c18ge1xuICAgIG1hcmdpbjogOHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDBweCA0cHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgfVxuICAuZGl2X2JpbGxzIHtcbiAgICAucm93X2JpbGxzIHtcbiAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAwcHggNHB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAuY29sX2JpbGxzIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIC5pbWdfYmlsbHMge1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgfVxuICAgICAgICAubGJsX2JpbGxfYW10IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDBweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB9XG4gICAgICAgIC5sYmxfYmlsbCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDJweCAwcHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5jb2xfY3VzdCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgLmxibF9jdXN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDBweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIH1cbiAgICAgICAgLmxibF9hbXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRpdl9zdGF0dXMge1xuICAgIG1hcmdpbjogMTJweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4ICNiYmI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC5sYmxfaGVhZCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHBhZGRpbmc6IDRweCAwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmJiO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5yb3dfIHtcbiAgICAgIC5jb2xfbGVmdCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgLmxibF9MIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY29sX3JpZ2h0IHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAubGJsX1Ige1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5kaXZfZmFiIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggMHB4IDhweCAwcHg7XG4gIC5idG5fIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgLmJ0bl9pY29uIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICB9XG4gIH1cbn1cbi5ib2xkXyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cbi5jZW50ZXJfIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJvcmRlcl9yaWdodCB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNiYmI7XG59XG4uc3BjX0xlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xufVxuLmNvbG9yXyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uc3BlY2lmaWNfIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAwcHggOHB4IDBweCAhaW1wb3J0YW50O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/dashboard/dashboard.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/dashboard/dashboard.page.ts ***!
      \*********************************************/

    /*! exports provided: DashboardPage */

    /***/
    function srcAppDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
        return DashboardPage;
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


      var _global_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../global/common_service */
      "./src/app/global/common_service.ts");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api.service */
      "./src/app/services/api.service.ts");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! chart.js */
      "./node_modules/chart.js/dist/Chart.js");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _global_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../global/notification.service */
      "./src/app/global/notification.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var DashboardPage = /*#__PURE__*/function () {
        function DashboardPage(apiService, statusBar, api, plt, navctrl, router, notify) {
          var _this = this;

          _classCallCheck(this, DashboardPage);

          this.apiService = apiService;
          this.statusBar = statusBar;
          this.api = api;
          this.plt = plt;
          this.navctrl = navctrl;
          this.router = router;
          this.notify = notify;
          this.letterObj = {
            to: '',
            from: '',
            text: ''
          };
          this.pdfObj = null;
          this.InvoicePackage = [];
          this.newNotify = false;
          this.apiService.getPackageLimit(this.api.NetworkStatus).subscribe(function (res) {
            _this.InvoicePackage = res.data.invoice;
          });
          this.plt.backButton.subscribeWithPriority(0, function () {
            document.getElementsByTagName("body")[0].style.opacity = "1"; // this.qr.hide();
          });
          this.verify = localStorage.getItem("verify");
        }

        _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.plt.ready().then(function () {
              _this2.loadData(_this2.api.NetworkStatus);
            });
          } // async StartScaning() {
          //   this.qr.prepare().then((status: QRScannerStatus) => {
          //     if (status.authorized) {
          //       this.qr.show();
          //       document.getElementsByTagName('body')[0].style.opacity = "0";
          //       let qrScan = this.qr.scan().subscribe((qrString) => {
          //         document.getElementsByTagName('body')[0].style.opacity = "1";
          //         console.log("qrString", qrString)
          //         if (qrString) {
          //           this.webLogin(qrString);
          //         }
          //         setTimeout(function () {
          //           this.qr.hide();
          //           qrScan.unsubscribe();
          //         }, 4000);
          //       }, (err) => {
          //         this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
          //       })
          //     } else if (status.denied) {
          //     } else {
          //     }
          //   })
          // }
          // async webLogin(qrString) {
          //   return new Promise((resolve, reject) => {
          //     var body = {
          //       "qrString": qrString
          //     }
          //     this.api.Post("Common/webLogin/", body).subscribe(res => {
          //       console.log("res", res);
          //       if (res['status'] == 1) {
          //         resolve(res);
          //       } else {
          //         this.api.presentToastWithOptions(res['message']);
          //       }
          //     },
          //       err => {
          //         this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
          //       });
          //   })
          // }

        }, {
          key: "loadData",
          value: function loadData() {
            var _this3 = this;

            var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var refresher = arguments.length > 1 ? arguments[1] : undefined;

            if (!refresher) {
              this.api.presentLoading();
            }

            this.apiService.getDashboardData(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["timeout"])(this.api.API_TIMEOUT)).subscribe(function (res) {
              if (res.data) {
                var data = res.data;
                _this3.PaidInvoiceTotal = data.PaidInvoiceTotal.replace(/,/g, "") ? data.PaidInvoiceTotal.replace(/,/g, "") : '';
                _this3.ParitallyInvoiceTotal = data.ParitallyInvoiceTotal.replace(/,/g, "") ? data.ParitallyInvoiceTotal.replace(/,/g, "") : '';
                _this3.UnpaidInvoiceTotal = data.UnpaidInvoiceTotal.replace(/,/g, "") ? data.UnpaidInvoiceTotal.replace(/,/g, "") : '';
                _this3.fiscal_year = data.fiscal_year ? data.fiscal_year : '';
                _this3.Income = data.income ? data.income : '';
                _this3.Expense = data.expense ? data.expense : '';
                _this3.net_income = data.net_income ? data.net_income : '';
                _this3.overdues = data.overdues ? data.overdues : [];
                _this3.gross_cgst_price = data.gross_cgst_price.replace(/,/g, "") ? data.gross_cgst_price.replace(/,/g, "") : '';
                _this3.gross_igst_price = data.gross_igst_price.replace(/,/g, "") ? data.gross_igst_price.replace(/,/g, "") : '';
                _this3.gross_sgst_price = data.gross_sgst_price.replace(/,/g, "") ? data.gross_sgst_price.replace(/,/g, "") : '';

                _this3.createPieChart();

                _this3.createBarChart();
              }

              _this3.api.dismissLoading();

              if (refresher) {
                _this3.notify.checkUnReadCount();

                refresher.target.complete();
              } else {
                _this3.api.dismissLoading();
              }
            }, function (err) {
              _this3.api.dismissLoading();

              _this3.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
          }
        }, {
          key: "fnCreateInvoice",
          value: function fnCreateInvoice() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.InvoicePackage.total && this.InvoicePackage.total > this.InvoicePackage.limit) {
                        this.api.PackageLimitMessage(this.InvoicePackage.total);
                      } else {
                        this.router.navigate(['/create-invoice']);
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "createBarChart",
          value: function createBarChart() {
            this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.barChart.nativeElement, {
              type: 'bar',
              data: {
                labels: [''],
                datasets: [{
                  label: 'SGST',
                  data: [this.gross_sgst_price],
                  backgroundColor: ['rgb(250, 149, 0)'],
                  borderColor: ['rgb(250, 149, 0)'],
                  borderWidth: 1
                }, {
                  label: 'CGST',
                  data: [this.gross_cgst_price],
                  backgroundColor: ['rgb(83, 141, 34)'],
                  borderColor: ['rgb(83, 141, 34)'],
                  borderWidth: 1
                }, {
                  label: 'IGST',
                  data: [this.gross_igst_price],
                  backgroundColor: ['rgb(208, 0, 0)'],
                  borderColor: ['rgb(208, 0, 0)'],
                  borderWidth: 1
                }]
              },
              options: {
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                }
              }
            });
          }
        }, {
          key: "createPieChart",
          value: function createPieChart() {
            this.pie = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.pieChart.nativeElement, {
              type: 'doughnut',
              data: {
                labels: ['Paid', 'Paritally', 'Unpaid'],
                datasets: [{
                  label: 'Viewers',
                  data: [this.PaidInvoiceTotal, this.ParitallyInvoiceTotal, this.UnpaidInvoiceTotal],
                  backgroundColor: ['rgb(40, 167, 69)', 'rgb(152, 243, 164)', 'rgb(220, 53, 69)'],
                  borderColor: ['rgb(40, 167, 69)', 'rgb(152, 243, 164)', 'rgb(220, 53, 69)'],
                  borderWidth: 1
                }]
              }
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.notify.checkUnReadCount();
            this.statusBar.show();
            this.statusBar.styleDefault();
            this.statusBar.backgroundColorByHexString('#FFF');
          }
        }]);

        return DashboardPage;
      }();

      DashboardPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _global_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _global_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]
        }];
      };

      DashboardPage.propDecorators = {
        pieChart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['pieChart']
        }],
        hrzLineChart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['hrzLineChart']
        }],
        barChart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['barChart']
        }]
      };
      DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./dashboard.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./dashboard.page.scss */
        "./src/app/dashboard/dashboard.page.scss"))["default"]]
      })], DashboardPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map
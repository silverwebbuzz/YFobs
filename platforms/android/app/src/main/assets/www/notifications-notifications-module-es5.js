(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNotificationsNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Notifications</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"isEmpty\" *ngIf=\"notificationArray?.length == 0\">\n    <ion-label class=\"lbl-empty\">No Records Found</ion-label>\n  </div>\n\n  <ng-container *ngFor=\"let opt of notificationArray;let i = index;\">\n    <div (click)=\"notification(opt.link)\">\n    <ion-row class=\"row_list\" (click)=\"markAsRead(i)\" [ngClass]=\"opt.IsRead?'isread':'unread'\">\n      <ion-col size=\"2\" class=\"col_list\">\n        <img *ngIf=\"!opt.image\" src=\"{{user_not_found_place_holder}}\" class=\"img_main\" />\n        <img *ngIf=\"opt.image\" src=\"{{imageUrl}}{{opt.image}}\" class=\"img_main\" />\n      </ion-col>\n      <ion-col size=\"9\" class=\"col_list spc_left\">\n        <ion-label class=\"lbl_title\">{{opt.title}}</ion-label>\n        <ion-label class=\"lbl_date\">{{opt.sent_date | date: 'yyyy-MM-dd'}}</ion-label>\n      </ion-col>\n      <ion-col size=\"1\" class=\"col_list right_\">\n        <ion-icon name=\"chevron-forward\" class=\"img_arrow\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    </div>\n  </ng-container>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/notifications/notifications-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/notifications/notifications-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: NotificationsPageRoutingModule */

    /***/
    function srcAppNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function () {
        return NotificationsPageRoutingModule;
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


      var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notifications.page */
      "./src/app/notifications/notifications.page.ts");

      var routes = [{
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
      }];

      var NotificationsPageRoutingModule = function NotificationsPageRoutingModule() {
        _classCallCheck(this, NotificationsPageRoutingModule);
      };

      NotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotificationsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/notifications/notifications.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/notifications/notifications.module.ts ***!
      \*******************************************************/

    /*! exports provided: NotificationsPageModule */

    /***/
    function srcAppNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
        return NotificationsPageModule;
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


      var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notifications-routing.module */
      "./src/app/notifications/notifications-routing.module.ts");
      /* harmony import */


      var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notifications.page */
      "./src/app/notifications/notifications.page.ts");

      var NotificationsPageModule = function NotificationsPageModule() {
        _classCallCheck(this, NotificationsPageModule);
      };

      NotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
      })], NotificationsPageModule);
      /***/
    },

    /***/
    "./src/app/notifications/notifications.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/notifications/notifications.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppNotificationsNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".row_list {\n  padding: 8px;\n  margin: 8px;\n  background: var(--ion-color-light);\n}\n.row_list .col_list {\n  padding: 0px;\n  margin: auto;\n}\n.row_list .col_list .img_main {\n  height: 44px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.row_list .col_list .lbl_title {\n  display: block;\n  font-size: 14px;\n  padding: 4px 0px;\n  color: var(--ion-color-dark);\n}\n.row_list .col_list .lbl_date {\n  display: block;\n  font-size: 12px;\n  color: var(--ion-color-medium);\n}\n.row_list .col_list .img_arrow {\n  height: 18px;\n  width: 18px;\n  color: var(--ion-color-primary);\n}\n.isEmpty {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n.isEmpty .lbl_empty {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\n.right_ {\n  text-align: right;\n}\n.spc_left {\n  padding-left: 8px !important;\n}\n.isread {\n  background: var(--ion-color-light) !important;\n}\n.unread {\n  background: var(--ion-color-secondary) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFFSjtBQURJO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFHTjtBQURJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBR047QUFESTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFHTjtBQURJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtBQUdOO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQURFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUdKO0FBQUE7RUFDRSxpQkFBQTtBQUdGO0FBREE7RUFDRSw0QkFBQTtBQUlGO0FBRkE7RUFDRSw2Q0FBQTtBQUtGO0FBSEE7RUFDRSxpREFBQTtBQU1GIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3dfbGlzdCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiA4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC5jb2xfbGlzdCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAuaW1nX21haW57XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gICAgLmxibF90aXRsZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHBhZGRpbmc6IDRweCAwcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIH1cbiAgICAubGJsX2RhdGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgfVxuICAgIC5pbWdfYXJyb3cge1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgfVxufVxuLmlzRW1wdHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC5sYmxfZW1wdHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICB9XG59XG4ucmlnaHRfIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc3BjX2xlZnR7XG4gIHBhZGRpbmctbGVmdDogOHB4ICFpbXBvcnRhbnQ7XG59XG4uaXNyZWFke1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG59XG4udW5yZWFke1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/notifications/notifications.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/notifications/notifications.page.ts ***!
      \*****************************************************/

    /*! exports provided: NotificationsPage */

    /***/
    function srcAppNotificationsNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
        return NotificationsPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _global_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../global/common_service */
      "./src/app/global/common_service.ts");
      /* harmony import */


      var _global_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../global/notification.service */
      "./src/app/global/notification.service.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

      var NotificationsPage = /*#__PURE__*/function () {
        function NotificationsPage(navCtrl, api, notify, iab) {
          var _this = this;

          _classCallCheck(this, NotificationsPage);

          this.navCtrl = navCtrl;
          this.api = api;
          this.notify = notify;
          this.iab = iab;
          this.notificationArray = [];
          this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].image_url;
          this.user_not_found_place_holder = 'assets/imgs/placeholder.png';
          this.notify.notification.subscribe(function (val) {
            if (val) {
              var reverseArray = val.reverse();
              _this.notificationArray = reverseArray;
            }
          });
          this.notify.unReadCount.subscribe(function (val) {});
        }

        _createClass(NotificationsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "notification",
          value: function notification(link) {
            if (link != '') {
              this.iab.create(link, '_system', 'location=yes');
            }
          }
        }, {
          key: "markAsRead",
          value: function markAsRead(index) {
            this.notificationArray[index].IsRead = true;
            var notificationId = this.notificationArray[index].id;
            var localStorage = JSON.parse(window.localStorage.getItem('readNotification'));

            if (localStorage) {
              if (!localStorage.includes(notificationId)) {
                localStorage.push(notificationId);
                window.localStorage.setItem('readNotification', JSON.stringify(localStorage));
              }
            } else {
              window.localStorage.setItem('readNotification', JSON.stringify([notificationId]));
            }

            if (this.notificationArray) {
              var countUnread = this.notificationArray.filter(function (x) {
                return !x.IsRead;
              }).length;
              this.notify.unReadCount.next(countUnread);
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.back();
          }
        }]);

        return NotificationsPage;
      }();

      NotificationsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _global_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
        }, {
          type: _global_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
        }];
      };

      NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./notifications.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./notifications.page.scss */
        "./src/app/notifications/notifications.page.scss"))["default"]]
      })], NotificationsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=notifications-notifications-module-es5.js.map
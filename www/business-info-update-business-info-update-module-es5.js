(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["business-info-update-business-info-update-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/business-info-update/business-info-update.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/business-info-update/business-info-update.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBusinessInfoUpdateBusinessInfoUpdatePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Edit Business</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\"> &nbsp; </ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <form [formGroup]=\"BusinessDataUpdate\" class=\"form_\">\n    <div class=\"div_profile\">\n      <img *ngIf=\"!businessLogo\" src=\"{{defaultPlaceholder}}\" class=\"img_profile\" />\n      <img *ngIf=\"businessLogo\" src=\"{{businessLogoUrl ? businessLogo : imageUrl + businessLogo}}\"\n        class=\"img_profile\" />\n      <input class=\"btn-choose\" type=\"file\" formControlName=\"image\" (change)=\"imageUpload($event)\" accept=\"image/*\"/>\n    </div>\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-input placeholder=\"Name\" formControlName=\"name\"  class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"BusinessDataUpdate.controls.name.hasError('required') && BusinessDataUpdate.controls.name.touched\">\n      <p class=\"content\">Please Enter Name!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-input placeholder=\"Title\" formControlName=\"title\"  class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"BusinessDataUpdate.controls.title.hasError('required') && BusinessDataUpdate.controls.title.touched\">\n      <p class=\"content\">Please Enter Title!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-input placeholder=\"Licence Number\" formControlName=\"buslicno\"  class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"BusinessDataUpdate.controls.buslicno.hasError('required') && BusinessDataUpdate.controls.buslicno.touched\">\n      <p class=\"content\">Please Enter Business Licence Number!</p>\n    </ion-item>\n\n    <div class=\"div-que\">\n      <ion-label class=\"lbl-head\">Is your business registered for GST?</ion-label>\n      <ion-radio-group formControlName=\"is_registered_gst\" (change)=\"isGstOption()\">\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\n          <ion-radio slot=\"start\" value=\"1\" mode=\"md\" class=\"radio_\"></ion-radio>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">No</ion-label>\n          <ion-radio slot=\"start\" value=\"2\" mode=\"md\" class=\"radio_\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </div>\n<div *ngIf=\"BusinessDataUpdate.get('is_registered_gst').value == 1\">\n    <ion-item no-padding lines=\"none\" class=\"item_ top_ shadow_input\">\n      <ion-input placeholder=\"GST Number\" maxlength=\"15\" formControlName=\"gstno\"  class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"BusinessDataUpdate.controls.gstno.hasError('required') && BusinessDataUpdate.controls.gstno.touched\">\n      <p class=\"content\">Please Enter GST Number!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"BusinessDataUpdate.get('gstno').errors?.minlength && BusinessDataUpdate.get('gstno').touched\">\n      <p class=\"content\">Please Enter Valid GST Number!</p>\n    </ion-item>\n  \n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-datetime formControlName=\"mydate\" displayFormat=\"DD-MM-YYYY\"  placeholder=\"GST Registered On\" class=\"date_\">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"BusinessDataUpdate.controls.mydate.hasError('required') && BusinessDataUpdate.controls.mydate.touched\">\n      <p class=\"content\">Please Select Date!</p>\n    </ion-item>\n  </div>\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-select interface=\"action-sheet\" placeholder=\"State\" formControlName=\"state\"\n        class=\"dropWidth_\" mode=\"md\" [(ngModel)]=\"selectedstate\">\n        <ion-select-option *ngFor=\"let opt of state\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"BusinessDataUpdate.controls.state.hasError('required') && BusinessDataUpdate.controls.state.touched\">\n      <p class=\"content\">Please Select State!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-input placeholder=\"City\" formControlName=\"city\"  class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"BusinessDataUpdate.controls.city.hasError('required') && BusinessDataUpdate.controls.city.touched\">\n      <p class=\"content\">Please Enter City!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"!BusinessDataUpdate.controls.city.hasError('required') && BusinessDataUpdate.controls.city.touched && BusinessDataUpdate.controls.city.hasError('pattern')\">\n      <p class=\"content\">Please Enter Only Characters!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-select interface=\"action-sheet\" placeholder=\"category\" formControlName=\"category\"\n        class=\"dropWidth_\" mode=\"md\" [(ngModel)]=\"selectedcategory\">\n        <ion-select-option *ngFor=\"let opt of category\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"BusinessDataUpdate.controls.state.hasError('required') && BusinessDataUpdate.controls.state.touched\">\n      <p class=\"content\">Please Select State!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-input placeholder=\"Address\" formControlName=\"adrress\"  class=\"input_\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"BusinessDataUpdate.controls.adrress.hasError('required') && BusinessDataUpdate.controls.adrress.touched\">\n      <p class=\"content\">Please Enter Address!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n      <ion-input type=\"tel\" (keypress)=\"numberonly.FnNumberOnly($event)\" minlength=\"6\" maxlength=\"6\"\n        pattern=\"^[0-9]+$\" placeholder=\"Post Code\" formControlName=\"code\"  class=\"input_\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"BusinessDataUpdate.controls.code.hasError('required') && BusinessDataUpdate.controls.code.touched\">\n      <p class=\"content\">Please Enter Post Code!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"!BusinessDataUpdate.get('code').errors?.pattern && BusinessDataUpdate.get('code').errors?.minlength  &&   BusinessDataUpdate.get('code').touched\">\n      <p class=\"content\">Please Enter 6 Digits Post Code!</p>\n    </ion-item>\n\n    <div class=\"div_btn\">\n      <ion-input  formControlName=\"businessRowId\" hidden value=\"\"  class=\"input_\"></ion-input>\n      <ion-button expand=\"full\" shape=\"round\" class=\"btn_ shadow_btn\" (click)=\"BusinessUpdate()\">Submit</ion-button>\n    </div>\n\n  </form>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/business-info-update/business-info-update-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/business-info-update/business-info-update-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: BusinessInfoUpdatePageRoutingModule */

    /***/
    function srcAppBusinessInfoUpdateBusinessInfoUpdateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessInfoUpdatePageRoutingModule", function () {
        return BusinessInfoUpdatePageRoutingModule;
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


      var _business_info_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./business-info-update.page */
      "./src/app/business-info-update/business-info-update.page.ts");

      var routes = [{
        path: '',
        component: _business_info_update_page__WEBPACK_IMPORTED_MODULE_3__["BusinessInfoUpdatePage"]
      }];

      var BusinessInfoUpdatePageRoutingModule = function BusinessInfoUpdatePageRoutingModule() {
        _classCallCheck(this, BusinessInfoUpdatePageRoutingModule);
      };

      BusinessInfoUpdatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BusinessInfoUpdatePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/business-info-update/business-info-update.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/business-info-update/business-info-update.module.ts ***!
      \*********************************************************************/

    /*! exports provided: BusinessInfoUpdatePageModule */

    /***/
    function srcAppBusinessInfoUpdateBusinessInfoUpdateModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessInfoUpdatePageModule", function () {
        return BusinessInfoUpdatePageModule;
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


      var _business_info_update_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./business-info-update-routing.module */
      "./src/app/business-info-update/business-info-update-routing.module.ts");
      /* harmony import */


      var _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @logisticinfotech/ionic4-datepicker */
      "./node_modules/@logisticinfotech/ionic4-datepicker/__ivy_ngcc__/fesm2015/logisticinfotech-ionic4-datepicker.js");
      /* harmony import */


      var _business_info_update_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./business-info-update.page */
      "./src/app/business-info-update/business-info-update.page.ts");

      var BusinessInfoUpdatePageModule = function BusinessInfoUpdatePageModule() {
        _classCallCheck(this, BusinessInfoUpdatePageModule);
      };

      BusinessInfoUpdatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _logisticinfotech_ionic4_datepicker__WEBPACK_IMPORTED_MODULE_6__["Ionic4DatepickerModule"], _business_info_update_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusinessInfoUpdatePageRoutingModule"]],
        declarations: [_business_info_update_page__WEBPACK_IMPORTED_MODULE_7__["BusinessInfoUpdatePage"]]
      })], BusinessInfoUpdatePageModule);
      /***/
    },

    /***/
    "./src/app/business-info-update/business-info-update.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/business-info-update/business-info-update.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBusinessInfoUpdateBusinessInfoUpdatePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --keyboard-offset: 0px !important;\n}\nion-content .div_img {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  box-shadow: 0 0 4px var(--ion-color-medium);\n}\nion-content .div_img .img_ {\n  height: 100px;\n  width: 100px;\n  -o-object-fit: fill;\n     object-fit: fill;\n}\nion-content .div_img .lbl_ {\n  display: block;\n  font-size: 14px;\n  text-align: center;\n  line-height: 7;\n}\nion-content .form_ {\n  margin: 32px 0px;\n}\nion-content .form_ .item_ {\n  --background: var(--ion-color-light);\n  border-radius: 24px;\n  width: 84%;\n  margin: 0 auto;\n  --padding-start: 24px;\n  --inner-padding-end: 12px;\n  margin-top: 16px;\n}\nion-content .form_ .item_ .input_ {\n  background: var(--ion-color-light);\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .form_ .item_ .dropWidth_ {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  min-width: 100%;\n  --padding-start: 0px;\n  --padding-end: 6px;\n  --placeholder-opacity: 0.5;\n}\nion-content .form_ .item_ .date_ {\n  color: var(--ion-color-dark);\n  font-size: 14px;\n  width: 100%;\n  --padding-top: 4px;\n  --padding-end: 0px;\n  --padding-bottom: 4px;\n  --padding-start: 0px;\n}\nion-content .form_ .div-que {\n  padding: 16px 16px 0px 16px;\n  width: 84%;\n  margin: 0 auto;\n}\nion-content .form_ .div-que .lbl-head {\n  font-size: 14px;\n  font-weight: bold;\n  display: block;\n  color: var(--ion-color-dark);\n}\nion-content .form_ .div-que .items-radio {\n  display: inline-block;\n  --padding-start: 0px;\n  --background-activated: transparent;\n  --background-focused: transparent;\n}\nion-content .form_ .div-que .items-radio .lbl-radio {\n  font-weight: bold;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .form_ .div-que .items-radio .radio_ {\n  -webkit-margin-end: 8px;\n          margin-inline-end: 8px;\n}\nion-content .form_ .div_btn {\n  margin: 32px 0px;\n}\nion-content .form_ .div_btn .btn_ {\n  width: 84%;\n  margin: 0 auto;\n  font-size: 14px;\n}\n.top_ {\n  margin-top: 0px !important;\n}\n.div_profile {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important;\n  text-align: center;\n  position: relative;\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  box-shadow: 0 2px 4px var(--ion-color-light-shade);\n  border-radius: 8px;\n}\n.div_profile .img_profile {\n  width: 100px;\n  height: 100px;\n  border-radius: 8px;\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n.btn-choose {\n  position: absolute;\n  top: 0%;\n  opacity: 0;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  height: 100px;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3MtaW5mby11cGRhdGUvYnVzaW5lc3MtaW5mby11cGRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7QUFFSjtBQURJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtLQUFBLGdCQUFBO0FBR047QUFESTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBR047QUFBRTtFQUNFLGdCQUFBO0FBRUo7QUFESTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUdOO0FBRk07RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUlSO0FBRk07RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBSVI7QUFGTTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQUlSO0FBREk7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBR047QUFGTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQUlSO0FBRk07RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtBQUlSO0FBSFE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUtWO0FBSFE7RUFDRSx1QkFBQTtVQUFBLHNCQUFBO0FBS1Y7QUFESTtFQUNFLGdCQUFBO0FBR047QUFGTTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUlSO0FBQ0E7RUFDRSwwQkFBQTtBQUVGO0FBQUE7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtEQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQUZFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0tBQUEsZ0JBQUE7QUFJSjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9idXNpbmVzcy1pbmZvLXVwZGF0ZS9idXNpbmVzcy1pbmZvLXVwZGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0ta2V5Ym9hcmQtb2Zmc2V0OiAwcHggIWltcG9ydGFudDtcbiAgLmRpdl9pbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgLmltZ18ge1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIG9iamVjdC1maXQ6IGZpbGw7XG4gICAgfVxuICAgIC5sYmxfIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbGluZS1oZWlnaHQ6IDc7XG4gICAgfVxuICB9XG4gIC5mb3JtXyB7XG4gICAgbWFyZ2luOiAzMnB4IDBweDtcbiAgICAuaXRlbV8ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgIHdpZHRoOiA4NCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgLmlucHV0XyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIH1cbiAgICAgIC5kcm9wV2lkdGhfIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiA2cHg7XG4gICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xuICAgICAgfVxuICAgICAgLmRhdGVfIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5kaXYtcXVlIHtcbiAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAwcHggMTZweDtcbiAgICAgIHdpZHRoOiA4NCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIC5sYmwtaGVhZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgfVxuICAgICAgLml0ZW1zLXJhZGlvIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLmxibC1yYWRpbyB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgICAgLnJhZGlvXyB7XG4gICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZGl2X2J0biB7XG4gICAgICBtYXJnaW46IDMycHggMHB4O1xuICAgICAgLmJ0bl8ge1xuICAgICAgICB3aWR0aDogODQlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLnRvcF8ge1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cbi5kaXZfcHJvZmlsZSB7XG4gIG1hcmdpbi10b3A6IDE2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLmltZ19wcm9maWxlIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb2JqZWN0LWZpdDogZmlsbDtcbiAgICAvLyBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xuICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICNjY2M7XG4gIH1cbn1cbi5idG4tY2hvb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG4vLyBsaS1pb25pYzQtZGF0ZXBpY2tlcntcbi8vICAgICBtYXJnaW46IDBweCAtODBweCAwcHggMHB4O1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuLy8gfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/business-info-update/business-info-update.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/business-info-update/business-info-update.page.ts ***!
      \*******************************************************************/

    /*! exports provided: BusinessInfoUpdatePage */

    /***/
    function srcAppBusinessInfoUpdateBusinessInfoUpdatePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessInfoUpdatePage", function () {
        return BusinessInfoUpdatePage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _Services_number_only_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../Services/number-only.service */
      "./src/Services/number-only.service.ts");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/api.service */
      "./src/app/services/api.service.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _global_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../global/common_service */
      "./src/app/global/common_service.ts");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _global_Validations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../global/Validations */
      "./src/app/global/Validations.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var BusinessInfoUpdatePage = /*#__PURE__*/function () {
        function BusinessInfoUpdatePage(formBuilder, route, statusBar, datepipe, navCtrl, api, numberonly, apiService, plt, httpClient, activeRoute) {
          _classCallCheck(this, BusinessInfoUpdatePage);

          this.formBuilder = formBuilder;
          this.route = route;
          this.statusBar = statusBar;
          this.datepipe = datepipe;
          this.navCtrl = navCtrl;
          this.api = api;
          this.numberonly = numberonly;
          this.apiService = apiService;
          this.plt = plt;
          this.httpClient = httpClient;
          this.activeRoute = activeRoute;
          this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].image_url;
          this.defaultPlaceholder = 'assets/imgs/placeholder.png';
          this.ActiveBusiness = [];
          this.state = [];
          this.category = [];
          this.businessLogo = "";
          this.businessLogoUrl = "";
        }

        _createClass(BusinessInfoUpdatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.business_fb();
            this.isGstOption();
            this.plt.ready().then(function () {
              _this.loadData(_this.api.NetworkStatus);

              _this.getBusinessDetails(_this.api.NetworkStatus);
            });
            this.returnUrl = this.activeRoute.snapshot.queryParams.returnUrl;
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this2 = this;

            var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var refresher = arguments.length > 1 ? arguments[1] : undefined;
            this.api.presentLoading();
            this.apiService.allApi(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["timeout"])(this.api.API_TIMEOUT)).subscribe(function (res) {
              _this2.state = res.data.state;
              _this2.category = res.data.categories;

              if (refresher) {
                refresher.target.complete();
              }

              _this2.api.dismissLoading();
            }, function (err) {
              _this2.api.dismissLoading();

              _this2.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
          }
        }, {
          key: "getBusinessDetails",
          value: function getBusinessDetails() {
            var _this3 = this;

            var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.apiService.getBusinessDetails(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["timeout"])(this.api.API_TIMEOUT)).subscribe(function (res) {
              var _a;

              if (res) {
                _this3.ActiveBusiness = ((_a = res.data) === null || _a === void 0 ? void 0 : _a.length) >= 1 ? res.data[0] : [];

                _this3.BusinessDataUpdate.patchValue({
                  businessRowId: _this3.ActiveBusiness.id,
                  name: _this3.ActiveBusiness.name,
                  title: _this3.ActiveBusiness.title,
                  buslicno: _this3.ActiveBusiness.biz_number,
                  gstno: _this3.ActiveBusiness.vat_code ? _this3.ActiveBusiness.vat_code : '',
                  mydate: _this3.ActiveBusiness.gst_register_date,
                  is_registered_gst: _this3.ActiveBusiness.is_registered_gst ? _this3.ActiveBusiness.is_registered_gst.toString() : '2',
                  city: _this3.ActiveBusiness.city,
                  adrress: _this3.ActiveBusiness.address,
                  code: _this3.ActiveBusiness.post_code
                });

                setTimeout(function () {
                  _this3.selectedstate = _this3.ActiveBusiness.state_id;
                  _this3.selectedcategory = _this3.ActiveBusiness.category;
                }, 1000);
                _this3.businessLogo = _this3.ActiveBusiness.logo ? _this3.ActiveBusiness.logo : '';
              }
            }, function (err) {
              _this3.api.dismissLoading();

              _this3.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
          }
        }, {
          key: "business_fb",
          value: function business_fb() {
            this.BusinessDataUpdate = this.formBuilder.group({
              businessRowId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              title: [''],
              buslicno: [''],
              gstno: [''],
              mydate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_global_Validations__WEBPACK_IMPORTED_MODULE_12__["Validations"].name_pattern)]],
              adrress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              is_registered_gst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              image: [''],
              category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
          }
        }, {
          key: "imageUpload",
          value: function imageUpload(e) {
            var _this4 = this;

            var file = e.target.files[0];

            if (file) {
              var reader = new FileReader();

              reader.onloadend = function (e) {
                _this4.businessLogo = e.target.result;
              };

              reader.readAsDataURL(e.target.files[0]);
              this.businessLogoUrl = file;
            }
          }
        }, {
          key: "isGstOption",
          value: function isGstOption() {
            var _this5 = this;

            this.BusinessDataUpdate.get('is_registered_gst').valueChanges.subscribe(function (val) {
              var gstno = _this5.BusinessDataUpdate.get('gstno');

              var mydate = _this5.BusinessDataUpdate.get('mydate');

              if (val == 1) {
                gstno.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(15)]));
                mydate.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
              } else {
                gstno.clearValidators();
                gstno.updateValueAndValidity();
                mydate.clearValidators();
                mydate.updateValueAndValidity();
              }
            });
          }
        }, {
          key: "BusinessUpdate",
          value: function BusinessUpdate() {
            var _this6 = this;

            for (var v in this.BusinessDataUpdate.controls) {
              this.BusinessDataUpdate.controls[v].markAsTouched();
            }

            if (this.BusinessDataUpdate.valid) {
              this.api.presentLoading();
              var formData = new FormData();
              formData.append('id', this.BusinessDataUpdate.value.businessRowId);
              formData.append('user_id', this.api.getUserId());
              formData.append('name', this.BusinessDataUpdate.value.name);
              formData.append('title', this.BusinessDataUpdate.value.title);
              formData.append('biz_number', this.BusinessDataUpdate.value.buslicno);
              formData.append('vat_code', this.BusinessDataUpdate.value.gstno);
              formData.append('gst_registered_date', this.BusinessDataUpdate.value.mydate);
              formData.append('country', '79');
              formData.append('state_id', this.BusinessDataUpdate.value.state);
              formData.append('city', this.BusinessDataUpdate.value.city);
              formData.append('category', this.BusinessDataUpdate.value.category);
              formData.append('address', this.BusinessDataUpdate.value.adrress);
              formData.append('post_code', this.BusinessDataUpdate.value.code);
              formData.append('is_registered_gst', this.BusinessDataUpdate.value.is_registered_gst);

              if (this.businessLogoUrl) {
                formData.append('image', this.businessLogoUrl);
              }

              var myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHeaders"]({
                'Authorization': this.api.getToken()
              });
              this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + "invoice/businessUpdate", formData, {
                headers: myHeaders
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["timeout"])(this.api.API_TIMEOUT)).subscribe(function (res) {
                if (res.status == 1) {
                  var bussiness = JSON.stringify(res.data[0]);
                  localStorage.setItem('ActiveBusiness', bussiness);

                  _this6.api.presentToastWithOptions(res.message);

                  _this6.route.navigateByUrl(_this6.returnUrl);
                } else {
                  _this6.api.presentToastWithOptions(res.message);
                }

                _this6.api.dismissLoading();
              }, function (err) {
                _this6.api.dismissLoading();

                _this6.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
              });
            }
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.navigateBack([this.returnUrl]);
          }
        }, {
          key: "radioButtonValue",
          value: function radioButtonValue(val) {
            if (val != null && val != "") {
              if (val == 1) {
                return true;
              } else {
                return false;
              }
            } else {
              return '';
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.statusBar.show();
            this.statusBar.styleDefault();
            this.statusBar.backgroundColorByHexString('#FFF');
          }
        }]);

        return BusinessInfoUpdatePage;
      }();

      BusinessInfoUpdatePage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _global_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
        }, {
          type: _Services_number_only_service__WEBPACK_IMPORTED_MODULE_4__["NumberOnlyService"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }];
      };

      BusinessInfoUpdatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-business-info-update',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./business-info-update.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/business-info-update/business-info-update.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./business-info-update.page.scss */
        "./src/app/business-info-update/business-info-update.page.scss"))["default"]]
      })], BusinessInfoUpdatePage);
      /***/
    },

    /***/
    "./src/app/global/Validations.ts":
    /*!***************************************!*\
      !*** ./src/app/global/Validations.ts ***!
      \***************************************/

    /*! exports provided: Validations */

    /***/
    function srcAppGlobalValidationsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Validations", function () {
        return Validations;
      });

      var Validations = // export const ValidationPatterns =
      {
        email_pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/,
        phone_pattern: /^[0-9-+() ]*$/,
        alpha_numeric: /^[A-Z0-9]+$/i,
        alpha_numeric1: /^[\w -]*$/,
        url_pattern: /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
        onlyNum_pattern: /^-?(0|[1-9]\d*)?$/,
        price_pattern: /^[0-9]+(\.[0-9]{1,50})?$/,
        decimal: /^[0-9]+(\.[0-9]{1,2})?$/,
        name_pattern: /^[a-zA-z ]+$/,
        username_pattern: /^[\w.'-]+$/,
        whitespace: /^\S.*$/,
        number_pattern: /^-?([1-9]\d*)?$/,
        password_pattern: /(?=^[!@#$%\^&*()_\-+=\[{\]};:<>|\./?a-zA-Z\d]{6,}$)(?=([!@#$%\^&*()_\-+=\[{\]};:<>|\./?a-zA-Z\d]*\W+){1,})[!@#$%\^&*()_\-+=\[{\]};:<>|\./?a-zA-Z\d]*$/
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=business-info-update-business-info-update-module-es5.js.map
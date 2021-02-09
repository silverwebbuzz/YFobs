(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/list/list.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/list/list.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Products</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"isEmpty\" *ngIf=\"products?.length == 0 || products == null\">\n    <ion-label class=\"lbl_empty\">No Record Found!</ion-label>\n  </div>\n  \n  <!-- All Expense Start -->\n    <div>\n      <ion-searchbar placeholder=\"Search...\" class=\"search_\" (ionChange)=\"searchBar($event.target.value)\"></ion-searchbar>\n      <div class=\"div_list\">\n        <div class=\"div_row\" *ngFor=\"let opt of products; let i = index\">\n          <ion-row class=\"row_list\">\n            <ion-col size=\"7\" class=\"col_list\">\n              <ion-label class=\"lbl_name\">{{opt.name}}</ion-label>\n            </ion-col>\n            <ion-col size=\"5\" class=\"col_list right_\">\n              <ion-label class=\"lbl_no\">{{opt.hsncode}}</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"row_list row_\">\n            <ion-col size=\"7\" class=\"col_list\">\n              <ion-label class=\"lbl_total\">{{opt.price | number:'2.2'}}</ion-label>\n            </ion-col>\n            <ion-col size=\"5\" class=\"col_list right_\">\n              <ion-icon name=\"create\" class=\"more_\" (click)=\"editProd(opt.id)\"></ion-icon>\n              <ion-icon name=\"trash\" class=\"icon_\" (click)=\"delete(opt.id)\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"div_fab\">\n    <ion-button shape=\"round\" size=\"large\" class=\"btn_ shadow_btn\" (click)=\"addProd()\">\n      <ion-icon name=\"add-circle\" class=\"btn_icon\"></ion-icon>Add Product\n    </ion-button>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/products/list/list-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/products/list/list-routing.module.ts ***!
  \******************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/products/list/list.page.ts");




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListPageRoutingModule);



/***/ }),

/***/ "./src/app/products/list/list.module.ts":
/*!**********************************************!*\
  !*** ./src/app/products/list/list.module.ts ***!
  \**********************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/products/list/list-routing.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/products/list/list.page.ts");







let ListPageModule = class ListPageModule {
};
ListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"]
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "./src/app/products/list/list.page.scss":
/*!**********************************************!*\
  !*** ./src/app/products/list/list.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .div_seg {\n  height: 70px;\n}\nion-content .div_seg .seg_ .seg_btn {\n  min-height: 36px;\n  text-transform: none;\n}\nion-content .div_list {\n  margin: 0px 0px 56px 0px;\n}\nion-content .div_list .div_row {\n  box-shadow: 0 4px 4px var(--ion-color-light-shade);\n  padding: 8px 0px;\n  margin: 8px;\n  border-radius: 8px;\n  background: var(--ion-color-light);\n}\nion-content .div_list .div_row .row_list .col_list {\n  padding: 0px;\n  margin: auto;\n}\nion-content .div_list .div_row .row_list .col_list .lbl_name {\n  display: block;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 0px 8px;\n  color: var(--ion-color-dark);\n}\nion-content .div_list .div_row .row_list .col_list .lbl_status {\n  display: block;\n  background: var(--ion-color-danger);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: auto;\n  font-size: 12px;\n  font-weight: bold;\n  color: var(--ion-color-primary-contrast);\n  padding: 4px 14px;\n  border-bottom-left-radius: 18px;\n  border-top-left-radius: 18px;\n}\nion-content .div_list .div_row .row_list .col_list .lbl_no {\n  display: block;\n  font-size: 12px;\n  padding: 0px 8px;\n  color: var(--ion-color-medium);\n}\nion-content .div_list .div_row .row_list .col_list .lbl_no .spn_ {\n  font-weight: bold;\n  color: var(--ion-color-dark);\n}\nion-content .div_list .div_row .row_list .col_list .lbl_date {\n  display: block;\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  padding: 0px 8px;\n}\nion-content .div_list .div_row .row_list .col_list .lbl_total {\n  display: block;\n  font-size: 13px;\n  font-weight: bold;\n  padding: 0px 8px;\n  color: var(--ion-color-dark);\n}\nion-content .div_list .div_row .row_list .col_list .icon_ {\n  padding: 0px 4px;\n  color: var(--ion-color-primary);\n}\nion-content .div_list .div_row .row_list .col_list .more_ {\n  padding: 0px 6px;\n  color: var(--ion-color-primary);\n}\n.div_fab {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 0px 0px 8px 0px;\n}\n.div_fab .btn_ {\n  font-size: 14px;\n  margin: 0px;\n}\n.div_fab .btn_ .btn_icon {\n  padding-right: 8px;\n}\n.seg_::-webkit-scrollbar {\n  display: none;\n}\n.right_ {\n  text-align: right;\n}\n.row_ {\n  padding: 6px 0px 0px 0px;\n}\n.paid_ {\n  background: var(--ion-color-success) !important;\n}\n.unpaid_ {\n  background: var(--ion-color-danger) !important;\n}\n.draft_ {\n  background: var(--ion-color-medium) !important;\n}\n.recurring_ {\n  background: var(--ion-color-warning) !important;\n}\n.isEmpty {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n.isEmpty .lbl_empty {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\n.search_ {\n  position: unset;\n  top: 0px;\n  --border-radius: 0;\n  -webkit-padding-start: 8px;\n          padding-inline-start: 8px;\n  -webkit-padding-end: 8px;\n          padding-inline-end: 8px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  height: 40px;\n  --background: var(--ion-color-light);\n  --box-shadow: 0 4px 4px var(--ion-color-light-shade);\n  --border-radius: 8px;\n}\n.search_ .searchbar-input {\n  padding: 0px 44px !important;\n  font-size: 14px !important;\n  color: var(--ion-color-dark) !important;\n}\n.search_ .searchbar-search-icon {\n  padding: 0px 8px !important;\n  color: var(--ion-color-primary) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvbGlzdC9saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLFlBQUE7QUFBTjtBQUVRO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQUFWO0FBSUk7RUFDRSx3QkFBQTtBQUZOO0FBR007RUFDRSxrREFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFEUjtBQUdVO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFEWjtBQUVZO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFBZDtBQUVZO0VBQ0UsY0FBQTtFQUNBLG1DQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBQUFkO0FBRVk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFBZDtBQUNjO0VBQ0UsaUJBQUE7RUFDQSw0QkFBQTtBQUNoQjtBQUVZO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQWQ7QUFFWTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBQWQ7QUFFWTtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7QUFBZDtBQUVZO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtBQUFkO0FBT0U7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUpKO0FBS0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUhOO0FBSU07RUFDRSxrQkFBQTtBQUZSO0FBTUU7RUFDRSxhQUFBO0FBSEo7QUFLRTtFQUNFLGlCQUFBO0FBRko7QUFJRTtFQUNFLHdCQUFBO0FBREo7QUFHRTtFQUNFLCtDQUFBO0FBQUo7QUFFRTtFQUNFLDhDQUFBO0FBQ0o7QUFDRTtFQUNFLDhDQUFBO0FBRUo7QUFBRTtFQUNFLCtDQUFBO0FBR0o7QUFERTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUlKO0FBSEk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBS047QUFGRTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxvREFBQTtFQUNBLG9CQUFBO0FBS0o7QUFISTtFQUNFLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtBQUtOO0FBSEk7RUFDRSwyQkFBQTtFQUNBLDBDQUFBO0FBS04iLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC5kaXZfc2VnIHtcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIC5zZWdfIHtcbiAgICAgICAgLnNlZ19idG4ge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmRpdl9saXN0IHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCA1NnB4IDBweDtcbiAgICAgIC5kaXZfcm93IHtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNHB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIC5yb3dfbGlzdCB7XG4gICAgICAgICAgLmNvbF9saXN0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIC5sYmxfbmFtZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggOHB4O1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxibF9zdGF0dXMge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxNHB4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxOHB4O1xuICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxibF9ubyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgICAgLnNwbl8ge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYmxfZGF0ZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYmxfdG90YWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDhweDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pY29uXyB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9yZV8ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNnB4O1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZGl2X2ZhYiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMHB4IDBweCA4cHggMHB4O1xuICAgIC5idG5fIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgLmJ0bl9pY29uIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuc2VnXzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnJpZ2h0XyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgLnJvd18ge1xuICAgIHBhZGRpbmc6IDZweCAwcHggMHB4IDBweDtcbiAgfVxuICAucGFpZF8ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xuICB9XG4gIC51bnBhaWRfIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xuICB9XG4gIC5kcmFmdF8ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnJlY3VycmluZ18ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKSAhaW1wb3J0YW50O1xuICB9XG4gIC5pc0VtcHR5e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLmxibF9lbXB0eXtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICB9XG4gIH1cbiAgLnNlYXJjaF8ge1xuICAgIHBvc2l0aW9uOiB1bnNldDtcbiAgICB0b3A6IDBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDhweDtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDhweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAtLWJveC1zaGFkb3c6IDAgNHB4IDRweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICBcbiAgICAuc2VhcmNoYmFyLWlucHV0IHtcbiAgICAgIHBhZGRpbmc6IDBweCA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNlYXJjaGJhci1zZWFyY2gtaWNvbiB7XG4gICAgICBwYWRkaW5nOiAwcHggOHB4ICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ "./src/app/products/list/list.page.ts":
/*!********************************************!*\
  !*** ./src/app/products/list/list.page.ts ***!
  \********************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");









let ListPage = class ListPage {
    constructor(statusBar, apiService, api, plt, alertCtrl, router) {
        this.statusBar = statusBar;
        this.apiService = apiService;
        this.api = api;
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.products = [];
    }
    ngOnInit() {
    }
    addProd() {
        this.router.navigate(['/products-add']);
    }
    editProd(id) {
        this.router.navigate(['/products-edit'], { queryParams: { id: id } });
    }
    loadData(refresh = false, refresher) {
        if (!refresher) {
            this.api.presentLoading();
        }
        this.apiService.getProduct(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
            this.resp = res;
            this.products = res.data ? res.data : [];
            if (refresher) {
                refresher.target.complete();
            }
            else {
                this.api.dismissLoading();
            }
        }, err => {
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        });
    }
    searchBar(value) {
        let searchList = this.products;
        if (value) {
            searchList = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](searchList, function (x) {
                if (x.name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.name ? x.name.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.hsncode.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.hsncode ? x.hsncode.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
                else if (x.price.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return x.price ? x.price.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
                }
            });
        }
        else {
            searchList = this.resp.data;
        }
        this.products = searchList;
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var body = {
                id: id
            };
            const alert = yield this.alertCtrl.create({
                header: 'Remove product',
                message: 'Do you really want to remove?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (cancel) => {
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.api.presentLoading();
                            this.api.Post("Product/delete", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["timeout"])(this.api.API_TIMEOUT)).subscribe(data => {
                                this.loadData(this.api.NetworkStatus);
                                this.api.presentToastWithOptions(data['message']);
                                this.api.dismissLoading();
                            }, err => {
                                this.api.dismissLoading();
                                this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
                            });
                        },
                    }
                ]
            });
            yield alert.present();
        });
    }
    ionViewWillEnter() {
        this.plt.ready().then(() => {
            this.loadData(this.api.NetworkStatus);
        });
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#FFF');
    }
};
ListPage.ctorParameters = () => [
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/list/list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list.page.scss */ "./src/app/products/list/list.page.scss")).default]
    })
], ListPage);



/***/ })

}]);
//# sourceMappingURL=products-list-list-module-es2015.js.map
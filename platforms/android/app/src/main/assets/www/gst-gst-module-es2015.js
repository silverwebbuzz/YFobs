(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gst-gst-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/gst/all/gstall.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/gst/all/gstall.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n      <div class=\"div_scroll\">\n        <table>\n          <div class=\"div_heads\">\n            <tr>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">#</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Customer</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Status</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">GSTIN</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Invoice Date</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Invoice No.</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Invoice Value</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Item</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Amount</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Taxable Amount</th>\n              <th class=\"lbl_head\" colspan=\"2\">SGST</th>\n              <th class=\"lbl_head\" colspan=\"2\">CGST</th>\n              <th class=\"lbl_head\" colspan=\"2\">IGST</th>\n            </tr>\n            <tr>\n              <th class=\"lbl_head\">%</th>\n              <th class=\"lbl_head\">Amount</th>\n              <th class=\"lbl_head\">%</th>\n              <th class=\"lbl_head\">Amount</th>\n              <th class=\"lbl_head\">%</th>\n              <th class=\"lbl_head\">Amount</th>\n            </tr>\n            <ng-container *ngFor=\"let report of gstAllReports; let r = index\">\n              <ng-container *ngFor=\"let item of report.items; let i = index\">\n                <tr>\n                  <ng-container *ngIf=\"i == 0\">\n                    <td class=\"lbl_entry\">{{r + 1}}</td>\n                    <td class=\"lbl_entry\">{{report.customer_name}}</td>\n                    <td class=\"lbl_entry\">\n                      <ng-container *ngIf=\"report.status == 1\">Unpaid</ng-container>\n                      <ng-container *ngIf=\"report.status == 2\">Paid</ng-container>\n                      <ng-container *ngIf=\"report.status == 0\">Draft</ng-container>\n                    </td>\n                    <td class=\"lbl_entry\">GSTIN</td>\n                    <td class=\"lbl_entry\">{{report.date}}</td>\n                    <td class=\"lbl_entry\">{{report.number}}</td>\n                    <td class=\"lbl_entry\">{{report.grand_total}}</td>\n                    <!-- Item First Row -->\n                    <td class=\"lbl_entry\">{{item.item_name}}</td>\n                    <td class=\"lbl_entry\">{{item.discount_price}}</td>\n                    <td class=\"lbl_entry\">{{item.discount_price}}</td>\n                    <td class=\"lbl_entry\">{{item.sgst_rate}}</td>\n                    <td class=\"lbl_entry\">{{item.sgst_price}}</td>\n                    <td class=\"lbl_entry\">{{item.cgst_rate}}</td>\n                    <td class=\"lbl_entry\">{{item.cgst_price}}</td>\n                    <td class=\"lbl_entry\">{{item.igst_rate}}</td>\n                    <td class=\"lbl_entry\">{{item.igst_price}}</td>\n                  </ng-container>\n                </tr>\n                <!-- Item Second Row -->\n                <ng-container *ngIf=\"i > 0\">\n                  <td class=\"lbl_entry\" rowspan=\"report.items.length - 1\"  colspan=\"7\"></td>\n                  <td class=\"lbl_entry\">{{item.item_name}}</td>\n                  <td class=\"lbl_entry\">{{item.discount_price}}</td>\n                  <td class=\"lbl_entry\">{{item.discount_price}}</td>\n                  <td class=\"lbl_entry\">{{item.sgst_rate}}</td>\n                  <td class=\"lbl_entry\">{{item.sgst_price}}</td>\n                  <td class=\"lbl_entry\">{{item.cgst_rate}}</td>\n                  <td class=\"lbl_entry\">{{item.cgst_price}}</td>\n                  <td class=\"lbl_entry\">{{item.igst_rate}}</td>\n                  <td class=\"lbl_entry\">{{item.igst_price}}</td>\n                </ng-container>\n              </ng-container>\n\n              <!-- Item Total Row -->\n              <ng-container *ngIf=\"report.subTotal\">\n                <tr>\n                  <td class=\"lbl_total\" colspan=\"7\"></td>\n                  <th class=\"lbl_total\"><strong>Total</strong></th>\n                  <td class=\"lbl_total\">{{report.subTotal.discount_price_total}}</td>\n                  <td class=\"lbl_total\">{{report.subTotal.discount_price_total}}</td>\n                  <td class=\"lbl_total\">-</td>\n                  <td class=\"lbl_total\">{{report.subTotal.total_sgst_price}}</td>\n                  <td class=\"lbl_total\">-</td>\n                  <td class=\"lbl_total\">{{report.subTotal.total_cgst_price}}</td>\n                  <td class=\"lbl_total\">-</td>\n                  <td class=\"lbl_total\">{{report.subTotal.total_igst_price}}</td>\n                </tr>\n              </ng-container>\n\n            </ng-container>\n\n            <!-- Gross Total Row -->\n            <ng-container *ngIf=\"grossTotal\">\n              <tr>\n                <td class=\"lbl_gross\" colspan=\"7\"></td>\n                <th class=\"lbl_gross\"><strong>Gross Total</strong></th>\n                <td class=\"lbl_gross\">{{grossTotal.grossAmount}}</td>\n                <td class=\"lbl_gross\">{{grossTotal.grossAmount}}</td>\n                <td class=\"lbl_gross\">-</td>\n                <td class=\"lbl_gross\">{{grossTotal.gross_sgst_price}}</td>\n                <td class=\"lbl_gross\">-</td>\n                <td class=\"lbl_gross\">{{grossTotal.gross_cgst_price}}</td>\n                <td class=\"lbl_gross\">-</td>\n                <td class=\"lbl_gross\">{{grossTotal.gross_igst_price}}</td>\n              </tr>\n            </ng-container>\n          </div>\n        </table>\n      </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/gst/gst.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/gst/gst.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>GST1 Reports</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"div_seg\">\n    <ion-segment [(ngModel)]=\"tabReports\" scrollable mode=\"md\" class=\"seg_\">\n      <ion-segment-button value=\"paid\" class=\"seg_btn\">\n        Paid\n      </ion-segment-button>\n      <ion-segment-button value=\"unpaid\" class=\"seg_btn\">\n        Unpaid\n      </ion-segment-button>\n      <ion-segment-button value=\"all\" class=\"seg_btn\">\n        All\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  \n  \n    <div [ngSwitch]=\"tabReports\">\n\n      <div *ngSwitchCase=\"'paid'\">\n        <ng-container *ngIf=\"this.paidReports.reports?.length\">\n          <app-gstpaid [allReports]=\"this.gstReports.paid\"></app-gstpaid>\n        </ng-container>\n        <ng-container *ngIf=\"this.paidReports.reports?.length == 0\">\n          <div class=\"isEmpty\">\n            <ion-label class=\"lbl_empty\">No Record Found!</ion-label>\n          </div>\n        </ng-container>\n      </div>\n\n      <div *ngSwitchCase=\"'unpaid'\">\n        <ng-container *ngIf=\"this.gstReports.unpaid.reports?.length\">\n          <app-gstunpaid [allReports]=\"this.gstReports.unpaid\"></app-gstunpaid>\n        </ng-container>\n        <ng-container *ngIf=\"this.gstReports.unpaid.reports?.length == 0\">\n          <div class=\"isEmpty\">\n            <ion-label class=\"lbl_empty\">No Record Found!</ion-label>\n          </div>\n        </ng-container>\n      </div>\n\n      <div *ngSwitchCase=\"'all'\">\n        <ng-container *ngIf=\"this.gstReports.all.reports?.length\">\n          <app-gstall [allReports]=\"this.gstReports.all\"></app-gstall>\n        </ng-container>\n        <ng-container *ngIf=\"this.gstReports.all.reports?.length == 0\">\n          <div class=\"isEmpty\">\n            <ion-label class=\"lbl_empty\">No Record Found!</ion-label>\n          </div>\n        </ng-container>\n      </div>\n\n    </div>\n\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/gst/paid/gstpaid.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/gst/paid/gstpaid.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n      <div class=\"div_scroll\">\n        <table>\n          <div class=\"div_heads\">\n            <tr>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">#</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Customer</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Status</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">GSTIN</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Invoice Date</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Invoice No.</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Invoice Value</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Item</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Amount</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Taxable Amount</th>\n              <th class=\"lbl_head\" colspan=\"2\">SGST</th>\n              <th class=\"lbl_head\" colspan=\"2\">CGST</th>\n              <th class=\"lbl_head\" colspan=\"2\">IGST</th>\n            </tr>\n            <tr>\n              <th class=\"lbl_head\">%</th>\n              <th class=\"lbl_head\">Amount</th>\n              <th class=\"lbl_head\">%</th>\n              <th class=\"lbl_head\">Amount</th>\n              <th class=\"lbl_head\">%</th>\n              <th class=\"lbl_head\">Amount</th>\n            </tr>\n            <ng-container *ngFor=\"let report of gstAllReports; let r = index\">\n              <ng-container *ngFor=\"let item of report.items; let i = index\">\n                <tr>\n                  <ng-container *ngIf=\"i == 0\">\n                    <td class=\"lbl_entry\">{{r + 1}}</td>\n                    <td class=\"lbl_entry\">{{report.customer_name}}</td>\n                    <td class=\"lbl_entry\">\n                      <ng-container *ngIf=\"report.status == 1\">Unpaid</ng-container>\n                      <ng-container *ngIf=\"report.status == 2\">Paid</ng-container>\n                      <ng-container *ngIf=\"report.status == 0\">Draft</ng-container>\n                    </td>\n                    <td class=\"lbl_entry\">GSTIN</td>\n                    <td class=\"lbl_entry\">{{report.date}}</td>\n                    <td class=\"lbl_entry\">{{report.number}}</td>\n                    <td class=\"lbl_entry\">{{report.grand_total}}</td>\n                    <!-- Item First Row -->\n                    <td class=\"lbl_entry\">{{item.item_name}}</td>\n                    <td class=\"lbl_entry\">{{item.discount_price}}</td>\n                    <td class=\"lbl_entry\">{{item.discount_price}}</td>\n                    <td class=\"lbl_entry\">{{item.sgst_rate}}</td>\n                    <td class=\"lbl_entry\">{{item.sgst_price}}</td>\n                    <td class=\"lbl_entry\">{{item.cgst_rate}}</td>\n                    <td class=\"lbl_entry\">{{item.cgst_price}}</td>\n                    <td class=\"lbl_entry\">{{item.igst_rate}}</td>\n                    <td class=\"lbl_entry\">{{item.igst_price}}</td>\n                  </ng-container>\n                </tr>\n                <!-- Item Second Row -->\n                <ng-container *ngIf=\"i > 0\">\n                  <td class=\"lbl_entry\" rowspan=\"report.items.length - 1\"  colspan=\"7\"></td>\n                  <td class=\"lbl_entry\">{{item.item_name}}</td>\n                  <td class=\"lbl_entry\">{{item.discount_price}}</td>\n                  <td class=\"lbl_entry\">{{item.discount_price}}</td>\n                  <td class=\"lbl_entry\">{{item.sgst_rate}}</td>\n                  <td class=\"lbl_entry\">{{item.sgst_price}}</td>\n                  <td class=\"lbl_entry\">{{item.cgst_rate}}</td>\n                  <td class=\"lbl_entry\">{{item.cgst_price}}</td>\n                  <td class=\"lbl_entry\">{{item.igst_rate}}</td>\n                  <td class=\"lbl_entry\">{{item.igst_price}}</td>\n                </ng-container>\n              </ng-container>\n\n              <!-- Item Total Row -->\n              <ng-container *ngIf=\"report.subTotal\">\n                <tr>\n                  <td class=\"lbl_total\" colspan=\"7\"></td>\n                  <th class=\"lbl_total\"><strong>Total</strong></th>\n                  <td class=\"lbl_total\">{{report.subTotal.discount_price_total}}</td>\n                  <td class=\"lbl_total\">{{report.subTotal.discount_price_total}}</td>\n                  <td class=\"lbl_total\">-</td>\n                  <td class=\"lbl_total\">{{report.subTotal.total_sgst_price}}</td>\n                  <td class=\"lbl_total\">-</td>\n                  <td class=\"lbl_total\">{{report.subTotal.total_cgst_price}}</td>\n                  <td class=\"lbl_total\">-</td>\n                  <td class=\"lbl_total\">{{report.subTotal.total_igst_price}}</td>\n                </tr>\n              </ng-container>\n\n          </ng-container>\n\n            <!-- Gross Total Row -->\n            <ng-container *ngIf=\"grossTotal\">\n              <tr>\n                <td class=\"lbl_gross\" colspan=\"7\"></td>\n                <th class=\"lbl_gross\"><strong>Gross Total</strong></th>\n                <td class=\"lbl_gross\">{{grossTotal.grossAmount}}</td>\n                <td class=\"lbl_gross\">{{grossTotal.grossAmount}}</td>\n                <td class=\"lbl_gross\">-</td>\n                <td class=\"lbl_gross\">{{grossTotal.gross_sgst_price}}</td>\n                <td class=\"lbl_gross\">-</td>\n                <td class=\"lbl_gross\">{{grossTotal.gross_cgst_price}}</td>\n                <td class=\"lbl_gross\">-</td>\n                <td class=\"lbl_gross\">{{grossTotal.gross_igst_price}}</td>\n              </tr>\n            </ng-container>\n          </div>\n        </table>\n      </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/gst/unpaid/gstunpaid.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/gst/unpaid/gstunpaid.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n      <div class=\"div_scroll\">\n        <table>\n          <div class=\"div_heads\">\n            <tr>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">#</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Customer</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Status</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">GSTIN</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Invoice Date</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Invoice No.</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Invoice Value</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Item</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Amount</th>\n              <th class=\"lbl_head\" colspan=\"0\" rowspan=\"2\">Taxable Amount</th>\n              <th class=\"lbl_head\" colspan=\"2\">SGST</th>\n              <th class=\"lbl_head\" colspan=\"2\">CGST</th>\n              <th class=\"lbl_head\" colspan=\"2\">IGST</th>\n            </tr>\n            <tr>\n              <th class=\"lbl_head\">%</th>\n              <th class=\"lbl_head\">Amount</th>\n              <th class=\"lbl_head\">%</th>\n              <th class=\"lbl_head\">Amount</th>\n              <th class=\"lbl_head\">%</th>\n              <th class=\"lbl_head\">Amount</th>\n            </tr>\n            <ng-container *ngFor=\"let report of gstAllReports; let r = index\">\n              <ng-container *ngFor=\"let item of report.items; let i = index\">\n                <tr>\n                  <ng-container *ngIf=\"i == 0\">\n                    <td class=\"lbl_entry\">{{r + 1}}</td>\n                    <td class=\"lbl_entry\">{{report.customer_name}}</td>\n                    <td class=\"lbl_entry\">\n                      <ng-container *ngIf=\"report.status == 1\">Unpaid</ng-container>\n                      <ng-container *ngIf=\"report.status == 2\">Paid</ng-container>\n                      <ng-container *ngIf=\"report.status == 0\">Draft</ng-container>\n                    </td>\n                    <td class=\"lbl_entry\">GSTIN</td>\n                    <td class=\"lbl_entry\">{{report.date}}</td>\n                    <td class=\"lbl_entry\">{{report.number}}</td>\n                    <td class=\"lbl_entry\">{{report.grand_total}}</td>\n                    <!-- Item First Row -->\n                    <td class=\"lbl_entry\">{{item.item_name}}</td>\n                    <td class=\"lbl_entry\">{{item.discount_price}}</td>\n                    <td class=\"lbl_entry\">{{item.discount_price}}</td>\n                    <td class=\"lbl_entry\">{{item.sgst_rate}}</td>\n                    <td class=\"lbl_entry\">{{item.sgst_price}}</td>\n                    <td class=\"lbl_entry\">{{item.cgst_rate}}</td>\n                    <td class=\"lbl_entry\">{{item.cgst_price}}</td>\n                    <td class=\"lbl_entry\">{{item.igst_rate}}</td>\n                    <td class=\"lbl_entry\">{{item.igst_price}}</td>\n                  </ng-container>\n                </tr>\n                <!-- Item Second Row -->\n                <ng-container *ngIf=\"i > 0\">\n                  <td class=\"lbl_entry\" rowspan=\"report.items.length - 1\"  colspan=\"7\"></td>\n                  <td class=\"lbl_entry\">{{item.item_name}}</td>\n                  <td class=\"lbl_entry\">{{item.discount_price}}</td>\n                  <td class=\"lbl_entry\">{{item.discount_price}}</td>\n                  <td class=\"lbl_entry\">{{item.sgst_rate}}</td>\n                  <td class=\"lbl_entry\">{{item.sgst_price}}</td>\n                  <td class=\"lbl_entry\">{{item.cgst_rate}}</td>\n                  <td class=\"lbl_entry\">{{item.cgst_price}}</td>\n                  <td class=\"lbl_entry\">{{item.igst_rate}}</td>\n                  <td class=\"lbl_entry\">{{item.igst_price}}</td>\n                </ng-container>\n              </ng-container>\n\n              <!-- Item Total Row -->\n              <ng-container *ngIf=\"report.subTotal\">\n                <tr>\n                  <td class=\"lbl_total\" colspan=\"7\"></td>\n                  <th class=\"lbl_total\"><strong>Total</strong></th>\n                  <td class=\"lbl_total\">{{report.subTotal.discount_price_total}}</td>\n                  <td class=\"lbl_total\">{{report.subTotal.discount_price_total}}</td>\n                  <td class=\"lbl_total\">-</td>\n                  <td class=\"lbl_total\">{{report.subTotal.total_sgst_price}}</td>\n                  <td class=\"lbl_total\">-</td>\n                  <td class=\"lbl_total\">{{report.subTotal.total_cgst_price}}</td>\n                  <td class=\"lbl_total\">-</td>\n                  <td class=\"lbl_total\">{{report.subTotal.total_igst_price}}</td>\n                </tr>\n              </ng-container>\n\n          </ng-container>\n\n            <!-- Gross Total Row -->\n            <ng-container *ngIf=\"grossTotal\">\n              <tr>\n                <td class=\"lbl_gross\" colspan=\"7\"></td>\n                <th class=\"lbl_gross\"><strong>Gross Total</strong></th>\n                <td class=\"lbl_gross\">{{grossTotal.grossAmount}}</td>\n                <td class=\"lbl_gross\">{{grossTotal.grossAmount}}</td>\n                <td class=\"lbl_gross\">-</td>\n                <td class=\"lbl_gross\">{{grossTotal.gross_sgst_price}}</td>\n                <td class=\"lbl_gross\">-</td>\n                <td class=\"lbl_gross\">{{grossTotal.gross_cgst_price}}</td>\n                <td class=\"lbl_gross\">-</td>\n                <td class=\"lbl_gross\">{{grossTotal.gross_igst_price}}</td>\n              </tr>\n            </ng-container>\n          </div>\n        </table>\n      </div>\n\n");

/***/ }),

/***/ "./src/app/reports/gst/all/gstall.page.scss":
/*!**************************************************!*\
  !*** ./src/app/reports/gst/all/gstall.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div_scroll {\n  overflow-x: scroll;\n  white-space: nowrap;\n}\n.div_scroll .div_heads .lbl_head {\n  font-size: 14px;\n  font-weight: bold;\n  padding: 8px 8px;\n  color: var(--ion-color-primary-contrast);\n  background: var(--ion-color-primary);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n  vertical-align: middle;\n}\n.div_scroll .div_heads .lbl_entry {\n  font-size: 14px;\n  padding: 8px 8px;\n  color: var(--ion-color-dark);\n  background: var(--ion-color-light-shade);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n}\n.div_scroll .div_heads .lbl_total {\n  font-size: 14px;\n  padding: 8px 8px;\n  color: var(--ion-color-dark);\n  background: var(--ion-color-secondary);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n}\n.div_scroll .div_heads .lbl_gross {\n  font-size: 14px;\n  font-weight: bold;\n  padding: 8px 8px;\n  color: var(--ion-color-primary-contrast);\n  background: var(--ion-color-primary);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9nc3QvYWxsL2dzdGFsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHFEQUFBO0VBQ0Esc0JBQUE7QUFDTjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3Q0FBQTtFQUNBLHFEQUFBO0FBQ047QUFDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxxREFBQTtBQUNOO0FBQ0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxREFBQTtBQUNOIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0cy9nc3QvYWxsL2dzdGFsbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2X3Njcm9sbCB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLmRpdl9oZWFkcyB7XG4gICAgLmxibF9oZWFkIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZzogOHB4IDhweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICAgIC5sYmxfZW50cnkge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgcGFkZGluZzogOHB4IDhweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgfVxuICAgIC5sYmxfdG90YWwge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgcGFkZGluZzogOHB4IDhweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgIH1cbiAgICAubGJsX2dyb3Nze1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nOiA4cHggOHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/reports/gst/all/gstall.page.ts":
/*!************************************************!*\
  !*** ./src/app/reports/gst/all/gstall.page.ts ***!
  \************************************************/
/*! exports provided: GstallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstallPage", function() { return GstallPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");




let GstallPage = class GstallPage {
    constructor(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.gstAllReports = [];
        this.grossTotal = [];
    }
    ngOnInit() {
        this.gstAllReports = this.allReports['reports'];
        this.grossTotal = this.allReports['grossTotal'];
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#FFF');
    }
    goBack() {
        this.navCtrl.back();
    }
};
GstallPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] }
];
GstallPage.propDecorators = {
    allReports: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
GstallPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gstall',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gstall.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/gst/all/gstall.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gstall.page.scss */ "./src/app/reports/gst/all/gstall.page.scss")).default]
    })
], GstallPage);



/***/ }),

/***/ "./src/app/reports/gst/gst-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/reports/gst/gst-routing.module.ts ***!
  \***************************************************/
/*! exports provided: GstPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstPageRoutingModule", function() { return GstPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gst_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gst.page */ "./src/app/reports/gst/gst.page.ts");




const routes = [
    {
        path: '',
        component: _gst_page__WEBPACK_IMPORTED_MODULE_3__["GstPage"]
    }
];
let GstPageRoutingModule = class GstPageRoutingModule {
};
GstPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GstPageRoutingModule);



/***/ }),

/***/ "./src/app/reports/gst/gst.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reports/gst/gst.module.ts ***!
  \*******************************************/
/*! exports provided: GstPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstPageModule", function() { return GstPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _gst_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gst-routing.module */ "./src/app/reports/gst/gst-routing.module.ts");
/* harmony import */ var _gst_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gst.page */ "./src/app/reports/gst/gst.page.ts");
/* harmony import */ var _paid_gstpaid_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paid/gstpaid.page */ "./src/app/reports/gst/paid/gstpaid.page.ts");
/* harmony import */ var _unpaid_gstunpaid_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./unpaid/gstunpaid.page */ "./src/app/reports/gst/unpaid/gstunpaid.page.ts");
/* harmony import */ var _all_gstall_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./all/gstall.page */ "./src/app/reports/gst/all/gstall.page.ts");










let GstPageModule = class GstPageModule {
};
GstPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gst_routing_module__WEBPACK_IMPORTED_MODULE_5__["GstPageRoutingModule"]
        ],
        declarations: [_gst_page__WEBPACK_IMPORTED_MODULE_6__["GstPage"], _paid_gstpaid_page__WEBPACK_IMPORTED_MODULE_7__["GstpaidPage"], _unpaid_gstunpaid_page__WEBPACK_IMPORTED_MODULE_8__["GstunpaidPage"], _all_gstall_page__WEBPACK_IMPORTED_MODULE_9__["GstallPage"]]
    })
], GstPageModule);



/***/ }),

/***/ "./src/app/reports/gst/gst.page.scss":
/*!*******************************************!*\
  !*** ./src/app/reports/gst/gst.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .div_seg .seg_ .seg_btn {\n  min-height: 36px;\n  text-transform: none;\n}\nion-content .div_scroll {\n  overflow-x: scroll;\n  white-space: nowrap;\n}\nion-content .div_scroll .div_heads .lbl_head {\n  font-size: 14px;\n  font-weight: bold;\n  padding: 8px 8px;\n  color: var(--ion-color-primary-contrast);\n  background: var(--ion-color-primary);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n  vertical-align: middle;\n}\nion-content .div_scroll .div_entry .lbl_entry {\n  font-size: 14px;\n  padding: 8px 8px;\n  color: var(--ion-color-dark);\n  background: var(--ion-color-light-shade);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n}\n.isEmpty {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n.isEmpty .lbl_empty {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9nc3QvZ3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHTTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUFGUjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUpKO0FBTU07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxREFBQTtFQUNBLHNCQUFBO0FBSlI7QUFRTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0NBQUE7RUFDQSxxREFBQTtBQU5SO0FBV0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFSRjtBQVNFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0cy9nc3QvZ3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLmRpdl9zZWcge1xuICAgIC5zZWdfIHtcbiAgICAgIC5zZWdfYnRuIHtcbiAgICAgICAgbWluLWhlaWdodDogMzZweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5kaXZfc2Nyb2xsIHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAuZGl2X2hlYWRzIHtcbiAgICAgIC5sYmxfaGVhZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgfVxuICAgIC5kaXZfZW50cnkge1xuICAgICAgLmxibF9lbnRyeSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDhweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uaXNFbXB0eSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLmxibF9lbXB0eSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/reports/gst/gst.page.ts":
/*!*****************************************!*\
  !*** ./src/app/reports/gst/gst.page.ts ***!
  \*****************************************/
/*! exports provided: GstPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstPage", function() { return GstPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let GstPage = class GstPage {
    constructor(navCtrl, statusBar, api, apiService, plt, route) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.api = api;
        this.apiService = apiService;
        this.plt = plt;
        this.route = route;
        this.tabReports = 'paid';
        this.gstReports = [];
        this.paidReports = [];
    }
    ngOnInit() {
    }
    loadData(refresh = false, refresher) {
        this.api.presentLoading();
        this.apiService.getGstReports(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
            this.gstReports = res.data;
            this.paidReports = this.gstReports.paid;
            if (refresher) {
                refresher.target.complete();
            }
            this.api.dismissLoading();
        }, err => {
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        });
    }
    ionViewWillEnter() {
        this.loadData(this.api.NetworkStatus);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#FFF');
    }
    goBack() {
        this.navCtrl.back();
    }
};
GstPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GstPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gst',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gst.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/gst/gst.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gst.page.scss */ "./src/app/reports/gst/gst.page.scss")).default]
    })
], GstPage);



/***/ }),

/***/ "./src/app/reports/gst/paid/gstpaid.page.scss":
/*!****************************************************!*\
  !*** ./src/app/reports/gst/paid/gstpaid.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div_scroll {\n  overflow-x: scroll;\n  white-space: nowrap;\n}\n.div_scroll .div_heads .lbl_head {\n  font-size: 14px;\n  font-weight: bold;\n  padding: 8px 8px;\n  color: var(--ion-color-primary-contrast);\n  background: var(--ion-color-primary);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n  vertical-align: middle;\n}\n.div_scroll .div_heads .lbl_entry {\n  font-size: 14px;\n  padding: 8px 8px;\n  color: var(--ion-color-dark);\n  background: var(--ion-color-light-shade);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n}\n.div_scroll .div_heads .lbl_total {\n  font-size: 14px;\n  padding: 8px 8px;\n  color: var(--ion-color-dark);\n  background: var(--ion-color-secondary);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n}\n.div_scroll .div_heads .lbl_gross {\n  font-size: 14px;\n  font-weight: bold;\n  padding: 8px 8px;\n  color: var(--ion-color-primary-contrast);\n  background: var(--ion-color-primary);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9nc3QvcGFpZC9nc3RwYWlkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EscURBQUE7RUFDQSxzQkFBQTtBQUNOO0FBQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO0VBQ0EscURBQUE7QUFDTjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHFEQUFBO0FBQ047QUFDSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHFEQUFBO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRzL2dzdC9wYWlkL2dzdHBhaWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdl9zY3JvbGwge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC5kaXZfaGVhZHMge1xuICAgIC5sYmxfaGVhZCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICAubGJsX2VudHJ5IHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgIH1cbiAgICAubGJsX3RvdGFsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICB9XG4gICAgLmxibF9ncm9zc3tcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZzogOHB4IDhweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/reports/gst/paid/gstpaid.page.ts":
/*!**************************************************!*\
  !*** ./src/app/reports/gst/paid/gstpaid.page.ts ***!
  \**************************************************/
/*! exports provided: GstpaidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstpaidPage", function() { return GstpaidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");




let GstpaidPage = class GstpaidPage {
    constructor(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.gstAllReports = [];
        this.grossTotal = [];
    }
    ngOnInit() {
        this.gstAllReports = this.allReports['reports'];
        this.grossTotal = this.allReports['grossTotal'];
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#FFF');
    }
    goBack() {
        this.navCtrl.back();
    }
};
GstpaidPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] }
];
GstpaidPage.propDecorators = {
    allReports: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
GstpaidPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gstpaid',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gstpaid.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/gst/paid/gstpaid.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gstpaid.page.scss */ "./src/app/reports/gst/paid/gstpaid.page.scss")).default]
    })
], GstpaidPage);



/***/ }),

/***/ "./src/app/reports/gst/unpaid/gstunpaid.page.scss":
/*!********************************************************!*\
  !*** ./src/app/reports/gst/unpaid/gstunpaid.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div_scroll {\n  overflow-x: scroll;\n  white-space: nowrap;\n}\n.div_scroll .div_heads .lbl_head {\n  font-size: 14px;\n  font-weight: bold;\n  padding: 8px 8px;\n  color: var(--ion-color-primary-contrast);\n  background: var(--ion-color-primary);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n  vertical-align: middle;\n}\n.div_scroll .div_heads .lbl_entry {\n  font-size: 14px;\n  padding: 8px 8px;\n  color: var(--ion-color-dark);\n  background: var(--ion-color-light-shade);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n}\n.div_scroll .div_heads .lbl_total {\n  font-size: 14px;\n  padding: 8px 8px;\n  color: var(--ion-color-dark);\n  background: var(--ion-color-secondary);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n}\n.div_scroll .div_heads .lbl_gross {\n  font-size: 14px;\n  font-weight: bold;\n  padding: 8px 8px;\n  color: var(--ion-color-primary-contrast);\n  background: var(--ion-color-primary);\n  border: 0.5px solid var(--ion-color-primary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9nc3QvdW5wYWlkL2dzdHVucGFpZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHFEQUFBO0VBQ0Esc0JBQUE7QUFDTjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3Q0FBQTtFQUNBLHFEQUFBO0FBQ047QUFDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxxREFBQTtBQUNOO0FBQ0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxxREFBQTtBQUNOIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0cy9nc3QvdW5wYWlkL2dzdHVucGFpZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2X3Njcm9sbCB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLmRpdl9oZWFkcyB7XG4gICAgLmxibF9oZWFkIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZzogOHB4IDhweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICAgIC5sYmxfZW50cnkge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgcGFkZGluZzogOHB4IDhweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgfVxuICAgIC5sYmxfdG90YWwge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgcGFkZGluZzogOHB4IDhweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgIH1cbiAgICAubGJsX2dyb3Nze1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nOiA4cHggOHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/reports/gst/unpaid/gstunpaid.page.ts":
/*!******************************************************!*\
  !*** ./src/app/reports/gst/unpaid/gstunpaid.page.ts ***!
  \******************************************************/
/*! exports provided: GstunpaidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GstunpaidPage", function() { return GstunpaidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");




let GstunpaidPage = class GstunpaidPage {
    constructor(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.gstAllReports = [];
        this.grossTotal = [];
    }
    ngOnInit() {
        this.gstAllReports = this.allReports['reports'];
        this.grossTotal = this.allReports['grossTotal'];
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#FFF');
    }
    goBack() {
        this.navCtrl.back();
    }
};
GstunpaidPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] }
];
GstunpaidPage.propDecorators = {
    allReports: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
GstunpaidPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gstunpaid',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gstunpaid.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/gst/unpaid/gstunpaid.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gstunpaid.page.scss */ "./src/app/reports/gst/unpaid/gstunpaid.page.scss")).default]
    })
], GstunpaidPage);



/***/ })

}]);
//# sourceMappingURL=gst-gst-module-es2015.js.map
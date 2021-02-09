(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~invoice-invoice-options-invoice-options-module~invoice-list-list-module~invoice-view-invoice~2b095416"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/view/invoice-view.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/view/invoice-view.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"print_\" id=\"printable-area\">\n  <ion-row class=\"head_row\">\n    <ion-col size=\"4\" class=\"head_col\" >\n      <img *ngIf=\"!ActiveBusiness.logo\" src=\"{{defaultPlaceholder}}\" class=\"head_img\" />\n      <img *ngIf=\"ActiveBusiness.logo\" [src]=\"ActiveBusiness.logo_base64\" class=\"head_img\"/>\n    </ion-col>\n    <ion-col size=\"8\" class=\"head_col right_\">\n      <ion-label class=\"lbl_invoice bold_\" *ngIf=\"privew.title != 'null' && privew.title != ''\">{{privew.title ? privew.title : ''}}</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"add_row border_\">\n    <ion-col size=\"4\" class=\"add_col\"></ion-col>\n    <ion-col size=\"8\" class=\"add_col right_\">\n      <ion-label class=\"lbl_name spc_\" *ngIf=\"ActiveBusiness.name != 'null' && ActiveBusiness.name != ''\">{{ActiveBusiness.name ? ActiveBusiness.name : ''}}</ion-label>\n      <ion-label class=\"lbl_title spc_\" *ngIf=\"ActiveBusiness.title != 'null' && ActiveBusiness.title != ''\">{{ActiveBusiness.title ? ActiveBusiness.title : ''}}</ion-label>\n      <ion-label class=\"lbl_add spc_\" *ngIf=\"ActiveBusiness.address != 'null' && ActiveBusiness.address != ''\">{{ActiveBusiness.address ? ActiveBusiness.address : ''}}</ion-label>\n      <!-- <ion-label class=\"lbl_add spc_\">Petrol Pump, S.G Highway, Sola,{{ActiveBusiness.name}}</ion-label> -->\n      <ion-label class=\"lbl_add spc_\">{{ActiveBusiness.city ? ActiveBusiness.city + ',' : ''}} {{state ? state + ',' : ''}} {{ActiveBusiness.country_name ? ActiveBusiness.country_name : ActiveBusiness.country_name}} {{ActiveBusiness.post_code ? ActiveBusiness.post_code : ''}}</ion-label>\n      <ion-label class=\"lbl_gst spc_\" *ngIf=\"ActiveBusiness.vat_code && ActiveBusiness.vat_code != 'null'\">GST No : {{ActiveBusiness.vat_code ? ActiveBusiness.vat_code : ''}}</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"add_row\">\n    <ion-col size=\"5\" class=\"add_col\">\n      <ion-label class=\"lbl_bill spc_\">Bill To</ion-label>\n      <ion-label class=\"lbl_add spc_\" *ngIf=\"customer.name != 'null' && customer.name != ''\">{{customer.name ? customer.name : ''}}</ion-label>\n      <ion-label class=\"lbl_add spc_\" >{{customer.address ? customer.address + ',' : ''}} {{customer.city ? customer.city : ''}} {{customer_state_id ? customer_state_id + ',' : ''}} {{country}}</ion-label>\n      <ion-label class=\"lbl_add spc_\" *ngIf=\"customer.phone != 'null' && customer.phone != ''\">{{customer.phone ? customer.phone : ''}}</ion-label>\n      <ion-label class=\"lbl_add spc_\" *ngIf=\"customer.cus_number != 'null' && customer.cus_number != ''\">{{customer.cus_number ? customer.cus_number : ''}}</ion-label>\n      <ion-label class=\"lbl_add spc_\" *ngIf=\"customer.vat_code && customer.vat_code != 'null'\">GST No : {{customer.vat_code ? customer.vat_code : ''}}</ion-label>\n    </ion-col>\n    <ion-col size=\"7\" class=\"add_col right_\">\n      <ion-label class=\"lbl_add spc_\">Invoice number : {{privew.number ? privew.number : ''}}</ion-label>\n      <ion-label class=\"lbl_add spc_\">Invoice date: {{privew.date | date: 'yyyy-MM-dd'}}</ion-label>\n      <ion-label class=\"lbl_add spc_\">Due date:{{privew.payment_due | date: 'yyyy-MM-dd'}}</ion-label>\n      <ion-label class=\"lbl_add spc_\" *ngIf=\"privew.due_limit != 1 \">Within {{privew.due_limit}} days</ion-label>\n      <ion-label class=\"lbl_add spc_\" *ngIf=\"privew.due_limit == 1 \">On receipt</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"row_table\">\n    <ion-col size=\"1\" class=\"col_table bg_ center_ border_R\">\n      <ion-label class=\"lbl_table\">#</ion-label>\n    </ion-col>\n    <ion-col size=\"3\" class=\"col_table bg_ center_ border_R\">\n      <ion-label class=\"lbl_table\">Items</ion-label>\n    </ion-col>\n    <ion-col size=\"3\" class=\"col_table bg_ center_ border_R\">\n      <ion-label class=\"lbl_table\">Price</ion-label>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_table bg_ center_ border_R\">\n      <ion-label class=\"lbl_table\">Qty</ion-label>\n    </ion-col>\n    <ion-col size=\"3\" class=\"col_table bg_ center_\">\n      <ion-label class=\"lbl_table\">Amount</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"row_entry border_\" *ngFor=\"let item of ItemData; let i = index\">\n    <ion-col size=\"1\" class=\"col_entry center_\">\n      <ion-label class=\"lbl_entry\">{{ i + 1 }}</ion-label>\n    </ion-col>\n    <ion-col size=\"3\" class=\"col_entry\">\n      <ion-label class=\"lbl_entry\">{{item.product_name }} <span *ngIf=\"item.hsncode\">[{{item.hsncode}}]</span>\n        </ion-label>\n    </ion-col>\n    <ion-col size=\"3\" class=\"col_entry center_\">\n      <ion-label class=\"lbl_entry\">{{item.invoice_item_price | number:'2.2' }}</ion-label>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_entry center_\">\n      <ion-label class=\"lbl_entry\">{{item.qty}}</ion-label>\n    </ion-col>\n    <ion-col size=\"3\" class=\"col_entry right_\">\n      <ion-label class=\"lbl_entry\">{{item.qty * item.invoice_item_price | number:'2.2'}}</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"row_footer\">\n    <ion-col size=\"3\" class=\"col_footer\"></ion-col>\n    <ion-col size=\"5\" class=\"col_footer right_\">\n      <ion-label class=\"lbl_footer spc_ bold_\">Sub Total</ion-label>\n      <ion-label class=\"lbl_footer spc_\" *ngIf=\"discount != 0\">Discount [{{discount}}]%</ion-label>\n      <ion-label class=\"lbl_footer spc_\" *ngIf=\"taxName == 'GST' || taxName == 'GST5' || taxName == 'GST12' || taxName == 'GST18' || taxName == 'GST28'\">CGST [{{tax / 2}}%]</ion-label>\n      <ion-label class=\"lbl_footer spc_\" *ngIf=\"taxName == 'GST' || taxName == 'GST5' || taxName == 'GST12' || taxName == 'GST18' || taxName == 'GST28'\">SGST [{{tax / 2}}%]</ion-label>\n      <ion-label class=\"lbl_footer spc_\" *ngIf=\"taxName == 'IGST0' || taxName == 'IGST5' || taxName == 'IGST12' || taxName == 'IGST18' || taxName == 'IGST28'\">IGST [{{tax}}%]</ion-label>\n      <ion-label class=\"lbl_footer spc_ bold_ clr_\">Amount Due - Total</ion-label>\n    </ion-col>\n    <ion-col size=\"4\" class=\"col_footer right_\">\n      <ion-label class=\"lbl_footer spc_\">INR {{subTotal | number:'2.2'}}</ion-label>\n      <ion-label class=\"lbl_footer spc_\" *ngIf=\"discount != 0\">INR {{discountrs}}</ion-label>\n      <ion-label class=\"lbl_footer spc_\" *ngIf=\"taxName == 'GST' || taxName == 'GST5' || taxName == 'GST12' || taxName == 'GST18' || taxName == 'GST28'\">INR {{(taxDisplay / 2).toFixed(2)}}</ion-label>\n      <ion-label class=\"lbl_footer spc_\" *ngIf=\"taxName == 'GST' || taxName == 'GST5' || taxName == 'GST12' || taxName == 'GST18' || taxName == 'GST28'\">INR {{(taxDisplay / 2).toFixed(2)}}</ion-label>\n      <ion-label class=\"lbl_footer spc_\" *ngIf=\"taxName == 'IGST0' || taxName == 'IGST5' || taxName == 'IGST12' || taxName == 'IGST18' || taxName == 'IGST28'\">INR {{taxDisplay}}</ion-label>\n      <ion-label class=\"lbl_footer spc_ clr_\">INR {{GrandTotal | number:'2.2'}}</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"div_footer\">\n    <ion-label class=\"lbl_thank spc_ bold_ center_\">Thank you!</ion-label>\n    <ion-label class=\"lbl_sign spc_ center_\" [innerHTML]=\"footer_note\"></ion-label>\n    <ion-label class=\"lbl_create spc_ center_\">This Invoice is created by YFOBS</ion-label>\n  </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-row class=\"row_btn\">\n    <ion-col size=\"5\" class=\"col_btn\">\n      <ion-button size=\"large\" expand=\"full\" color=\"light\" class=\"btn_ shadow_btn\" (click)=\"Modalclose()\">Close</ion-button>\n    </ion-col>\n    <ion-col size=\"5\" class=\"col_btn\" (click)=\"sharePdf('share')\">\n      <ion-button size=\"large\" expand=\"full\" class=\"btn_ shadow_btn\">Share</ion-button>\n    </ion-col>\n    <ion-col size=\"2\" class=\"col_btn\" (click)=\"sharePdf('print')\">\n      <ion-button size=\"large\" expand=\"full\" color=\"light\" class=\"btn_ shadow_btn\">\n        <ion-icon name=\"print\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "./src/app/invoice/view/invoice-view.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/invoice/view/invoice-view.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .print_ {\n  padding: 16px;\n}\nion-content .print_ .head_row .head_col {\n  padding: 0px;\n}\nion-content .print_ .head_row .head_col .head_img {\n  height: 75px;\n  width: 75px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-content .print_ .head_row .head_col .lbl_invoice {\n  display: block;\n  font-size: 16px;\n  color: var(--ion-color-dark);\n}\nion-content .print_ .head_row .head_col .lbl_ {\n  display: block;\n  font-size: 12px;\n  color: var(--ion-color-dark);\n}\nion-content .print_ .add_row {\n  margin: 0px 0px 24px 0px;\n}\nion-content .print_ .add_row .add_col {\n  padding: 0px;\n}\nion-content .print_ .add_row .add_col .lbl_name {\n  display: block;\n  font-size: 12px;\n  color: var(--ion-color-dark);\n}\nion-content .print_ .add_row .add_col .lbl_title {\n  display: block;\n  font-size: 11px;\n  color: var(--ion-color-dark);\n}\nion-content .print_ .add_row .add_col .lbl_add {\n  display: block;\n  font-size: 10px;\n  color: var(--ion-color-dark);\n}\nion-content .print_ .add_row .add_col .lbl_gst {\n  display: block;\n  font-size: 11px;\n  color: var(--ion-color-dark);\n}\nion-content .print_ .add_row .add_col .lbl_bill {\n  display: block;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: var(--ion-color-dark);\n}\nion-content .print_ .row_table .col_table {\n  padding: 0px;\n}\nion-content .print_ .row_table .col_table .lbl_table {\n  display: block;\n  font-size: 11px;\n  text-transform: uppercase;\n  padding: 8px;\n  color: var(--ion-color-dark);\n}\nion-content .print_ .row_entry .col_entry {\n  padding: 0px;\n}\nion-content .print_ .row_entry .col_entry .lbl_entry {\n  display: block;\n  font-size: 10px;\n  padding: 8px;\n  color: var(--ion-color-dark);\n}\nion-content .print_ .row_footer {\n  margin: 24px 0px;\n}\nion-content .print_ .row_footer .col_footer {\n  padding: 0px;\n}\nion-content .print_ .row_footer .col_footer .lbl_footer {\n  display: block;\n  font-size: 11px;\n  color: var(--ion-color-dark);\n}\nion-content .print_ .div_footer {\n  margin: 28px 0px;\n}\nion-content .print_ .div_footer .lbl_thank {\n  display: block;\n  font-size: 16px;\n  color: var(--ion-color-dark);\n}\nion-content .print_ .div_footer .lbl_sign {\n  display: block;\n  font-size: 10px;\n  border-top: 2px solid var(--ion-color-secondary);\n  border-bottom: 2px solid var(--ion-color-secondary);\n  color: var(--ion-color-dark);\n}\nion-content .print_ .div_footer .lbl_create {\n  display: block;\n  font-size: 10px;\n  color: var(--ion-color-dark);\n}\nion-footer .row_btn .col_btn {\n  padding: 0px;\n}\nion-footer .row_btn .col_btn .btn_ {\n  margin: 0px;\n  font-size: 14px;\n}\n.bold_ {\n  font-weight: bold;\n}\n.right_ {\n  text-align: right !important;\n}\n.spc_ {\n  padding: 2px 0px;\n}\n.center_ {\n  text-align: center !important;\n}\n.bg_ {\n  background: var(--ion-color-secondary);\n}\n.border_ {\n  border-bottom: 2px solid var(--ion-color-secondary);\n}\n.border_R {\n  border-right: 4px solid var(--ion-color-primary-contrast);\n}\n.clr_ {\n  background: var(--ion-color-light-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS92aWV3L2ludm9pY2Utdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FBQUo7QUFFTTtFQUNFLFlBQUE7QUFBUjtBQUNRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBQ1Y7QUFDUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFDVjtBQUNRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUNWO0FBR0k7RUFDRSx3QkFBQTtBQUROO0FBRU07RUFDRSxZQUFBO0FBQVI7QUFDUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFDVjtBQUNRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUNWO0FBQ1E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBQ1Y7QUFDUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFDVjtBQUNRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBQ1Y7QUFJTTtFQUNFLFlBQUE7QUFGUjtBQUdRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQURWO0FBTU07RUFDRSxZQUFBO0FBSlI7QUFLUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBSFY7QUFPSTtFQUNFLGdCQUFBO0FBTE47QUFNTTtFQUNFLFlBQUE7QUFKUjtBQUtRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUhWO0FBT0k7RUFDRSxnQkFBQTtBQUxOO0FBTU07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBSlI7QUFNTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtREFBQTtFQUNBLDRCQUFBO0FBSlI7QUFNTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFKUjtBQVdJO0VBQ0UsWUFBQTtBQVJOO0FBU007RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQVBSO0FBWUE7RUFDRSxpQkFBQTtBQVRGO0FBV0E7RUFDRSw0QkFBQTtBQVJGO0FBVUE7RUFDRSxnQkFBQTtBQVBGO0FBU0E7RUFDRSw2QkFBQTtBQU5GO0FBUUE7RUFDRSxzQ0FBQTtBQUxGO0FBT0E7RUFDRSxtREFBQTtBQUpGO0FBTUE7RUFDRSx5REFBQTtBQUhGO0FBS0E7RUFDRSx3Q0FBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvaW52b2ljZS92aWV3L2ludm9pY2Utdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgLnByaW50X3tcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIC5oZWFkX3Jvd3tcbiAgICAgIC5oZWFkX2NvbHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAuaGVhZF9pbWd7XG4gICAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIH1cbiAgICAgICAgLmxibF9pbnZvaWNle1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB9XG4gICAgICAgIC5sYmxfe1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5hZGRfcm93e1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDI0cHggMHB4O1xuICAgICAgLmFkZF9jb2x7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgLmxibF9uYW1le1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB9XG4gICAgICAgIC5sYmxfdGl0bGV7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgICAgLmxibF9hZGR7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgICAgLmxibF9nc3R7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgICAgLmxibF9iaWxse1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnJvd190YWJsZXtcbiAgICAgIC5jb2xfdGFibGV7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgLmxibF90YWJsZXtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAucm93X2VudHJ5e1xuICAgICAgLmNvbF9lbnRyeXtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAubGJsX2VudHJ5e1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAucm93X2Zvb3RlcntcbiAgICAgIG1hcmdpbjogMjRweCAwcHg7XG4gICAgICAuY29sX2Zvb3RlcntcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAubGJsX2Zvb3RlcntcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZGl2X2Zvb3RlcntcbiAgICAgIG1hcmdpbjogMjhweCAwcHg7XG4gICAgICAubGJsX3RoYW5re1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgfVxuICAgICAgLmxibF9zaWdue1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIH1cbiAgICAgIC5sYmxfY3JlYXRle1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuaW9uLWZvb3RlcntcbiAgLnJvd19idG57XG4gICAgLmNvbF9idG57XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAuYnRuX3tcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5ib2xkX3tcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucmlnaHRfe1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuLnNwY197XG4gIHBhZGRpbmc6IDJweCAwcHg7XG59XG4uY2VudGVyX3tcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uYmdfe1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5ib3JkZXJfe1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uYm9yZGVyX1J7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbn1cbi5jbHJfe1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/invoice/view/invoice-view.page.ts":
/*!***************************************************!*\
  !*** ./src/app/invoice/view/invoice-view.page.ts ***!
  \***************************************************/
/*! exports provided: InvoiceViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceViewPage", function() { return InvoiceViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dom-to-image */ "./node_modules/dom-to-image/src/dom-to-image.js");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "./node_modules/@ionic-native/printer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");















let InvoiceViewPage = class InvoiceViewPage {
    constructor(plt, socialSharing, apiService, api, route, modelctrl, router, file, fileOpener, printer, datePipe) {
        this.plt = plt;
        this.socialSharing = socialSharing;
        this.apiService = apiService;
        this.api = api;
        this.route = route;
        this.modelctrl = modelctrl;
        this.router = router;
        this.file = file;
        this.fileOpener = fileOpener;
        this.printer = printer;
        this.datePipe = datePipe;
        //@Input() InvoiceNumber: any;
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].image_url;
        this.defaultPlaceholder = 'assets/imgs/placeholder.png';
        this.privew = [];
        this.customer = [];
        this.businessLogo = "";
        this.customerList = [];
        this.CustomerData = [];
        this.ItemData = [];
        this.itemqty = 0;
        this.subTotal = 0;
        this.GrandTotal = 0;
        this.tax = 0;
        this.taxDisplay = 0;
        this.discount = 0;
        this.discountrs = 0;
        this.ActiveBusiness = [];
        this.loading = false;
        this.businessLogo = this.api.getBusinessDetails() ? this.api.getBusinessDetails().logo : '';
    }
    ngOnInit() {
        if (this.InvoiceId) {
            this.getInvoiceData(this.InvoiceId);
        }
    }
    getInvoiceData(InvoiceId) {
        var body = {
            businessId: this.api.getBusinessId(),
            business_state_id: this.api.getBusinessDetails().state_id
        };
        this.api.presentLoading();
        this.api.Post("invoice/invoiceEdit/" + InvoiceId, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
            this.customer = res.data.selectedCustomer.length >= 1 ? res.data.selectedCustomer[0] : [];
            this.ItemData = res.data.items.length >= 1 ? res.data.items : [];
            let ActiveBusiness = localStorage.getItem("ActiveBusiness");
            this.ActiveBusiness = JSON.parse(ActiveBusiness);
            this.privew = res.data.invoice ? res.data.invoice : '';
            this.tax = this.privew.tax ? this.privew.tax : 0;
            this.discount = this.privew.discount ? this.privew.discount : 0;
            //this.loadData(this.api.NetworkStatus,this.privew.taxes_id,this.ActiveBusiness.state_id);
            this.loadData(this.api.NetworkStatus, this.privew.taxes_id, this.ActiveBusiness.state_id, this.customer.country, this.customer.state);
            this.footer_note = this.privew.footer_note;
            this.laodCalculation();
            this.loading = true;
            if (!this.Share) {
                this.api.dismissLoading();
            }
        }, err => {
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        });
    }
    loadData(refresh = false, taxes_id, state_id, customer_country_id, customer_state_id) {
        this.apiService.allApi(refresh).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
            this.state = res.data.state;
            this.taxValueList = res.data.taxOptions;
            let taxt_rate = this.taxValueList.filter((x => x.id == taxes_id));
            this.taxName = taxt_rate.length >= 1 ? taxt_rate[0].name : '';
            let state = this.state.filter((x => x.id == state_id));
            this.state = state.length >= 1 ? state[0].name : '';
            let customerstate = res.data.state.filter((x => x.id == customer_state_id));
            this.customer_state_id = customerstate.length >= 1 ? customerstate[0].name : '';
            let country = res.data.countries.filter((x => x.id == customer_country_id));
            this.country = country.length >= 1 ? country[0].name : '';
        }, err => {
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
        });
    }
    laodCalculation() {
        var tota = 0;
        var totq = 0;
        for (var i = 0; i < this.ItemData.length; i++) {
            if (parseInt(this.ItemData[i].qty))
                totq += parseInt(this.ItemData[i].qty);
            this.itemqty = totq;
        }
        for (var i = 0; i < this.ItemData.length; i++) {
            if (parseInt(this.ItemData[i].invoice_item_price))
                var tot;
            tot = this.ItemData[i].invoice_item_price * this.ItemData[i].qty;
            tota += parseFloat(tot);
            this.subTotal = (tota).toFixed(2);
        }
        this.GrandTotal = this.subTotal;
        this.calcTax();
        this.calcGrandTotal();
    }
    calcTax() {
        if (this.tax == undefined || this.tax == 0) {
            this.tax = 0;
            return 1;
        }
        else {
            if (this.tax) {
                this.tax = this.tax;
            }
            else {
                this.tax = 0;
            }
            this.tax = this.tax;
            return 1;
        }
    }
    calcGrandTotal() {
        var total_discount = this.discount;
        var tax = this.tax;
        var discountValue = Number(this.subTotal) * (Number(total_discount) / 100);
        this.discountrs = discountValue.toFixed(2);
        var discountedPrice = (Number(this.subTotal) - Number(this.subTotal) * (Number(total_discount) / 100));
        this.taxDisplay = (Number(discountedPrice) * (Number(tax) / 100)).toFixed(2);
        var grandTotal = Number(discountedPrice) + (Number(discountedPrice) * (Number(tax) / 100));
        this.GrandTotal = grandTotal.toFixed(2);
        return 1;
    }
    share() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            {
                this.plt.ready()
                    .then(() => {
                    this.api.presentLoading();
                    this.api.Get("invoice/exportPdf/" + this.InvoiceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["timeout"])(this.api.API_TIMEOUT)).subscribe(res => {
                        this.api.dismissLoading();
                        this.socialSharing.share(res['data'].business_name, res['data'].invoice_number, res['data'].link)
                            .then((data) => { })
                            .catch((err) => { });
                    }, err => {
                        this.api.dismissLoading();
                        this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
                    });
                });
            }
        });
    }
    sharePdf(type) {
        this.api.presentLoading();
        const div = document.getElementById("printable-area");
        dom_to_image__WEBPACK_IMPORTED_MODULE_8___default.a.toPng(div).then((dataUrl) => {
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_11__("p", "mm", "a4");
            doc.addImage(dataUrl, 'PNG', 20, 20, 170, 250);
            //doc.save('MYPdf.pdf');
            let pdfOutput = doc.output();
            let buffer = new ArrayBuffer(pdfOutput.length);
            let array = new Uint8Array(buffer);
            for (var i = 0; i < pdfOutput.length; i++) {
                array[i] = pdfOutput.charCodeAt(i);
            }
            const directory = this.file.dataDirectory;
            var toDayDate = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
            const fileName = "invoice-" + toDayDate + ".pdf";
            let options = { replace: true };
            this.file.checkFile(directory, fileName).then((success) => {
                //Writing File to Device
                this.file.writeFile(directory, fileName, buffer, options)
                    .then((success) => {
                    this.api.dismissLoading();
                    if (type == 'share') {
                        this.socialSharing.share('Here is your PDF file', 'Your PDF', this.file.dataDirectory + fileName)
                            .then((data) => {
                            // Share after part
                        })
                            .catch((err) => {
                            // error
                        });
                    }
                    else {
                        this.printer.print(this.file.dataDirectory + fileName);
                    }
                })
                    .catch((error) => {
                    this.api.dismissLoading();
                });
            })
                .catch((error) => {
                //Writing File to Device
                this.file.writeFile(directory, fileName, buffer)
                    .then((success) => {
                    this.api.dismissLoading();
                    this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
                        .then(() => console.log('File is opened'))
                        .catch(e => console.log('Error opening file', e));
                })
                    .catch((error) => {
                    this.api.dismissLoading();
                });
            });
        })
            .catch(function (error) {
            this.api.dismissLoading();
        });
    }
    Modalclose() {
        this.modelctrl.dismiss();
    }
    businessProfile() {
        this.modelctrl.dismiss();
        this.router.navigate(['/business-info-update'], { queryParams: { returnUrl: 'invoice-view' } });
    }
};
InvoiceViewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__["FileOpener"] },
    { type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_12__["Printer"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"] }
];
InvoiceViewPage.propDecorators = {
    InvoiceId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    Share: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
InvoiceViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./invoice-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/view/invoice-view.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./invoice-view.page.scss */ "./src/app/invoice/view/invoice-view.page.scss")).default]
    })
], InvoiceViewPage);



/***/ })

}]);
//# sourceMappingURL=default~invoice-invoice-options-invoice-options-module~invoice-list-list-module~invoice-view-invoice~2b095416-es2015.js.map
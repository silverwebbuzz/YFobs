(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~business-info-update-business-info-update-module~invoice-add-create-invoice-module~invoice-e~fb1db5f1"],{

/***/ "./node_modules/@logisticinfotech/ionic4-datepicker/__ivy_ngcc__/fesm2015/logisticinfotech-ionic4-datepicker.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@logisticinfotech/ionic4-datepicker/__ivy_ngcc__/fesm2015/logisticinfotech-ionic4-datepicker.js ***!
  \**********************************************************************************************************************/
/*! exports provided: Ionic4DatepickerService, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, Ionic4DatepickerComponent, Ionic4DatepickerModule, Ionic4DatepickerModalComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ionic4DatepickerService", function() { return Ionic4DatepickerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ionic4DatepickerComponent", function() { return Ionic4DatepickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ionic4DatepickerModule", function() { return Ionic4DatepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ionic4DatepickerModalComponent", function() { return Ionic4DatepickerModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return LiIonic4DatepickerDirective; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic4-datepicker.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





function Ionic4DatepickerModalComponent_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.mainObj == null ? null : ctx_r0.mainObj.titleLabel);
} }
function Ionic4DatepickerModalComponent_ion_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-icon", 21);
} }
function Ionic4DatepickerModalComponent_ion_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-icon", 22);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r2.mainObj == null ? null : ctx_r2.mainObj.arrowNextPrev == null ? null : ctx_r2.mainObj.arrowNextPrev.prevArrowSrc);
} }
function Ionic4DatepickerModalComponent_ion_icon_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-icon", 23);
} }
function Ionic4DatepickerModalComponent_ion_icon_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-icon", 22);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r4.mainObj == null ? null : ctx_r4.mainObj.arrowNextPrev == null ? null : ctx_r4.mainObj.arrowNextPrev.nextArrowSrc);
} }
function Ionic4DatepickerModalComponent_ion_grid_30_ion_col_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r12 = ctx_r15.index;
    const weekName_r11 = ctx_r15.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", (ctx_r13.mainObj == null ? null : ctx_r13.mainObj.isSundayHighlighted) && i_r12 === 6 ? ctx_r13.mainObj == null ? null : ctx_r13.mainObj.isSundayHighlighted.fontColor : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", weekName_r11, "");
} }
function Ionic4DatepickerModalComponent_ion_grid_30_ion_col_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r12 = ctx_r16.index;
    const weekName_r11 = ctx_r16.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", (ctx_r14.mainObj == null ? null : ctx_r14.mainObj.isSundayHighlighted) && i_r12 === 0 ? ctx_r14.mainObj == null ? null : ctx_r14.mainObj.isSundayHighlighted.fontColor : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", weekName_r11, "");
} }
function Ionic4DatepickerModalComponent_ion_grid_30_ion_col_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Ionic4DatepickerModalComponent_ion_grid_30_ion_col_2_div_1_Template, 2, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, Ionic4DatepickerModalComponent_ion_grid_30_ion_col_2_div_2_Template, 2, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.mainObj == null ? null : ctx_r9.mainObj.mondayFirst);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r9.mainObj == null ? null : ctx_r9.mainObj.mondayFirst));
} }
const _c0 = function (a0, a1, a2) { return { "dp-selecteddate": a0, "dp-today": a1, "disabled": a2 }; };
function Ionic4DatepickerModalComponent_ion_grid_30_ion_row_3_ion_col_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-col", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Ionic4DatepickerModalComponent_ion_grid_30_ion_row_3_ion_col_1_Template_ion_col_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const i_r20 = ctx.index; const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r21.dateSelected(ctx_r21.daysList[row_r17 + i_r20]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const row_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", (ctx_r18.daysList[row_r17 + i_r20] == null ? null : ctx_r18.daysList[row_r17 + i_r20].color) ? ctx_r18.daysList[row_r17 + i_r20] == null ? null : ctx_r18.daysList[row_r17 + i_r20].color : "")("border-radius", (ctx_r18.daysList[row_r17 + i_r20] == null ? null : ctx_r18.daysList[row_r17 + i_r20].color) ? "4px" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](8, _c0, (ctx_r18.daysList[row_r17 + i_r20] == null ? null : ctx_r18.daysList[row_r17 + i_r20].epoch) === ctx_r18.selctedDateEpoch, (ctx_r18.daysList[row_r17 + i_r20] == null ? null : ctx_r18.daysList[row_r17 + i_r20].epoch) == ctx_r18.today, ctx_r18.daysList[row_r17 + i_r20] == null ? null : ctx_r18.daysList[row_r17 + i_r20].disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", (ctx_r18.daysList[row_r17 + i_r20] == null ? null : ctx_r18.daysList[row_r17 + i_r20].fontColor) ? ctx_r18.daysList[row_r17 + i_r20] == null ? null : ctx_r18.daysList[row_r17 + i_r20].fontColor : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r18.daysList[row_r17 + col_r19] == null ? null : ctx_r18.daysList[row_r17 + col_r19].date, " ");
} }
function Ionic4DatepickerModalComponent_ion_grid_30_ion_row_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Ionic4DatepickerModalComponent_ion_grid_30_ion_row_3_ion_col_1_Template, 3, 12, "ion-col", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r10.cols);
} }
function Ionic4DatepickerModalComponent_ion_grid_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-grid", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-row", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, Ionic4DatepickerModalComponent_ion_grid_30_ion_col_2_Template, 3, 2, "ion-col", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, Ionic4DatepickerModalComponent_ion_grid_30_ion_row_3_Template, 2, 1, "ion-row", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r5.isMonthYearSelectorOpen ? "dp-virual-scroller-hide" : "dp-virual-scroller-show");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.mainObj == null ? null : ctx_r5.mainObj.weeksList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.rows);
} }
function Ionic4DatepickerModalComponent_ion_item_32_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Ionic4DatepickerModalComponent_ion_item_32_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const monthYear_r25 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r27.onChangeMonthYear(monthYear_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const monthYear_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", i_r26 + "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r6.selectedYearOrMonth === monthYear_r25 ? "dp-selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](monthYear_r25);
} }
function Ionic4DatepickerModalComponent_ion_col_40_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Ionic4DatepickerModalComponent_ion_col_40_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.setIonicDatePickerTodayDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("expand", ctx_r7.mainObj == null ? null : ctx_r7.mainObj.btnProperties == null ? null : ctx_r7.mainObj.btnProperties.expand);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("fill", ctx_r7.mainObj == null ? null : ctx_r7.mainObj.btnProperties == null ? null : ctx_r7.mainObj.btnProperties.fill);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("size", ctx_r7.mainObj == null ? null : ctx_r7.mainObj.btnProperties == null ? null : ctx_r7.mainObj.btnProperties.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("color", ctx_r7.mainObj == null ? null : ctx_r7.mainObj.btnProperties == null ? null : ctx_r7.mainObj.btnProperties.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("disabled", ctx_r7.mainObj == null ? null : ctx_r7.mainObj.btnProperties == null ? null : ctx_r7.mainObj.btnProperties.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("strong", ctx_r7.mainObj == null ? null : ctx_r7.mainObj.btnProperties == null ? null : ctx_r7.mainObj.btnProperties.strong);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.mainObj == null ? null : ctx_r7.mainObj.todayLabel, " ");
} }
function Ionic4DatepickerModalComponent_ion_col_41_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Ionic4DatepickerModalComponent_ion_col_41_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.setIonicDatePickerDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("expand", ctx_r8.mainObj == null ? null : ctx_r8.mainObj.btnProperties == null ? null : ctx_r8.mainObj.btnProperties.expand);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("fill", ctx_r8.mainObj == null ? null : ctx_r8.mainObj.btnProperties == null ? null : ctx_r8.mainObj.btnProperties.fill);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("size", ctx_r8.mainObj == null ? null : ctx_r8.mainObj.btnProperties == null ? null : ctx_r8.mainObj.btnProperties.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("color", ctx_r8.mainObj == null ? null : ctx_r8.mainObj.btnProperties == null ? null : ctx_r8.mainObj.btnProperties.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("disabled", (ctx_r8.mainObj == null ? null : ctx_r8.mainObj.btnProperties == null ? null : ctx_r8.mainObj.btnProperties.disabled) || !ctx_r8.isSelectedDateFound);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("strong", ctx_r8.mainObj == null ? null : ctx_r8.mainObj.btnProperties == null ? null : ctx_r8.mainObj.btnProperties.strong);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r8.mainObj == null ? null : ctx_r8.mainObj.setLabel, " ");
} }
const _c1 = function (a0) { return { "pointer_events_none": a0 }; };
class Ionic4DatepickerService {
    constructor() {
        this.isModalOpen = false;
    }
}
Ionic4DatepickerService.ɵfac = function Ionic4DatepickerService_Factory(t) { return new (t || Ionic4DatepickerService)(); };
Ionic4DatepickerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: Ionic4DatepickerService, factory: Ionic4DatepickerService.ɵfac, providedIn: 'root' });
/** @nocollapse */
Ionic4DatepickerService.ctorParameters = () => [];
/** @nocollapse */ Ionic4DatepickerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function Ionic4DatepickerService_Factory() { return new Ionic4DatepickerService(); }, token: Ionic4DatepickerService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Ionic4DatepickerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic4-datepicker-modal/ionic4-datepicker-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment = moment__WEBPACK_IMPORTED_MODULE_0__;
class Ionic4DatepickerModalComponent {
    /**
     * @param {?} navParams
     * @param {?} modalCtrl
     * @param {?} datePickerService
     */
    constructor(navParams, modalCtrl, datePickerService) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.datePickerService = datePickerService;
        // inputs
        this.mainObj = {};
        this.selectedDate = {};
        // component variables
        this.selctedDateEpoch = 0;
        this.disabledDates = [];
        this.highlightedDates = {};
        this.disableWeekdays = [];
        this.data = {
            currentMonth: '',
            currentYear: '',
            currentMonthSelected: ''
        };
        this.rows = [0, 7, 14, 21, 28, 35];
        this.cols = [0, 1, 2, 3, 4, 5, 6];
        this.monthsList = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        this.weeksList = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this.yearsList = [];
        this.daysList = [];
        this.yearInAscending = false;
        this.momentLocale = 'en-US';
        // month year scroll variables
        this.isMonthYearSelectorOpen = false;
        this.scrollingMonthOrYearArray = [];
        this.isSelectedDateFound = false;
        this.today = this.resetHMSM(new Date()).getTime();
        if (this.navParams.get('selectedDate')) {
            // console.log('Selected date =>', this.navParams.get('selectedDate'));
            this.selectedDate.date = this.navParams.get('selectedDate');
            this.isSelectedDateFound = true;
        }
        this.mainObj = this.initDatePickerObj(this.navParams.get('objConfig'));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.datePickerService.isModalOpen = true;
        this.initDatePicker();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.datePickerService.isModalOpen = false;
    }
    // Reset the hours, minutes, seconds and milli seconds
    /**
     * @param {?} currentDate
     * @return {?}
     */
    resetHMSM(currentDate) {
        currentDate.setHours(0);
        currentDate.setMinutes(0);
        currentDate.setSeconds(0);
        currentDate.setMilliseconds(0);
        return currentDate;
    }
    // this method change month or year list to dateList
    /**
     * @return {?}
     */
    changeToDateList() {
        // console.log('changeToDateList');
        this.isMonthYearSelectorOpen = false;
    }
    // Virtual scroll create for select year and month
    /**
     * @param {?} isMonthSelect
     * @return {?}
     */
    selectMonthYear(isMonthSelect) {
        // console.log('selectMonthYear', i);
        this.isMonthYearSelectorOpen = true;
        this.isMonthSelect = isMonthSelect;
        this.scrollingMonthOrYearArray = isMonthSelect ? this.mainObj.monthsList : this.yearsList;
        this.selectedYearOrMonth = isMonthSelect ? this.data.currentMonth : this.data.currentYear;
        /** @type {?} */
        const index = this.scrollingMonthOrYearArray.indexOf(this.selectedYearOrMonth);
        /** @type {?} */
        const iditem = index + 'list';
        /** @type {?} */
        let timeout = 100;
        if (!isMonthSelect && this.scrollingMonthOrYearArray.length >= 100) {
            if (this.scrollingMonthOrYearArray.length <= 200) {
                timeout = 250;
            }
            else if (this.scrollingMonthOrYearArray.length <= 300) {
                timeout = 400;
            }
            else if (this.scrollingMonthOrYearArray.length <= 500) {
                timeout = 550;
            }
            else {
                timeout = 1000;
            }
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            document.getElementById(iditem).scrollIntoView();
        }), timeout);
    }
    // select month or year
    /**
     * @param {?} monthYear
     * @return {?}
     */
    onChangeMonthYear(monthYear) {
        // console.log('onChangeMonthYear', monthYear);
        if (monthYear) {
            if (this.isMonthSelect) {
                this.data.currentMonth = monthYear;
                this.selectedYearOrMonth = this.data.currentMonth;
                /** @type {?} */
                const monthNumber = this.monthsList.indexOf(this.data.currentMonth);
                this.currentDate.setDate(1);
                this.currentDate.setMonth(monthNumber);
            }
            else {
                this.data.currentYear = monthYear;
                this.selectedYearOrMonth = this.data.currentYear;
                this.currentDate.setFullYear(this.data.currentYear);
                this.refreshDateList(this.currentDate);
            }
            this.refreshDateList(this.currentDate);
        }
        this.isMonthYearSelectorOpen = false;
    }
    // Previous month
    /**
     * @return {?}
     */
    prevMonth() {
        // console.log('prevNext', this.currentDate);
        /** @type {?} */
        const currentMonth = this.currentDate.getMonth();
        /** @type {?} */
        const currentYear = this.currentDate.getFullYear();
        if (currentYear <= this.yearsList[(this.yearsList.length - 1)] && currentMonth === 0) {
            return;
        }
        if (currentMonth === 1) {
            this.currentDate.setFullYear(currentYear);
        }
        this.currentDate.setMonth(currentMonth - 1);
        this.data.currentMonth = this.mainObj.monthsList[currentMonth];
        this.data.currentYear = currentYear;
        this.refreshDateList(this.currentDate);
        // this.changeDaySelected();
    }
    // Next month
    /**
     * @return {?}
     */
    nextMonth() {
        // console.log('nextNext', this.currentDate);
        /** @type {?} */
        const currentMonth = this.currentDate.getMonth();
        /** @type {?} */
        const currentYear = this.currentDate.getFullYear();
        if (currentYear >= this.yearsList[0] && currentMonth === 11) {
            return;
        }
        if (currentMonth === 11) {
            this.currentDate.setFullYear(currentYear);
        }
        this.currentDate.setDate(1);
        this.currentDate.setMonth(currentMonth + 1);
        this.data.currentMonth = this.mainObj.monthsList[currentMonth];
        this.data.currentYear = currentYear;
        this.refreshDateList(this.currentDate);
        // this.changeDaySelected();
    }
    // changeDaySelected ( day selection changes )
    /**
     * @return {?}
     */
    changeDaySelected() {
        // console.log('changeDaySelected');
        /** @type {?} */
        const newSelectedDate = new Date(this.selctedDateEpoch);
        newSelectedDate.setMonth(this.currentDate.getMonth());
        newSelectedDate.setYear(this.currentDate.getFullYear());
        this.selctedDateEpoch = newSelectedDate.getTime();
        this.selectedDateString = this.formatDate();
        // this.closeModal(this.selctedDateEpoch);
    }
    // Date selected
    /**
     * @param {?} selectedDate
     * @return {?}
     */
    dateSelected(selectedDate) {
        // console.log('dateSelected =>', selectedDate);
        if (selectedDate && !selectedDate.disabled) {
            if (!selectedDate || Object.keys(selectedDate).length === 0) {
                return;
            }
            this.isSelectedDateFound = true;
            this.selctedDateEpoch = selectedDate.epoch;
            this.selectedDateString = this.formatDate();
            if (this.mainObj.closeOnSelect) {
                this.closeModal(this.selctedDateEpoch);
            }
        }
    }
    // Set today as date for the modal
    /**
     * @return {?}
     */
    setIonicDatePickerTodayDate() {
        // console.log('setIonicDatePickerTodayDate');
        /** @type {?} */
        const today = new Date(this.today);
        /** @type {?} */
        const today_obj = {
            date: today.getDate(),
            month: today.getMonth(),
            year: today.getFullYear(),
            day: today.getDay(),
            epoch: today.getTime(),
            disabled: false
        };
        this.dateSelected(today_obj);
        this.refreshDateList(new Date());
        this.selctedDateEpoch = this.resetHMSM(today).getTime();
        this.selectedDateString = this.formatDate();
        // this.closeModal(this.selctedDateEpoch);
    }
    // Set date for the modal
    /**
     * @return {?}
     */
    setIonicDatePickerDate() {
        // console.log('setIonicDatePickerDate');
        this.closeModal(this.selctedDateEpoch);
    }
    // Setting the disabled dates list.
    /**
     * @param {?} obj
     * @return {?}
     */
    setDisabledDates(obj) {
        // console.log('setDisabledDates =>', obj);
        if (!obj.disabledDates || obj.disabledDates.length === 0) {
            this.disabledDates = [];
        }
        else {
            this.disabledDates = [];
            for (let i = 0; i < obj.disabledDates.length; i++) {
                // val = resetHMSM(new Date(val));
                this.disabledDates.push(this.resetHMSM(new Date(obj.disabledDates[i])).getTime());
            }
        }
    }
    // Set hightlighted dates
    /**
     * @param {?} obj
     * @return {?}
     */
    setHightlightedDates(obj) {
        if (!obj.highlightedDates || obj.highlightedDates.length === 0) {
            this.highlightedDates = {};
        }
        else {
            this.highlightedDates = {};
            for (let i = 0; i < obj.highlightedDates.length; i++) {
                /** @type {?} */
                const hDate = obj.highlightedDates[i].date;
                /** @type {?} */
                const hColor = obj.highlightedDates[i].color;
                /** @type {?} */
                const hFontColor = obj.highlightedDates[i].fontColor;
                /** @type {?} */
                const hDateTime = this.resetHMSM(new Date(hDate)).getTime();
                this.highlightedDates[hDateTime] = { color: hColor, fontColor: hFontColor };
            }
        }
    }
    // Refresh the list of the dates of a month
    /**
     * @param {?} currentDate
     * @return {?}
     */
    refreshDateList(currentDate) {
        // console.log('refreshDateList =>', currentDate);
        currentDate = this.resetHMSM(currentDate);
        this.currentDate = currentDate;
        /** @type {?} */
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDate();
        /** @type {?} */
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        this.monthsList = [];
        if (this.mainObj.monthsList && this.mainObj.monthsList.length === 12) {
            this.monthsList = this.mainObj.monthsList;
        }
        else {
            this.monthsList = this.monthsList;
        }
        this.yearsList = this.getYearsList(this.mainObj.from, this.mainObj.to);
        this.daysList = [];
        /** @type {?} */
        let tempDate;
        /** @type {?} */
        let disabled;
        this.firstDayEpoch = this.resetHMSM(new Date(currentDate.getFullYear(), currentDate.getMonth(), firstDay)).getTime();
        this.lastDayEpoch = this.resetHMSM(new Date(currentDate.getFullYear(), currentDate.getMonth(), lastDay)).getTime();
        for (let i = firstDay; i <= lastDay; i++) {
            tempDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            disabled = false;
            /** @type {?} */
            const day = tempDate.getDay();
            if (this.disableWeekdays.length > 0) {
                if (this.disableWeekdays.indexOf(day) >= 0) {
                    disabled = this.disableWeekdays.indexOf(day) >= 0;
                }
                else {
                    disabled = false;
                }
            }
            if (this.disabledDates.length > 0) {
                if (this.disabledDates.indexOf(tempDate.getTime()) >= 0) {
                    disabled = true;
                }
            }
            if (this.fromDate && !disabled) {
                disabled = (tempDate.getTime() < this.fromDate)
                    || this.mainObj.disableWeekDays.indexOf(tempDate.getDay()) >= 0;
            }
            if (this.toDate && !disabled) {
                disabled = (tempDate.getTime() > this.toDate)
                    || this.mainObj.disableWeekDays.indexOf(tempDate.getDay()) >= 0;
            }
            /** @type {?} */
            const hightLightDate = this.highlightedDates[tempDate.getTime()];
            /** @type {?} */
            let fontColor = null;
            if (tempDate.getDay() === 0 && this.mainObj.isSundayHighlighted && this.mainObj.isSundayHighlighted.fontColor) {
                fontColor = this.mainObj.isSundayHighlighted.fontColor;
            }
            else if (hightLightDate && hightLightDate.fontColor) {
                fontColor = hightLightDate.fontColor;
            }
            this.daysList.push({
                date: tempDate.getDate(),
                month: tempDate.getMonth(),
                year: tempDate.getFullYear(),
                day: tempDate.getDay(),
                epoch: tempDate.getTime(),
                disabled: disabled,
                color: hightLightDate && hightLightDate.color ? hightLightDate.color : null,
                fontColor: fontColor
                // fontColor: hightLightDate && hightLightDate.fontColor ? hightLightDate.fontColor : null
            });
        }
        // To set Monday as the first day of the week.
        /** @type {?} */
        let firstDayMonday = this.daysList[0].day - this.mainObj.mondayFirst;
        firstDayMonday = (firstDayMonday < 0) ? 6 : firstDayMonday;
        for (let j = 0; j < firstDayMonday; j++) {
            this.daysList.unshift({});
        }
        this.rows = [0, 7, 14, 21, 28, 35];
        this.cols = [0, 1, 2, 3, 4, 5, 6];
        this.data.currentMonth = this.mainObj.monthsList[currentDate.getMonth()];
        this.data.currentYear = currentDate.getFullYear();
        this.data.currentMonthSelected = this.data.currentMonth;
        this.currentYearSelected = this.data.currentYear;
        this.numColumns = 7;
    }
    // Setting up the initial object
    /**
     * @param {?} ipObj
     * @return {?}
     */
    setInitialObj(ipObj) {
        // console.log('setInitialObj =>', ipObj);
        this.mainObj = ipObj;
        if (this.isSelectedDateFound) {
            this.isSelectedDateFound = true;
            this.selctedDateEpoch = this.resetHMSM(this.mainObj.inputDate).getTime();
        }
        this.selectedDateString = this.formatDate();
        if (this.mainObj.weeksList && this.mainObj.weeksList.length === 7) {
            this.weeksList = this.mainObj.weeksList;
        }
        if (this.mainObj.mondayFirst) {
            this.weeksList.push(this.mainObj.weeksList.shift());
        }
        if (this.mainObj.yearInAscending) {
            this.yearInAscending = this.mainObj.yearInAscending;
        }
        if (this.mainObj.momentLocale) {
            this.momentLocale = this.mainObj.momentLocale;
        }
        this.disableWeekdays = this.mainObj.disableWeekDays;
        this.setDisabledDates(this.mainObj);
        this.refreshDateList(this.mainObj.inputDate);
    }
    // for dismiss modal
    /**
     * @param {?} selectedDate
     * @return {?}
     */
    closeModal(selectedDate) {
        // console.log('closeModal => ', selectedDate);
        this.modalCtrl.getTop();
        /** @type {?} */
        const formattedDate = moment(selectedDate).format(this.mainObj.dateFormat);
        this.modalCtrl.dismiss({ 'date': formattedDate });
    }
    // close modal button
    /**
     * @return {?}
     */
    closeIonicDatePickerModal() {
        // console.log('closeIonicDatePickerModal');
        this.closeModal(null);
    }
    // get years list  ( GIVE HERE MIN OR MAX YEAR IN DATE_PICKER )
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    getYearsList(from, to) {
        // console.log('getYearsList =>', from, to);
        /** @type {?} */
        const yearsList = [];
        /** @type {?} */
        let minYear = 1950;
        /** @type {?} */
        let maxYear = new Date().getFullYear() + 1;
        minYear = from ? new Date(from).getFullYear() : minYear;
        maxYear = to ? new Date(to).getFullYear() : maxYear;
        // console.log('getYearsList: ', this.yearInAscending);
        if (this.yearInAscending) {
            for (let i = minYear; i <= maxYear; i++) {
                yearsList.push(i);
            }
        }
        else {
            for (let i = maxYear; i >= minYear; i--) {
                yearsList.push(i);
            }
        }
        return yearsList;
    }
    // Init Date-Picker
    /**
     * @return {?}
     */
    initDatePicker() {
        this.fromDate = '';
        this.toDate = '';
        // $scope.mainObj = angular.extend({}, config, ipObj);
        if (this.mainObj.from) {
            this.fromDate = this.resetHMSM(new Date(this.mainObj.from)).getTime();
        }
        if (this.mainObj.to) {
            this.toDate = this.resetHMSM(new Date(this.mainObj.to)).getTime();
        }
        // if (ipObj.disableWeekdays && this.config.disableWeekdays) {
        //   this.mainObj.disableWeekDays = ipObj.disableWeekdays.concat(this.config.disableWeekdays);
        // }
        this.setInitialObj(this.mainObj);
    }
    // Init DatePicker Object
    /**
     * @param {?} config
     * @return {?}
     */
    initDatePickerObj(config) {
        // const config = this.mainObj;
        if (config.inputDate && !this.selectedDate.date) {
            this.isSelectedDateFound = true;
            this.selectedDate.date = config.inputDate;
        }
        /** @type {?} */
        const objConfig = {};
        objConfig.from = config.fromDate ? config.fromDate : '';
        objConfig.to = config.toDate ? config.toDate : '';
        objConfig.showTodayButton = config.showTodayButton === undefined ? true : config.showTodayButton;
        objConfig.closeOnSelect = config.closeOnSelect ? config.closeOnSelect : false;
        objConfig.disableWeekDays = config.disableWeekDays ? config.disableWeekDays : [];
        objConfig.mondayFirst = config.mondayFirst ? config.mondayFirst : false;
        objConfig.setLabel = config.setLabel ? config.setLabel : 'Set';
        objConfig.todayLabel = config.todayLabel ? config.todayLabel : 'Today';
        objConfig.closeLabel = config.closeLabel ? config.closeLabel : 'Close';
        objConfig.disabledDates = config.disabledDates ? config.disabledDates : [];
        objConfig.titleLabel = config.titleLabel ? config.titleLabel : null;
        objConfig.monthsList = config.monthsList ? config.monthsList : this.monthsList;
        objConfig.monthsList = [...objConfig.monthsList];
        objConfig.weeksList = config.weeksList ? config.weeksList : this.weeksList;
        objConfig.weeksList = [...objConfig.weeksList];
        objConfig.dateFormat = config.dateFormat ? config.dateFormat : 'DD MMM YYYY';
        // console.log(this.selectedDate.date, objConfig.dateFormat, moment.locale());
        objConfig.clearButton = config.clearButton ? config.clearButton : false;
        objConfig.yearInAscending = config.yearInAscending ? config.yearInAscending : false;
        objConfig.momentLocale = config.momentLocale ? config.momentLocale : 'en-US';
        moment.locale(objConfig.momentLocale);
        objConfig.inputDate = this.selectedDate.date ? moment(this.selectedDate.date, objConfig.dateFormat).toDate() : new Date();
        objConfig.btnCloseSetInReverse = config.btnCloseSetInReverse ? config.btnCloseSetInReverse : false;
        objConfig.btnProperties = {};
        if (config.btnProperties) {
            /** @type {?} */
            const btnProperties = config.btnProperties;
            objConfig.btnProperties.expand = btnProperties.expand ? btnProperties.expand : 'block';
            objConfig.btnProperties.fill = btnProperties.fill ? btnProperties.fill : 'solid';
            objConfig.btnProperties.size = btnProperties.size ? btnProperties.size : 'default';
            objConfig.btnProperties.color = btnProperties.color ? btnProperties.color : '';
            objConfig.btnProperties.disabled = btnProperties.disabled ? btnProperties.disabled : false;
            objConfig.btnProperties.strong = btnProperties.strong ? btnProperties.strong : false;
        }
        else {
            objConfig.btnProperties.expand = 'block';
            objConfig.btnProperties.fill = 'solid';
            objConfig.btnProperties.size = 'default';
            objConfig.btnProperties.disabled = false;
            objConfig.btnProperties.strong = false;
        }
        objConfig.arrowNextPrev = {};
        if (config.arrowNextPrev) {
            /** @type {?} */
            const arrowNextPrev = config.arrowNextPrev;
            objConfig.arrowNextPrev.nextArrowSrc = arrowNextPrev.nextArrowSrc ? arrowNextPrev.nextArrowSrc : false;
            objConfig.arrowNextPrev.prevArrowSrc = arrowNextPrev.prevArrowSrc ? arrowNextPrev.prevArrowSrc : false;
        }
        objConfig.highlightedDates = [];
        if (config.highlightedDates && config.highlightedDates.length > 0) {
            objConfig.highlightedDates = config.highlightedDates;
            this.setHightlightedDates(objConfig);
        }
        objConfig.isSundayHighlighted = {};
        if (config.isSundayHighlighted) {
            /** @type {?} */
            const isSundayHighlighted = config.isSundayHighlighted;
            objConfig.isSundayHighlighted.fontColor = isSundayHighlighted.fontColor ? isSundayHighlighted.fontColor : null;
        }
        // console.log('config =>', objConfig);
        return objConfig;
    }
    // Format date
    /**
     * @return {?}
     */
    formatDate() {
        // console.log('formatDate: ', this.selctedDateEpoch, new Date(this.selctedDateEpoch));
        return moment(this.selctedDateEpoch).format(this.mainObj.dateFormat);
    }
}
Ionic4DatepickerModalComponent.ɵfac = function Ionic4DatepickerModalComponent_Factory(t) { return new (t || Ionic4DatepickerModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](Ionic4DatepickerService)); };
Ionic4DatepickerModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Ionic4DatepickerModalComponent, selectors: [["li-ionic4-datepicker-modal"]], viewQuery: function Ionic4DatepickerModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 42, vars: 28, consts: [[3, "click"], [4, "ngIf"], ["forceOverscroll", "false", 1, "ionic_datepicker_modal_content", "ion-no-padding"], [1, "dp-month-year-container", "ion-no-padding", 3, "ngClass"], ["size", "1.5", 1, "dp-left-right-arrow", 3, "click"], [3, "ngClass"], ["name", "arrow-back", 4, "ngIf"], [3, "src", 4, "ngIf"], ["size", "9"], ["size", "5.5", 1, "dp-select-month-year", "ion-no-padding", 3, "click"], [1, "dp-buttons"], ["name", "md-arrow-dropdown", 1, "dp-down-arrow"], ["size", "1"], ["name", "arrow-forward", 4, "ngIf"], ["class", "dp-weeks-container", 3, "ngClass", 4, "ngIf"], [1, "dp-month-year-scroll-container", 3, "ngClass"], [3, "id", "click", 4, "ngFor", "ngForOf"], [1, "ion-no-padding"], [1, "ion-no-padding", 3, "ngClass"], [1, "ion-button", 3, "expand", "fill", "size", "color", "disabled", "strong", "click"], ["class", "ion-no-padding", 4, "ngIf"], ["name", "arrow-back"], [3, "src"], ["name", "arrow-forward"], [1, "dp-weeks-container", 3, "ngClass"], [1, "dp-weeks-name"], [4, "ngFor", "ngForOf"], ["class", "dp-days-list", 4, "ngFor", "ngForOf"], ["class", "weeks", 3, "color", 4, "ngIf"], [1, "weeks"], [1, "dp-days-list"], ["class", "ion-no-padding", 3, "background-color", "border-radius", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "ion-no-padding", 3, "ngClass", "click"], [1, "days"], [3, "id", "click"]], template: function Ionic4DatepickerModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Ionic4DatepickerModalComponent_Template_ion_toolbar_click_1_listener() { return ctx.changeToDateList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, Ionic4DatepickerModalComponent_h1_3_Template, 2, 1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Ionic4DatepickerModalComponent_Template_ion_col_click_8_listener() { return ctx.prevMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, Ionic4DatepickerModalComponent_ion_icon_10_Template, 1, 0, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, Ionic4DatepickerModalComponent_ion_icon_11_Template, 1, 1, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-col", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Ionic4DatepickerModalComponent_Template_ion_col_click_15_listener() { return ctx.selectMonthYear(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-col", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Ionic4DatepickerModalComponent_Template_ion_col_click_20_listener() { return ctx.selectMonthYear(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Ionic4DatepickerModalComponent_Template_ion_col_click_24_listener() { return ctx.nextMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, Ionic4DatepickerModalComponent_ion_icon_26_Template, 1, 0, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, Ionic4DatepickerModalComponent_ion_icon_27_Template, 1, 1, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, Ionic4DatepickerModalComponent_ion_grid_30_Template, 4, 3, "ion-grid", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ion-list", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, Ionic4DatepickerModalComponent_ion_item_32_Template, 3, 3, "ion-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "ion-grid", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "ion-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "ion-col", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "ion-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Ionic4DatepickerModalComponent_Template_ion_button_click_38_listener() { return ctx.closeIonicDatePickerModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, Ionic4DatepickerModalComponent_ion_col_40_Template, 3, 7, "ion-col", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, Ionic4DatepickerModalComponent_ion_col_41_Template, 3, 7, "ion-col", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mainObj == null ? null : ctx.mainObj.titleLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.selectedDateString, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.isMonthYearSelectorOpen ? "dp-virual-scroller-hide" : "dp-virual-scroller-show");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](24, _c1, ctx.firstDayEpoch - 86400000 < ctx.fromDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.mainObj == null ? null : ctx.mainObj.arrowNextPrev == null ? null : ctx.mainObj.arrowNextPrev.prevArrowSrc));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mainObj == null ? null : ctx.mainObj.arrowNextPrev == null ? null : ctx.mainObj.arrowNextPrev.prevArrowSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.currentMonth, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.currentYear, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](26, _c1, ctx.lastDayEpoch + 86400000 > ctx.toDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.mainObj == null ? null : ctx.mainObj.arrowNextPrev == null ? null : ctx.mainObj.arrowNextPrev.nextArrowSrc));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mainObj == null ? null : ctx.mainObj.arrowNextPrev == null ? null : ctx.mainObj.arrowNextPrev.nextArrowSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.daysList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.isMonthYearSelectorOpen ? "dp-virual-scroller-show" : "dp-virual-scroller-hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.scrollingMonthOrYearArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", (ctx.mainObj == null ? null : ctx.mainObj.btnCloseSetInReverse) ? "dp-btn-set-close-in-reverse" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("expand", ctx.mainObj == null ? null : ctx.mainObj.btnProperties == null ? null : ctx.mainObj.btnProperties.expand);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("fill", ctx.mainObj == null ? null : ctx.mainObj.btnProperties == null ? null : ctx.mainObj.btnProperties.fill);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("size", ctx.mainObj == null ? null : ctx.mainObj.btnProperties == null ? null : ctx.mainObj.btnProperties.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("color", ctx.mainObj == null ? null : ctx.mainObj.btnProperties == null ? null : ctx.mainObj.btnProperties.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("disabled", ctx.mainObj == null ? null : ctx.mainObj.btnProperties == null ? null : ctx.mainObj.btnProperties.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("strong", ctx.mainObj == null ? null : ctx.mainObj.btnProperties == null ? null : ctx.mainObj.btnProperties.strong);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.mainObj == null ? null : ctx.mainObj.closeLabel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mainObj == null ? null : ctx.mainObj.showTodayButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.mainObj == null ? null : ctx.mainObj.closeOnSelect));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"]], styles: ["[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]{height:60px}[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:var(--ion-color-primary);height:100%;align-items:center;display:flex;color:var(--ion-color-primary-contrast)}[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;text-align:center;padding:0;display:flex;align-items:center;justify-content:center;height:100%;cursor:pointer}[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:14px;margin:0 0 4px}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-month-year-container[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-month-year-container[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-month-year-container[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   .dp-select-month-year[_ngcontent-%COMP%]{border-bottom:1.5px solid;border-bottom-color:var(--ion-color-primary)}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-month-year-container[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   .dp-select-month-year[_ngcontent-%COMP%]   .dp-buttons[_ngcontent-%COMP%]{width:100%;height:40px;margin:0;padding:0;color:var(--ion-color-primary);--background:transparent;--box-shadow:none}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-month-year-container[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   .dp-select-month-year[_ngcontent-%COMP%]   .dp-buttons.activated[_ngcontent-%COMP%]{--background-activated:transparent;--color-activated:var(--ion-color-primary)}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-month-year-container[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   .dp-select-month-year[_ngcontent-%COMP%]   .dp-down-arrow[_ngcontent-%COMP%]{position:absolute;width:16px;right:0;top:10px;color:var(--ion-color-primary)}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-month-year-container[_ngcontent-%COMP%]   .dp-left-right-arrow[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background:transparent;--box-shadow:0;color:var(--ion-color-primary)}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-month-year-container[_ngcontent-%COMP%]   .dp-left-right-arrow[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:focus{outline:0}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-month-year-container[_ngcontent-%COMP%]   .dp-left-right-arrow[_ngcontent-%COMP%]   ion-button.activated[_ngcontent-%COMP%]{--ion-color-primary-shade:transparent;--ion-color-primary-contrast:var(--ion-color-primary-tint)}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-weeks-container[_ngcontent-%COMP%]{margin:8px 0}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-weeks-container[_ngcontent-%COMP%]   .dp-weeks-name[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-weeks-container[_ngcontent-%COMP%]   .dp-weeks-name[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .weeks[_ngcontent-%COMP%]{width:14%;display:flex;justify-content:center;font-weight:700}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-weeks-container[_ngcontent-%COMP%]   .dp-days-list[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px;cursor:pointer}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-weeks-container[_ngcontent-%COMP%]   .dp-days-list[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]{width:14%;display:flex;justify-content:center}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-selecteddate[_ngcontent-%COMP%]{background:var(--ion-color-primary);color:var(--ion-color-primary-contrast);border-radius:4px;font-weight:500}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-today[_ngcontent-%COMP%]{border-radius:4px;font-weight:500;border:1px solid;border-color:var(--ion-color-primary)}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-month-year-scroll-container[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;margin:0;overflow-y:scroll}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-month-year-scroll-container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start:0;--inner-padding-end:0;--inner-border-width:0}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-month-year-scroll-container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{text-align:center;margin:0;font-size:16px}[_nghost-%COMP%]   .ionic_datepicker_modal_content[_ngcontent-%COMP%]   .dp-month-year-scroll-container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.dp-selected[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-size:20px;font-weight:500}[_nghost-%COMP%]   .disabled[_ngcontent-%COMP%]{color:#aaa}[_nghost-%COMP%]   .dp-virual-scroller-show[_ngcontent-%COMP%]{transition:opacity .3s ease-in;opacity:1;visibility:visible}[_nghost-%COMP%]   .dp-virual-scroller-hide[_ngcontent-%COMP%]{opacity:0;visibility:hidden;height:auto}[_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]{height:55px}[_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{height:100%;--border-width:0;--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px}[_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .toolbar-container[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .dp-btn-set-close-in-reverse[_ngcontent-%COMP%]{flex-direction:row-reverse}[_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-radius:0;height:55px;margin:0}[_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:focus{outline:0}[_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button.activated[_ngcontent-%COMP%]{--background-activated:var(--ion-color-primary-tint);--color-activated:var(--ion-color-primary-contrast)}"] });
/** @nocollapse */
Ionic4DatepickerModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: Ionic4DatepickerService }
];
Ionic4DatepickerModalComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Ionic4DatepickerModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'li-ionic4-datepicker-modal',
                template: "<ion-header>\n  <ion-toolbar (click)=\"changeToDateList()\">\n    <ion-title>\n      <h1 *ngIf=\"mainObj?.titleLabel\">{{mainObj?.titleLabel}}</h1>\n      {{selectedDateString}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content forceOverscroll=\"false\" class=\"ionic_datepicker_modal_content ion-no-padding\">\n  <ion-grid class=\"dp-month-year-container ion-no-padding\"\n    [ngClass]=\"isMonthYearSelectorOpen ? 'dp-virual-scroller-hide' : 'dp-virual-scroller-show'\">\n    <ion-row>\n      <ion-col size=\"1.5\" class=\"dp-left-right-arrow\" (click)=\"prevMonth()\">\n        <ion-button [ngClass]=\"{'pointer_events_none':((firstDayEpoch - 86400000) < fromDate)}\">\n          <ion-icon *ngIf=\"!mainObj?.arrowNextPrev?.prevArrowSrc\" name=\"arrow-back\"></ion-icon>\n          <ion-icon *ngIf=\"mainObj?.arrowNextPrev?.prevArrowSrc\" src=\"{{mainObj?.arrowNextPrev?.prevArrowSrc}}\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"dp-select-month-year ion-no-padding\" size=\"5.5\" (click)=\"selectMonthYear(true)\">\n              <ion-button class=\"dp-buttons\">\n                {{ data.currentMonth }}\n                <ion-icon name=\"md-arrow-dropdown\" class=\"dp-down-arrow\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"1\"></ion-col>\n            <ion-col class=\"dp-select-month-year ion-no-padding\" size=\"5.5\" (click)=\"selectMonthYear(false)\">\n              <ion-button class=\"dp-buttons\">\n                {{ data.currentYear }}\n                <ion-icon name=\"md-arrow-dropdown\" class=\"dp-down-arrow\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n      <ion-col size=\"1.5\" class=\"dp-left-right-arrow\" (click)=\"nextMonth()\">\n        <ion-button [ngClass]=\"{'pointer_events_none':((lastDayEpoch + 86400000)> toDate)}\">\n          <ion-icon *ngIf=\"!mainObj?.arrowNextPrev?.nextArrowSrc\" name=\"arrow-forward\"></ion-icon>\n          <ion-icon *ngIf=\"mainObj?.arrowNextPrev?.nextArrowSrc\" src=\"{{mainObj?.arrowNextPrev?.nextArrowSrc}}\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-grid class=\"dp-weeks-container\" *ngIf=\"daysList\" [ngClass]=\"isMonthYearSelectorOpen ? 'dp-virual-scroller-hide' : 'dp-virual-scroller-show'\">\n          <ion-row class=\" dp-weeks-name\">\n            <ion-col *ngFor=\"let weekName of mainObj?.weeksList; let i = index\">\n              <!-- <div class=\"weeks\">{{weekName}} {{i}}</div> -->\n              <div class=\"weeks\" *ngIf=\"mainObj?.mondayFirst\"\n              [style.color]=\"mainObj?.isSundayHighlighted && i === 6 ? mainObj?.isSundayHighlighted.fontColor : ''\">\n               {{weekName}}</div>\n              <div class=\"weeks\" *ngIf=\"!mainObj?.mondayFirst\"\n              [style.color]=\"mainObj?.isSundayHighlighted && i === 0 ? mainObj?.isSundayHighlighted.fontColor : ''\">\n               {{weekName}}</div>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let row of rows;\" class=\"dp-days-list\">\n            <ion-col *ngFor=\"let col of cols; let i = index ;\" (click)=\"dateSelected(daysList[row + i])\"\n              [style.background-color]=\"(daysList[row + i]?.color) ? (daysList[row + i]?.color) : ''\"\n              [style.border-radius]=\"(daysList[row + i]?.color) ? '4px' : ''\" class=\"ion-no-padding\" [ngClass]=\"{\n                'dp-selecteddate': (daysList[row + i]?.epoch === selctedDateEpoch),\n                'dp-today' : (daysList[row + i]?.epoch == today),\n                'disabled' : (daysList[row + i]?.disabled)}\">\n              <div class=\"days\" [style.color]=\"(daysList[row + i]?.fontColor) ? (daysList[row + i]?.fontColor) : ''\">\n                {{daysList[row + col]?.date}}\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list class=\"dp-month-year-scroll-container\" [ngClass]=\"isMonthYearSelectorOpen ? 'dp-virual-scroller-show' : 'dp-virual-scroller-hide'\">\n    <ion-item *ngFor=\"let monthYear of scrollingMonthOrYearArray;let i=index;\" id=\"{{i +'list'}}\" (click)=\"onChangeMonthYear(monthYear)\">\n      <ion-label [ngClass]=\"selectedYearOrMonth === monthYear ? 'dp-selected' : ''\">{{ monthYear }}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-no-padding\" [ngClass]=\"mainObj?.btnCloseSetInReverse ? 'dp-btn-set-close-in-reverse' : ''\">\n        <ion-col class=\"ion-no-padding\">\n          <ion-button class=\"ion-button\" expand=\"{{mainObj?.btnProperties?.expand}}\"\n            fill=\"{{mainObj?.btnProperties?.fill}}\" size=\"{{mainObj?.btnProperties?.size}}\"\n            color=\"{{mainObj?.btnProperties?.color}}\" disabled=\"{{mainObj?.btnProperties?.disabled}}\"\n            strong=\"{{mainObj?.btnProperties?.strong}}\" (click)=\"closeIonicDatePickerModal()\">\n            {{mainObj?.closeLabel}}\n          </ion-button>\n        </ion-col>\n        <ion-col class=\"ion-no-padding\" *ngIf=\"mainObj?.showTodayButton\">\n          <ion-button class=\"ion-button\" expand=\"{{mainObj?.btnProperties?.expand}}\"\n            fill=\"{{mainObj?.btnProperties?.fill}}\" size=\"{{mainObj?.btnProperties?.size}}\"\n            color=\"{{mainObj?.btnProperties?.color}}\" disabled=\"{{mainObj?.btnProperties?.disabled}}\"\n            strong=\"{{mainObj?.btnProperties?.strong}}\" (click)=\"setIonicDatePickerTodayDate()\">\n            {{mainObj?.todayLabel}}\n          </ion-button>\n        </ion-col>\n        <ion-col class=\"ion-no-padding\" *ngIf=\"!mainObj?.closeOnSelect\">\n          <ion-button class=\"ion-button\" expand=\"{{mainObj?.btnProperties?.expand}}\"\n            fill=\"{{mainObj?.btnProperties?.fill}}\" size=\"{{mainObj?.btnProperties?.size}}\"\n            color=\"{{mainObj?.btnProperties?.color}}\"\n            disabled=\"{{mainObj?.btnProperties?.disabled || !isSelectedDateFound}}\"\n            strong=\"{{mainObj?.btnProperties?.strong}}\" (click)=\"setIonicDatePickerDate()\">\n            {{mainObj?.setLabel}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>",
                styles: [":host ion-header{height:60px}:host ion-header ion-toolbar{--background:var(--ion-color-primary);height:100%;align-items:center;display:flex;color:var(--ion-color-primary-contrast)}:host ion-header ion-toolbar ion-title{font-size:20px;font-weight:700;text-align:center;padding:0;display:flex;align-items:center;justify-content:center;height:100%;cursor:pointer}:host ion-header ion-toolbar ion-title h1{font-size:14px;margin:0 0 4px}:host .ionic_datepicker_modal_content .dp-month-year-container ion-col{display:flex;justify-content:center;align-items:center}:host .ionic_datepicker_modal_content .dp-month-year-container ion-col ion-grid{width:100%}:host .ionic_datepicker_modal_content .dp-month-year-container ion-col ion-grid .dp-select-month-year{border-bottom:1.5px solid;border-bottom-color:var(--ion-color-primary)}:host .ionic_datepicker_modal_content .dp-month-year-container ion-col ion-grid .dp-select-month-year .dp-buttons{width:100%;height:40px;margin:0;padding:0;color:var(--ion-color-primary);--background:transparent;--box-shadow:none}:host .ionic_datepicker_modal_content .dp-month-year-container ion-col ion-grid .dp-select-month-year .dp-buttons.activated{--background-activated:transparent;--color-activated:var(--ion-color-primary)}:host .ionic_datepicker_modal_content .dp-month-year-container ion-col ion-grid .dp-select-month-year .dp-down-arrow{position:absolute;width:16px;right:0;top:10px;color:var(--ion-color-primary)}:host .ionic_datepicker_modal_content .dp-month-year-container .dp-left-right-arrow ion-button{--background:transparent;--box-shadow:0;color:var(--ion-color-primary)}:host .ionic_datepicker_modal_content .dp-month-year-container .dp-left-right-arrow ion-button:focus{outline:0}:host .ionic_datepicker_modal_content .dp-month-year-container .dp-left-right-arrow ion-button.activated{--ion-color-primary-shade:transparent;--ion-color-primary-contrast:var(--ion-color-primary-tint)}:host .ionic_datepicker_modal_content .dp-weeks-container{margin:8px 0}:host .ionic_datepicker_modal_content .dp-weeks-container .dp-weeks-name ion-col{display:flex;justify-content:center}:host .ionic_datepicker_modal_content .dp-weeks-container .dp-weeks-name ion-col .weeks{width:14%;display:flex;justify-content:center;font-weight:700}:host .ionic_datepicker_modal_content .dp-weeks-container .dp-days-list ion-col{display:flex;justify-content:center;padding:10px;cursor:pointer}:host .ionic_datepicker_modal_content .dp-weeks-container .dp-days-list ion-col .days{width:14%;display:flex;justify-content:center}:host .ionic_datepicker_modal_content .dp-selecteddate{background:var(--ion-color-primary);color:var(--ion-color-primary-contrast);border-radius:4px;font-weight:500}:host .ionic_datepicker_modal_content .dp-today{border-radius:4px;font-weight:500;border:1px solid;border-color:var(--ion-color-primary)}:host .ionic_datepicker_modal_content .dp-month-year-scroll-container{position:absolute;top:0;bottom:0;left:0;right:0;margin:0;overflow-y:scroll}:host .ionic_datepicker_modal_content .dp-month-year-scroll-container ion-item{--padding-start:0;--inner-padding-end:0;--inner-border-width:0}:host .ionic_datepicker_modal_content .dp-month-year-scroll-container ion-item ion-label{text-align:center;margin:0;font-size:16px}:host .ionic_datepicker_modal_content .dp-month-year-scroll-container ion-item ion-label.dp-selected{color:var(--ion-color-primary);font-size:20px;font-weight:500}:host .disabled{color:#aaa}:host .dp-virual-scroller-show{transition:opacity .3s ease-in;opacity:1;visibility:visible}:host .dp-virual-scroller-hide{opacity:0;visibility:hidden;height:auto}:host ion-footer{height:55px}:host ion-footer ion-toolbar{height:100%;--border-width:0;--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px}:host ion-footer ion-toolbar .toolbar-container{height:100%}:host ion-footer ion-toolbar .dp-btn-set-close-in-reverse{flex-direction:row-reverse}:host ion-footer ion-toolbar ion-button{--border-radius:0;height:55px;margin:0}:host ion-footer ion-toolbar ion-button:focus{outline:0}:host ion-footer ion-toolbar ion-button.activated{--background-activated:var(--ion-color-primary-tint);--color-activated:var(--ion-color-primary-contrast)}"]
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }, { type: Ionic4DatepickerService }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"]]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic4-datepicker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const noop = (/**
 * @return {?}
 */
() => {
});
/** @type {?} */
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])((/**
     * @return {?}
     */
    () => Ionic4DatepickerComponent)),
    multi: true
};
class Ionic4DatepickerComponent {
    /**
     * @param {?} modalCtrl
     * @param {?} el
     * @param {?} renderer2
     */
    constructor(modalCtrl, el, renderer2) {
        this.modalCtrl = modalCtrl;
        this.el = el;
        this.renderer2 = renderer2;
        this.selectedDate = {};
        this.innerValue = '';
        // Placeholders for the callbacks which are later provided
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.inputDateConfig.clearButton !== false) {
            this.closeIcon = document.createElement('ion-icon');
            this.closeIcon.name = 'close-circle';
            this.closeIcon.className = 'clearButton';
            this.closeIcon.style.position = 'absolute';
            this.closeIcon.style.right = '8px';
            this.closeIcon.style.bottom = '0px';
            this.closeIcon.style.fontSize = '18px';
            this.closeIcon.style.color = '#A9A9A9';
            this.closeIcon.style.zIndex = '5';
            if (this.el.nativeElement.parentNode.nodeName === 'ION-ITEM') {
                this.closeIcon.style.bottom = '30%';
            }
            this.el.nativeElement.setAttribute('style', 'position: relative; width: 100%;');
            this.el.nativeElement.appendChild(this.closeIcon);
            this.renderer2.listen(this.closeIcon, 'click', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                // Do something with 'event'
                // console.log('button clicks');
                this.selectedDate = new Date();
                this.value = '';
            }));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChangeValue(value) {
        // console.log('onChangeValue =>' , value);
        if (this.inputDateConfig.clearButton !== false) {
            if (!value) {
                this.closeIcon.style.visibility = 'hidden';
            }
            else {
                this.closeIcon.style.visibility = 'visible';
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    openDatePicker(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('openDatePicker');
            if (value) {
                this.selectedDate.date = value;
            }
            /** @type {?} */
            const datePickerModal = yield this.modalCtrl.create({
                component: Ionic4DatepickerModalComponent,
                cssClass: 'li-ionic4-datePicker',
                componentProps: { 'objConfig': this.inputDateConfig, 'selectedDate': this.selectedDate.date }
            });
            yield datePickerModal.present();
            datePickerModal.onDidDismiss()
                .then((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                // console.log(data);
                if (data.data && data.data.date && data.data.date !== 'Invalid date') {
                    this.selectedDate.date = data.data.date;
                    this.value = data.data.date;
                }
            }));
        });
    }
    // get accessor
    /**
     * @return {?}
     */
    get value() {
        return this.innerValue;
    }
    // set accessor including call the onchange callback
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
        this.onChangeValue(v);
    }
    // Set touched on blur
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouchedCallback();
    }
    // From ControlValueAccessor interface
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
        this.onChangeValue(value);
    }
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
}
Ionic4DatepickerComponent.ɵfac = function Ionic4DatepickerComponent_Factory(t) { return new (t || Ionic4DatepickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"])); };
Ionic4DatepickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Ionic4DatepickerComponent, selectors: [["li-ionic4-datepicker"]], inputs: { inputDateConfig: "inputDateConfig" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR])], decls: 1, vars: 1, consts: [["type", "text", "readonly", "", "start", "", 1, "li-dp-input", 3, "ngModel", "focus", "click", "ngModelChange"]], template: function Ionic4DatepickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function Ionic4DatepickerComponent_Template_input_focus_0_listener($event) { return $event.preventDefault(); })("click", function Ionic4DatepickerComponent_Template_input_click_0_listener() { return ctx.openDatePicker(ctx.value); })("ngModelChange", function Ionic4DatepickerComponent_Template_input_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%]{font-size:16px;margin:6px 0;border:0;border-bottom:1px solid #ccc;width:100%;padding:12px}@media (min-width:768px){[_nghost-%COMP%]   input[_ngcontent-%COMP%]{font-size:18px}}[_nghost-%COMP%]   input.has-focus[_ngcontent-%COMP%], [_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:0;box-shadow:unset}"] });
/** @nocollapse */
Ionic4DatepickerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
];
Ionic4DatepickerComponent.propDecorators = {
    inputDateConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Ionic4DatepickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'li-ionic4-datepicker',
                template: "<input type=\"text\" class=\"li-dp-input\" (focus)=\"$event.preventDefault()\" (click)=\"openDatePicker(value)\" readonly\n    [(ngModel)]=\"value\" start />",
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                styles: [":host input{font-size:16px;margin:6px 0;border:0;border-bottom:1px solid #ccc;width:100%;padding:12px}@media (min-width:768px){:host input{font-size:18px}}:host input.has-focus,:host input:focus{outline:0;box-shadow:unset}"]
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }]; }, { inputDateConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/li-ionic4-datepicker.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LiIonic4DatepickerDirective {
    /**
     * @param {?} modalCtrl
     * @param {?} ngModel
     * @param {?} control
     * @param {?} el
     * @param {?} renderer2
     * @param {?} datePickerService
     */
    constructor(modalCtrl, ngModel, control, el, renderer2, datePickerService) {
        this.modalCtrl = modalCtrl;
        this.ngModel = ngModel;
        this.control = control;
        this.el = el;
        this.renderer2 = renderer2;
        this.datePickerService = datePickerService;
        this.selectedDate = {};
        this.isModalOpen = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('config.yearInAscending : ' + this.inputDateConfig.yearInAscending);
        if (this.inputDateConfig.clearButton !== false) {
            this.closeIcon = document.createElement('ion-icon');
            this.closeIcon.name = 'close-circle';
            this.closeIcon.className = 'clearButton';
            this.closeIcon.style.position = 'absolute';
            this.closeIcon.style.right = '8px';
            this.closeIcon.style.bottom = '30%';
            this.closeIcon.style.fontSize = '18px';
            this.closeIcon.style.color = '#A9A9A9';
            this.closeIcon.style.zIndex = '5';
            if (this.el.nativeElement.parentNode.nodeName === 'ION-ITEM') {
                this.closeIcon.style.bottom = '12px';
            }
            this.el.nativeElement.parentNode.appendChild(this.closeIcon);
            this.renderer2.listen(this.closeIcon, 'click', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                // Do something with 'event'
                // console.log('button clicks');
                this.selectedDate.date = new Date();
                this.control.control.setValue('');
                this.ngModel.update.emit('');
            }));
        }
        /** @type {?} */
        const self = this;
        this.ngModel.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            // console.log('ngModel value =>', value);
            self.selectedDate.date = value;
            if (this.inputDateConfig.clearButton !== false) {
                if (!value) {
                    this.closeIcon.style.visibility = 'hidden';
                }
                else {
                    this.closeIcon.style.visibility = 'visible';
                }
            }
        }));
        this.control.control.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            // console.log('formcontrol value =>', value);
            self.selectedDate.date = value;
            if (this.inputDateConfig.clearButton !== false) {
                if (!value) {
                    this.closeIcon.style.visibility = 'hidden';
                }
                else {
                    this.closeIcon.style.visibility = 'visible';
                }
            }
        }));
        if (this.control.control.value) {
            this.selectedDate.date = this.control.control.value;
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        if (this.datePickerService.isModalOpen) {
            return;
        }
        this.openDatePicker();
    }
    /**
     * @return {?}
     */
    openDatePicker() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('openDatePicker');
            // console.log('openDatePicker');
            /** @type {?} */
            const datePickerModal = yield this.modalCtrl.create({
                component: Ionic4DatepickerModalComponent,
                cssClass: 'li-ionic4-datePicker',
                componentProps: { 'objConfig': this.inputDateConfig, 'selectedDate': this.selectedDate.date }
            });
            yield datePickerModal.present();
            datePickerModal.onDidDismiss()
                .then((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                if (data.data && data.data.date && data.data.date !== 'Invalid date') {
                    this.selectedDate.date = data.data.date;
                    this.control.control.setValue(data.data.date);
                    this.ngModel.update.emit(data.data.date);
                }
            }));
        });
    }
}
LiIonic4DatepickerDirective.ɵfac = function LiIonic4DatepickerDirective_Factory(t) { return new (t || LiIonic4DatepickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](Ionic4DatepickerService)); };
LiIonic4DatepickerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: LiIonic4DatepickerDirective, selectors: [["", "liIonic4Datepicker", ""]], hostBindings: function LiIonic4DatepickerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionFocus", function LiIonic4DatepickerDirective_ionFocus_HostBindingHandler() { return ctx.onFocus(); });
    } }, inputs: { inputDateConfig: ["liIonic4Datepicker", "inputDateConfig"] }, exportAs: ["liIonic4Datepicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]])] });
/** @nocollapse */
LiIonic4DatepickerDirective.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: Ionic4DatepickerService }
];
LiIonic4DatepickerDirective.propDecorators = {
    inputDateConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['liIonic4Datepicker',] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['ionFocus',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](LiIonic4DatepickerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[liIonic4Datepicker]',
                exportAs: 'liIonic4Datepicker',
                providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: Ionic4DatepickerService }]; }, { 
    /**
     * @return {?}
     */
    onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['ionFocus']
        }], inputDateConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['liIonic4Datepicker']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic4-datepicker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Ionic4DatepickerModule {
}
Ionic4DatepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Ionic4DatepickerModule });
Ionic4DatepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function Ionic4DatepickerModule_Factory(t) { return new (t || Ionic4DatepickerModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Ionic4DatepickerModule, { declarations: function () { return [Ionic4DatepickerComponent, LiIonic4DatepickerDirective, Ionic4DatepickerModalComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]]; }, exports: function () { return [Ionic4DatepickerComponent, LiIonic4DatepickerDirective, Ionic4DatepickerModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Ionic4DatepickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]
                ],
                declarations: [
                    Ionic4DatepickerComponent,
                    LiIonic4DatepickerDirective,
                    Ionic4DatepickerModalComponent
                ],
                exports: [
                    Ionic4DatepickerComponent,
                    LiIonic4DatepickerDirective,
                    Ionic4DatepickerModalComponent,
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                entryComponents: [
                    // Ionic4DatepickerComponent,
                    Ionic4DatepickerModalComponent
                ],
                providers: []
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: logisticinfotech-ionic4-datepicker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=logisticinfotech-ionic4-datepicker.js.map

/***/ })

}]);
//# sourceMappingURL=default~business-info-update-business-info-update-module~invoice-add-create-invoice-module~invoice-e~fb1db5f1-es2015.js.map
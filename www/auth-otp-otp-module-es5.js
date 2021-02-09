(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-otp-otp-module"], {
    /***/
    "./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js":
    /*!***************************************************************************!*\
      !*** ./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js ***!
      \***************************************************************************/

    /*! exports provided: CountdownComponent, CountdownGlobalConfig, CountdownModule, CountdownStatus, CountdownTimer */

    /***/
    function node_modulesNgxCountdown__ivy_ngcc__Fesm2015NgxCountdownJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownComponent", function () {
        return CountdownComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownGlobalConfig", function () {
        return CountdownGlobalConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownModule", function () {
        return CountdownModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownStatus", function () {
        return CountdownStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownTimer", function () {
        return CountdownTimer;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function CountdownComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.i.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function CountdownComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          $implicit: a0
        };
      };

      var CountdownStatus;

      (function (CountdownStatus) {
        CountdownStatus[CountdownStatus["ing"] = 0] = "ing";
        CountdownStatus[CountdownStatus["pause"] = 1] = "pause";
        CountdownStatus[CountdownStatus["stop"] = 2] = "stop";
        CountdownStatus[CountdownStatus["done"] = 3] = "done";
      })(CountdownStatus || (CountdownStatus = {}));

      var CountdownTimer = /*#__PURE__*/function () {
        function CountdownTimer(ngZone) {
          _classCallCheck(this, CountdownTimer);

          this.ngZone = ngZone;
          this.fns = [];
          this.commands = [];
          this.ing = false;
        }

        _createClass(CountdownTimer, [{
          key: "start",
          value: function start() {
            var _this = this;

            if (this.ing === true) {
              return;
            }

            this.ing = true;
            this.nextTime = +new Date();
            this.ngZone.runOutsideAngular(function () {
              _this.process();
            });
          }
        }, {
          key: "process",
          value: function process() {
            var _this2 = this;

            while (this.commands.length) {
              this.commands.shift()();
            }

            var diff = +new Date() - this.nextTime;
            var count = 1 + Math.floor(diff / 100);
            diff = 100 - diff % 100;
            this.nextTime += 100 * count;

            for (var i = 0, len = this.fns.length; i < len; i += 2) {
              var frequency = this.fns[i + 1]; // 100/s

              if (0 === frequency) {
                this.fns[i](count); // 1000/s
              } else {
                // 先把末位至0，再每次加2
                frequency += 2 * count - 1;
                var step = Math.floor(frequency / 20);

                if (step > 0) {
                  this.fns[i](step);
                } // 把末位还原成1


                this.fns[i + 1] = frequency % 20 + 1;
              }
            }

            if (!this.ing) {
              return;
            }

            setTimeout(function () {
              return _this2.process();
            }, diff);
          }
        }, {
          key: "add",
          value: function add(fn, frequency) {
            var _this3 = this;

            this.commands.push(function () {
              _this3.fns.push(fn);

              _this3.fns.push(frequency === 1000 ? 1 : 0);

              _this3.ing = true;
            });
            return this;
          }
        }, {
          key: "remove",
          value: function remove(fn) {
            var _this4 = this;

            this.commands.push(function () {
              var i = _this4.fns.indexOf(fn);

              if (i !== -1) {
                _this4.fns.splice(i, 2);
              }

              _this4.ing = _this4.fns.length > 0;
            });
            return this;
          }
        }]);

        return CountdownTimer;
      }();

      CountdownTimer.ɵfac = function CountdownTimer_Factory(t) {
        return new (t || CountdownTimer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      CountdownTimer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CountdownTimer,
        factory: CountdownTimer.ɵfac
      });

      CountdownTimer.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownTimer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })(); // tslint:disable: no-inferrable-types


      var CountdownGlobalConfig = function CountdownGlobalConfig(locale) {
        var _this5 = this;

        _classCallCheck(this, CountdownGlobalConfig);

        this.locale = locale;
        this.demand = false;
        this.leftTime = 0;
        this.format = 'HH:mm:ss';
        this.timezone = '+0000';

        this.formatDate = function (_ref) {
          var date = _ref.date,
              formatStr = _ref.formatStr,
              timezone = _ref.timezone;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(date), formatStr, _this5.locale, timezone || _this5.timezone || '+0000'); // tslint:disable-next-line: semicolon
        };
      };

      CountdownGlobalConfig.ɵfac = function CountdownGlobalConfig_Factory(t) {
        return new (t || CountdownGlobalConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]));
      };

      CountdownGlobalConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function CountdownGlobalConfig_Factory() {
          return new CountdownGlobalConfig(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]));
        },
        token: CountdownGlobalConfig,
        providedIn: "root"
      });

      CountdownGlobalConfig.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownGlobalConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }]
          }];
        }, null);
      })();

      var CountdownComponent = /*#__PURE__*/function () {
        function CountdownComponent(locale, timer, defCog, cdr, ngZone) {
          _classCallCheck(this, CountdownComponent);

          this.locale = locale;
          this.timer = timer;
          this.defCog = defCog;
          this.cdr = cdr;
          this.ngZone = ngZone;
          this.frequency = 1000;
          this._notify = {};
          this.status = CountdownStatus.ing;
          this.isDestroy = false;
          this.i = {};
          this.left = 0;
          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * Start countdown, you must manually call when `demand: false`
         */


        _createClass(CountdownComponent, [{
          key: "begin",
          value: function begin() {
            this.status = CountdownStatus.ing;
            this.callEvent('start');
          }
          /**
           * Restart countdown
           */

        }, {
          key: "restart",
          value: function restart() {
            if (this.status !== CountdownStatus.stop) {
              this.destroy();
            }

            this.init();
            this.callEvent('restart');
          }
          /**
           * Stop countdown, must call `restart` when stopped, it's different from pause, unable to recover
           */

        }, {
          key: "stop",
          value: function stop() {
            if (this.status === CountdownStatus.stop) {
              return;
            }

            this.status = CountdownStatus.stop;
            this.destroy();
            this.callEvent('stop');
          }
          /**
           * Pause countdown, you can use `resume` to recover again
           */

        }, {
          key: "pause",
          value: function pause() {
            if (this.status === CountdownStatus.stop || this.status === CountdownStatus.pause) {
              return;
            }

            this.status = CountdownStatus.pause;
            this.callEvent('pause');
          }
          /**
           * Resume countdown
           */

        }, {
          key: "resume",
          value: function resume() {
            if (this.status === CountdownStatus.stop || this.status !== CountdownStatus.pause) {
              return;
            }

            this.status = CountdownStatus.ing;
            this.callEvent('resume');
          }
        }, {
          key: "callEvent",
          value: function callEvent(action) {
            this.event.emit({
              action: action,
              left: this.left,
              status: this.status,
              text: this.i.text
            });
          }
        }, {
          key: "init",
          value: function init() {
            var _this6 = this;

            var locale = this.locale,
                defCog = this.defCog;
            var config = this.config = Object.assign(Object.assign(Object.assign({}, new CountdownGlobalConfig(locale)), defCog), this.config); // tslint:disable-next-line: no-bitwise

            var frq = this.frequency = ~config.format.indexOf('S') ? 100 : 1000;
            this.status = config.demand ? CountdownStatus.pause : CountdownStatus.ing;
            this.getLeft(); // bind reflow to me

            var _reflow = this.reflow;

            this.reflow = function () {
              var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              return _reflow.apply(_this6, [count, force]);
            };

            if (Array.isArray(config.notify)) {
              config.notify.forEach(function (time) {
                if (time < 1) {
                  throw new Error("The notify config must be a positive integer.");
                }

                time = time * 1000;
                time = time - time % frq;
                _this6._notify[time] = true;
              });
            }

            this.timer.add(this.reflow, frq).start();
            this.reflow(0, true);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.timer.remove(this.reflow);
            return this;
          }
          /**
           * 更新时钟
           */

        }, {
          key: "reflow",
          value: function reflow() {
            var _this7 = this;

            var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.isDestroy) {
              return;
            }

            var status = this.status,
                config = this.config,
                _notify = this._notify;

            if (!force && status !== CountdownStatus.ing) {
              return;
            }

            var value = this.left = this.left - this.frequency * count;

            if (value < 1) {
              value = 0;
            }

            this.i = {
              value: value,
              text: config.formatDate({
                date: value,
                formatStr: config.format,
                timezone: config.timezone
              })
            };

            if (typeof config.prettyText === 'function') {
              this.i.text = config.prettyText(this.i.text);
            }

            this.cdr.detectChanges();

            if (config.notify === 0 || _notify[value]) {
              this.ngZone.run(function () {
                _this7.callEvent('notify');
              });
            }

            if (value === 0) {
              this.ngZone.run(function () {
                _this7.status = CountdownStatus.done;

                _this7.callEvent('done');

                _this7.destroy();
              });
            }
          }
          /**
           * 获取倒计时剩余帧数
           */

        }, {
          key: "getLeft",
          value: function getLeft() {
            var config = this.config,
                frequency = this.frequency;
            var left = config.leftTime * 1000;
            var end = config.stopTime;

            if (!left && end) {
              left = end - new Date().getTime();
            }

            this.left = left - left % frequency;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();

            if (!this.config.demand) {
              this.begin();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.isDestroy = true;
            this.destroy();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!changes.config.firstChange) {
              this.restart();
            }
          }
        }]);

        return CountdownComponent;
      }();

      CountdownComponent.ɵfac = function CountdownComponent_Factory(t) {
        return new (t || CountdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CountdownTimer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CountdownGlobalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      CountdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CountdownComponent,
        selectors: [["countdown"]],
        hostVars: 2,
        hostBindings: function CountdownComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("count-down", true);
          }
        },
        inputs: {
          config: "config",
          render: "render"
        },
        outputs: {
          event: "event"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 5,
        consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]],
        template: function CountdownComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountdownComponent_ng_container_0_Template, 2, 1, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CountdownComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.render);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.render)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.i));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });

      CountdownComponent.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }, {
          type: CountdownTimer
        }, {
          type: CountdownGlobalConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      CountdownComponent.propDecorators = {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        render: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'countdown',
            template: "\n    <ng-container *ngIf=\"!render\">\n      <span [innerHTML]=\"i.text\"></span>\n    </ng-container>\n    <ng-container *ngTemplateOutlet=\"render; context: { $implicit: i }\"></ng-container>\n  ",
            host: {
              '[class.count-down]': 'true'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }]
          }, {
            type: CountdownTimer
          }, {
            type: CountdownGlobalConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          render: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var CountdownModule = function CountdownModule() {
        _classCallCheck(this, CountdownModule);
      };

      CountdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CountdownModule
      });
      CountdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CountdownModule_Factory(t) {
          return new (t || CountdownModule)();
        },
        providers: [CountdownTimer],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CountdownModule, {
          declarations: function declarations() {
            return [CountdownComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [CountdownComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: [CountdownTimer],
            declarations: [CountdownComponent],
            exports: [CountdownComponent]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-countdown.js.map

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/otp/otp.page.html":
    /*!******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/otp/otp.page.html ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthOtpOtpPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"div_OTP\">\n    <form [formGroup]=\"OtpForm\" class=\"form_\">\n      <div class=\"div_otps\">\n        <ion-icon name=\"chatbox-ellipses\" class=\"icon_otp\"></ion-icon>\n      </div>\n\n      <ion-label class=\"lbl_head\">OTP Verification</ion-label>\n\n      <ion-label class=\"lbl_desc\">We sent you code to\n        <span class=\"lbl_\">+91 {{str_getmobile}} {{string_getMOBILE}} ****</span>\n      </ion-label>\n\n      <ion-label class=\"lbl_remain\">Attempt Remaining :\n        <span class=\"lbl_\">0{{attemptRemaining}}</span>\n      </ion-label>\n\n      <ion-item no-padding lines=\"none\" class=\"item_ shadow_input\">\n        <ion-icon slot=\"start\" name=\"keypad\" class=\"icon_\"></ion-icon>\n        <ion-input type=\"number\" placeholder=\"Enter OTP here\" class=\"input_\" formControlName=\"otp\"></ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"OtpForm.controls.otp.hasError('required') && OtpForm.controls.otp.touched\">\n        <p class=\"content\">Please Enter Otp!</p>\n      </ion-item>\n\n      <div *ngIf=\"isOtp == 1\">\n        <ion-item no-padding lines=\"none\" class=\"validator-error\">\n          <p class=\"content\">Verification failed</p>\n        </ion-item>\n      </div>\n\n      <div *ngIf=\"counttime == 0\">\n        <ion-label class=\"lbl_resend\">\n          Please wait for one minute to receive OTP <countdown [config]=\"{ leftTime: 60, format: 'mm:ss' }\"\n            (event)=\"handleEvent($event)\" class=\"lbl_\">\n          </countdown>\n        </ion-label>\n      </div>\n\n      <div *ngIf=\"counttime == 1\">\n        <ion-label class=\"lbl_resend\" *ngIf=\"!sendStatus\">If you didn't receive a code!\n          <span class=\"lbl_\" (click)=\"resendOtp()\">Resend OTP </span>\n        </ion-label>\n      </div>\n\n      <!-- <ion-label class=\"lbl_resend\" *ngIf=\"sendStatus\">\n  <span class=\"lbl_\">Sending...</span>\n  </ion-label> -->\n\n      <!-- <ion-label class=\"lbl_resend\" (click)=\"resendOtp()\" *ngIf=\"!sendStatus\">Resend OTP</ion-label>\n  <ion-label class=\"lbl_resend\" *ngIf=\"sendStatus\"></ion-label> -->\n      <div class=\"div_btn\">\n        <ion-button expand=\"block\" shape=\"round\" class=\"btn_ shadow_btn\" (click)=\"isVerifyOtp()\">Verify</ion-button>\n      </div>\n      <ion-label class=\"lbl_back\" (click)=\"back()\">Back</ion-label>\n    </form>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/auth/otp/otp-routing.module.ts":
    /*!************************************************!*\
      !*** ./src/app/auth/otp/otp-routing.module.ts ***!
      \************************************************/

    /*! exports provided: OtpPageRoutingModule */

    /***/
    function srcAppAuthOtpOtpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPageRoutingModule", function () {
        return OtpPageRoutingModule;
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


      var _otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./otp.page */
      "./src/app/auth/otp/otp.page.ts");

      var routes = [{
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_3__["OtpPage"]
      }];

      var OtpPageRoutingModule = function OtpPageRoutingModule() {
        _classCallCheck(this, OtpPageRoutingModule);
      };

      OtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OtpPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/auth/otp/otp.module.ts":
    /*!****************************************!*\
      !*** ./src/app/auth/otp/otp.module.ts ***!
      \****************************************/

    /*! exports provided: OtpPageModule */

    /***/
    function srcAppAuthOtpOtpModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPageModule", function () {
        return OtpPageModule;
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


      var _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./otp-routing.module */
      "./src/app/auth/otp/otp-routing.module.ts");
      /* harmony import */


      var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./otp.page */
      "./src/app/auth/otp/otp.page.ts");
      /* harmony import */


      var ngx_countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-countdown */
      "./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js");

      var OtpPageModule = function OtpPageModule() {
        _classCallCheck(this, OtpPageModule);
      };

      OtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpPageRoutingModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_7__["CountdownModule"]],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
      })], OtpPageModule);
      /***/
    },

    /***/
    "./src/app/auth/otp/otp.page.scss":
    /*!****************************************!*\
      !*** ./src/app/auth/otp/otp.page.scss ***!
      \****************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthOtpOtpPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .div_OTP {\n  padding: 28px 0px 28px 0px;\n}\nion-content .div_OTP .div_otps {\n  text-align: center;\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  background: var(--ion-color-light);\n  box-shadow: 0 4px 4px var(--ion-color-light-shade);\n  border-radius: 50px;\n  padding: 26px 21px;\n  text-align: center;\n}\nion-content .div_OTP .div_otps .icon_otp {\n  color: var(--ion-color-dark);\n  font-size: 50px;\n}\nion-content .div_OTP .lbl_head {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  color: var(--ion-color-dark);\n  font-weight: bold;\n  padding: 16px 0px 8px 0px;\n}\nion-content .div_OTP .lbl_desc {\n  display: block;\n  font-size: 12px;\n  text-align: center;\n  color: var(--ion-color-dark);\n}\nion-content .div_OTP .lbl_remain {\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n  text-align: center;\n  color: var(--ion-color-dark);\n  padding: 16px 0px 0px 0px;\n}\nion-content .div_OTP .item_ {\n  --background: var(--ion-color-light);\n  border-radius: 24px;\n  margin: 16px 0px 0px 0px;\n  --padding-start: 24px;\n  --inner-padding-end: 12px;\n}\nion-content .div_OTP .item_ .icon_ {\n  font-size: 18px;\n  color: var(--ion-color-dark);\n}\nion-content .div_OTP .item_ .input_ {\n  background: var(--ion-color-light);\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .div_OTP .lbl_resend {\n  display: block;\n  font-size: 12px;\n  text-align: center;\n  color: var(--ion-color-dark);\n  font-weight: bold;\n  padding: 16px 0px 0px 0px;\n}\nion-content .div_OTP .form_ {\n  margin: 16px 0px;\n}\nion-content .div_OTP .form_ .item_ {\n  --background: var(--ion-color-light);\n  border-radius: 24px;\n  width: 84%;\n  margin: 0 auto;\n  --padding-start: 24px;\n  --inner-padding-end: 12px;\n  margin-top: 32px;\n}\nion-content .div_OTP .form_ .item_ .icon_ {\n  font-size: 18px;\n  color: var(--ion-color-dark);\n}\nion-content .div_OTP .form_ .item_ .input_ {\n  background: var(--ion-color-light);\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-content .div_OTP .form_ .lbl_back {\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  text-decoration: underline;\n  color: var(--ion-color-dark);\n}\nion-content .div_OTP .form_ .div_btn {\n  margin: 32px 0px;\n}\nion-content .div_OTP .form_ .div_btn .btn_ {\n  height: 44px;\n  width: 84%;\n  margin: 0 auto;\n  font-size: 14px;\n}\n.lbl_ {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9vdHAvb3RwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDBCQUFBO0FBQUo7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNOO0FBQU07RUFDRSw0QkFBQTtFQUNBLGVBQUE7QUFFUjtBQUNJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUNOO0FBQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFDTjtBQUNJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUNOO0FBQ0k7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ047QUFBTTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtBQUVSO0FBQU07RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUVSO0FBQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ047QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFBTTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUVSO0FBRFE7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7QUFHVjtBQURRO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFHVjtBQUFNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFFUjtBQUFNO0VBQ0UsZ0JBQUE7QUFFUjtBQURRO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUdWO0FBR0E7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9hdXRoL290cC9vdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAuZGl2X09UUCB7XG4gICAgcGFkZGluZzogMjhweCAwcHggMjhweCAwcHg7XG4gICAgLmRpdl9vdHBzIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA0cHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAyNnB4IDIxcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaWNvbl9vdHAge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5sYmxfaGVhZCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHBhZGRpbmc6IDE2cHggMHB4IDhweCAwcHg7XG4gICAgfVxuICAgIC5sYmxfZGVzYyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgfVxuICAgIC5sYmxfcmVtYWluIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgcGFkZGluZzogMTZweCAwcHggMHB4IDBweDtcbiAgICB9XG4gICAgLml0ZW1fIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgICBtYXJnaW46IDE2cHggMHB4IDBweCAwcHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgLmljb25fIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgfVxuICAgICAgLmlucHV0XyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxibF9yZXNlbmQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nOiAxNnB4IDBweCAwcHggMHB4O1xuICAgIH1cbiAgICAuZm9ybV8ge1xuICAgICAgbWFyZ2luOiAxNnB4IDBweDtcbiAgICAgIC5pdGVtXyB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgd2lkdGg6IDg0JTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgLmljb25fIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgfVxuICAgICAgICAuaW5wdXRfIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubGJsX2JhY2sge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgfVxuICAgICAgLmRpdl9idG4ge1xuICAgICAgICBtYXJnaW46IDMycHggMHB4O1xuICAgICAgICAuYnRuXyB7XG4gICAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgIHdpZHRoOiA4NCU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ubGJsXyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/auth/otp/otp.page.ts":
    /*!**************************************!*\
      !*** ./src/app/auth/otp/otp.page.ts ***!
      \**************************************/

    /*! exports provided: OtpPage */

    /***/
    function srcAppAuthOtpOtpPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpPage", function () {
        return OtpPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/global/common_service */
      "./src/app/global/common_service.ts");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/api.service */
      "./src/app/services/api.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js"); // declare var SMSReceive: any;


      var OtpPage = /*#__PURE__*/function () {
        function OtpPage(modalCtrl, formBuilder, router, api, apiService, plt, route, navCtrl) {
          _classCallCheck(this, OtpPage);

          this.modalCtrl = modalCtrl;
          this.formBuilder = formBuilder;
          this.router = router;
          this.api = api;
          this.apiService = apiService;
          this.plt = plt;
          this.route = route;
          this.navCtrl = navCtrl;
          this.isOtp = 0;
          this.OTP = '';
          this.sendStatus = false;
          this.counttime = 0;
          this.otp_fb();
        }

        _createClass(OtpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.phone = this.route.snapshot.queryParams.phone;
            this.str_getmobile = this.route.snapshot.queryParams.phone.slice(0, -7);
            var str_getMOBILE = this.route.snapshot.queryParams.phone.slice(0, -4);
            this.string_getMOBILE = str_getMOBILE.substring(3);
            this.attemptRemaining = this.route.snapshot.queryParams.attemptRemaining;
            this.str_getmobile = this.route.snapshot.queryParams.phone.slice(0, -7);
            var str_getMOBILE = this.route.snapshot.queryParams.phone.slice(0, -4);
            this.string_getMOBILE = str_getMOBILE.substring(3);
          }
        }, {
          key: "handleEvent",
          value: function handleEvent(event) {
            if (event.action == 'done') {
              this.counttime = 1;
            }
          }
        }, {
          key: "otp_fb",
          value: function otp_fb() {
            this.OtpForm = this.formBuilder.group({
              otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
          } // start() {
          //   SMSReceive.startWatch(
          //     () => {
          //       document.addEventListener('onSMSArrive', (e: any) => {
          //         var IncomingSMS = e.data;
          //         this.processSMS(IncomingSMS);
          //       });
          //     },
          //     () => { console.log('watch start failed') }
          //   )
          // }
          // stop() {
          //   SMSReceive.stopWatch(
          //     () => { /* stop Success */ },
          //     () => { /* stop faild */ }
          //   )
          // } 
          // processSMS(data) {
          //   if(data.body){
          //     this.OTP = data.body.split(':')[1].replace(/[\s]/g, '');
          //     this.OtpForm.patchValue({
          //       otp: this.OTP
          //     });
          //     this.stop();
          //   }
          // }

        }, {
          key: "isVerifyOtp",
          value: function isVerifyOtp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this8 = this;

              var v, body;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      for (v in this.OtpForm.controls) {
                        this.OtpForm.controls[v].markAsTouched();
                      }

                      if (this.OtpForm.valid) {
                        this.api.presentLoading();
                        body = {
                          phone: this.phone,
                          otp: this.OtpForm.value.otp,
                          device_token: localStorage.getItem('notification_id')
                        };
                        this.api.signin(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["timeout"])(this.api.API_TIMEOUT)).subscribe(function (user) {
                          if (user['status'] == 1) {
                            localStorage.setItem("token", user['token']);
                            localStorage.setItem("user_id", user["data"]["userInfo"].id);
                            localStorage.setItem("ActiveUser", JSON.stringify(user["data"]["userInfo"]));

                            if (user['verified'] == 0) {
                              _this8.api.dismissLoading();

                              _this8.router.navigate(['/create-business']);
                            }

                            if (user['verified'] == 1) {
                              localStorage.setItem("businessId", user["data"]["business_unique_id"]);

                              if (user["data"]["business"] != null && user["data"]["business"] != "") {
                                var bussiness = JSON.stringify(user["data"]["business"]);
                                localStorage.setItem('ActiveBusiness', bussiness);
                              }

                              _this8.apiService.allApi(true).subscribe(function (res) {
                                if (res['status'] == 1) {
                                  _this8.api.presentToastWithOptions(user['message']);

                                  _this8.api.dismissLoading();

                                  localStorage.setItem("verify", '1');

                                  _this8.router.navigate(['/dashboard']);
                                } else {
                                  _this8.api.presentToastWithOptions(user['message']);

                                  _this8.api.dismissLoading();
                                }
                              });
                            }
                          } else {
                            if (user['message'] == 'Mobile number verification failed') {
                              _this8.api.dismissLoading();

                              _this8.isOtp = 1;
                            } else {
                              _this8.api.dismissLoading();

                              _this8.api.presentToastWithOptions(user['message']);
                            }
                          }
                        }, function (err) {
                          _this8.api.dismissLoading();

                          _this8.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
                        });
                      }

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "resendOtp",
          value: function resendOtp() {
            var _this9 = this;

            this.counttime = 0;
            var body = {
              phone: this.phone
            };
            this.sendStatus = true;
            this.api.sendOtp(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["timeout"])(this.api.API_TIMEOUT)).subscribe(function (data) {
              if (data['status'] == 1) {
                _this9.attemptRemaining = data['attemptRemaining'];
                _this9.sendStatus = false;

                if (_this9.attemptRemaining >= 0) {
                  return true;
                } else {
                  _this9.navCtrl.navigateBack(['/signin']);
                }
              } else {
                _this9.navCtrl.navigateBack(['/signin']);
              }
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.navigateBack(['/signin']);
          }
        }]);

        return OtpPage;
      }();

      OtpPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      OtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-otp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./otp.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/otp/otp.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./otp.page.scss */
        "./src/app/auth/otp/otp.page.scss"))["default"]]
      })], OtpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-otp-otp-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+pEb":
/*!********************************************************!*\
  !*** ../simplecore-ui/src/lib/button/button.module.ts ***!
  \********************************************************/
/*! exports provided: CoreButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreButtonModule", function() { return CoreButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "s/yQ");
/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */




class CoreButtonModule {
}
CoreButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreButtonModule });
CoreButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreButtonModule_Factory(t) { return new (t || CoreButtonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreButtonModule, { declarations: [_button__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_button__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_button__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_button__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/simplecore-ui/simplecore-ui/projects/simplecore-ui-docs/src/main.ts */"zUnb");


/***/ }),

/***/ "7jjc":
/*!*******************************************************************!*\
  !*** ../simplecore-ui/src/lib/_directives/pressable/pressable.ts ***!
  \*******************************************************************/
/*! exports provided: PressableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressableDirective", function() { return PressableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */


class PressableDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    // @HostListener('document:mouseup', ['$event'])
    // clickStop() {
    //   console.log("tset")
    //   this.setPressed(false);
    // }
    ngOnInit() {
        this.renderer.setStyle(this.element.nativeElement, 'transition', 'transform 180ms ease-in-out');
        this.element.nativeElement.addEventListener("mousedown", () => {
            this.setPressed(true);
        });
    }
    ngOnDestroy() {
        // Clean up
        // Remove event listeners causes problems with server side renderering
        // Modern browsers do garbage collection (IE 10+) on Event Listeners so
        // the practice of removing listeners is no longer necessary.
        // this.element.nativeElement.removeAllListeners();
    }
    setPressed(pressIn) {
        if (pressIn) {
            this.renderer.setStyle(this.element.nativeElement, 'transform', 'scale(0.90)');
        }
        else if (!pressIn) {
            this.renderer.setStyle(this.element.nativeElement, 'transform', 'scale(1)');
        }
    }
}
PressableDirective.ɵfac = function PressableDirective_Factory(t) { return new (t || PressableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PressableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PressableDirective, selectors: [["", "corePressable", ""]], hostBindings: function PressableDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseup", function PressableDirective_mouseup_HostBindingHandler() { return ctx.setPressed(false); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PressableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[corePressable]',
                host: {
                    '(document:mouseup)': 'setPressed(false)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "9LQH":
/*!***************************************************************************!*\
  !*** ../simplecore-ui/src/lib/_directives/click-outside/click-outside.ts ***!
  \***************************************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */


class ClickOutsideDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.onClickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.onClickOutside.emit(event);
        }
    }
}
ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ClickOutsideDirective, selectors: [["", "coreClickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event, $event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { coreClickOutside: "coreClickOutside" }, outputs: { onClickOutside: "onClickOutside" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[coreClickOutside]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { coreClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event', '$event.target']]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B0Tg":
/*!****************************************************!*\
  !*** ../simplecore-ui/src/lib/input/public-api.ts ***!
  \****************************************************/
/*! exports provided: CoreInputModule, CoreInput, CoreLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.module */ "gBBT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreInputModule", function() { return _input_module__WEBPACK_IMPORTED_MODULE_0__["CoreInputModule"]; });

/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ "ic4Y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreInput", function() { return _input__WEBPACK_IMPORTED_MODULE_1__["CoreInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreLabel", function() { return _input__WEBPACK_IMPORTED_MODULE_1__["CoreLabel"]; });

/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */




/***/ }),

/***/ "GI/m":
/*!************************************************!*\
  !*** ../simplecore-ui/src/lib/button/index.ts ***!
  \************************************************/
/*! exports provided: CoreButtonModule, ButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "MaDQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreButtonModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CoreButtonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonDirective"]; });

/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */



/***/ }),

/***/ "LBPq":
/*!***********************************************!*\
  !*** ../simplecore-ui/src/lib/modal/modal.ts ***!
  \***********************************************/
/*! exports provided: CoreModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModal", function() { return CoreModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _directives_click_outside_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_directives/click-outside/click-outside */ "9LQH");
/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */





const _c0 = ["modalElement"];
function CoreModal_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoreModal_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoreModal_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClickOutside", function CoreModal_div_0_Template_div_onClickOutside_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleModal(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CoreModal_div_0_div_3_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CoreModal_div_0_div_6_Template, 5, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.action);
} }
const _c1 = ["*", [["span", "coreModalTitle", ""]], [["span", "coreModalActionPrimary", ""]], [["span", "coreModalActionSecondary", ""]]];
const _c2 = ["*", "span[coreModalTitle]", "span[coreModalActionPrimary]", "span[coreModalActionSecondary]"];
class CoreModal {
    constructor(renderer, platformId) {
        this.renderer = renderer;
        this.platformId = platformId;
        this.open = false;
        this.isOpening = false;
        this.action = false;
        this.title = false;
        this.actionPrimary = true;
        this.actionSecondary = true;
        this.primaryButtonPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.secondaryButtonPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngAfterViewInit() {
        this.toggleModal(this.open);
    }
    toggleModal(on) {
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            return;
        }
        if (!on && !this.isOpening) {
            this.open = false;
            // this.closeModal();
        }
        else if (on) {
            this.isOpening = true;
            this.open = true;
            // Delay
            setTimeout(() => {
                this.isOpening = false;
            }, 10);
        }
    }
    openModal() {
        this.renderer.setStyle(this.modalElement.nativeElement, "display", "flex");
    }
    closeModal() {
        this.renderer.setStyle(this.modalElement.nativeElement, "display", "none");
    }
}
CoreModal.ɵfac = function CoreModal_Factory(t) { return new (t || CoreModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
CoreModal.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoreModal, selectors: [["core-modal"]], viewQuery: function CoreModal_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalElement = _t.first);
    } }, inputs: { open: "open", action: "action", title: "title", actionPrimary: "actionPrimary", actionSecondary: "actionSecondary" }, outputs: { primaryButtonPressed: "primaryButtonPressed", secondaryButtonPressed: "secondaryButtonPressed" }, exportAs: ["coreModal"], ngContentSelectors: _c2, decls: 1, vars: 1, consts: [["class", "modal__container", 4, "ngIf"], [1, "modal__container"], ["modalElement", ""], ["coreClickOutside", "", 1, "modal", 3, "onClickOutside"], ["class", "title", 4, "ngIf"], [1, "content"], ["class", "action", 4, "ngIf"], [1, "title"], [1, "action"]], template: function CoreModal_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CoreModal_div_0_Template, 7, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.open);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _directives_click_outside_click_outside__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.modal__container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  -webkit-animation: 150ms ease-out 0s 1 fadeBackground forwards;\n          animation: 150ms ease-out 0s 1 fadeBackground forwards;\n}\n.modal__container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  -webkit-animation: 150ms 0s 1 ease-in-out delayShow forwards;\n          animation: 150ms 0s 1 ease-in-out delayShow forwards;\n  width: 400px;\n  border-radius: 6px;\n  background-color: #FFFFFF;\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16);\n  --modal-padding: 12px;\n}\n.modal__container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: var(--modal-padding);\n}\n.modal__container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.modal__container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(0, 0, 0, 0.18);\n  padding: var(--modal-padding);\n}\n.modal__container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(0, 0, 0, 0.18);\n  padding: var(--modal-padding);\n  display: flex;\n  flex-direction: row-reverse;\n}\n.modal__container[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: 14px;\n}\n@-webkit-keyframes fadeBackground {\n  0% {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n}\n@keyframes fadeBackground {\n  0% {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n}\n@-webkit-keyframes delayShow {\n  0% {\n    visibility: hidden;\n    transform: scale(0.8);\n  }\n  100% {\n    visibility: visible;\n    transform: scale(1);\n  }\n}\n@keyframes delayShow {\n  0% {\n    visibility: hidden;\n    transform: scale(0.8);\n  }\n  100% {\n    visibility: visible;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NpbXBsZWNvcmUtdWkvc3JjL2xpYi9tb2RhbC9tb2RhbC5zY3NzIiwicHJvamVjdHMvc2ltcGxlY29yZS11aS9zcmMvbGliL3RoZW1lLnNjc3MiLCJwcm9qZWN0cy9zaW1wbGVjb3JlLXVpL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5taXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFBQTtBQ0FBOzs7Ozs7RUFBQTtBQVFBLG1CQUFBO0FBQ0E7RUFDRSxzQkFBQTtBRE9GO0FFakJDOzs7Ozs7Q0FBQTtBRlVEO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw4REFBQTtVQUFBLHNEQUFBO0FBaUJGO0FBaEJFO0VBQ0UsNERBQUE7VUFBQSxvREFBQTtFQUNBLFlBQUE7RUFDQSxrQkNxQm1CO0VEcEJuQix5QkNHUztFREZULDRDQUFBO0VBQ0EscUJBQUE7QUFrQko7QUFqQkk7RUFDRSw2QkFBQTtBQW1CTjtBQWxCTTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBb0JSO0FBaEJJO0VBQ0UseUNBQUE7RUFDQSw2QkFBQTtBQWtCTjtBQWhCSTtFQUNFLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFrQk47QUFqQk07RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFtQlI7QUFiQTtFQUNFO0lBQ0Usa0NBQUE7RUFnQkY7RUFkQTtJQUNFLG9DQUFBO0VBZ0JGO0FBQ0Y7QUF0QkE7RUFDRTtJQUNFLGtDQUFBO0VBZ0JGO0VBZEE7SUFDRSxvQ0FBQTtFQWdCRjtBQUNGO0FBYkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EscUJBQUE7RUFlRjtFQWJBO0lBQ0UsbUJBQUE7SUFDQSxtQkFBQTtFQWVGO0FBQ0Y7QUF2QkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EscUJBQUE7RUFlRjtFQWJBO0lBQ0UsbUJBQUE7SUFDQSxtQkFBQTtFQWVGO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvc2ltcGxlY29yZS11aS9zcmMvbGliL21vZGFsL21vZGFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBTaW1wbGVDb3JlIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgcHJpdmF0ZSBsaWNlbnNpbmcgZm9yXG4gKiBpbnRlcm5hbCBTaW1wbGVDb3JlIHByb2plY3RzXG4gKi9cbkBpbXBvcnQgXCIuLi90aGVtZS5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vYnV0dG9uL2J1dHRvbi5taXhpblwiO1xuXG4ubW9kYWxfX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTs7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGFuaW1hdGlvbjogMTUwbXMgZWFzZS1vdXQgMHMgMSBmYWRlQmFja2dyb3VuZCBmb3J3YXJkcztcbiAgLm1vZGFsIHtcbiAgICBhbmltYXRpb246IDE1MG1zIDBzIDEgZWFzZS1pbi1vdXQgZGVsYXlTaG93IGZvcndhcmRzO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAkYWN0aW9uLWNvcm5lci1yYWRpdXM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LXRleHQ7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjE2KTtcbiAgICAtLW1vZGFsLXBhZGRpbmc6IDEycHg7XG4gICAgLnRpdGxlIHtcbiAgICAgIHBhZGRpbmc6IHZhcigtLW1vZGFsLXBhZGRpbmcpO1xuICAgICAgaDIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRhY3RpdmUtZ3JheTtcbiAgICAgIHBhZGRpbmc6IHZhcigtLW1vZGFsLXBhZGRpbmcpO1xuICAgIH1cbiAgICAuYWN0aW9uIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYWN0aXZlLWdyYXk7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1tb2RhbC1wYWRkaW5nKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVCYWNrZ3JvdW5kIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZGVsYXlTaG93IHtcbiAgMCUge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIFNpbXBsZUNvcmUgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBwcml2YXRlIGxpY2Vuc2luZyBmb3JcbiAqIGludGVybmFsIFNpbXBsZUNvcmUgcHJvamVjdHNcbiAqL1xuXG4vKkdsb2JhbCBWYXJpYWJsZXMqL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8vIExheW91dCBDb2xvcnNcbiRwcmltYXJ5LWNvbG9yOiAjRkIyQjQzO1xuJHNlY29uZGFyeS1jb2xvcjogIzFBNzNGNTtcblxuJHByaW1hcnktY29sb3ItcHVzaDogI2RlMWEzMTtcbiRwcmltYXJ5LWNvbG9yLWZvcmNlOiAjZDAxMzJhO1xuXG4kc2Vjb25kYXJ5LWNvbG9yLXB1c2g6ICMwMDVjZDA7XG4kc2Vjb25kYXJ5LWNvbG9yLWZvcmNlOiAjMDA0NmMzO1xuXG5cbiRwcmltYXJ5LWNvbG9yLWZhZGU6ICNmZjQ3NWI7XG4kc2Vjb25kYXJ5LWZhZGU6ICMzMjg2ZmY7XG5cbiRsaWdodC10ZXh0OiAjRkZGRkZGO1xuJGRhcmstdGV4dDogIzIwMjEyNDtcbiRtZWRpdW0tdGV4dDogIzVGNjM2ODtcblxuJGxpZ2h0LWdyYXk6IHJnYmEoMCwwLDAsMC4wOCk7XG4kYWN0aXZlLWdyYXk6IHJnYmEoMCwwLDAsMC4xOCk7XG5cbiRob3Zlci1jb2xvcjogI2Y2ZjdmOTtcbiRhY3RpdmUtY29sb3I6ICNlN2U3ZTc7XG5cbi8vIFNwYWNpbmdcbiR2ZXJ0aWNhbC1tYXJnaW46IDMwcHg7XG4kaW50ZXJuYWwtcGFkZGluZzogMjJweDtcblxuLy8gQm9yZGVyIFJhZGlpXG4kcm91bmRlZC1jb3JuZXItcmFkaXVzOiAyM3B4O1xuJHBpbGwtY29ybmVyLXJhZGl1czogMzNweDtcbiRhY3Rpb24tY29ybmVyLXJhZGl1czogNnB4O1xuXG4vLyBGb250c1xuJHByaW1hcnktZm9udDogUXVpY2tzYW5kLCBIZWx2ZXRpY2EsIFwiU2Vnb2UgVUlcIiwgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udDogXCJTZWdvZSBVSVwiLCBcIlNhbiBGcmFuY2lzY29cIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG4vLyBGb250IFNpemVzXG4kZGlzcGxheS1mb250OiA0MnB4O1xuJGhlYWRlci1mb250OiAzNHB4O1xuJHRpdGxlLTEtZm9udDogMjhweDtcbiR0aXRsZS0yLWZvbnQ6IDIycHg7XG4kaGVhZGxpbmUtZm9udDogMjBweDtcbiRib2R5LWZvbnQ6IDE2cHg7XG4kYWN0aW9uLWZvbnQ6IDE2cHg7XG4kY2FwdGlvbi1mb250OiAxMnB4O1xuXG4vLyBBbmltYXRpb25zXG4kZmFkZS1zcGVlZDogMzAwbXM7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOWZkO1xuIiwi77u/LyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgU2ltcGxlQ29yZSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIHByaXZhdGUgbGljZW5zaW5nIGZvclxuICogaW50ZXJuYWwgU2ltcGxlQ29yZSBwcm9qZWN0c1xuICovXG5cbkBtaXhpbiBidXR0b24tYmFzZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6ICRhY3Rpb24tY29ybmVyLXJhZGl1cztcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gIGZvbnQtc2l6ZTogJGJvZHktZm9udDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAkZmFkZS1zcGVlZDtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'core-modal',
                exportAs: 'coreModal',
                template: `
    <div class="modal__container" #modalElement *ngIf="open">
      <div class="modal" coreClickOutside (onClickOutside)="toggleModal(false)">
        <div class="title" *ngIf="title">
          <h2><ng-content select="span[coreModalTitle]"></ng-content></h2>
        </div>
        <div class="content">
          <ng-content></ng-content>
        </div>
        <div class="action" *ngIf="action">
          <span>
            <ng-content select="span[coreModalActionPrimary]"></ng-content>
          </span>
          <span>
            <ng-content select="span[coreModalActionSecondary]"></ng-content>
          </span>
        </div>
      </div>
    </div>`,
                styleUrls: ['modal.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, { open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], actionPrimary: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], actionSecondary: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], primaryButtonPressed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], secondaryButtonPressed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], modalElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modalElement']
        }] }); })();


/***/ }),

/***/ "MaDQ":
/*!*****************************************************!*\
  !*** ../simplecore-ui/src/lib/button/public-api.ts ***!
  \*****************************************************/
/*! exports provided: CoreButtonModule, ButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.module */ "+pEb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreButtonModule", function() { return _button_module__WEBPACK_IMPORTED_MODULE_0__["CoreButtonModule"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "s/yQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonDirective", function() { return _button__WEBPACK_IMPORTED_MODULE_1__["ButtonDirective"]; });

/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */




/***/ }),

/***/ "OFep":
/*!**************************************************************************!*\
  !*** ../simplecore-ui/src/lib/_directives/pressable/pressable.module.ts ***!
  \**************************************************************************/
/*! exports provided: CorePressableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorePressableModule", function() { return CorePressableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _pressable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pressable */ "7jjc");
/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */




class CorePressableModule {
}
CorePressableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CorePressableModule });
CorePressableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CorePressableModule_Factory(t) { return new (t || CorePressableModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CorePressableModule, { declarations: [_pressable__WEBPACK_IMPORTED_MODULE_2__["PressableDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_pressable__WEBPACK_IMPORTED_MODULE_2__["PressableDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CorePressableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pressable__WEBPACK_IMPORTED_MODULE_2__["PressableDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_pressable__WEBPACK_IMPORTED_MODULE_2__["PressableDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "RWOD":
/*!************************************************************************!*\
  !*** ../simplecore-ui/src/lib/_directives/click-outside/public-api.ts ***!
  \************************************************************************/
/*! exports provided: CoreClickOutsideModule, ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _click_outside_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click-outside.module */ "dYLZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreClickOutsideModule", function() { return _click_outside_module__WEBPACK_IMPORTED_MODULE_0__["CoreClickOutsideModule"]; });

/* harmony import */ var _click_outside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./click-outside */ "9LQH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return _click_outside__WEBPACK_IMPORTED_MODULE_1__["ClickOutsideDirective"]; });

/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */




/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");



class AppComponent {
    constructor() {
        this.title = 'simplecore-ui-docs';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 0, consts: [[1, "full-container"], [1, "routes"], ["routerLink", "button"], ["routerLink", "input"], ["routerLink", "select"], ["routerLink", "forms"], ["routerLink", "card"], ["routerLink", "modal"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".full-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: auto;\n}\n\n.routes[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NpbXBsZWNvcmUtdWktZG9jcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdFO0VBQ0UsY0FBQTtBQUFKIiwiZmlsZSI6InByb2plY3RzL3NpbXBsZWNvcmUtdWktZG9jcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJvdXRlcyB7XG4gICoge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Ud2R":
/*!*********************************************!*\
  !*** ../simplecore-ui/src/lib/card/card.ts ***!
  \*********************************************/
/*! exports provided: CoreCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCard", function() { return CoreCard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */


const _c0 = ["cardEl"];
const _c1 = ["*"];
class CoreCard {
    constructor(renderer) {
        this.renderer = renderer;
        this.neumorphic = true;
    }
    // Find calculated width of the object to determine how to place the box shadow
    ngAfterViewInit() {
        const cardElement = this.cardEl.nativeElement;
        if (this.neumorphic) {
            const offset = cardElement.offsetHeight / 12;
            const blurOffset = offset * 1.7;
            this.renderer.setStyle(cardElement, 'box-shadow', `0px ${offset}px ${blurOffset}px rgba(0,0,0,0.12),
              -0px -${offset}px ${blurOffset}px rgba(255,255,255,0.85)`);
        }
        else {
            this.renderer.addClass(cardElement, 'core-card__outline');
        }
    }
}
CoreCard.ɵfac = function CoreCard_Factory(t) { return new (t || CoreCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
CoreCard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoreCard, selectors: [["core-card"]], viewQuery: function CoreCard_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cardEl = _t.first);
    } }, inputs: { neumorphic: "neumorphic" }, exportAs: ["coreCard"], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [[1, "core-card"], ["cardEl", ""]], template: function CoreCard_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.core-card[_ngcontent-%COMP%] {\n  border-radius: 23px;\n  background-color: #FFFFFF;\n  padding: 22px;\n}\n.core-card__outline[_ngcontent-%COMP%] {\n  border: 1px solid #e7e7e7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NpbXBsZWNvcmUtdWkvc3JjL2xpYi9jYXJkL2NhcmQuc2NzcyIsInByb2plY3RzL3NpbXBsZWNvcmUtdWkvc3JjL2xpYi90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFBQTtBQ0FBOzs7Ozs7RUFBQTtBQVFBLG1CQUFBO0FBQ0E7RUFDRSxzQkFBQTtBRE9GO0FBUEE7RUFDRSxtQkMrQnNCO0VEOUJ0Qix5QkNlVztFRGRYLGFDMEJpQjtBRGhCbkI7QUFQQTtFQUNFLHlCQUFBO0FBVUYiLCJmaWxlIjoicHJvamVjdHMvc2ltcGxlY29yZS11aS9zcmMvbGliL2NhcmQvY2FyZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgU2ltcGxlQ29yZSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIHByaXZhdGUgbGljZW5zaW5nIGZvclxuICogaW50ZXJuYWwgU2ltcGxlQ29yZSBwcm9qZWN0c1xuICovXG5cbkBpbXBvcnQgXCIuLi90aGVtZS5zY3NzXCI7XG5cbi5jb3JlLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAkcm91bmRlZC1jb3JuZXItcmFkaXVzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtdGV4dDtcbiAgcGFkZGluZzogJGludGVybmFsLXBhZGRpbmc7XG59XG5cbi5jb3JlLWNhcmRfX291dGxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAkYWN0aXZlLWNvbG9yO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgU2ltcGxlQ29yZSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIHByaXZhdGUgbGljZW5zaW5nIGZvclxuICogaW50ZXJuYWwgU2ltcGxlQ29yZSBwcm9qZWN0c1xuICovXG5cbi8qR2xvYmFsIFZhcmlhYmxlcyovXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLy8gTGF5b3V0IENvbG9yc1xuJHByaW1hcnktY29sb3I6ICNGQjJCNDM7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMUE3M0Y1O1xuXG4kcHJpbWFyeS1jb2xvci1wdXNoOiAjZGUxYTMxO1xuJHByaW1hcnktY29sb3ItZm9yY2U6ICNkMDEzMmE7XG5cbiRzZWNvbmRhcnktY29sb3ItcHVzaDogIzAwNWNkMDtcbiRzZWNvbmRhcnktY29sb3ItZm9yY2U6ICMwMDQ2YzM7XG5cblxuJHByaW1hcnktY29sb3ItZmFkZTogI2ZmNDc1YjtcbiRzZWNvbmRhcnktZmFkZTogIzMyODZmZjtcblxuJGxpZ2h0LXRleHQ6ICNGRkZGRkY7XG4kZGFyay10ZXh0OiAjMjAyMTI0O1xuJG1lZGl1bS10ZXh0OiAjNUY2MzY4O1xuXG4kbGlnaHQtZ3JheTogcmdiYSgwLDAsMCwwLjA4KTtcbiRhY3RpdmUtZ3JheTogcmdiYSgwLDAsMCwwLjE4KTtcblxuJGhvdmVyLWNvbG9yOiAjZjZmN2Y5O1xuJGFjdGl2ZS1jb2xvcjogI2U3ZTdlNztcblxuLy8gU3BhY2luZ1xuJHZlcnRpY2FsLW1hcmdpbjogMzBweDtcbiRpbnRlcm5hbC1wYWRkaW5nOiAyMnB4O1xuXG4vLyBCb3JkZXIgUmFkaWlcbiRyb3VuZGVkLWNvcm5lci1yYWRpdXM6IDIzcHg7XG4kcGlsbC1jb3JuZXItcmFkaXVzOiAzM3B4O1xuJGFjdGlvbi1jb3JuZXItcmFkaXVzOiA2cHg7XG5cbi8vIEZvbnRzXG4kcHJpbWFyeS1mb250OiBRdWlja3NhbmQsIEhlbHZldGljYSwgXCJTZWdvZSBVSVwiLCBzYW5zLXNlcmlmO1xuJHNlY29uZGFyeS1mb250OiBcIlNlZ29lIFVJXCIsIFwiU2FuIEZyYW5jaXNjb1wiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cbi8vIEZvbnQgU2l6ZXNcbiRkaXNwbGF5LWZvbnQ6IDQycHg7XG4kaGVhZGVyLWZvbnQ6IDM0cHg7XG4kdGl0bGUtMS1mb250OiAyOHB4O1xuJHRpdGxlLTItZm9udDogMjJweDtcbiRoZWFkbGluZS1mb250OiAyMHB4O1xuJGJvZHktZm9udDogMTZweDtcbiRhY3Rpb24tZm9udDogMTZweDtcbiRjYXB0aW9uLWZvbnQ6IDEycHg7XG5cbi8vIEFuaW1hdGlvbnNcbiRmYWRlLXNwZWVkOiAzMDBtcztcblxuJGJhY2tncm91bmQtY29sb3I6ICNmNWY5ZmQ7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreCard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'core-card',
                exportAs: 'coreCard',
                template: '<div #cardEl class="core-card"><ng-content></ng-content></div>',
                styleUrls: ['card.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { neumorphic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cardEl']
        }] }); })();


/***/ }),

/***/ "XGYD":
/*!*****************************************************!*\
  !*** ../simplecore-ui/src/lib/select/public-api.ts ***!
  \*****************************************************/
/*! exports provided: CoreSelectModule, CoreSelect, CoreSelectLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.module */ "rcYw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreSelectModule", function() { return _select_module__WEBPACK_IMPORTED_MODULE_0__["CoreSelectModule"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ "qhKy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreSelect", function() { return _select__WEBPACK_IMPORTED_MODULE_1__["CoreSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreSelectLabel", function() { return _select__WEBPACK_IMPORTED_MODULE_1__["CoreSelectLabel"]; });

/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */




/***/ }),

/***/ "XwkG":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _simplecore_ui_src_lib_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../simplecore-ui/src/lib/button/button */ "s/yQ");
/* harmony import */ var _simplecore_ui_src_lib_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../simplecore-ui/src/lib/modal/modal */ "LBPq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _simplecore_ui_src_lib_input_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../simplecore-ui/src/lib/input/input */ "ic4Y");
/* harmony import */ var _simplecore_ui_src_lib_select_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../simplecore-ui/src/lib/select/select */ "qhKy");
/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */







const _c0 = ["modal"];
const _c1 = ["form"];
class ModalComponent {
    constructor() {
        this.modalOpen = false;
    }
    ngAfterViewInit() {
    }
    submitIt() {
        this.modal.toggleModal(false);
        this.logForm();
        this.form.reset();
    }
    // Not that submission
    logForm() {
        console.log(this.form.value);
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 29, vars: 1, consts: [["coreButton", "", 3, "click"], ["action", "true", "title", "true", 3, "open"], ["modal", ""], ["coreModalTitle", ""], ["id", "car-journal"], ["start", "", "form", "ngForm"], ["name", "firstName", "colorOverride", "ffffff", "ngModel", "", "coreInput", "", "type", "text", "id", "name", "placeholder", "Name"], ["coreLabel", "", "for", "name"], ["coreSelect", "", "name", "test", "id", "option", "ngModel", "", "colorOverride", "ffffff"], ["value", "Volvo"], ["value", "Saab"], ["value", "Mercedes"], ["value", "Audi"], ["coreSelectLabel", "", "for", "option"], ["coreModalActionPrimary", ""], ["type", "submit", "form", "car-journal", "coreButton", "", "size", "sm", "themeColor", "transparent", 3, "click"], ["coreModalActionSecondary", ""], ["coreButton", "", "type", "submit", "form", "car-journal", "size", "sm", "themeColor", "transparent", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggleModal(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "core-modal", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Volvo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Saab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mercedes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Audi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Car Make");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_24_listener() { return ctx.submitIt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggleModal(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", ctx.modalOpen);
    } }, directives: [_simplecore_ui_src_lib_button_button__WEBPACK_IMPORTED_MODULE_1__["ButtonDirective"], _simplecore_ui_src_lib_modal_modal__WEBPACK_IMPORTED_MODULE_2__["CoreModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _simplecore_ui_src_lib_input_input__WEBPACK_IMPORTED_MODULE_4__["CoreInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _simplecore_ui_src_lib_input_input__WEBPACK_IMPORTED_MODULE_4__["CoreLabel"], _simplecore_ui_src_lib_select_select__WEBPACK_IMPORTED_MODULE_5__["CoreSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _simplecore_ui_src_lib_select_select__WEBPACK_IMPORTED_MODULE_5__["CoreSelectLabel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zaW1wbGVjb3JlLXVpLWRvY3Mvc3JjL2FwcC9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], function () { return []; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modal']
        }], form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['form']
        }] }); })();


/***/ }),

/***/ "YZHv":
/*!****************************************************!*\
  !*** ../simplecore-ui/src/lib/modal/public-api.ts ***!
  \****************************************************/
/*! exports provided: CoreModalModule, CoreModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.module */ "iUdo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModalModule", function() { return _modal_module__WEBPACK_IMPORTED_MODULE_0__["CoreModalModule"]; });

/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "LBPq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModal", function() { return _modal__WEBPACK_IMPORTED_MODULE_1__["CoreModal"]; });

/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */




/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var projects_simplecore_ui_src_lib_button_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/simplecore-ui/src/lib/button/public-api */ "MaDQ");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button/button.component */ "be9G");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input/input.component */ "zJ+v");
/* harmony import */ var projects_simplecore_ui_src_lib_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/simplecore-ui/src/lib/input */ "trd9");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select/select.component */ "ordM");
/* harmony import */ var projects_simplecore_ui_src_lib_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! projects/simplecore-ui/src/lib/select */ "nBpy");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms/forms.component */ "uoiH");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _simplecore_ui_src_lib_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../simplecore-ui/src/lib/card */ "az9w");
/* harmony import */ var _simplecore_ui_src_lib_directives_pressable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../simplecore-ui/src/lib/_directives/pressable */ "kGqF");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modal/modal.component */ "XwkG");
/* harmony import */ var _simplecore_ui_src_lib_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../simplecore-ui/src/lib/modal */ "xeis");
// Angular




// UI Modules
// Components














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            projects_simplecore_ui_src_lib_button_public_api__WEBPACK_IMPORTED_MODULE_5__["CoreButtonModule"],
            projects_simplecore_ui_src_lib_input__WEBPACK_IMPORTED_MODULE_8__["CoreInputModule"],
            projects_simplecore_ui_src_lib_select__WEBPACK_IMPORTED_MODULE_10__["CoreSelectModule"],
            _simplecore_ui_src_lib_card__WEBPACK_IMPORTED_MODULE_13__["CoreCardModule"],
            _simplecore_ui_src_lib_directives_pressable__WEBPACK_IMPORTED_MODULE_14__["CorePressableModule"],
            _simplecore_ui_src_lib_modal__WEBPACK_IMPORTED_MODULE_16__["CoreModalModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"],
        _input_input_component__WEBPACK_IMPORTED_MODULE_7__["InputComponent"],
        _select_select_component__WEBPACK_IMPORTED_MODULE_9__["SelectComponent"],
        _forms_forms_component__WEBPACK_IMPORTED_MODULE_11__["FormsComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_15__["ModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        projects_simplecore_ui_src_lib_button_public_api__WEBPACK_IMPORTED_MODULE_5__["CoreButtonModule"],
        projects_simplecore_ui_src_lib_input__WEBPACK_IMPORTED_MODULE_8__["CoreInputModule"],
        projects_simplecore_ui_src_lib_select__WEBPACK_IMPORTED_MODULE_10__["CoreSelectModule"],
        _simplecore_ui_src_lib_card__WEBPACK_IMPORTED_MODULE_13__["CoreCardModule"],
        _simplecore_ui_src_lib_directives_pressable__WEBPACK_IMPORTED_MODULE_14__["CorePressableModule"],
        _simplecore_ui_src_lib_modal__WEBPACK_IMPORTED_MODULE_16__["CoreModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"],
                    _input_input_component__WEBPACK_IMPORTED_MODULE_7__["InputComponent"],
                    _select_select_component__WEBPACK_IMPORTED_MODULE_9__["SelectComponent"],
                    _forms_forms_component__WEBPACK_IMPORTED_MODULE_11__["FormsComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"],
                    _modal_modal_component__WEBPACK_IMPORTED_MODULE_15__["ModalComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    projects_simplecore_ui_src_lib_button_public_api__WEBPACK_IMPORTED_MODULE_5__["CoreButtonModule"],
                    projects_simplecore_ui_src_lib_input__WEBPACK_IMPORTED_MODULE_8__["CoreInputModule"],
                    projects_simplecore_ui_src_lib_select__WEBPACK_IMPORTED_MODULE_10__["CoreSelectModule"],
                    _simplecore_ui_src_lib_card__WEBPACK_IMPORTED_MODULE_13__["CoreCardModule"],
                    _simplecore_ui_src_lib_directives_pressable__WEBPACK_IMPORTED_MODULE_14__["CorePressableModule"],
                    _simplecore_ui_src_lib_modal__WEBPACK_IMPORTED_MODULE_16__["CoreModalModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aGf9":
/*!********************************************************************!*\
  !*** ../simplecore-ui/src/lib/_directives/pressable/public-api.ts ***!
  \********************************************************************/
/*! exports provided: CorePressableModule, PressableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pressable_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pressable.module */ "OFep");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CorePressableModule", function() { return _pressable_module__WEBPACK_IMPORTED_MODULE_0__["CorePressableModule"]; });

/* harmony import */ var _pressable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pressable */ "7jjc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PressableDirective", function() { return _pressable__WEBPACK_IMPORTED_MODULE_1__["PressableDirective"]; });

/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */




/***/ }),

/***/ "az9w":
/*!**********************************************!*\
  !*** ../simplecore-ui/src/lib/card/index.ts ***!
  \**********************************************/
/*! exports provided: CoreCardModule, CoreCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "cjR2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreCardModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CoreCardModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreCard", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CoreCard"]; });

/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */



/***/ }),

/***/ "be9G":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _simplecore_ui_src_lib_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../simplecore-ui/src/lib/button/button */ "s/yQ");
/* harmony import */ var _simplecore_ui_src_lib_directives_pressable_pressable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../simplecore-ui/src/lib/_directives/pressable/pressable */ "7jjc");




class ButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], decls: 16, vars: 0, consts: [["size", "sm", "coreButton", ""], ["size", "md", "coreButton", ""], ["size", "lg", "coreButton", ""], ["themeColor", "secondary", "size", "sm", "coreButton", ""], ["themeColor", "transparent", "size", "md", "coreButton", ""], ["size", "lg", "corePressable", "", "coreButton", ""], ["size", "md", "corePressable", "", "coreButton", ""], ["size", "sm", "corePressable", "", "coreButton", ""]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Large with Core Pressable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Large with Core Pressable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Smallest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_simplecore_ui_src_lib_button_button__WEBPACK_IMPORTED_MODULE_1__["ButtonDirective"], _simplecore_ui_src_lib_directives_pressable_pressable__WEBPACK_IMPORTED_MODULE_2__["PressableDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zaW1wbGVjb3JlLXVpLWRvY3Mvc3JjL2FwcC9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                template: `
    <button size="sm" coreButton>Small</button>
    <button size="md" coreButton>Medium</button>
    <button size="lg" coreButton>Large</button>

    <button themeColor="secondary" size="sm" coreButton>Small</button>
    <button themeColor="transparent" size="md" coreButton>Medium</button>

    <button size="lg" corePressable coreButton>Large with Core Pressable</button>
    <button size="md" corePressable coreButton>Large with Core Pressable</button>
    <button size="sm" corePressable coreButton>Smallest</button>

  `,
                styleUrls: ['./button.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cjR2":
/*!***************************************************!*\
  !*** ../simplecore-ui/src/lib/card/public-api.ts ***!
  \***************************************************/
/*! exports provided: CoreCardModule, CoreCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.module */ "d01Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreCardModule", function() { return _card_module__WEBPACK_IMPORTED_MODULE_0__["CoreCardModule"]; });

/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "Ud2R");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreCard", function() { return _card__WEBPACK_IMPORTED_MODULE_1__["CoreCard"]; });

/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */




/***/ }),

/***/ "d01Q":
/*!****************************************************!*\
  !*** ../simplecore-ui/src/lib/card/card.module.ts ***!
  \****************************************************/
/*! exports provided: CoreCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCardModule", function() { return CoreCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "Ud2R");
/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */




class CoreCardModule {
}
CoreCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreCardModule });
CoreCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreCardModule_Factory(t) { return new (t || CoreCardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreCardModule, { declarations: [_card__WEBPACK_IMPORTED_MODULE_2__["CoreCard"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_card__WEBPACK_IMPORTED_MODULE_2__["CoreCard"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_card__WEBPACK_IMPORTED_MODULE_2__["CoreCard"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_card__WEBPACK_IMPORTED_MODULE_2__["CoreCard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dYLZ":
/*!**********************************************************************************!*\
  !*** ../simplecore-ui/src/lib/_directives/click-outside/click-outside.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CoreClickOutsideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreClickOutsideModule", function() { return CoreClickOutsideModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./click-outside */ "9LQH");
/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */




class CoreClickOutsideModule {
}
CoreClickOutsideModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreClickOutsideModule });
CoreClickOutsideModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreClickOutsideModule_Factory(t) { return new (t || CoreClickOutsideModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreClickOutsideModule, { declarations: [_click_outside__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_click_outside__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreClickOutsideModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_click_outside__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_click_outside__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gBBT":
/*!******************************************************!*\
  !*** ../simplecore-ui/src/lib/input/input.module.ts ***!
  \******************************************************/
/*! exports provided: CoreInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreInputModule", function() { return CoreInputModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "ic4Y");
/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */




class CoreInputModule {
}
CoreInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreInputModule });
CoreInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreInputModule_Factory(t) { return new (t || CoreInputModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreInputModule, { declarations: [_input__WEBPACK_IMPORTED_MODULE_2__["CoreInput"], _input__WEBPACK_IMPORTED_MODULE_2__["CoreLabel"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_input__WEBPACK_IMPORTED_MODULE_2__["CoreInput"], _input__WEBPACK_IMPORTED_MODULE_2__["CoreLabel"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_input__WEBPACK_IMPORTED_MODULE_2__["CoreInput"], _input__WEBPACK_IMPORTED_MODULE_2__["CoreLabel"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_input__WEBPACK_IMPORTED_MODULE_2__["CoreInput"], _input__WEBPACK_IMPORTED_MODULE_2__["CoreLabel"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iUdo":
/*!******************************************************!*\
  !*** ../simplecore-ui/src/lib/modal/modal.module.ts ***!
  \******************************************************/
/*! exports provided: CoreModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModalModule", function() { return CoreModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "LBPq");
/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_directives/click-outside */ "o+Vu");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button */ "GI/m");
/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */






class CoreModalModule {
}
CoreModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModalModule });
CoreModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModalModule_Factory(t) { return new (t || CoreModalModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _directives_click_outside__WEBPACK_IMPORTED_MODULE_3__["CoreClickOutsideModule"],
            _button__WEBPACK_IMPORTED_MODULE_4__["CoreButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModalModule, { declarations: [_modal__WEBPACK_IMPORTED_MODULE_2__["CoreModal"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _directives_click_outside__WEBPACK_IMPORTED_MODULE_3__["CoreClickOutsideModule"],
        _button__WEBPACK_IMPORTED_MODULE_4__["CoreButtonModule"]], exports: [_modal__WEBPACK_IMPORTED_MODULE_2__["CoreModal"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_modal__WEBPACK_IMPORTED_MODULE_2__["CoreModal"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _directives_click_outside__WEBPACK_IMPORTED_MODULE_3__["CoreClickOutsideModule"],
                    _button__WEBPACK_IMPORTED_MODULE_4__["CoreButtonModule"]
                ],
                exports: [_modal__WEBPACK_IMPORTED_MODULE_2__["CoreModal"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ic4Y":
/*!***********************************************!*\
  !*** ../simplecore-ui/src/lib/input/input.ts ***!
  \***********************************************/
/*! exports provided: CoreInput, CoreLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreInput", function() { return CoreInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLabel", function() { return CoreLabel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */


const _c0 = ["coreInput", ""];
const _c1 = ["*"];
const _c2 = ["coreLabel", ""];
const _c3 = "/**\n * @license\n * Copyright 2021 SimpleCore All Rights Reserved.\n *\n * Use of this source code is governed private licensing for\n * internal SimpleCore projects\n */\n/**\n * @license\n * Copyright 2021 SimpleCore All Rights Reserved.\n *\n * Use of this source code is governed private licensing for\n * internal SimpleCore projects\n */\n/*Global Variables*/\n* {\n  box-sizing: border-box;\n}\n/**\n * @license\n * Copyright 2021 SimpleCore All Rights Reserved.\n *\n * Use of this source code is governed private licensing for\n * internal SimpleCore projects\n */\n/*Global Variables*/\n* {\n  box-sizing: border-box;\n}\n.core-input__outline {\n  font-family: Quicksand, Helvetica, \"Segoe UI\", sans-serif;\n  font-size: 16px;\n  padding: 14px 15px;\n  height: 54px;\n  border-radius: 6px;\n  width: 100%;\n  transition: margin-left 100ms ease-in-out, border 100ms ease-in-out;\n  box-sizing: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.18);\n  background-color: #f5f9fd;\n}\n.core-input__outline:focus {\n  outline: 0;\n}\n.core-input__outline:hover {\n  margin-left: -1px;\n  border: 2px solid rgba(0, 0, 0, 0.18);\n}\n.core-input__outline:focus {\n  margin-left: -1px;\n  border: 2px solid #202124;\n}\n.core-input__outline:focus + .core-label {\n  font-weight: 500;\n}\n.core-input__standard {\n  font-family: Quicksand, Helvetica, \"Segoe UI\", sans-serif;\n  font-size: 16px;\n  padding: 14px 15px;\n  height: 54px;\n  border-radius: 6px;\n  width: 100%;\n  border: none;\n  background-color: #f6f7f9;\n}\n.core-input__standard:focus {\n  outline: 0;\n}\n.core-input__outline::-moz-placeholder {\n  color: transparent;\n}\n.core-input__outline:-ms-input-placeholder {\n  color: transparent;\n}\n.core-input__outline::placeholder {\n  color: transparent;\n}\n.core-label {\n  display: block;\n  position: relative;\n  top: -37px;\n  pointer-events: none;\n  transition: transform 180ms ease-in-out;\n  font-family: Quicksand, Helvetica, \"Segoe UI\", sans-serif;\n  padding: 0 12px;\n  left: 5px;\n  background-color: #f5f9fd;\n  transform-origin: bottom left;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.core-input__outline:not(:-moz-placeholder-shown) + .core-label {\n  transform: scale(0.8) translateY(-35px);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.core-input__outline:not(:-ms-input-placeholder) + .core-label {\n  transform: scale(0.8) translateY(-35px);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.core-input__outline:focus + .core-label,\n.core-input__outline:not(:placeholder-shown) + .core-label {\n  transform: scale(0.8) translateY(-35px);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.core-input__outline:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0px 1000px #f5f9fd inset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NpbXBsZWNvcmUtdWkvc3JjL2xpYi9pbnB1dC9pbnB1dC5zY3NzIiwicHJvamVjdHMvc2ltcGxlY29yZS11aS9zcmMvbGliL3RoZW1lLnNjc3MiLCJwcm9qZWN0cy9zaW1wbGVjb3JlLXVpL3NyYy9saWIvaW5wdXQvbGFiZWwubWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUFRQSxtQkFBQTtBQUNBO0VBQ0Usc0JBQUE7QURPRjtBQ2pCQTs7Ozs7O0VBQUE7QUFRQSxtQkFBQTtBQUNBO0VBQ0Usc0JBQUE7QURtQkY7QUFuQkE7RUVpQkUseUREb0JhO0VDbkJiLGVENEJVO0VDM0JWLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCRGFxQjtFQ1pyQixXQUFBO0VBNUJBLG1FQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCRHdEaUI7QURyQm5CO0FFVEU7RUFDRSxVQUFBO0FGV0o7QUEvQkE7RUVIRSxpQkFBQTtFQUNBLHFDQUFBO0FGc0NGO0FBaENBO0VFRkUsaUJBQUE7RUFDQSx5QkFBQTtBRnNDRjtBQWpDQTtFQUNFLGdCQUFBO0FBb0NGO0FBakNBO0VFQ0UseUREb0JhO0VDbkJiLGVENEJVO0VDM0JWLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCRGFxQjtFQ1pyQixXQUFBO0VBVkEsWUFBQTtFQUNBLHlCRFdZO0FEb0NkO0FFckNFO0VBQ0UsVUFBQTtBRnVDSjtBQTNDQTtFQUNFLGtCQUFBO0FBOENGO0FBL0NBO0VBQ0Usa0JBQUE7QUE4Q0Y7QUEvQ0E7RUFDRSxrQkFBQTtBQThDRjtBQTNDQTtFRUtFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHVDQUFBO0VBQ0EseURER2E7RUNGYixlQUFBO0VBQ0EsU0FBQTtFQUNBLHlCRGdCaUI7RUNmakIsNkJBQUE7RUZaQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUF1REY7QUFwREE7RUVhRSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUY0Q0Y7QUEzREE7RUVhRSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUY0Q0Y7QUEzREE7O0VFYUUsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FGNENGO0FBckRBO0VBQ0UsZ0RBQUE7QUF3REYiLCJmaWxlIjoicHJvamVjdHMvc2ltcGxlY29yZS11aS9zcmMvbGliL2lucHV0L2lucHV0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBTaW1wbGVDb3JlIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgcHJpdmF0ZSBsaWNlbnNpbmcgZm9yXG4gKiBpbnRlcm5hbCBTaW1wbGVDb3JlIHByb2plY3RzXG4gKi9cbkBpbXBvcnQgXCIuLi90aGVtZS5zY3NzXCI7XG5AaW1wb3J0IFwibGFiZWwubWl4aW5cIjtcblxuLmNvcmUtaW5wdXRfX291dGxpbmUge1xuICBAaW5jbHVkZSBjb3JlLWlucHV0cy1vdXRsaW5lO1xufVxuXG4uY29yZS1pbnB1dF9fb3V0bGluZTpob3ZlciB7XG4gIEBpbmNsdWRlIGNvcmUtaW5wdXRzLW91dGxpbmVfX2hvdmVyO1xufVxuXG4uY29yZS1pbnB1dF9fb3V0bGluZTpmb2N1cyB7XG4gIEBpbmNsdWRlIGNvcmUtaW5wdXRzLW91dGxpbmVfX2ZvY3VzO1xufVxuXG4uY29yZS1pbnB1dF9fb3V0bGluZTpmb2N1cyArIC5jb3JlLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNvcmUtaW5wdXRfX3N0YW5kYXJkIHtcbiAgQGluY2x1ZGUgY29yZS1pbnB1dHMtc3RhbmRhcmQ7XG59XG5cbi5jb3JlLWlucHV0X19vdXRsaW5lOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmNvcmUtbGFiZWwge1xuICBAaW5jbHVkZSBjb3JlLWxhYmVsO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5jb3JlLWlucHV0X19vdXRsaW5lOmZvY3VzICsgLmNvcmUtbGFiZWwsXG4uY29yZS1pbnB1dF9fb3V0bGluZTpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5jb3JlLWxhYmVsIHtcbiAgQGluY2x1ZGUgY29yZS1sYWJlbC1mbG9hdDtcbn1cblxuLy8gQ29ycmVjdCBpbnB1dCBiYWNrZ3JvdW5kIGNvbG9yIGNoYW5nZSBvbiBhdXRvZmlsbFxuLmNvcmUtaW5wdXRfX291dGxpbmU6LXdlYmtpdC1hdXRvZmlsbCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAxMDAwcHggJGJhY2tncm91bmQtY29sb3IgaW5zZXQ7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBTaW1wbGVDb3JlIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgcHJpdmF0ZSBsaWNlbnNpbmcgZm9yXG4gKiBpbnRlcm5hbCBTaW1wbGVDb3JlIHByb2plY3RzXG4gKi9cblxuLypHbG9iYWwgVmFyaWFibGVzKi9cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vLyBMYXlvdXQgQ29sb3JzXG4kcHJpbWFyeS1jb2xvcjogI0ZCMkI0MztcbiRzZWNvbmRhcnktY29sb3I6ICMxQTczRjU7XG5cbiRwcmltYXJ5LWNvbG9yLXB1c2g6ICNkZTFhMzE7XG4kcHJpbWFyeS1jb2xvci1mb3JjZTogI2QwMTMyYTtcblxuJHNlY29uZGFyeS1jb2xvci1wdXNoOiAjMDA1Y2QwO1xuJHNlY29uZGFyeS1jb2xvci1mb3JjZTogIzAwNDZjMztcblxuXG4kcHJpbWFyeS1jb2xvci1mYWRlOiAjZmY0NzViO1xuJHNlY29uZGFyeS1mYWRlOiAjMzI4NmZmO1xuXG4kbGlnaHQtdGV4dDogI0ZGRkZGRjtcbiRkYXJrLXRleHQ6ICMyMDIxMjQ7XG4kbWVkaXVtLXRleHQ6ICM1RjYzNjg7XG5cbiRsaWdodC1ncmF5OiByZ2JhKDAsMCwwLDAuMDgpO1xuJGFjdGl2ZS1ncmF5OiByZ2JhKDAsMCwwLDAuMTgpO1xuXG4kaG92ZXItY29sb3I6ICNmNmY3Zjk7XG4kYWN0aXZlLWNvbG9yOiAjZTdlN2U3O1xuXG4vLyBTcGFjaW5nXG4kdmVydGljYWwtbWFyZ2luOiAzMHB4O1xuJGludGVybmFsLXBhZGRpbmc6IDIycHg7XG5cbi8vIEJvcmRlciBSYWRpaVxuJHJvdW5kZWQtY29ybmVyLXJhZGl1czogMjNweDtcbiRwaWxsLWNvcm5lci1yYWRpdXM6IDMzcHg7XG4kYWN0aW9uLWNvcm5lci1yYWRpdXM6IDZweDtcblxuLy8gRm9udHNcbiRwcmltYXJ5LWZvbnQ6IFF1aWNrc2FuZCwgSGVsdmV0aWNhLCBcIlNlZ29lIFVJXCIsIHNhbnMtc2VyaWY7XG4kc2Vjb25kYXJ5LWZvbnQ6IFwiU2Vnb2UgVUlcIiwgXCJTYW4gRnJhbmNpc2NvXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcblxuLy8gRm9udCBTaXplc1xuJGRpc3BsYXktZm9udDogNDJweDtcbiRoZWFkZXItZm9udDogMzRweDtcbiR0aXRsZS0xLWZvbnQ6IDI4cHg7XG4kdGl0bGUtMi1mb250OiAyMnB4O1xuJGhlYWRsaW5lLWZvbnQ6IDIwcHg7XG4kYm9keS1mb250OiAxNnB4O1xuJGFjdGlvbi1mb250OiAxNnB4O1xuJGNhcHRpb24tZm9udDogMTJweDtcblxuLy8gQW5pbWF0aW9uc1xuJGZhZGUtc3BlZWQ6IDMwMG1zO1xuXG4kYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjlmZDtcbiIsIu+7v0BpbXBvcnQgXCIuLi90aGVtZS5zY3NzXCI7XG5cbkBtaXhpbiBjb3JlLWlucHV0cy1vdXRsaW5lIHtcbiAgQGluY2x1ZGUgY29yZS1pbnB1dHMtYmFzZTtcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMTAwbXMgZWFzZS1pbi1vdXQsIGJvcmRlciAxMDBtcyBlYXNlLWluLW91dDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgJGFjdGl2ZS1ncmF5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbn1cblxuQG1peGluIGNvcmUtaW5wdXRzLW91dGxpbmVfX2hvdmVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICRhY3RpdmUtZ3JheTtcbn1cblxuQG1peGluIGNvcmUtaW5wdXRzLW91dGxpbmVfX2ZvY3VzIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrLXRleHQ7XG59XG5cbkBtaXhpbiBjb3JlLWlucHV0cy1zdGFuZGFyZCB7XG4gIEBpbmNsdWRlIGNvcmUtaW5wdXRzLWJhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWNvbG9yO1xufVxuXG5AbWl4aW4gY29yZS1pbnB1dHMtYmFzZSB7XG4gIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xuICBmb250LXNpemU6ICRib2R5LWZvbnQ7XG4gIHBhZGRpbmc6IDE0cHggMTVweDtcbiAgaGVpZ2h0OiA1NHB4O1xuICBib3JkZXItcmFkaXVzOiAkYWN0aW9uLWNvcm5lci1yYWRpdXM7XG4gIHdpZHRoOiAxMDAlO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG59XG5cbkBtaXhpbiBjb3JlLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzdweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxODBtcyBlYXNlLWluLW91dDtcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgbGVmdDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG59XG5cbkBtaXhpbiBjb3JlLWxhYmVsLWZsb2F0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSguOCkgdHJhbnNsYXRlWSgtMzVweCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuIl19 */";
class CoreInput {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.appearance = "outline";
    }
    ngOnInit() {
        switch (this.appearance) {
            case 'outline':
                // this.element.nativeElement.classList.add("core-input__outline");
                this.renderer.addClass(this.element.nativeElement, "core-input__outline");
                break;
            case 'standard':
                // this.element.nativeElement.classList.add("core-input__standard");
                this.renderer.addClass(this.element.nativeElement, "core-input__standard");
                break;
        }
        this.overrideBackgroundColor();
    }
    overrideBackgroundColor() {
        if (this.colorOverride) {
            this.renderer.setStyle(this.element.nativeElement, "background-color", `#${this.colorOverride}`);
            this.renderer.setStyle(this.element.nativeElement.nextElementSibling, "background-color", `#${this.colorOverride}`);
        }
    }
}
CoreInput.ɵfac = function CoreInput_Factory(t) { return new (t || CoreInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
CoreInput.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoreInput, selectors: [["input", "coreInput", ""]], inputs: { appearance: "appearance", colorOverride: "colorOverride" }, exportAs: ["coreInput"], attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function CoreInput_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: [_c3], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'input[coreInput]',
                exportAs: 'coreInput',
                template: '<ng-content></ng-content>',
                styleUrls: ['input.scss'],
                host: {},
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colorOverride: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class CoreLabel {
    constructor() {
    }
    ngOnInit() {
    }
}
CoreLabel.ɵfac = function CoreLabel_Factory(t) { return new (t || CoreLabel)(); };
CoreLabel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoreLabel, selectors: [["label", "coreLabel", ""]], hostAttrs: [1, "core-label"], exportAs: ["coreLabel"], attrs: _c2, ngContentSelectors: _c1, decls: 1, vars: 0, template: function CoreLabel_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: [_c3], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'label[coreLabel]',
                exportAs: 'coreLabel',
                template: '<ng-content></ng-content>',
                styleUrls: ['input.scss'],
                host: {
                    'class': 'core-label',
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kGqF":
/*!***************************************************************!*\
  !*** ../simplecore-ui/src/lib/_directives/pressable/index.ts ***!
  \***************************************************************/
/*! exports provided: CorePressableModule, PressableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "aGf9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CorePressableModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CorePressableModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PressableDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PressableDirective"]; });

/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */



/***/ }),

/***/ "mJ8H":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _simplecore_ui_src_lib_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../simplecore-ui/src/lib/card/card */ "Ud2R");



class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], decls: 7, vars: 2, consts: [[1, "neu-card"], [3, "neumorphic"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "core-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Test Neumorphic Styled Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "core-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Outline Styled Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("neumorphic", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("neumorphic", false);
    } }, directives: [_simplecore_ui_src_lib_card_card__WEBPACK_IMPORTED_MODULE_1__["CoreCard"]], styles: ["div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.neu-card[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NpbXBsZWNvcmUtdWktZG9jcy9zcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9zaW1wbGVjb3JlLXVpLWRvY3Mvc3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYgPiAqIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm5ldS1jYXJkIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nBpy":
/*!************************************************!*\
  !*** ../simplecore-ui/src/lib/select/index.ts ***!
  \************************************************/
/*! exports provided: CoreSelectModule, CoreSelect, CoreSelectLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "XGYD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreSelectModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CoreSelectModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreSelect", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CoreSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreSelectLabel", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CoreSelectLabel"]; });

/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */



/***/ }),

/***/ "o+Vu":
/*!*******************************************************************!*\
  !*** ../simplecore-ui/src/lib/_directives/click-outside/index.ts ***!
  \*******************************************************************/
/*! exports provided: CoreClickOutsideModule, ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "RWOD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreClickOutsideModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CoreClickOutsideModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ClickOutsideDirective"]; });

/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */



/***/ }),

/***/ "ordM":
/*!********************************************!*\
  !*** ./src/app/select/select.component.ts ***!
  \********************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _simplecore_ui_src_lib_select_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../simplecore-ui/src/lib/select/select */ "qhKy");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");




class SelectComponent {
    constructor() { }
    ngOnInit() {
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(); };
SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], decls: 9, vars: 0, consts: [["coreSelect", ""], ["value", "volvo"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Volvo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Saab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mercedes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Audi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_simplecore_ui_src_lib_select_select__WEBPACK_IMPORTED_MODULE_1__["CoreSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zaW1wbGVjb3JlLXVpLWRvY3Mvc3JjL2FwcC9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select',
                templateUrl: './select.component.html',
                styleUrls: ['./select.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qhKy":
/*!*************************************************!*\
  !*** ../simplecore-ui/src/lib/select/select.ts ***!
  \*************************************************/
/*! exports provided: CoreSelect, CoreSelectLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSelect", function() { return CoreSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSelectLabel", function() { return CoreSelectLabel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */



const _c0 = ["coreSelect", ""];
const _c1 = ["*"];
const _c2 = ["coreSelectLabel", ""];
const _c3 = "/**\n * @license\n * Copyright 2021 SimpleCore All Rights Reserved.\n *\n * Use of this source code is governed private licensing for\n * internal SimpleCore projects\n */\n/**\n * @license\n * Copyright 2021 SimpleCore All Rights Reserved.\n *\n * Use of this source code is governed private licensing for\n * internal SimpleCore projects\n */\n/*Global Variables*/\n* {\n  box-sizing: border-box;\n}\n/**\n * @license\n * Copyright 2021 SimpleCore All Rights Reserved.\n *\n * Use of this source code is governed private licensing for\n * internal SimpleCore projects\n */\n/*Global Variables*/\n* {\n  box-sizing: border-box;\n}\n.core-select {\n  font-family: Quicksand, Helvetica, \"Segoe UI\", sans-serif;\n  font-size: 16px;\n  padding: 14px 15px;\n  height: 54px;\n  border-radius: 6px;\n  width: 100%;\n  transition: margin-left 100ms ease-in-out, border 100ms ease-in-out;\n  box-sizing: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.18);\n  background-color: #f5f9fd;\n  -webkit-appearance: none;\n}\n.core-select:focus {\n  outline: 0;\n}\n.core-select:hover {\n  margin-left: -1px;\n  border: 2px solid rgba(0, 0, 0, 0.18);\n}\n.core-select:focus {\n  margin-left: -1px;\n  border: 2px solid #202124;\n}\n.core-select:focus + .core-select-label {\n  font-weight: 500;\n}\n.core-select::after {\n  content: \"<>\";\n  font: 17px \"Consolas\", monospace;\n  color: #333;\n  transform: rotate(90deg);\n  right: 11px;\n  /*Adjust for position however you want*/\n  top: 18px;\n  padding: 0 0 2px;\n  border-bottom: 1px solid #999;\n  /*left line */\n  position: absolute;\n  pointer-events: none;\n}\n.core-select-label {\n  display: block;\n  position: relative;\n  top: -37px;\n  pointer-events: none;\n  transition: transform 180ms ease-in-out;\n  font-family: Quicksand, Helvetica, \"Segoe UI\", sans-serif;\n  padding: 0 12px;\n  left: 5px;\n  background-color: #f5f9fd;\n  transform-origin: bottom left;\n  width: calc(100% - 5px - 12px);\n}\n.core-select-label__floating {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  transform: scale(0.8) translateY(-35px);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NpbXBsZWNvcmUtdWkvc3JjL2xpYi9zZWxlY3Qvc2VsZWN0LnNjc3MiLCJwcm9qZWN0cy9zaW1wbGVjb3JlLXVpL3NyYy9saWIvdGhlbWUuc2NzcyIsInByb2plY3RzL3NpbXBsZWNvcmUtdWkvc3JjL2xpYi9pbnB1dC9sYWJlbC5taXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFBQTtBQ0FBOzs7Ozs7RUFBQTtBQVFBLG1CQUFBO0FBQ0E7RUFDRSxzQkFBQTtBRE9GO0FDakJBOzs7Ozs7RUFBQTtBQVFBLG1CQUFBO0FBQ0E7RUFDRSxzQkFBQTtBRG1CRjtBQW5CQTtFRWlCRSx5RERvQmE7RUNuQmIsZUQ0QlU7RUMzQlYsa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JEYXFCO0VDWnJCLFdBQUE7RUE1QkEsbUVBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJEd0RpQjtFRG5EakIsd0JBQUE7QUErQkY7QUVWRTtFQUNFLFVBQUE7QUZZSjtBQXJCQTtFRWRFLGlCQUFBO0VBQ0EscUNBQUE7QUZ1Q0Y7QUF0QkE7RUViRSxpQkFBQTtFQUNBLHlCQUFBO0FGdUNGO0FBdkJBO0VBQ0UsZ0JBQUE7QUEwQkY7QUF2QkE7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBSUEsd0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFFQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0FBd0JGO0FBckJBO0VFbEJFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHVDQUFBO0VBQ0EseURER2E7RUNGYixlQUFBO0VBQ0EsU0FBQTtFQUNBLHlCRGdCaUI7RUNmakIsNkJBQUE7RUZXQSw4QkFBQTtBQWlDRjtBQTlCQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFRVhBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRjZDRiIsImZpbGUiOiJwcm9qZWN0cy9zaW1wbGVjb3JlLXVpL3NyYy9saWIvc2VsZWN0L3NlbGVjdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgU2ltcGxlQ29yZSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIHByaXZhdGUgbGljZW5zaW5nIGZvclxuICogaW50ZXJuYWwgU2ltcGxlQ29yZSBwcm9qZWN0c1xuICovXG5AaW1wb3J0IFwiLi4vdGhlbWUuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2lucHV0L2xhYmVsLm1peGluLnNjc3NcIjtcblxuLmNvcmUtc2VsZWN0IHtcbiAgQGluY2x1ZGUgY29yZS1pbnB1dHMtb3V0bGluZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXG4gIC8vIE5vdCBpbXBsZW1lbnRlZFxuICAvLy5jb3JlLXNlbGVjdC1hcnJvdyB7XG4gIC8vICB6LWluZGV4OiAxMDA7XG4gIC8vICBjb2xvcjogcmdiYSgwLDAsMCwuNTQpO1xuICAvLyAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgLy8gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAvLyAgYm9yZGVyLXRvcDogNXB4IHNvbGlkO1xuICAvLyAgbWFyZ2luOiAwIDRweDtcbiAgLy99XG59XG5cbi5jb3JlLXNlbGVjdDpob3ZlciB7XG4gIEBpbmNsdWRlIGNvcmUtaW5wdXRzLW91dGxpbmVfX2hvdmVyO1xufVxuXG4uY29yZS1zZWxlY3Q6Zm9jdXMge1xuICBAaW5jbHVkZSBjb3JlLWlucHV0cy1vdXRsaW5lX19mb2N1cztcbn1cblxuLmNvcmUtc2VsZWN0OmZvY3VzICsgLmNvcmUtc2VsZWN0LWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNvcmUtc2VsZWN0OjphZnRlciB7XG4gIGNvbnRlbnQ6ICc8Pic7XG4gIGZvbnQ6IDE3cHggXCJDb25zb2xhc1wiLCBtb25vc3BhY2U7XG4gIGNvbG9yOiAjMzMzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgcmlnaHQ6IDExcHg7XG4gIC8qQWRqdXN0IGZvciBwb3NpdGlvbiBob3dldmVyIHlvdSB3YW50Ki9cblxuICB0b3A6IDE4cHg7XG4gIHBhZGRpbmc6IDAgMCAycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5O1xuICAvKmxlZnQgbGluZSAqL1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jb3JlLXNlbGVjdC1sYWJlbCB7XG4gIEBpbmNsdWRlIGNvcmUtbGFiZWw7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1cHggLSAxMnB4KTtcbn1cblxuLmNvcmUtc2VsZWN0LWxhYmVsX19mbG9hdGluZyB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgQGluY2x1ZGUgY29yZS1sYWJlbC1mbG9hdDtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIFNpbXBsZUNvcmUgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBwcml2YXRlIGxpY2Vuc2luZyBmb3JcbiAqIGludGVybmFsIFNpbXBsZUNvcmUgcHJvamVjdHNcbiAqL1xuXG4vKkdsb2JhbCBWYXJpYWJsZXMqL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8vIExheW91dCBDb2xvcnNcbiRwcmltYXJ5LWNvbG9yOiAjRkIyQjQzO1xuJHNlY29uZGFyeS1jb2xvcjogIzFBNzNGNTtcblxuJHByaW1hcnktY29sb3ItcHVzaDogI2RlMWEzMTtcbiRwcmltYXJ5LWNvbG9yLWZvcmNlOiAjZDAxMzJhO1xuXG4kc2Vjb25kYXJ5LWNvbG9yLXB1c2g6ICMwMDVjZDA7XG4kc2Vjb25kYXJ5LWNvbG9yLWZvcmNlOiAjMDA0NmMzO1xuXG5cbiRwcmltYXJ5LWNvbG9yLWZhZGU6ICNmZjQ3NWI7XG4kc2Vjb25kYXJ5LWZhZGU6ICMzMjg2ZmY7XG5cbiRsaWdodC10ZXh0OiAjRkZGRkZGO1xuJGRhcmstdGV4dDogIzIwMjEyNDtcbiRtZWRpdW0tdGV4dDogIzVGNjM2ODtcblxuJGxpZ2h0LWdyYXk6IHJnYmEoMCwwLDAsMC4wOCk7XG4kYWN0aXZlLWdyYXk6IHJnYmEoMCwwLDAsMC4xOCk7XG5cbiRob3Zlci1jb2xvcjogI2Y2ZjdmOTtcbiRhY3RpdmUtY29sb3I6ICNlN2U3ZTc7XG5cbi8vIFNwYWNpbmdcbiR2ZXJ0aWNhbC1tYXJnaW46IDMwcHg7XG4kaW50ZXJuYWwtcGFkZGluZzogMjJweDtcblxuLy8gQm9yZGVyIFJhZGlpXG4kcm91bmRlZC1jb3JuZXItcmFkaXVzOiAyM3B4O1xuJHBpbGwtY29ybmVyLXJhZGl1czogMzNweDtcbiRhY3Rpb24tY29ybmVyLXJhZGl1czogNnB4O1xuXG4vLyBGb250c1xuJHByaW1hcnktZm9udDogUXVpY2tzYW5kLCBIZWx2ZXRpY2EsIFwiU2Vnb2UgVUlcIiwgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udDogXCJTZWdvZSBVSVwiLCBcIlNhbiBGcmFuY2lzY29cIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG4vLyBGb250IFNpemVzXG4kZGlzcGxheS1mb250OiA0MnB4O1xuJGhlYWRlci1mb250OiAzNHB4O1xuJHRpdGxlLTEtZm9udDogMjhweDtcbiR0aXRsZS0yLWZvbnQ6IDIycHg7XG4kaGVhZGxpbmUtZm9udDogMjBweDtcbiRib2R5LWZvbnQ6IDE2cHg7XG4kYWN0aW9uLWZvbnQ6IDE2cHg7XG4kY2FwdGlvbi1mb250OiAxMnB4O1xuXG4vLyBBbmltYXRpb25zXG4kZmFkZS1zcGVlZDogMzAwbXM7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOWZkO1xuIiwi77u/QGltcG9ydCBcIi4uL3RoZW1lLnNjc3NcIjtcblxuQG1peGluIGNvcmUtaW5wdXRzLW91dGxpbmUge1xuICBAaW5jbHVkZSBjb3JlLWlucHV0cy1iYXNlO1xuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAxMDBtcyBlYXNlLWluLW91dCwgYm9yZGVyIDEwMG1zIGVhc2UtaW4tb3V0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAkYWN0aXZlLWdyYXk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xufVxuXG5AbWl4aW4gY29yZS1pbnB1dHMtb3V0bGluZV9faG92ZXIge1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgYm9yZGVyOiAycHggc29saWQgJGFjdGl2ZS1ncmF5O1xufVxuXG5AbWl4aW4gY29yZS1pbnB1dHMtb3V0bGluZV9fZm9jdXMge1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgYm9yZGVyOiAycHggc29saWQgJGRhcmstdGV4dDtcbn1cblxuQG1peGluIGNvcmUtaW5wdXRzLXN0YW5kYXJkIHtcbiAgQGluY2x1ZGUgY29yZS1pbnB1dHMtYmFzZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG92ZXItY29sb3I7XG59XG5cbkBtaXhpbiBjb3JlLWlucHV0cy1iYXNlIHtcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gIGZvbnQtc2l6ZTogJGJvZHktZm9udDtcbiAgcGFkZGluZzogMTRweCAxNXB4O1xuICBoZWlnaHQ6IDU0cHg7XG4gIGJvcmRlci1yYWRpdXM6ICRhY3Rpb24tY29ybmVyLXJhZGl1cztcbiAgd2lkdGg6IDEwMCU7XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbn1cblxuQG1peGluIGNvcmUtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zN3B4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE4MG1zIGVhc2UtaW4tb3V0O1xuICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBsZWZ0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbn1cblxuQG1peGluIGNvcmUtbGFiZWwtZmxvYXQge1xuICB0cmFuc2Zvcm06IHNjYWxlKC44KSB0cmFuc2xhdGVZKC0zNXB4KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4iXX0= */";
class CoreSelect {
    constructor(renderer, element, platformId) {
        this.renderer = renderer;
        this.element = element;
        this.platformId = platformId;
        this.corePlaceholderText = "Select options";
        this.mutationObserver = new MutationObserver(() => {
            this.applyLabelFloat();
        });
    }
    ngOnInit() {
        this.listenToFloatLabel(); // May be unnecessary but further testing is needed.
        this.overrideBackgroundColor();
        // Only run this if on browser
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            // Create a mutation observer to check for more changes than value changes
            // The default HTML form reset event does not trigger the change event, but does trigger a mutation
            this.mutationObserver.observe(this.element.nativeElement, { attributes: true });
        }
    }
    ngOnDestroy() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            // Disconnect from observer on destroy
            this.mutationObserver.disconnect();
        }
    }
    /* Add event listener to for select change to determine if float is needed */
    /* Candidate for deprecation */
    listenToFloatLabel() {
        this.element.nativeElement.addEventListener("change", () => {
            this.applyLabelFloat();
        });
    }
    /* Check if the label should be floating depending on the placeholder element
    *  and change classes if necessary */
    applyLabelFloat() {
        const floatingLabelElement = this.element.nativeElement.nextElementSibling;
        if (!floatingLabelElement) {
            return;
        }
        const placeholderOptionElement = this.element.nativeElement;
        const placeholderSelected = placeholderOptionElement.selectedIndex <= 0;
        // HTML form reset event sets index = -1
        // Placeholder is at index = 0
        if (!placeholderSelected) {
            this.renderer.addClass(floatingLabelElement, "core-select-label__floating");
        }
        else {
            this.renderer.removeClass(floatingLabelElement, "core-select-label__floating");
        }
    }
    /* Sets input background color  */
    overrideBackgroundColor() {
        if (this.colorOverride) {
            this.renderer.setStyle(this.element.nativeElement, "background-color", `#${this.colorOverride}`);
            this.renderer.setStyle(this.element.nativeElement.nextElementSibling, "background-color", `#${this.colorOverride}`);
        }
    }
}
CoreSelect.ɵfac = function CoreSelect_Factory(t) { return new (t || CoreSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
CoreSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoreSelect, selectors: [["select", "coreSelect", ""]], hostAttrs: [1, "core-select"], inputs: { corePlaceholderText: "corePlaceholderText", colorOverride: "colorOverride" }, exportAs: ["coreSelect"], attrs: _c0, ngContentSelectors: _c1, decls: 6, vars: 1, consts: [[1, "core-select-arrow"], ["viewBox", "0 0 24 24", "role", "presentation", "focusable", "false", "aria-hidden", "true", 1, "chakra-select__icon", 2, "width", "1em", "height", "1em", "color", "currentcolor"], ["fill", "currentColor", "d", "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"], ["value", "", "disabled", "", "selected", "selected", 1, "core-select__placeholder-option"]], template: function CoreSelect_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.corePlaceholderText);
    } }, styles: [_c3], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreSelect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'select[coreSelect]',
                exportAs: 'coreSelect',
                template: '<div class="core-select-arrow"><svg viewBox="0 0 24 24" role="presentation" class="chakra-select__icon" focusable="false" aria-hidden="true" style="width: 1em; height: 1em; color: currentcolor;"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></div><option class="core-select__placeholder-option" value="" disabled selected="selected">{{corePlaceholderText}}</option><ng-content></ng-content>',
                styleUrls: ['select.scss'],
                host: {
                    'class': 'core-select',
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, { corePlaceholderText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colorOverride: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class CoreSelectLabel {
    constructor() {
    }
    ngOnInit() {
    }
}
CoreSelectLabel.ɵfac = function CoreSelectLabel_Factory(t) { return new (t || CoreSelectLabel)(); };
CoreSelectLabel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoreSelectLabel, selectors: [["label", "coreSelectLabel", ""]], hostAttrs: [1, "core-select-label"], exportAs: ["coreSelectLabel"], attrs: _c2, ngContentSelectors: _c1, decls: 1, vars: 0, template: function CoreSelectLabel_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: [_c3], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreSelectLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'label[coreSelectLabel]',
                exportAs: 'coreSelectLabel',
                template: '<ng-content></ng-content>',
                styleUrls: ['select.scss'],
                host: {
                    'class': 'core-select-label',
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rcYw":
/*!********************************************************!*\
  !*** ../simplecore-ui/src/lib/select/select.module.ts ***!
  \********************************************************/
/*! exports provided: CoreSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSelectModule", function() { return CoreSelectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select */ "qhKy");
/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */




class CoreSelectModule {
}
CoreSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreSelectModule });
CoreSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreSelectModule_Factory(t) { return new (t || CoreSelectModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreSelectModule, { declarations: [_select__WEBPACK_IMPORTED_MODULE_2__["CoreSelect"], _select__WEBPACK_IMPORTED_MODULE_2__["CoreSelectLabel"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_select__WEBPACK_IMPORTED_MODULE_2__["CoreSelect"], _select__WEBPACK_IMPORTED_MODULE_2__["CoreSelectLabel"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_select__WEBPACK_IMPORTED_MODULE_2__["CoreSelect"], _select__WEBPACK_IMPORTED_MODULE_2__["CoreSelectLabel"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_select__WEBPACK_IMPORTED_MODULE_2__["CoreSelect"], _select__WEBPACK_IMPORTED_MODULE_2__["CoreSelectLabel"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "s/yQ":
/*!*************************************************!*\
  !*** ../simplecore-ui/src/lib/button/button.ts ***!
  \*************************************************/
/*! exports provided: ButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDirective", function() { return ButtonDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */


const _c0 = ["coreButton", ""];
const _c1 = ["*"];
class ButtonDirective {
    constructor(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.size = 'md';
        this.themeColor = 'primary';
    }
    ngOnInit() {
        this.renderer.addClass(this.element.nativeElement, "core-button");
        switch (this.size) {
            case "sm": // Small
                this.renderer.addClass(this.element.nativeElement, "core-button__size-sm");
                break;
            case "lg": // Large
                this.renderer.addClass(this.element.nativeElement, "core-button__size-lg");
                break;
            default: // (md) Medium
                this.renderer.addClass(this.element.nativeElement, "core-button__size-md");
                break;
        }
        switch (this.themeColor) {
            case "secondary":
                this.renderer.addClass(this.element.nativeElement, "core-button__background-secondary");
                break;
            case "transparent":
                this.renderer.addClass(this.element.nativeElement, "core-button__transparent");
                break;
            default: // Primary
                this.renderer.addClass(this.element.nativeElement, "core-button__background-primary");
                break;
        }
    }
}
ButtonDirective.ɵfac = function ButtonDirective_Factory(t) { return new (t || ButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ButtonDirective.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonDirective, selectors: [["button", "coreButton", ""]], inputs: { size: "size", themeColor: "themeColor" }, exportAs: ["coreButton"], attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function ButtonDirective_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["/**\n * @license\n * Copyright 2020 SimpleCore All Rights Reserved.\n *\n * Use of this source code is governed private licensing for\n * internal SimpleCore projects\n */\n/**\n * @license\n * Copyright 2021 SimpleCore All Rights Reserved.\n *\n * Use of this source code is governed private licensing for\n * internal SimpleCore projects\n */\n/*Global Variables*/\n* {\n  box-sizing: border-box;\n}\n/**\n* @license\n* Copyright 2021 SimpleCore All Rights Reserved.\n*\n* Use of this source code is governed private licensing for\n* internal SimpleCore projects\n*/\n.core-button {\n  color: #fff;\n  padding: 10px 14px;\n  border-radius: 6px;\n  font-family: Quicksand, Helvetica, \"Segoe UI\", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 300ms;\n}\n.core-button:focus {\n  outline: 0;\n}\n.core-button__background-primary:hover {\n  background-color: #de1a31;\n}\n.core-button__background-secondary:hover {\n  background-color: #005cd0;\n}\n.core-button__background-primary:active {\n  background-color: #d0132a;\n}\n.core-button__background-secondary:active {\n  background-color: #0046c3;\n}\n.core-button__transparent {\n  color: #202124;\n  background-color: transparent;\n}\n.core-button__transparent:hover {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n.core-button__transparent:active {\n  background-color: rgba(0, 0, 0, 0.18);\n}\n.core-button__size-sm {\n  padding: 8px 10px;\n  font-size: 16px;\n}\n.core-button__size-md {\n  padding: 11px 14px;\n}\n.core-button__size-lg {\n  padding: 14px 18px;\n}\n.core-button__background-primary {\n  background-color: #FB2B43;\n}\n.core-button__background-secondary {\n  background-color: #1A73F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NpbXBsZWNvcmUtdWkvc3JjL2xpYi9idXR0b24vYnV0dG9uLnNjc3MiLCJwcm9qZWN0cy9zaW1wbGVjb3JlLXVpL3NyYy9saWIvdGhlbWUuc2NzcyIsInByb2plY3RzL3NpbXBsZWNvcmUtdWkvc3JjL2xpYi9idXR0b24vYnV0dG9uLm1peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztFQUFBO0FDQUE7Ozs7OztFQUFBO0FBUUEsbUJBQUE7QUFDQTtFQUNFLHNCQUFBO0FET0Y7QUVqQkM7Ozs7OztDQUFBO0FGVUQ7RUVERSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkRpQ3FCO0VDaENyQix5RERtQ2E7RUNsQ2IsZUQyQ1U7RUMxQ1YsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FGbUJGO0FFbEJFO0VBQ0UsVUFBQTtBRm9CSjtBQXpCQTtFQUNFLHlCQ0VtQjtBRDBCckI7QUF6QkE7RUFDRSx5QkNDcUI7QUQyQnZCO0FBekJBO0VBQ0UseUJDTG9CO0FEaUN0QjtBQXpCQTtFQUNFLHlCQ05zQjtBRGtDeEI7QUF6QkE7RUFDRSxjQ0hVO0VESVYsNkJBQUE7QUE0QkY7QUF6QkE7RUFDRSxxQ0NMVztBRGlDYjtBQXpCQTtFQUNFLHFDQ1JZO0FEb0NkO0FBekJBO0VBQ0UsaUJBQUE7RUFDQSxlQ1dVO0FEaUJaO0FBekJBO0VBQ0Usa0JBQUE7QUE0QkY7QUF6QkE7RUFDRSxrQkFBQTtBQTRCRjtBQXpCQTtFQUNFLHlCQzNDYztBRHVFaEI7QUF6QkE7RUFDRSx5QkM5Q2dCO0FEMEVsQiIsImZpbGUiOiJwcm9qZWN0cy9zaW1wbGVjb3JlLXVpL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgU2ltcGxlQ29yZSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIHByaXZhdGUgbGljZW5zaW5nIGZvclxuICogaW50ZXJuYWwgU2ltcGxlQ29yZSBwcm9qZWN0c1xuICovXG5cbkBpbXBvcnQgXCIuLi90aGVtZS5zY3NzXCI7XG5AaW1wb3J0IFwiLi9idXR0b24ubWl4aW5cIjtcbi5jb3JlLWJ1dHRvbiB7XG4gIEBpbmNsdWRlIGJ1dHRvbi1iYXNlO1xufVxuXG4uY29yZS1idXR0b25fX2JhY2tncm91bmQtcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yLXB1c2g7XG59XG5cbi5jb3JlLWJ1dHRvbl9fYmFja2dyb3VuZC1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yLXB1c2g7XG59XG5cbi5jb3JlLWJ1dHRvbl9fYmFja2dyb3VuZC1wcmltYXJ5OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yLWZvcmNlO1xufVxuXG4uY29yZS1idXR0b25fX2JhY2tncm91bmQtc2Vjb25kYXJ5OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3ItZm9yY2U7XG59XG5cbi5jb3JlLWJ1dHRvbl9fdHJhbnNwYXJlbnQge1xuICBjb2xvcjogJGRhcmstdGV4dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jb3JlLWJ1dHRvbl9fdHJhbnNwYXJlbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheTtcbn1cblxuLmNvcmUtYnV0dG9uX190cmFuc3BhcmVudDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWN0aXZlLWdyYXk7XG59XG5cbi5jb3JlLWJ1dHRvbl9fc2l6ZS1zbSB7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBmb250LXNpemU6ICRib2R5LWZvbnQ7XG59XG5cbi5jb3JlLWJ1dHRvbl9fc2l6ZS1tZCB7XG4gIHBhZGRpbmc6IDExcHggMTRweDtcbn1cblxuLmNvcmUtYnV0dG9uX19zaXplLWxnIHtcbiAgcGFkZGluZzogMTRweCAxOHB4O1xufVxuXG4uY29yZS1idXR0b25fX2JhY2tncm91bmQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xufVxuXG4uY29yZS1idXR0b25fX2JhY2tncm91bmQtc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIFNpbXBsZUNvcmUgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBwcml2YXRlIGxpY2Vuc2luZyBmb3JcbiAqIGludGVybmFsIFNpbXBsZUNvcmUgcHJvamVjdHNcbiAqL1xuXG4vKkdsb2JhbCBWYXJpYWJsZXMqL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8vIExheW91dCBDb2xvcnNcbiRwcmltYXJ5LWNvbG9yOiAjRkIyQjQzO1xuJHNlY29uZGFyeS1jb2xvcjogIzFBNzNGNTtcblxuJHByaW1hcnktY29sb3ItcHVzaDogI2RlMWEzMTtcbiRwcmltYXJ5LWNvbG9yLWZvcmNlOiAjZDAxMzJhO1xuXG4kc2Vjb25kYXJ5LWNvbG9yLXB1c2g6ICMwMDVjZDA7XG4kc2Vjb25kYXJ5LWNvbG9yLWZvcmNlOiAjMDA0NmMzO1xuXG5cbiRwcmltYXJ5LWNvbG9yLWZhZGU6ICNmZjQ3NWI7XG4kc2Vjb25kYXJ5LWZhZGU6ICMzMjg2ZmY7XG5cbiRsaWdodC10ZXh0OiAjRkZGRkZGO1xuJGRhcmstdGV4dDogIzIwMjEyNDtcbiRtZWRpdW0tdGV4dDogIzVGNjM2ODtcblxuJGxpZ2h0LWdyYXk6IHJnYmEoMCwwLDAsMC4wOCk7XG4kYWN0aXZlLWdyYXk6IHJnYmEoMCwwLDAsMC4xOCk7XG5cbiRob3Zlci1jb2xvcjogI2Y2ZjdmOTtcbiRhY3RpdmUtY29sb3I6ICNlN2U3ZTc7XG5cbi8vIFNwYWNpbmdcbiR2ZXJ0aWNhbC1tYXJnaW46IDMwcHg7XG4kaW50ZXJuYWwtcGFkZGluZzogMjJweDtcblxuLy8gQm9yZGVyIFJhZGlpXG4kcm91bmRlZC1jb3JuZXItcmFkaXVzOiAyM3B4O1xuJHBpbGwtY29ybmVyLXJhZGl1czogMzNweDtcbiRhY3Rpb24tY29ybmVyLXJhZGl1czogNnB4O1xuXG4vLyBGb250c1xuJHByaW1hcnktZm9udDogUXVpY2tzYW5kLCBIZWx2ZXRpY2EsIFwiU2Vnb2UgVUlcIiwgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udDogXCJTZWdvZSBVSVwiLCBcIlNhbiBGcmFuY2lzY29cIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG4vLyBGb250IFNpemVzXG4kZGlzcGxheS1mb250OiA0MnB4O1xuJGhlYWRlci1mb250OiAzNHB4O1xuJHRpdGxlLTEtZm9udDogMjhweDtcbiR0aXRsZS0yLWZvbnQ6IDIycHg7XG4kaGVhZGxpbmUtZm9udDogMjBweDtcbiRib2R5LWZvbnQ6IDE2cHg7XG4kYWN0aW9uLWZvbnQ6IDE2cHg7XG4kY2FwdGlvbi1mb250OiAxMnB4O1xuXG4vLyBBbmltYXRpb25zXG4kZmFkZS1zcGVlZDogMzAwbXM7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOWZkO1xuIiwi77u/LyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgU2ltcGxlQ29yZSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIHByaXZhdGUgbGljZW5zaW5nIGZvclxuICogaW50ZXJuYWwgU2ltcGxlQ29yZSBwcm9qZWN0c1xuICovXG5cbkBtaXhpbiBidXR0b24tYmFzZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6ICRhY3Rpb24tY29ybmVyLXJhZGl1cztcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gIGZvbnQtc2l6ZTogJGJvZHktZm9udDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAkZmFkZS1zcGVlZDtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxufVxuIl19 */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'button[coreButton]',
                exportAs: 'coreButton',
                template: '<ng-content></ng-content>',
                styleUrls: ['button.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], themeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "trd9":
/*!***********************************************!*\
  !*** ../simplecore-ui/src/lib/input/index.ts ***!
  \***********************************************/
/*! exports provided: CoreInputModule, CoreInput, CoreLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "B0Tg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreInputModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CoreInputModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreInput", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CoreInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreLabel", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CoreLabel"]; });

/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */



/***/ }),

/***/ "uoiH":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _simplecore_ui_src_lib_input_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../simplecore-ui/src/lib/input/input */ "ic4Y");
/* harmony import */ var _simplecore_ui_src_lib_select_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../simplecore-ui/src/lib/select/select */ "qhKy");
/* harmony import */ var _simplecore_ui_src_lib_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../simplecore-ui/src/lib/button/button */ "s/yQ");






const _c0 = ["form"];
class FormsComponent {
    constructor() { }
    ngOnInit() {
    }
    logForm(value) {
        console.log(value);
        this.form.reset();
    }
}
FormsComponent.ɵfac = function FormsComponent_Factory(t) { return new (t || FormsComponent)(); };
FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormsComponent, selectors: [["app-forms"]], viewQuery: function FormsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 19, vars: 0, consts: [[3, "ngSubmit"], ["form", "ngForm"], ["name", "firstName", "ngModel", "", "coreInput", "", "type", "text", "id", "name", "placeholder", "Name"], ["coreLabel", "", "for", "name"], ["coreSelect", "", "name", "Test", "id", "option", "ngModel", ""], ["value", "volvo"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], ["coreSelectLabel", "", "for", "option"], ["coreButton", "", "type", "submit"]], template: function FormsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormsComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.logForm(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Volvo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Saab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mercedes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Audi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Car Make");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _simplecore_ui_src_lib_input_input__WEBPACK_IMPORTED_MODULE_2__["CoreInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _simplecore_ui_src_lib_input_input__WEBPACK_IMPORTED_MODULE_2__["CoreLabel"], _simplecore_ui_src_lib_select_select__WEBPACK_IMPORTED_MODULE_3__["CoreSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _simplecore_ui_src_lib_select_select__WEBPACK_IMPORTED_MODULE_3__["CoreSelectLabel"], _simplecore_ui_src_lib_button_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zaW1wbGVjb3JlLXVpLWRvY3Mvc3JjL2FwcC9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forms',
                templateUrl: './forms.component.html',
                styleUrls: ['./forms.component.scss']
            }]
    }], function () { return []; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['form']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button/button.component */ "be9G");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input/input.component */ "zJ+v");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select/select.component */ "ordM");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/forms.component */ "uoiH");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/modal.component */ "XwkG");










const routes = [
    { path: 'button', component: _button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"] },
    { path: 'input', component: _input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"] },
    { path: 'select', component: _select_select_component__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"] },
    { path: 'forms', component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_5__["FormsComponent"] },
    { path: 'card', component: _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"] },
    { path: 'modal', component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xeis":
/*!***********************************************!*\
  !*** ../simplecore-ui/src/lib/modal/index.ts ***!
  \***********************************************/
/*! exports provided: CoreModalModule, CoreModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "YZHv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModalModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CoreModalModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModal", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CoreModal"]; });

/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */



/***/ }),

/***/ "zJ+v":
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _simplecore_ui_src_lib_input_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../simplecore-ui/src/lib/input/input */ "ic4Y");



class InputComponent {
    constructor() { }
    ngOnInit() {
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], decls: 5, vars: 0, consts: [["id", "name", "coreInput", "", "placeholder", "Test"], ["for", "name", "coreLabel", ""], [1, "white-background"], ["id", "name2", "appearance", "standard", "coreInput", "", "placeholder", "Test"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_simplecore_ui_src_lib_input_input__WEBPACK_IMPORTED_MODULE_1__["CoreInput"], _simplecore_ui_src_lib_input_input__WEBPACK_IMPORTED_MODULE_1__["CoreLabel"]], styles: [".white-background[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 100px;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NpbXBsZWNvcmUtdWktZG9jcy9zcmMvYXBwL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvc2ltcGxlY29yZS11aS1kb2NzL3NyYy9hcHAvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input',
                templateUrl: './input.component.html',
                styleUrls: ['./input.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
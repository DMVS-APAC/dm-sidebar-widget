/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/dm-widget.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dm-sidebar/dm-sidebar.ts":
/*!**************************************!*\
  !*** ./src/dm-sidebar/dm-sidebar.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_get_query_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/get-query-params */ "./src/utilities/get-query-params.ts");

var DmWidget = /** @class */ (function () {
    function DmWidget(rootEls) {
        this.rootEls = null;
        this.widgetParams = null;
        // Showing debug console that need to check
        this.debugMode = false;
        this.rootEls = rootEls;
        if (Object(_utilities_get_query_params__WEBPACK_IMPORTED_MODULE_0__["default"])('dmdebug') != null) {
            this.debugMode = Object(_utilities_get_query_params__WEBPACK_IMPORTED_MODULE_0__["default"])('dmdebug') != 'false';
        }
        this.addEventListeners();
        this.registerNewEvents();
        this.extractAttrs();
    }
    DmWidget.prototype.addEventListeners = function () {
    };
    DmWidget.prototype.registerNewEvents = function () {
        this.apiReady = new Event('dm-api-ready');
        this.widgetExtracted = new Event('dm-player-extracted');
        this.searchParamsReady = new Event('dm-search-params-ready');
    };
    DmWidget.prototype.extractAttrs = function () {
        var rootEl = this.rootEls[0];
        this.widgetParams = {
            owners: rootEl.getAttribute("owners") ? rootEl.getAttribute("owners") : "",
            playlist: rootEl.getAttribute("playlist") ? rootEl.getAttribute("playlist") : "",
            syndication: rootEl.getAttribute("syndication") ? rootEl.getAttribute("syndication") : "",
            adsParams: rootEl.getAttribute('adsParams') ? rootEl.getAttribute('adsParams') : "contextual",
            cpeId: rootEl.getAttribute('cpeId') ? rootEl.getAttribute('cpeId').split(',') : [''],
        };
        if (this.debugMode === true) {
            console.log("%c DM Player Params: ", "background: #56C7FF; color: #232323", this.widgetParams);
        }
    };
    return DmWidget;
}());
/* harmony default export */ __webpack_exports__["default"] = (DmWidget);


/***/ }),

/***/ "./src/entries/dm-widget.ts":
/*!**********************************!*\
  !*** ./src/entries/dm-widget.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dm_sidebar_dm_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dm-sidebar/dm-sidebar */ "./src/dm-sidebar/dm-sidebar.ts");

var el = document.querySelectorAll('.dm-sidebar-widget');
var dmWidget = new _dm_sidebar_dm_sidebar__WEBPACK_IMPORTED_MODULE_0__["default"](el);


/***/ }),

/***/ "./src/utilities/get-query-params.ts":
/*!*******************************************!*\
  !*** ./src/utilities/get-query-params.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParam; });
function getParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


/***/ })

/******/ });
//# sourceMappingURL=dm-widget.js.map
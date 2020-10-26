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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/main/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/fonts/Arial/Arial-Black.eot":
/*!********************************************!*\
  !*** ./assets/fonts/Arial/Arial-Black.eot ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/8d4ce83042da2c2562cc2a03206bdfad.eot");

/***/ }),

/***/ "./assets/fonts/Arial/Arial-Black.ttf":
/*!********************************************!*\
  !*** ./assets/fonts/Arial/Arial-Black.ttf ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/7629370d098593c1005065e56df77ed8.ttf");

/***/ }),

/***/ "./assets/fonts/Arial/Arial-Black.woff":
/*!*********************************************!*\
  !*** ./assets/fonts/Arial/Arial-Black.woff ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/11f09b918dcc30736de0cac3bbaaf95d.woff");

/***/ }),

/***/ "./assets/fonts/Arial/Arial-BoldItalicMT.eot":
/*!***************************************************!*\
  !*** ./assets/fonts/Arial/Arial-BoldItalicMT.eot ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/2d6b5d610cea4f54be7c6beeecc40214.eot");

/***/ }),

/***/ "./assets/fonts/Arial/Arial-BoldItalicMT.ttf":
/*!***************************************************!*\
  !*** ./assets/fonts/Arial/Arial-BoldItalicMT.ttf ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/bfb7883064b1960b7242ae52c8475769.ttf");

/***/ }),

/***/ "./assets/fonts/Arial/Arial-BoldItalicMT.woff":
/*!****************************************************!*\
  !*** ./assets/fonts/Arial/Arial-BoldItalicMT.woff ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/2c9f876781975fd907e442c694309e55.woff");

/***/ }),

/***/ "./assets/fonts/Arial/Arial-BoldMT.eot":
/*!*********************************************!*\
  !*** ./assets/fonts/Arial/Arial-BoldMT.eot ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/6ef195e2092cd98c31ad36b1cef1befe.eot");

/***/ }),

/***/ "./assets/fonts/Arial/Arial-BoldMT.ttf":
/*!*********************************************!*\
  !*** ./assets/fonts/Arial/Arial-BoldMT.ttf ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/9225ac2d0174f69d955dc4710d339228.ttf");

/***/ }),

/***/ "./assets/fonts/Arial/Arial-BoldMT.woff":
/*!**********************************************!*\
  !*** ./assets/fonts/Arial/Arial-BoldMT.woff ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/2557a3131adc742af89b48453e5b5fd0.woff");

/***/ }),

/***/ "./assets/fonts/Arial/Arial-ItalicMT.eot":
/*!***********************************************!*\
  !*** ./assets/fonts/Arial/Arial-ItalicMT.eot ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/82ecfeb53c15c6645b57fafeb91b396f.eot");

/***/ }),

/***/ "./assets/fonts/Arial/Arial-ItalicMT.ttf":
/*!***********************************************!*\
  !*** ./assets/fonts/Arial/Arial-ItalicMT.ttf ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/64f0cb55775d859f8c637e3639a6c074.ttf");

/***/ }),

/***/ "./assets/fonts/Arial/Arial-ItalicMT.woff":
/*!************************************************!*\
  !*** ./assets/fonts/Arial/Arial-ItalicMT.woff ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/ba08b85b2224e54b97246e1a16edb2ab.woff");

/***/ }),

/***/ "./assets/fonts/Arial/ArialMT.eot":
/*!****************************************!*\
  !*** ./assets/fonts/Arial/ArialMT.eot ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/cfcb62075526edc12210866cfde49697.eot");

/***/ }),

/***/ "./assets/fonts/Arial/ArialMT.ttf":
/*!****************************************!*\
  !*** ./assets/fonts/Arial/ArialMT.ttf ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/74d06c0a3e4f4e82629586190425e7f8.ttf");

/***/ }),

/***/ "./assets/fonts/Arial/ArialMT.woff":
/*!*****************************************!*\
  !*** ./assets/fonts/Arial/ArialMT.woff ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/5650d0403357bdc7a48ebc633b1e42df.woff");

/***/ }),

/***/ "./assets/fonts/Arial/ArialNarrow-Bold.eot":
/*!*************************************************!*\
  !*** ./assets/fonts/Arial/ArialNarrow-Bold.eot ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/778e3b4a5a5af221f0a03c0d88d1e608.eot");

/***/ }),

/***/ "./assets/fonts/Arial/ArialNarrow-Bold.ttf":
/*!*************************************************!*\
  !*** ./assets/fonts/Arial/ArialNarrow-Bold.ttf ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/56f25e001a3fe6f45b6b2fcce78869a5.ttf");

/***/ }),

/***/ "./assets/fonts/Arial/ArialNarrow-Bold.woff":
/*!**************************************************!*\
  !*** ./assets/fonts/Arial/ArialNarrow-Bold.woff ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/241ee43735d0b7e7d71803c01934b201.woff");

/***/ }),

/***/ "./assets/fonts/Arial/ArialNarrow-BoldItalic.eot":
/*!*******************************************************!*\
  !*** ./assets/fonts/Arial/ArialNarrow-BoldItalic.eot ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/0a73454d7c04bdfa8f7768799b9c7448.eot");

/***/ }),

/***/ "./assets/fonts/Arial/ArialNarrow-BoldItalic.ttf":
/*!*******************************************************!*\
  !*** ./assets/fonts/Arial/ArialNarrow-BoldItalic.ttf ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/7f2f2a8fd95841d42cea0683e532a8d1.ttf");

/***/ }),

/***/ "./assets/fonts/Arial/ArialNarrow-BoldItalic.woff":
/*!********************************************************!*\
  !*** ./assets/fonts/Arial/ArialNarrow-BoldItalic.woff ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/df4af404f6cd8ff820d64513b660e392.woff");

/***/ }),

/***/ "./assets/fonts/Arial/ArialNarrow-Italic.eot":
/*!***************************************************!*\
  !*** ./assets/fonts/Arial/ArialNarrow-Italic.eot ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/5b44a601ebe5662dbcccb7403bd71e9a.eot");

/***/ }),

/***/ "./assets/fonts/Arial/ArialNarrow-Italic.ttf":
/*!***************************************************!*\
  !*** ./assets/fonts/Arial/ArialNarrow-Italic.ttf ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/23c74802c49a12a50eff30401404af58.ttf");

/***/ }),

/***/ "./assets/fonts/Arial/ArialNarrow-Italic.woff":
/*!****************************************************!*\
  !*** ./assets/fonts/Arial/ArialNarrow-Italic.woff ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/df9665ad486c38847ae2df69eff28e13.woff");

/***/ }),

/***/ "./assets/fonts/Arial/ArialNarrow.eot":
/*!********************************************!*\
  !*** ./assets/fonts/Arial/ArialNarrow.eot ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/0e3feaab4df5e1567342d8a193d06af4.eot");

/***/ }),

/***/ "./assets/fonts/Arial/ArialNarrow.ttf":
/*!********************************************!*\
  !*** ./assets/fonts/Arial/ArialNarrow.ttf ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/87a16957660d49ec42849565b4427b83.ttf");

/***/ }),

/***/ "./assets/fonts/Arial/ArialNarrow.woff":
/*!*********************************************!*\
  !*** ./assets/fonts/Arial/ArialNarrow.woff ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/31eaf9d891459086c81b9969dcaae719.woff");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia-Bold.eot":
/*!***********************************************!*\
  !*** ./assets/fonts/Georgia/Georgia-Bold.eot ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/f5d9406e88f3fa5239804e3ac79de788.eot");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia-Bold.ttf":
/*!***********************************************!*\
  !*** ./assets/fonts/Georgia/Georgia-Bold.ttf ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/b03fec3351d6f3d97e78960953e3d7d0.ttf");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia-Bold.woff":
/*!************************************************!*\
  !*** ./assets/fonts/Georgia/Georgia-Bold.woff ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/c6fe2d5538b8df715e24b690d75d58ab.woff");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia-Bold.woff2":
/*!*************************************************!*\
  !*** ./assets/fonts/Georgia/Georgia-Bold.woff2 ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/3fc24d368e768700b0a584821ee5a64f.woff2");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia-BoldItalic.eot":
/*!*****************************************************!*\
  !*** ./assets/fonts/Georgia/Georgia-BoldItalic.eot ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/18df07f14917b7c560bf824b290ee3d9.eot");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia-BoldItalic.ttf":
/*!*****************************************************!*\
  !*** ./assets/fonts/Georgia/Georgia-BoldItalic.ttf ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/438e7d7aab83703896df1ffb32ebaaec.ttf");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia-BoldItalic.woff":
/*!******************************************************!*\
  !*** ./assets/fonts/Georgia/Georgia-BoldItalic.woff ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/e6361b666d3513cb43f01314f3634328.woff");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia-BoldItalic.woff2":
/*!*******************************************************!*\
  !*** ./assets/fonts/Georgia/Georgia-BoldItalic.woff2 ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/a4f7d2615f6e53d94e42fc4ba6d07c76.woff2");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia-Italic.eot":
/*!*************************************************!*\
  !*** ./assets/fonts/Georgia/Georgia-Italic.eot ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/83018048889eedc32dca1e27702fa70c.eot");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia-Italic.ttf":
/*!*************************************************!*\
  !*** ./assets/fonts/Georgia/Georgia-Italic.ttf ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/ec4e68b0581e761bacc799bd891706a1.ttf");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia-Italic.woff":
/*!**************************************************!*\
  !*** ./assets/fonts/Georgia/Georgia-Italic.woff ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/fee026271435620d9c7c191b457a1ee8.woff");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia-Italic.woff2":
/*!***************************************************!*\
  !*** ./assets/fonts/Georgia/Georgia-Italic.woff2 ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/bb22f0b6927ca6c386e98fb6aec0beb9.woff2");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia.eot":
/*!******************************************!*\
  !*** ./assets/fonts/Georgia/Georgia.eot ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/78f29c683e6528adf179f99d134f960f.eot");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia.ttf":
/*!******************************************!*\
  !*** ./assets/fonts/Georgia/Georgia.ttf ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/ded2a9c8c07345446ad5950b7b97c691.ttf");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia.woff":
/*!*******************************************!*\
  !*** ./assets/fonts/Georgia/Georgia.woff ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/4fa6bec13ea201f703e29e8219c9dc34.woff");

/***/ }),

/***/ "./assets/fonts/Georgia/Georgia.woff2":
/*!********************************************!*\
  !*** ./assets/fonts/Georgia/Georgia.woff2 ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/fonts/3c750001db0a6c17eb0a8750ba94dc0f.woff2");

/***/ }),

/***/ "./assets/images/noise_transparent@2x.png":
/*!************************************************!*\
  !*** ./assets/images/noise_transparent@2x.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/noise_transparent@2x.png");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/fonts/Arial/font.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/fonts/Arial/font.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Arial_ItalicMT_eot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Arial-ItalicMT.eot */ "./assets/fonts/Arial/Arial-ItalicMT.eot");
/* harmony import */ var _Arial_ItalicMT_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Arial-ItalicMT.woff */ "./assets/fonts/Arial/Arial-ItalicMT.woff");
/* harmony import */ var _Arial_ItalicMT_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Arial-ItalicMT.ttf */ "./assets/fonts/Arial/Arial-ItalicMT.ttf");
/* harmony import */ var _ArialNarrow_Bold_eot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ArialNarrow-Bold.eot */ "./assets/fonts/Arial/ArialNarrow-Bold.eot");
/* harmony import */ var _ArialNarrow_Bold_woff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ArialNarrow-Bold.woff */ "./assets/fonts/Arial/ArialNarrow-Bold.woff");
/* harmony import */ var _ArialNarrow_Bold_ttf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ArialNarrow-Bold.ttf */ "./assets/fonts/Arial/ArialNarrow-Bold.ttf");
/* harmony import */ var _Arial_BoldItalicMT_eot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Arial-BoldItalicMT.eot */ "./assets/fonts/Arial/Arial-BoldItalicMT.eot");
/* harmony import */ var _Arial_BoldItalicMT_woff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Arial-BoldItalicMT.woff */ "./assets/fonts/Arial/Arial-BoldItalicMT.woff");
/* harmony import */ var _Arial_BoldItalicMT_ttf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Arial-BoldItalicMT.ttf */ "./assets/fonts/Arial/Arial-BoldItalicMT.ttf");
/* harmony import */ var _ArialNarrow_eot__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ArialNarrow.eot */ "./assets/fonts/Arial/ArialNarrow.eot");
/* harmony import */ var _ArialNarrow_woff__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ArialNarrow.woff */ "./assets/fonts/Arial/ArialNarrow.woff");
/* harmony import */ var _ArialNarrow_ttf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ArialNarrow.ttf */ "./assets/fonts/Arial/ArialNarrow.ttf");
/* harmony import */ var _ArialNarrow_Italic_eot__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ArialNarrow-Italic.eot */ "./assets/fonts/Arial/ArialNarrow-Italic.eot");
/* harmony import */ var _ArialNarrow_Italic_woff__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ArialNarrow-Italic.woff */ "./assets/fonts/Arial/ArialNarrow-Italic.woff");
/* harmony import */ var _ArialNarrow_Italic_ttf__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ArialNarrow-Italic.ttf */ "./assets/fonts/Arial/ArialNarrow-Italic.ttf");
/* harmony import */ var _ArialMT_eot__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ArialMT.eot */ "./assets/fonts/Arial/ArialMT.eot");
/* harmony import */ var _ArialMT_woff__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ArialMT.woff */ "./assets/fonts/Arial/ArialMT.woff");
/* harmony import */ var _ArialMT_ttf__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ArialMT.ttf */ "./assets/fonts/Arial/ArialMT.ttf");
/* harmony import */ var _Arial_BoldMT_eot__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Arial-BoldMT.eot */ "./assets/fonts/Arial/Arial-BoldMT.eot");
/* harmony import */ var _Arial_BoldMT_woff__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Arial-BoldMT.woff */ "./assets/fonts/Arial/Arial-BoldMT.woff");
/* harmony import */ var _Arial_BoldMT_ttf__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Arial-BoldMT.ttf */ "./assets/fonts/Arial/Arial-BoldMT.ttf");
/* harmony import */ var _Arial_Black_eot__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Arial-Black.eot */ "./assets/fonts/Arial/Arial-Black.eot");
/* harmony import */ var _Arial_Black_woff__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Arial-Black.woff */ "./assets/fonts/Arial/Arial-Black.woff");
/* harmony import */ var _Arial_Black_ttf__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Arial-Black.ttf */ "./assets/fonts/Arial/Arial-Black.ttf");
/* harmony import */ var _ArialNarrow_BoldItalic_eot__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ArialNarrow-BoldItalic.eot */ "./assets/fonts/Arial/ArialNarrow-BoldItalic.eot");
/* harmony import */ var _ArialNarrow_BoldItalic_woff__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ArialNarrow-BoldItalic.woff */ "./assets/fonts/Arial/ArialNarrow-BoldItalic.woff");
/* harmony import */ var _ArialNarrow_BoldItalic_ttf__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ArialNarrow-BoldItalic.ttf */ "./assets/fonts/Arial/ArialNarrow-BoldItalic.ttf");
// Imports






























var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_ItalicMT_eot__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_ItalicMT_eot__WEBPACK_IMPORTED_MODULE_3__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_ItalicMT_woff__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_ItalicMT_ttf__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_Bold_eot__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_Bold_eot__WEBPACK_IMPORTED_MODULE_6__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_Bold_woff__WEBPACK_IMPORTED_MODULE_7__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_Bold_ttf__WEBPACK_IMPORTED_MODULE_8__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_BoldItalicMT_eot__WEBPACK_IMPORTED_MODULE_9__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_BoldItalicMT_eot__WEBPACK_IMPORTED_MODULE_9__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_BoldItalicMT_woff__WEBPACK_IMPORTED_MODULE_10__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_BoldItalicMT_ttf__WEBPACK_IMPORTED_MODULE_11__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_eot__WEBPACK_IMPORTED_MODULE_12__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_eot__WEBPACK_IMPORTED_MODULE_12__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_woff__WEBPACK_IMPORTED_MODULE_13__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_ttf__WEBPACK_IMPORTED_MODULE_14__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_Italic_eot__WEBPACK_IMPORTED_MODULE_15__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_Italic_eot__WEBPACK_IMPORTED_MODULE_15__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_Italic_woff__WEBPACK_IMPORTED_MODULE_16__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_Italic_ttf__WEBPACK_IMPORTED_MODULE_17__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialMT_eot__WEBPACK_IMPORTED_MODULE_18__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialMT_eot__WEBPACK_IMPORTED_MODULE_18__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialMT_woff__WEBPACK_IMPORTED_MODULE_19__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialMT_ttf__WEBPACK_IMPORTED_MODULE_20__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_BoldMT_eot__WEBPACK_IMPORTED_MODULE_21__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_BoldMT_eot__WEBPACK_IMPORTED_MODULE_21__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_BoldMT_woff__WEBPACK_IMPORTED_MODULE_22__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_BoldMT_ttf__WEBPACK_IMPORTED_MODULE_23__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_Black_eot__WEBPACK_IMPORTED_MODULE_24__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_Black_eot__WEBPACK_IMPORTED_MODULE_24__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_Black_woff__WEBPACK_IMPORTED_MODULE_25__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Arial_Black_ttf__WEBPACK_IMPORTED_MODULE_26__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_BoldItalic_eot__WEBPACK_IMPORTED_MODULE_27__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_BoldItalic_eot__WEBPACK_IMPORTED_MODULE_27__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_BoldItalic_woff__WEBPACK_IMPORTED_MODULE_28__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_ArialNarrow_BoldItalic_ttf__WEBPACK_IMPORTED_MODULE_29__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* This stylesheet generated by Transfonter (https://transfonter.org) on August 20, 2017 5:39 PM */\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  src: local('Arial Italic'), local('Arial-ItalicMT'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('truetype');\r\n  font-weight: normal;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n  src: local('Arial Narrow Bold'), local('ArialNarrow-Bold'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('embedded-opentype'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format('woff'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('truetype');\r\n  font-weight: bold;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\r\n  src: local('Arial Bold Italic'), local('Arial-BoldItalicMT'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('embedded-opentype'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format('woff'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('truetype');\r\n  font-weight: bold;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\r\n  src: local('Arial Narrow'), local('ArialNarrow'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format('embedded-opentype'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format('woff'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") format('truetype');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");\r\n  src: local('Arial Narrow Italic'), local('ArialNarrow-Italic'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") format('embedded-opentype'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") format('woff'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ") format('truetype');\r\n  font-weight: normal;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\r\n  src: local('Arial'), local('ArialMT'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ") format('embedded-opentype'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ") format('woff'), url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format('truetype');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ");\r\n  src: local('Arial Bold'), local('Arial-BoldMT'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ") format('embedded-opentype'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ") format('woff'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ") format('truetype');\r\n  font-weight: bold;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ");\r\n  src: local('Arial Black'), local('Arial-Black'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ") format('embedded-opentype'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + ") format('woff'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + ") format('truetype');\r\n  font-weight: 900;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + ");\r\n  src: local('Arial Narrow Bold Italic'), local('ArialNarrow-BoldItalic'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_33___ + ") format('embedded-opentype'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_34___ + ") format('woff'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_35___ + ") format('truetype');\r\n  font-weight: bold;\r\n  font-style: italic;\r\n}\r\n", "",{"version":3,"sources":["webpack://assets/fonts/Arial/font.css"],"names":[],"mappings":"AAAA,kGAAkG;;AAElG;EACE,oBAAoB;EACpB,4CAA8B;EAC9B;;;8DAG8C;EAC9C,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,4CAAgC;EAChC;;;8DAGgD;EAChD,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,4CAAkC;EAClC;;;+DAGkD;EAClD,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,6CAA2B;EAC3B;;;+DAG2C;EAC3C,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,6CAAkC;EAClC;;;+DAGkD;EAClD,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,6CAAuB;EACvB;;wHAE2E;EAC3E,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,6CAA4B;EAC5B;;;+DAG4C;EAC5C,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,6CAA2B;EAC3B;;;+DAG2C;EAC3C,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,6CAAsC;EACtC;;;+DAGsD;EACtD,iBAAiB;EACjB,kBAAkB;AACpB","sourcesContent":["/* This stylesheet generated by Transfonter (https://transfonter.org) on August 20, 2017 5:39 PM */\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url('Arial-ItalicMT.eot');\r\n  src: local('Arial Italic'), local('Arial-ItalicMT'),\r\n    url('Arial-ItalicMT.eot?#iefix') format('embedded-opentype'),\r\n    url('Arial-ItalicMT.woff') format('woff'),\r\n    url('Arial-ItalicMT.ttf') format('truetype');\r\n  font-weight: normal;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url('ArialNarrow-Bold.eot');\r\n  src: local('Arial Narrow Bold'), local('ArialNarrow-Bold'),\r\n    url('ArialNarrow-Bold.eot?#iefix') format('embedded-opentype'),\r\n    url('ArialNarrow-Bold.woff') format('woff'),\r\n    url('ArialNarrow-Bold.ttf') format('truetype');\r\n  font-weight: bold;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url('Arial-BoldItalicMT.eot');\r\n  src: local('Arial Bold Italic'), local('Arial-BoldItalicMT'),\r\n    url('Arial-BoldItalicMT.eot?#iefix') format('embedded-opentype'),\r\n    url('Arial-BoldItalicMT.woff') format('woff'),\r\n    url('Arial-BoldItalicMT.ttf') format('truetype');\r\n  font-weight: bold;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url('ArialNarrow.eot');\r\n  src: local('Arial Narrow'), local('ArialNarrow'),\r\n    url('ArialNarrow.eot?#iefix') format('embedded-opentype'),\r\n    url('ArialNarrow.woff') format('woff'),\r\n    url('ArialNarrow.ttf') format('truetype');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url('ArialNarrow-Italic.eot');\r\n  src: local('Arial Narrow Italic'), local('ArialNarrow-Italic'),\r\n    url('ArialNarrow-Italic.eot?#iefix') format('embedded-opentype'),\r\n    url('ArialNarrow-Italic.woff') format('woff'),\r\n    url('ArialNarrow-Italic.ttf') format('truetype');\r\n  font-weight: normal;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url('ArialMT.eot');\r\n  src: local('Arial'), local('ArialMT'),\r\n    url('ArialMT.eot?#iefix') format('embedded-opentype'),\r\n    url('ArialMT.woff') format('woff'), url('ArialMT.ttf') format('truetype');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url('Arial-BoldMT.eot');\r\n  src: local('Arial Bold'), local('Arial-BoldMT'),\r\n    url('Arial-BoldMT.eot?#iefix') format('embedded-opentype'),\r\n    url('Arial-BoldMT.woff') format('woff'),\r\n    url('Arial-BoldMT.ttf') format('truetype');\r\n  font-weight: bold;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url('Arial-Black.eot');\r\n  src: local('Arial Black'), local('Arial-Black'),\r\n    url('Arial-Black.eot?#iefix') format('embedded-opentype'),\r\n    url('Arial-Black.woff') format('woff'),\r\n    url('Arial-Black.ttf') format('truetype');\r\n  font-weight: 900;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Arial';\r\n  src: url('ArialNarrow-BoldItalic.eot');\r\n  src: local('Arial Narrow Bold Italic'), local('ArialNarrow-BoldItalic'),\r\n    url('ArialNarrow-BoldItalic.eot?#iefix') format('embedded-opentype'),\r\n    url('ArialNarrow-BoldItalic.woff') format('woff'),\r\n    url('ArialNarrow-BoldItalic.ttf') format('truetype');\r\n  font-weight: bold;\r\n  font-style: italic;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/fonts/Georgia/font.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/fonts/Georgia/font.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Georgia_eot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Georgia.eot */ "./assets/fonts/Georgia/Georgia.eot");
/* harmony import */ var _Georgia_woff2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Georgia.woff2 */ "./assets/fonts/Georgia/Georgia.woff2");
/* harmony import */ var _Georgia_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Georgia.woff */ "./assets/fonts/Georgia/Georgia.woff");
/* harmony import */ var _Georgia_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Georgia.ttf */ "./assets/fonts/Georgia/Georgia.ttf");
/* harmony import */ var _Georgia_Bold_eot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Georgia-Bold.eot */ "./assets/fonts/Georgia/Georgia-Bold.eot");
/* harmony import */ var _Georgia_Bold_woff2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Georgia-Bold.woff2 */ "./assets/fonts/Georgia/Georgia-Bold.woff2");
/* harmony import */ var _Georgia_Bold_woff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Georgia-Bold.woff */ "./assets/fonts/Georgia/Georgia-Bold.woff");
/* harmony import */ var _Georgia_Bold_ttf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Georgia-Bold.ttf */ "./assets/fonts/Georgia/Georgia-Bold.ttf");
/* harmony import */ var _Georgia_Italic_eot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Georgia-Italic.eot */ "./assets/fonts/Georgia/Georgia-Italic.eot");
/* harmony import */ var _Georgia_Italic_woff2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Georgia-Italic.woff2 */ "./assets/fonts/Georgia/Georgia-Italic.woff2");
/* harmony import */ var _Georgia_Italic_woff__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Georgia-Italic.woff */ "./assets/fonts/Georgia/Georgia-Italic.woff");
/* harmony import */ var _Georgia_Italic_ttf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Georgia-Italic.ttf */ "./assets/fonts/Georgia/Georgia-Italic.ttf");
/* harmony import */ var _Georgia_BoldItalic_eot__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Georgia-BoldItalic.eot */ "./assets/fonts/Georgia/Georgia-BoldItalic.eot");
/* harmony import */ var _Georgia_BoldItalic_woff2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Georgia-BoldItalic.woff2 */ "./assets/fonts/Georgia/Georgia-BoldItalic.woff2");
/* harmony import */ var _Georgia_BoldItalic_woff__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Georgia-BoldItalic.woff */ "./assets/fonts/Georgia/Georgia-BoldItalic.woff");
/* harmony import */ var _Georgia_BoldItalic_ttf__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Georgia-BoldItalic.ttf */ "./assets/fonts/Georgia/Georgia-BoldItalic.ttf");
// Imports



















var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_eot__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_eot__WEBPACK_IMPORTED_MODULE_3__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_woff2__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_woff__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_ttf__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_Bold_eot__WEBPACK_IMPORTED_MODULE_7__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_Bold_eot__WEBPACK_IMPORTED_MODULE_7__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_Bold_woff2__WEBPACK_IMPORTED_MODULE_8__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_Bold_woff__WEBPACK_IMPORTED_MODULE_9__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_Bold_ttf__WEBPACK_IMPORTED_MODULE_10__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_Italic_eot__WEBPACK_IMPORTED_MODULE_11__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_Italic_eot__WEBPACK_IMPORTED_MODULE_11__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_Italic_woff2__WEBPACK_IMPORTED_MODULE_12__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_Italic_woff__WEBPACK_IMPORTED_MODULE_13__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_Italic_ttf__WEBPACK_IMPORTED_MODULE_14__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_BoldItalic_eot__WEBPACK_IMPORTED_MODULE_15__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_BoldItalic_eot__WEBPACK_IMPORTED_MODULE_15__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_BoldItalic_woff2__WEBPACK_IMPORTED_MODULE_16__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_BoldItalic_woff__WEBPACK_IMPORTED_MODULE_17__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_Georgia_BoldItalic_ttf__WEBPACK_IMPORTED_MODULE_18__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\r\n    font-family: 'Georgia';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    src: local('Georgia'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Georgia';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n    src: local('Georgia Bold'), local('Georgia-Bold'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format('embedded-opentype'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('woff2'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('woff'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('truetype');\r\n    font-weight: bold;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Georgia';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\r\n    src: local('Georgia Italic'), local('Georgia-Italic'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('embedded-opentype'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ") format('woff2'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format('woff'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format('truetype');\r\n    font-weight: normal;\r\n    font-style: italic;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Georgia';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\r\n    src: local('Georgia Bold Italic'), local('Georgia-BoldItalic'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") format('embedded-opentype'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") format('woff2'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") format('woff'),\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ") format('truetype');\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://assets/fonts/Georgia/font.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,4CAAuB;IACvB;;;;kEAIyC;IACzC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,4CAA4B;IAC5B;;;;kEAI8C;IAC9C,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,6CAA8B;IAC9B;;;;mEAIgD;IAChD,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,6CAAkC;IAClC;;;;mEAIoD;IACpD,iBAAiB;IACjB,kBAAkB;AACtB","sourcesContent":["@font-face {\r\n    font-family: 'Georgia';\r\n    src: url('Georgia.eot');\r\n    src: local('Georgia'),\r\n        url('Georgia.eot?#iefix') format('embedded-opentype'),\r\n        url('Georgia.woff2') format('woff2'),\r\n        url('Georgia.woff') format('woff'),\r\n        url('Georgia.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Georgia';\r\n    src: url('Georgia-Bold.eot');\r\n    src: local('Georgia Bold'), local('Georgia-Bold'),\r\n        url('Georgia-Bold.eot?#iefix') format('embedded-opentype'),\r\n        url('Georgia-Bold.woff2') format('woff2'),\r\n        url('Georgia-Bold.woff') format('woff'),\r\n        url('Georgia-Bold.ttf') format('truetype');\r\n    font-weight: bold;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Georgia';\r\n    src: url('Georgia-Italic.eot');\r\n    src: local('Georgia Italic'), local('Georgia-Italic'),\r\n        url('Georgia-Italic.eot?#iefix') format('embedded-opentype'),\r\n        url('Georgia-Italic.woff2') format('woff2'),\r\n        url('Georgia-Italic.woff') format('woff'),\r\n        url('Georgia-Italic.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: italic;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Georgia';\r\n    src: url('Georgia-BoldItalic.eot');\r\n    src: local('Georgia Bold Italic'), local('Georgia-BoldItalic'),\r\n        url('Georgia-BoldItalic.eot?#iefix') format('embedded-opentype'),\r\n        url('Georgia-BoldItalic.woff2') format('woff2'),\r\n        url('Georgia-BoldItalic.woff') format('woff'),\r\n        url('Georgia-BoldItalic.ttf') format('truetype');\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./pages/main/sass/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./pages/main/sass/main.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_fonts_Georgia_font_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../../../assets/fonts/Georgia/font.css */ "./node_modules/css-loader/dist/cjs.js!./assets/fonts/Georgia/font.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_fonts_Arial_font_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../../../assets/fonts/Arial/font.css */ "./node_modules/css-loader/dist/cjs.js!./assets/fonts/Arial/font.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_noise_transparent_2x_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images/noise_transparent@2x.png */ "./assets/images/noise_transparent@2x.png");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_fonts_Georgia_font_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_fonts_Arial_font_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(_assets_images_noise_transparent_2x_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.scss v0.1.0 | MIT License | based on git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nhtml {\n  font-size: 10px; }\n\nbody {\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  overflow-x: hidden; }\n\n.overflow-y {\n  overflow-y: hidden; }\n\n.body_overlay {\n  overflow-y: hidden; }\n  .body_overlay::before {\n    display: block;\n    content: '';\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(41, 41, 41, 0.6);\n    z-index: 10; }\n\n.wrapper {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 40px; }\n  @media (max-width: 1279px) {\n    .wrapper {\n      padding: 0 30px; } }\n  @media (max-width: 767px) {\n    .wrapper {\n      padding: 0 10px; } }\n\n.element-invisible {\n  position: absolute;\n  clip: rect(1px, 1px, 1px, 1px);\n  -webkit-clip-path: inset(0px 0px 99.9% 99.9%);\n  clip-path: inset(0px 0px 99.9% 99.9%);\n  overflow: hidden;\n  height: 1px;\n  width: 1px;\n  padding: 0;\n  border: 0; }\n\nh1 {\n  font-family: \"Georgia\", serif;\n  font-size: 3.2rem;\n  font-weight: 400;\n  line-height: 110%;\n  font-style: normal;\n  letter-spacing: 0.06em;\n  color: #f1cdb3; }\n\nh2 {\n  margin-bottom: 41px;\n  font-family: \"Georgia\", serif;\n  font-size: 4.4rem;\n  font-weight: 400;\n  line-height: 130%;\n  font-style: normal;\n  color: #ffffff; }\n\nh3 {\n  margin: 15px 0 24px;\n  font-family: \"Georgia\", serif;\n  font-size: 3.5rem;\n  font-weight: 400;\n  line-height: 130%;\n  font-style: normal;\n  letter-spacing: 0.06em;\n  color: #545454; }\n  @media (max-width: 767px) {\n    h3 {\n      font-size: 2.5rem; } }\n\nh4 {\n  font-family: \"Georgia\", serif;\n  font-size: 2.2rem;\n  font-weight: 400;\n  line-height: 115%;\n  font-style: normal;\n  letter-spacing: 0.06em;\n  color: #545454; }\n\np,\nspan {\n  font-family: \"Arial\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 400;\n  line-height: 160%;\n  font-style: normal;\n  color: #545454; }\n\n.logo {\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  transition: 1s; }\n  .logo_shadow {\n    opacity: 0; }\n\n.logo__title {\n  font-family: \"Georgia\", serif;\n  font-size: 3.2rem;\n  font-weight: 400;\n  line-height: 110%;\n  font-style: normal;\n  letter-spacing: 0.06em;\n  color: #f1cdb3; }\n  .logo__title_dark {\n    color: #545454; }\n\n.logo__subtitle {\n  margin-top: 9px;\n  padding-left: 4px;\n  font-family: \"Arial\", sans-serif;\n  font-size: 1.3rem;\n  font-weight: 400;\n  line-height: 1.5rem;\n  font-style: normal;\n  letter-spacing: 0.1em;\n  color: #ffffff; }\n  .logo__subtitle_dark {\n    color: #292929; }\n\n.logo__link {\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  text-decoration: none; }\n\n.navigation__list {\n  display: flex;\n  list-style: none; }\n  .navigation__list_mobile {\n    flex-direction: column;\n    flex-wrap: wrap;\n    width: 100%;\n    height: 100vh;\n    padding: 0;\n    justify-content: center;\n    align-items: center;\n    list-style: none; }\n\n.navigation__item {\n  font-family: \"Arial\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 400;\n  line-height: 160%;\n  font-style: normal; }\n  .navigation__item:hover a {\n    color: #ffffff; }\n  .navigation__item + .navigation__item {\n    margin-left: 36px; }\n  .navigation__item a {\n    text-decoration: none;\n    color: #cdcdcd; }\n  .navigation__item_active {\n    border-bottom: 3px solid #f1cdb3; }\n    .navigation__item_active a {\n      color: #ffffff; }\n  .navigation__item_mobile {\n    font-family: \"Arial\", sans-serif;\n    font-size: 3.2rem;\n    font-weight: 400;\n    line-height: 160%;\n    font-style: normal; }\n    .navigation__item_mobile a {\n      text-decoration: none;\n      color: #cdcdcd; }\n\n.navigation-mobile {\n  position: fixed;\n  box-sizing: border-box;\n  top: 0;\n  right: -320px;\n  display: none;\n  width: 320px;\n  padding: 31px 10px 0;\n  background-color: #292929;\n  transition: 1s;\n  z-index: 99; }\n  @media (max-width: 767px) {\n    .navigation-mobile {\n      display: block; } }\n  .navigation-mobile_translate {\n    transform: translateX(-100%); }\n\n.navigation-mobile__item {\n  display: flex;\n  font-family: \"Arial\", sans-serif;\n  font-size: 3.2rem;\n  font-weight: 400;\n  line-height: 160%;\n  font-style: normal;\n  justify-content: center;\n  text-align: center; }\n  .navigation-mobile__item:hover a {\n    color: #ffffff; }\n  .navigation-mobile__item + .navigation-mobile__item {\n    margin-top: 40px; }\n  .navigation-mobile__item a {\n    display: block;\n    text-decoration: none;\n    color: #cdcdcd; }\n  .navigation-mobile__item_active a {\n    border-bottom: 3px solid #f1cdb3;\n    color: #ffffff; }\n\n.button {\n  display: flex;\n  width: 207px;\n  height: 52px;\n  justify-content: center;\n  align-items: center;\n  background: #f1cdb3;\n  border-radius: 100px;\n  cursor: pointer; }\n  .button:hover {\n    background: #fddcc4;\n    border-color: #fddcc4; }\n  .button_per-card {\n    width: 187px;\n    border: 2px solid #f1cdb3;\n    box-sizing: border-box;\n    border-radius: 100px;\n    background: #ffffff; }\n  .button_pets {\n    width: 261px; }\n  .button a {\n    text-decoration: none; }\n\n.button__title {\n  font-family: \"Georgia\", serif;\n  font-size: 1.7rem;\n  font-weight: 400;\n  line-height: 130%;\n  font-style: normal;\n  letter-spacing: 0.06em;\n  color: #292929; }\n\n.hamburger::before, .hamburger::after, .hamburger__line {\n  content: '';\n  position: absolute;\n  display: inline-block;\n  width: 100%;\n  height: 2px;\n  background: #f1cdb3; }\n\n.hamburger {\n  position: absolute;\n  width: 30px;\n  height: 22px;\n  cursor: pointer;\n  transition: 1s;\n  z-index: 100; }\n  .hamburger::before {\n    top: 0;\n    left: 0; }\n  .hamburger::after {\n    bottom: 0;\n    left: 0; }\n\n.hamburger__line {\n  top: calc(50% - 1.2px); }\n\n.hamburger_rotate {\n  transform: rotate(90deg); }\n\n.background-top {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), radial-gradient(100% 215.42% at 0% 0%, #5b483a 0%, #262425 100%), #211f20; }\n\n.header-wrapper {\n  display: flex;\n  padding-top: 61px;\n  justify-content: space-between; }\n  @media (max-width: 1279px) {\n    .header-wrapper {\n      padding-top: 31px; } }\n  .header-wrapper_pets {\n    padding-top: 31px; }\n\n.navigation-wrapper {\n  padding-top: 5px; }\n  @media (max-width: 767px) {\n    .navigation-wrapper {\n      display: none; } }\n\n.nav-wrapper {\n  position: relative; }\n\n.hamburger-wrapper {\n  display: none;\n  margin-top: 19px;\n  margin-right: 43px; }\n  @media (max-width: 767px) {\n    .hamburger-wrapper {\n      display: block; } }\n\n.footer {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), radial-gradient(110.67% 538.64% at 5.73% 50%, #513d2f 0%, #1a1a1c 100%), #211f20; }\n\n.footer-wrapper {\n  display: flex;\n  padding-top: 40px;\n  justify-content: space-between; }\n  @media (max-width: 1130px) {\n    .footer-wrapper {\n      padding-top: 13px;\n      flex-wrap: wrap;\n      justify-content: space-around; } }\n  @media (max-width: 767px) {\n    .footer-wrapper {\n      padding-top: 14px; } }\n\n.footer-info-wrapper {\n  display: flex;\n  width: 61.7%;\n  min-width: 640px;\n  justify-content: space-between; }\n  @media (max-width: 767px) {\n    .footer-info-wrapper {\n      width: 100%;\n      min-width: 0;\n      flex-direction: column;\n      align-items: center; } }\n\n.questions {\n  width: 279px;\n  margin-right: 20px;\n  flex-shrink: 0; }\n  @media (max-width: 767px) {\n    .questions {\n      margin-right: 0;\n      margin-bottom: 0; } }\n\n.visit {\n  width: 302px;\n  flex-shrink: 0; }\n\n.questions__title,\n.visit__title {\n  margin-top: 17px;\n  color: #ffffff; }\n  @media (max-width: 767px) {\n    .questions__title,\n    .visit__title {\n      font-size: 3.5rem;\n      line-height: 130%;\n      text-align: center; } }\n\n.question-contacts {\n  margin-top: 39px; }\n\n.visit-contacts {\n  margin-top: 33px; }\n\n.question-contacts__list,\n.visit-contacts__list {\n  list-style: none;\n  padding: 0; }\n\n.question-contacts__item {\n  display: flex;\n  margin-bottom: 40px;\n  align-items: center; }\n  @media (max-width: 767px) {\n    .question-contacts__item:last-child {\n      margin-bottom: 24px; } }\n\n.visit-contacts__item {\n  display: flex;\n  margin-bottom: 32px;\n  align-items: center; }\n\n.question-contacts__link,\n.visit-contacts__link {\n  display: flex;\n  align-items: center;\n  font-family: \"Georgia\";\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 2.3rem;\n  font-style: normal;\n  letter-spacing: 0.06em;\n  color: #f1cdb3;\n  text-decoration: none; }\n  .question-contacts__link:hover,\n  .visit-contacts__link:hover {\n    color: #fafafa; }\n  .question-contacts__link img,\n  .visit-contacts__link img {\n    margin-right: 20px; }\n\n.footer__picture {\n  display: flex; }\n  @media (max-width: 1130px) {\n    .footer__picture {\n      margin-top: 25px; } }\n  @media (max-width: 767px) {\n    .footer__picture {\n      width: 86.66667%;\n      min-width: 260px;\n      max-width: 300px;\n      margin-top: 61px; }\n      .footer__picture img {\n        width: 100%; } }\n\n.make-friends-wrapper {\n  width: 100%;\n  display: flex;\n  padding-top: 60px; }\n  @media (max-width: 1130px) {\n    .make-friends-wrapper {\n      padding-top: 24px;\n      flex-direction: column;\n      align-items: center; } }\n  @media (max-width: 767px) {\n    .make-friends-wrapper {\n      padding-top: 39px;\n      justify-content: center; } }\n\n.make-friends__info {\n  width: 460px;\n  margin-right: 42px;\n  padding-top: 127px;\n  flex-shrink: 0; }\n  @media (max-width: 1130px) {\n    .make-friends__info {\n      padding-top: 0;\n      margin-right: 0; } }\n  @media (max-width: 767px) {\n    .make-friends__info {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      max-width: 460px;\n      align-items: center;\n      text-align: center; } }\n\n.make-friends__title {\n  width: 310px; }\n  @media (max-width: 767px) {\n    .make-friends__title {\n      width: 100%;\n      max-width: 300px;\n      margin-right: 0;\n      margin-bottom: 27px;\n      text-align: center;\n      font-size: 2.5rem;\n      letter-spacing: 0.06em; } }\n\n.make-friends__description {\n  color: #cdcdcd;\n  margin-bottom: 41px; }\n\n@media (max-width: 1130px) {\n  .make-friends__button {\n    margin: 0 auto; } }\n\n.make-friends__button a {\n  text-decoration: none; }\n\n.make-friends__picture {\n  display: flex;\n  width: auto;\n  min-width: 569px;\n  height: auto; }\n  @media (max-width: 1130px) {\n    .make-friends__picture {\n      width: 569px;\n      align-self: flex-end;\n      margin-top: 101px; } }\n  @media (max-width: 767px) {\n    .make-friends__picture {\n      width: 86.66667%;\n      min-width: 200px;\n      margin-top: 107px; } }\n  .make-friends__picture img {\n    width: 100%; }\n\n.about-wrapper {\n  display: flex;\n  margin-bottom: 89px;\n  padding-top: 80px;\n  justify-content: center;\n  align-items: flex-start; }\n  @media (max-width: 1130px) {\n    .about-wrapper {\n      padding-top: 66px;\n      margin-bottom: 100px;\n      flex-direction: column;\n      align-items: center;\n      justify-content: flex-start; } }\n  @media (max-width: 767px) {\n    .about-wrapper {\n      padding-top: 27px;\n      margin-bottom: 42px;\n      justify-content: center; } }\n\n.about__picture {\n  display: flex;\n  margin-right: 120px; }\n  @media (max-width: 1130px) {\n    .about__picture {\n      order: 2;\n      margin: 55px 0 0 0; } }\n  @media (max-width: 767px) {\n    .about__picture {\n      width: 86.66667%;\n      max-width: 300px;\n      margin-top: 34px; }\n      .about__picture img {\n        width: 100%; } }\n\n.about__info {\n  box-sizing: border-box;\n  width: 430px; }\n  @media (max-width: 1130px) {\n    .about__info {\n      width: 57%;\n      min-width: 437px; } }\n  @media (max-width: 767px) {\n    .about__info {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      min-width: 0;\n      max-width: 436px;\n      padding-left: 5%;\n      padding-right: 5%;\n      align-items: center;\n      text-align: justify; } }\n\n.about__title {\n  width: 370px; }\n  @media (max-width: 767px) {\n    .about__title {\n      width: 100%;\n      max-width: 290px;\n      margin-right: 0;\n      margin-bottom: 10px;\n      text-align: center; } }\n\n.about__description {\n  margin-bottom: 25px; }\n  @media (max-width: 767px) {\n    .about__description {\n      width: 100%;\n      margin-bottom: 7px; } }\n\n.pets {\n  background-color: #f6f6f6; }\n\n.pets-wrapper {\n  display: flex;\n  padding-top: 66px;\n  padding-bottom: 100px;\n  flex-direction: column;\n  align-items: center; }\n  @media (max-width: 767px) {\n    .pets-wrapper {\n      padding-top: 27px;\n      padding-bottom: 42px; } }\n\n.pets__title {\n  width: 400px;\n  text-align: center; }\n  @media (max-width: 767px) {\n    .pets__title {\n      width: 300px; } }\n\n.pets-slider {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between; }\n  @media (max-width: 767px) {\n    .pets-slider {\n      flex-wrap: wrap; } }\n\n.slider-wrapper {\n  padding-top: 25px;\n  padding-bottom: 50px; }\n  @media (max-width: 767px) {\n    .slider-wrapper {\n      padding-top: 8px;\n      padding-bottom: 42px; } }\n\n.pets-slider__arrow {\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  width: 52px;\n  height: 52px;\n  border: 2px solid #f1cdb3;\n  box-sizing: border-box;\n  border-radius: 100px;\n  cursor: pointer; }\n  @media (max-width: 767px) {\n    .pets-slider__arrow {\n      order: 2; } }\n  .pets-slider__arrow:hover {\n    background-color: #fddcc4;\n    border-color: #fddcc4; }\n  .pets-slider__arrow:inactive {\n    border-color: #cdcdcd; }\n    .pets-slider__arrow:inactive img {\n      opacity: 50%; }\n  .pets-slider__arrow_left {\n    margin-right: 53px; }\n    @media (max-width: 1130px) {\n      .pets-slider__arrow_left {\n        margin-right: 0; } }\n    @media (max-width: 767px) {\n      .pets-slider__arrow_left {\n        margin-left: 19.33333%; } }\n  .pets-slider__arrow_right {\n    margin-left: 53px; }\n    @media (max-width: 1130px) {\n      .pets-slider__arrow_right {\n        margin-left: 0; } }\n    @media (max-width: 767px) {\n      .pets-slider__arrow_right {\n        margin-right: 19.33333%; } }\n\n.pets-slider-container {\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  overflow: hidden; }\n\n.pets-slider__list {\n  display: flex;\n  width: 100%;\n  max-width: 1080px;\n  padding: 0;\n  justify-content: center;\n  list-style: none; }\n  @media (max-width: 767px) {\n    .pets-slider__list {\n      margin-bottom: 20px; } }\n\n.pets-slider__item {\n  display: flex;\n  flex-basis: 33.33%;\n  justify-content: center;\n  flex-shrink: 0; }\n  @media (max-width: 1130px) {\n    .pets-slider__item {\n      flex-basis: 50%; } }\n  @media (max-width: 767px) {\n    .pets-slider__item {\n      flex-basis: 100%; } }\n  .pets-slider__item_current {\n    transform: translateX(0); }\n  .pets-slider__item_prev {\n    transform: translateX(0); }\n  .pets-slider__item_next {\n    transform: translateX(0); }\n\n.popup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  display: flex;\n  width: 900px;\n  justify-content: flex-start;\n  background: #fafafa;\n  border-radius: 9px;\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n  z-index: 20;\n  cursor: auto;\n  color: #000; }\n  @media (max-width: 1279px) {\n    .popup {\n      width: 630px; } }\n  @media (max-width: 767px) {\n    .popup {\n      width: 240px;\n      padding: 10px; } }\n  .popup:hover .popup__button {\n    background-color: transparent; }\n  .popup_active {\n    transform: translate(-50%, -50%) scale(1); }\n\n.popup-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(41, 41, 41, 0.6);\n  z-index: 10; }\n  .popup-overlay:hover {\n    cursor: pointer; }\n    .popup-overlay:hover button {\n      background-color: #f1cdb3; }\n\n.popup-picture-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  border-radius: 9px; }\n  @media (max-width: 767px) {\n    .popup-picture-wrapper {\n      display: none; } }\n\n.popup__picture {\n  width: 500px;\n  height: 500px;\n  margin-right: 29px; }\n  @media (max-width: 1279px) {\n    .popup__picture {\n      width: 350px;\n      height: 350px;\n      margin-right: 11px; } }\n\n.popup__content {\n  display: flex;\n  flex-direction: column;\n  width: 351px;\n  margin-top: 50px; }\n  @media (max-width: 1279px) {\n    .popup__content {\n      width: 260px;\n      margin-top: 10px; } }\n  @media (max-width: 767px) {\n    .popup__content {\n      align-items: center; } }\n\n.popup__title {\n  margin: 0 0 10px;\n  color: #000; }\n  @media (max-width: 767px) {\n    .popup__title {\n      font-size: 3.5rem; } }\n\n.popup__type {\n  margin: 0 0 40px;\n  font-size: 2rem;\n  line-height: 115%;\n  color: #000; }\n  @media (max-width: 1279px) {\n    .popup__type {\n      margin-bottom: 20px; } }\n\n.popup__description {\n  margin: 0 0 40px;\n  text-align: left;\n  font-family: \"Georgia\", serif;\n  font-size: 1.5rem;\n  font-weight: 400;\n  line-height: 110%;\n  font-style: normal;\n  letter-spacing: 0.06em;\n  color: #000000; }\n  @media (max-width: 1279px) {\n    .popup__description {\n      font-size: 1.3rem;\n      margin-bottom: 20px; } }\n  @media (max-width: 767px) {\n    .popup__description {\n      text-align: justify;\n      margin-bottom: 24px; } }\n\n.popup-info {\n  box-sizing: border-box; }\n  @media (max-width: 767px) {\n    .popup-info {\n      width: 100%;\n      margin-left: 4px; } }\n\n.popup-info__list {\n  box-sizing: border-box;\n  margin: 0;\n  padding-left: 10px; }\n  @media (max-width: 767px) {\n    .popup-info__list {\n      width: 100%; } }\n\n.popup-info__item {\n  margin-bottom: 10px;\n  color: #f1cdb3; }\n  .popup-info__item span {\n    font-family: \"Georgia\", serif;\n    font-size: 1.5rem;\n    font-weight: 400;\n    line-height: 110%;\n    font-style: normal;\n    letter-spacing: 0.06em;\n    color: #000000; }\n\n.popup-info__title {\n  display: inline;\n  font-family: \"Georgia\", serif;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 110%;\n  font-style: normal;\n  letter-spacing: 0.06em;\n  color: #000000; }\n\n.popup__button {\n  position: absolute;\n  display: flex;\n  box-sizing: border-box;\n  top: -52px;\n  right: -42px;\n  width: 52px;\n  height: 52px;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #f1cdb3;\n  background-color: transparent;\n  border-radius: 100px;\n  pointer-events: none;\n  outline: none; }\n  @media (max-width: 767px) {\n    .popup__button {\n      top: -54px;\n      right: -26px; } }\n  .popup__button:hover {\n    background-color: #f1cdb3;\n    outline: none; }\n  .popup__button:active {\n    background-color: #f1cdb3;\n    outline: none; }\n\n.pet-card {\n  display: flex;\n  flex-basis: 270px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  padding-bottom: 30px;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fafafa;\n  border-radius: 9px;\n  cursor: pointer; }\n  .pet-card:hover {\n    background-color: #ffffff; }\n\n.pet-card__title {\n  margin: 30px 0;\n  font-family: \"Georgia\", serif;\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 2.3rem;\n  font-style: normal;\n  letter-spacing: 0.06em;\n  color: #545454; }\n\n.help-wrapper {\n  display: flex;\n  padding-top: 66px;\n  padding-bottom: 39px;\n  flex-direction: column;\n  align-items: center; }\n  @media (max-width: 767px) {\n    .help-wrapper {\n      padding-top: 27px;\n      padding-bottom: 5px; } }\n\n.help__info {\n  text-align: center;\n  width: 312px; }\n  @media (max-width: 767px) {\n    .help__info {\n      width: 100%;\n      max-width: 222px; } }\n\n.help-icons {\n  padding: 25px 85px; }\n  @media (max-width: 1279px) {\n    .help-icons {\n      padding: 25px 39px; } }\n  @media (max-width: 767px) {\n    .help-icons {\n      padding: 8px 0; } }\n\n.help-icons__list {\n  display: flex;\n  width: 100%;\n  padding: 0;\n  flex-wrap: wrap;\n  column-gap: 120px;\n  row-gap: 28px;\n  justify-content: center;\n  list-style: none; }\n  @media (max-width: 1279px) {\n    .help-icons__list {\n      justify-content: space-between;\n      column-gap: 0; } }\n  @media (max-width: 767px) {\n    .help-icons__list {\n      row-gap: 10px; } }\n\n.help-icons__item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start; }\n  @media (max-width: 1279px) {\n    .help-icons__item {\n      flex-basis: 27%; } }\n  @media (max-width: 767px) {\n    .help-icons__item {\n      flex-basis: 47%; }\n      .help-icons__item img {\n        width: 50px;\n        height: 50px; } }\n\n.help-icon__title {\n  margin-top: 30px;\n  font-size: 2rem; }\n  @media (max-width: 767px) {\n    .help-icon__title {\n      margin-top: 20px;\n      font-size: 1.5rem; } }\n\n.donation {\n  background-color: #f6f6f6; }\n\n.donation-wrapper {\n  display: flex;\n  padding-top: 82px;\n  padding-bottom: 101px;\n  column-gap: 31px;\n  justify-content: center;\n  align-items: center; }\n  @media (max-width: 1130px) {\n    .donation-wrapper {\n      flex-wrap: wrap; } }\n  @media (max-width: 767px) {\n    .donation-wrapper {\n      padding-top: 42px;\n      padding-bottom: 42px; } }\n\n.donation__picture {\n  display: flex; }\n  @media (max-width: 1130px) {\n    .donation__picture {\n      margin-top: 59px;\n      order: 2; } }\n  @media (max-width: 767px) {\n    .donation__picture {\n      width: 86.66667%;\n      max-width: 505px;\n      margin-top: 42px; }\n      .donation__picture img {\n        width: 100%; } }\n\n.donation__info {\n  width: 380px; }\n  @media (max-width: 767px) {\n    .donation__info {\n      width: 93.33333%;\n      min-width: 280px;\n      max-width: 380px;\n      margin: 0 auto; } }\n\n.donation__title {\n  width: 300px;\n  margin: 0 0 20px 0; }\n  @media (max-width: 767px) {\n    .donation__title {\n      width: 100%;\n      text-align: center; } }\n\n.donation__capture {\n  font-family: \"Georgia\";\n  font-size: 1.5rem;\n  font-weight: 400;\n  line-height: 110%;\n  font-style: normal;\n  letter-spacing: 0.06em; }\n  @media (max-width: 767px) {\n    .donation__capture {\n      display: block;\n      margin-bottom: 20px;\n      line-height: 160%;\n      letter-spacing: normal;\n      text-align: center; } }\n\n.donation__card {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  width: 349px;\n  height: 43px;\n  margin: 20px 0;\n  padding: 0 14px;\n  column-gap: 15px;\n  border-radius: 9px;\n  background: #f1cdb3; }\n  @media (max-width: 767px) {\n    .donation__card {\n      width: 281px;\n      margin: 0 auto; } }\n\n.donation__card-number {\n  text-decoration: none;\n  font-family: \"Georgia\";\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 115%;\n  font-style: normal;\n  letter-spacing: 0.06em;\n  color: #545454; }\n  @media (max-width: 767px) {\n    .donation__card-number {\n      font-size: 1.5rem; } }\n  .donation__card-number:hover {\n    color: #292929; }\n\n.donation__description {\n  display: block;\n  width: 360px;\n  margin-bottom: 0;\n  font-family: \"Arial\", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 400;\n  line-height: 1.8rem;\n  font-style: italic;\n  letter-spacing: 0.08em;\n  color: #b2b2b2; }\n  @media (max-width: 767px) {\n    .donation__description {\n      width: 100%;\n      margin: 20px auto 0 auto;\n      text-align: justify; } }\n", "",{"version":3,"sources":["webpack://node_modules/normalize.scss/normalize.scss","webpack://pages/main/sass/main.scss","webpack://pages/main/sass/base/_base.scss","webpack://pages/main/sass/abstract/_mixins.scss","webpack://pages/main/sass/abstract/_constants.scss","webpack://pages/main/sass/base/_logo.scss","webpack://pages/main/sass/base/_navigation.scss","webpack://pages/main/sass/base/_button.scss","webpack://pages/main/sass/base/_hamburger.scss","webpack://pages/main/sass/layouts/_header.scss","webpack://pages/main/sass/layouts/_footer.scss","webpack://pages/main/sass/components/_make-friends.scss","webpack://pages/main/sass/components/_about.scss","webpack://pages/main/sass/components/_pets.scss","webpack://pages/main/sass/components/_popup.scss","webpack://pages/main/sass/components/_pet-card.scss","webpack://pages/main/sass/components/_help.scss","webpack://pages/main/sass/components/_donation.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.scss v0.1.0 | MIT License | based on git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n","@import '../../../node_modules/normalize.scss/normalize.scss';\r\n@import '../../../assets/fonts/Georgia/font.css';\r\n@import '../../../assets/fonts/Arial/font.css';\r\n\r\n//Abstract\r\n@import 'abstract/constants';\r\n@import 'abstract/mixins';\r\n\r\n//Base\r\n@import 'base/base';\r\n@import 'base/logo';\r\n@import 'base/navigation';\r\n@import 'base/button';\r\n@import 'base/hamburger';\r\n\r\n//Layouts\r\n@import 'layouts/header';\r\n@import 'layouts/footer';\r\n\r\n//Components\r\n@import 'components/make-friends';\r\n@import 'components/about';\r\n@import 'components/pets';\r\n@import 'components/popup';\r\n@import 'components/pet-card';\r\n@import 'components/help';\r\n@import 'components/donation';\r\n","html {\r\n  font-size: 10px;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.overflow-y {\r\n  overflow-y: hidden;\r\n}\r\n\r\n.body_overlay {\r\n  overflow-y: hidden;\r\n\r\n  &::before {\r\n    display: block;\r\n    content: '';\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(41, 41, 41, 0.6);\r\n    z-index: 10;\r\n  }\r\n}\r\n\r\n.wrapper {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  max-width: 1280px;\r\n  margin: 0 auto;\r\n  padding: 0 40px;\r\n\r\n  @include media-tablet {\r\n    padding: 0 30px;\r\n  }\r\n\r\n  @include media-mobile {\r\n    padding: 0 10px;\r\n  }\r\n}\r\n\r\n.element-invisible {\r\n  position: absolute;\r\n  clip: rect(1px, 1px, 1px, 1px);\r\n  -webkit-clip-path: inset(0px 0px 99.9% 99.9%);\r\n  clip-path: inset(0px 0px 99.9% 99.9%);\r\n  overflow: hidden;\r\n  height: 1px;\r\n  width: 1px;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\nh1 {\r\n  @include font(\r\n    $size: 3.2rem,\r\n    $height: 110%,\r\n    $weight: 400,\r\n    $family: $font-primary\r\n  );\r\n  letter-spacing: 0.06em;\r\n  color: $color-primary;\r\n}\r\n\r\nh2 {\r\n  margin-bottom: 41px;\r\n  @include font(\r\n    $size: 4.4rem,\r\n    $height: 130%,\r\n    $weight: 400,\r\n    $family: $font-primary\r\n  );\r\n  color: $color-light;\r\n}\r\n\r\nh3 {\r\n  margin: 15px 0 24px;\r\n  @include font(\r\n    $size: 3.5rem,\r\n    $height: 130%,\r\n    $weight: 400,\r\n    $family: $font-primary\r\n  );\r\n  letter-spacing: 0.06em;\r\n  color: $color-dark;\r\n\r\n  @include media-mobile {\r\n    font-size: 2.5rem;\r\n  }\r\n}\r\n\r\nh4 {\r\n  @include font(\r\n    $size: 2.2rem,\r\n    $height: 115%,\r\n    $weight: 400,\r\n    $family: $font-primary\r\n  );\r\n  letter-spacing: 0.06em;\r\n  color: $color-dark;\r\n}\r\n\r\np,\r\nspan {\r\n  @include font($size: 1.5rem, $height: 160%);\r\n\r\n  color: $color-dark;\r\n}\r\n","@mixin font(\r\n  $size: 1.5rem,\r\n  $height: 2.4rem,\r\n  $weight: 400,\r\n  $style: normal,\r\n  $family: $font-secondary\r\n) {\r\n  font-family: $family;\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  font-style: $style;\r\n}\r\n\r\n@mixin media-tablet {\r\n  @media (max-width: $max-tablet-width) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin media-tablet-middle {\r\n  @media (max-width: $middle-tablet-width) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin media-mobile {\r\n  @media (max-width: $max-mobile-width) {\r\n    @content;\r\n  }\r\n}\r\n","$color-background1: #2d303a;\r\n$color-background2: #ffffff;\r\n$color-background3: #f6f6f6;\r\n\r\n$color-primary: #f1cdb3;\r\n$color-light: #ffffff;\r\n$color-light-s: #fafafa;\r\n$color-dark: #545454;\r\n$color-dark-s: #cdcdcd;\r\n$color-dark-p: #4c4c4c;\r\n\r\n$color-menu-active: #f06c64;\r\n$color-menu: #fafafa;\r\n\r\n$color-button-text: #292929;\r\n$color-button-hover: #fddcc4;\r\n\r\n$font-primary: 'Georgia', serif;\r\n$font-secondary: 'Arial', sans-serif;\r\n\r\n$content-width: 1280px;\r\n$max-tablet-width: 1279px;\r\n$max-mobile-width: 767px;\r\n$middle-tablet-width: 1130px;\r\n",".logo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  cursor: pointer;\r\n  transition: 1s;\r\n\r\n  &_shadow {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.logo__title {\r\n  @include font(\r\n    $size: 3.2rem,\r\n    $height: 110%,\r\n    $weight: 400,\r\n    $family: $font-primary\r\n  );\r\n  letter-spacing: 0.06em;\r\n  color: $color-primary;\r\n\r\n  &_dark {\r\n    color: $color-dark;\r\n  }\r\n}\r\n\r\n.logo__subtitle {\r\n  margin-top: 9px;\r\n  padding-left: 4px;\r\n  @include font($size: 1.3rem, $height: 1.5rem);\r\n  letter-spacing: 0.1em;\r\n  color: $color-light;\r\n\r\n  &_dark {\r\n    color: $color-button-text;\r\n  }\r\n}\r\n\r\n.logo__link {\r\n  display: flex;\r\n  flex-direction: column;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n",".navigation__list {\r\n  display: flex;\r\n  list-style: none;\r\n\r\n  &_mobile {\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n    height: 100vh;\r\n    padding: 0;\r\n    justify-content: center;\r\n    align-items: center;\r\n    list-style: none;\r\n  }\r\n}\r\n\r\n.navigation__item {\r\n  @include font($size: 1.5rem, $height: 160%);\r\n\r\n  &:hover {\r\n    a {\r\n      color: $color-light;\r\n    }\r\n  }\r\n\r\n  & + & {\r\n    margin-left: 36px;\r\n  }\r\n\r\n  a {\r\n    text-decoration: none;\r\n    color: $color-dark-s;\r\n  }\r\n\r\n  &_active {\r\n    border-bottom: 3px solid $color-primary;\r\n    a {\r\n      color: $color-light;\r\n    }\r\n  }\r\n\r\n  &_mobile {\r\n    @include font($size: 3.2rem, $height: 160%);\r\n    a {\r\n      text-decoration: none;\r\n      color: $color-dark-s;\r\n    }\r\n  }\r\n}\r\n\r\n.navigation-mobile {\r\n  position: fixed;\r\n  box-sizing: border-box;\r\n  top: 0;\r\n  right: -320px;\r\n  display: none;\r\n  width: 320px;\r\n  padding: 31px 10px 0;\r\n  background-color: #292929;\r\n  transition: 1s;\r\n\r\n  z-index: 99;\r\n\r\n  @include media-mobile {\r\n    display: block;\r\n  }\r\n\r\n  &_translate {\r\n    transform: translateX(-100%);\r\n  }\r\n}\r\n\r\n.navigation-mobile__item {\r\n  display: flex;\r\n  @include font($size: 3.2rem, $height: 160%);\r\n  justify-content: center;\r\n  text-align: center;\r\n\r\n  &:hover {\r\n    a {\r\n      color: $color-light;\r\n    }\r\n  }\r\n\r\n  & + & {\r\n    margin-top: 40px;\r\n  }\r\n\r\n  a {\r\n    display: block;\r\n    text-decoration: none;\r\n    color: $color-dark-s;\r\n  }\r\n\r\n  &_active {\r\n    a {\r\n      border-bottom: 3px solid $color-primary;\r\n      color: $color-light;\r\n    }\r\n  }\r\n}\r\n",".button {\r\n  display: flex;\r\n  width: 207px;\r\n  height: 52px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: $color-primary;\r\n  border-radius: 100px;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    background: $color-button-hover;\r\n    border-color: $color-button-hover;\r\n  }\r\n\r\n  &_per-card {\r\n    width: 187px;\r\n    border: 2px solid $color-primary;\r\n    box-sizing: border-box;\r\n    border-radius: 100px;\r\n    background: $color-light;\r\n  }\r\n\r\n  &_pets {\r\n    width: 261px;\r\n  }\r\n\r\n  a {\r\n    text-decoration: none;\r\n  }\r\n}\r\n\r\n.button__title {\r\n  @include font($size: 1.7rem, $height: 130%, $family: $font-primary);\r\n  letter-spacing: 0.06em;\r\n  color: $color-button-text;\r\n}\r\n","%hamburger-line {\r\n  content: '';\r\n  position: absolute;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 2px;\r\n  background: $color-primary;\r\n}\r\n\r\n.hamburger {\r\n  position: absolute;\r\n  width: 30px;\r\n  height: 22px;\r\n  cursor: pointer;\r\n  transition: 1s;\r\n\r\n  z-index: 100;\r\n\r\n  &::before {\r\n    @extend %hamburger-line;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n\r\n  &::after {\r\n    @extend %hamburger-line;\r\n    bottom: 0;\r\n    left: 0;\r\n  }\r\n}\r\n\r\n.hamburger__line {\r\n  @extend %hamburger-line;\r\n  top: calc(50% - 1.2px);\r\n}\r\n\r\n.hamburger_rotate {\r\n  transform: rotate(90deg);\r\n}\r\n",".background-top {\r\n  background: url('../../../assets/images/noise_transparent@2x.png'),\r\n    radial-gradient(100% 215.42% at 0% 0%, #5b483a 0%, #262425 100%), #211f20;\r\n}\r\n\r\n.header-wrapper {\r\n  display: flex;\r\n  padding-top: 61px;\r\n  justify-content: space-between;\r\n\r\n  @include media-tablet {\r\n    padding-top: 31px;\r\n  }\r\n\r\n  &_pets {\r\n    padding-top: 31px;\r\n  }\r\n}\r\n\r\n.navigation-wrapper {\r\n  padding-top: 5px;\r\n\r\n  @include media-mobile {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.nav-wrapper {\r\n  position: relative;\r\n}\r\n\r\n.hamburger-wrapper {\r\n  display: none;\r\n  margin-top: 19px;\r\n  margin-right: 43px;\r\n\r\n  @include media-mobile {\r\n    display: block;\r\n  }\r\n}\r\n",".footer {\r\n  background: url('../../../assets/images/noise_transparent@2x.png'),\r\n    radial-gradient(110.67% 538.64% at 5.73% 50%, #513d2f 0%, #1a1a1c 100%),\r\n    #211f20;\r\n}\r\n\r\n.footer-wrapper {\r\n  display: flex;\r\n  padding-top: 40px;\r\n  justify-content: space-between;\r\n\r\n  @include media-tablet-middle {\r\n    padding-top: 13px;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n  }\r\n\r\n  @include media-mobile {\r\n    padding-top: 14px;\r\n  }\r\n}\r\n\r\n.footer-info-wrapper {\r\n  display: flex;\r\n  width: 61.7%;\r\n  min-width: 640px;\r\n  justify-content: space-between;\r\n\r\n  @include media-mobile {\r\n    width: 100%;\r\n    min-width: 0;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.questions {\r\n  width: 279px;\r\n  margin-right: 20px;\r\n  flex-shrink: 0;\r\n\r\n  @include media-mobile {\r\n    margin-right: 0;\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n.visit {\r\n  width: 302px;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.questions__title,\r\n.visit__title {\r\n  margin-top: 17px;\r\n  color: $color-light;\r\n\r\n  @include media-mobile {\r\n    font-size: 3.5rem;\r\n    line-height: 130%;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.question-contacts {\r\n  margin-top: 39px;\r\n}\r\n.visit-contacts {\r\n  margin-top: 33px;\r\n}\r\n\r\n.question-contacts__list,\r\n.visit-contacts__list {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n.question-contacts__item {\r\n  display: flex;\r\n  margin-bottom: 40px;\r\n  align-items: center;\r\n\r\n  @include media-mobile {\r\n    &:last-child {\r\n      margin-bottom: 24px;\r\n    }\r\n  }\r\n}\r\n\r\n.visit-contacts__item {\r\n  display: flex;\r\n  margin-bottom: 32px;\r\n  align-items: center;\r\n}\r\n\r\n.question-contacts__link,\r\n.visit-contacts__link {\r\n  display: flex;\r\n  align-items: center;\r\n  @include font($size: 2rem, $height: 2.3rem, $family: 'Georgia');\r\n  letter-spacing: 0.06em;\r\n  color: $color-primary;\r\n  text-decoration: none;\r\n\r\n  &:hover {\r\n    color: $color-light-s;\r\n  }\r\n\r\n  & img {\r\n    margin-right: 20px;\r\n  }\r\n}\r\n\r\n.footer__picture {\r\n  display: flex;\r\n\r\n  @include media-tablet-middle {\r\n    margin-top: 25px;\r\n  }\r\n\r\n  @include media-mobile {\r\n    width: 260 * 100%/300;\r\n    min-width: 260px;\r\n    max-width: 300px;\r\n    margin-top: 61px;\r\n\r\n    img {\r\n      width: 100%;\r\n    }\r\n  }\r\n}\r\n",".make-friends-wrapper {\r\n  width: 100%;\r\n  display: flex;\r\n  padding-top: 60px;\r\n\r\n  @include media-tablet-middle {\r\n    padding-top: 24px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  @include media-mobile {\r\n    padding-top: 39px;\r\n    justify-content: center;\r\n  }\r\n}\r\n\r\n.make-friends__info {\r\n  width: 460px;\r\n  margin-right: 42px;\r\n  padding-top: 127px;\r\n  flex-shrink: 0;\r\n\r\n  @include media-tablet-middle {\r\n    padding-top: 0;\r\n    margin-right: 0;\r\n  }\r\n\r\n  @include media-mobile {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    max-width: 460px;\r\n    align-items: center;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.make-friends__title {\r\n  width: 310px;\r\n\r\n  @include media-mobile {\r\n    width: 100%;\r\n    max-width: 300px;\r\n    margin-right: 0;\r\n    margin-bottom: 27px;\r\n    text-align: center;\r\n\r\n    font-size: 2.5rem;\r\n    letter-spacing: 0.06em;\r\n  }\r\n}\r\n\r\n.make-friends__description {\r\n  color: $color-dark-s;\r\n  margin-bottom: 41px;\r\n}\r\n\r\n.make-friends__button {\r\n  @include media-tablet-middle {\r\n    margin: 0 auto;\r\n  }\r\n\r\n  a {\r\n    text-decoration: none;\r\n  }\r\n}\r\n\r\n.make-friends__picture {\r\n  display: flex;\r\n  width: auto;\r\n  min-width: 569px;\r\n  height: auto;\r\n\r\n  @include media-tablet-middle {\r\n    width: 569px;\r\n    align-self: flex-end;\r\n    margin-top: 101px;\r\n  }\r\n\r\n  @include media-mobile {\r\n    width: 260 * 100% / 300;\r\n    min-width: 200px;\r\n    margin-top: 107px;\r\n  }\r\n\r\n  img {\r\n    width: 100%;\r\n  }\r\n}\r\n",".about-wrapper {\r\n  display: flex;\r\n  margin-bottom: 89px;\r\n  padding-top: 80px;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n\r\n  @include media-tablet-middle {\r\n    padding-top: 66px;\r\n    margin-bottom: 100px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  @include media-mobile {\r\n    padding-top: 27px;\r\n    margin-bottom: 42px;\r\n    justify-content: center;\r\n  }\r\n}\r\n\r\n.about__picture {\r\n  display: flex;\r\n  margin-right: 120px;\r\n\r\n  @include media-tablet-middle {\r\n    order: 2;\r\n    margin: 55px 0 0 0;\r\n  }\r\n\r\n  @include media-mobile {\r\n    width: 260 * 100%/300;\r\n    max-width: 300px;\r\n    margin-top: 34px;\r\n\r\n    img {\r\n      width: 100%;\r\n    }\r\n  }\r\n}\r\n\r\n.about__info {\r\n  box-sizing: border-box;\r\n  width: 430px;\r\n\r\n  @include media-tablet-middle {\r\n    width: 57%;\r\n    min-width: 437px;\r\n  }\r\n\r\n  @include media-mobile {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    min-width: 0;\r\n    max-width: 436px;\r\n    padding-left: 15 * 100% / 300;\r\n    padding-right: 15 * 100% / 300;\r\n    align-items: center;\r\n    text-align: justify;\r\n  }\r\n}\r\n\r\n.about__title {\r\n  width: 370px;\r\n\r\n  @include media-mobile {\r\n    width: 100%;\r\n    max-width: 290px;\r\n    margin-right: 0;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.about__description {\r\n  margin-bottom: 25px;\r\n\r\n  @include media-mobile {\r\n    width: 100%;\r\n    margin-bottom: 7px;\r\n  }\r\n}\r\n",".pets {\r\n  background-color: $color-background3;\r\n}\r\n.pets-wrapper {\r\n  display: flex;\r\n  padding-top: 66px;\r\n  padding-bottom: 100px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  @include media-mobile {\r\n    padding-top: 27px;\r\n    padding-bottom: 42px;\r\n  }\r\n}\r\n\r\n.pets__title {\r\n  width: 400px;\r\n  text-align: center;\r\n\r\n  @include media-mobile {\r\n    width: 300px;\r\n  }\r\n}\r\n\r\n.pets-slider {\r\n  display: flex;\r\n  width: 100%;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  @include media-mobile {\r\n    flex-wrap: wrap;\r\n  }\r\n}\r\n\r\n.slider-wrapper {\r\n  padding-top: 25px;\r\n  padding-bottom: 50px;\r\n\r\n  @include media-mobile {\r\n    padding-top: 8px;\r\n    padding-bottom: 42px;\r\n  }\r\n}\r\n\r\n.pets-slider__arrow {\r\n  display: flex;\r\n  flex-shrink: 0;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 52px;\r\n  height: 52px;\r\n  border: 2px solid $color-primary;\r\n  box-sizing: border-box;\r\n  border-radius: 100px;\r\n  cursor: pointer;\r\n\r\n  @include media-mobile {\r\n    order: 2;\r\n  }\r\n\r\n  &:hover {\r\n    background-color: $color-button-hover;\r\n    border-color: $color-button-hover;\r\n  }\r\n\r\n  &:inactive {\r\n    border-color: $color-dark-s;\r\n    img {\r\n      opacity: 50%;\r\n    }\r\n  }\r\n\r\n  &_left {\r\n    margin-right: 53px;\r\n\r\n    @include media-tablet-middle {\r\n      margin-right: 0;\r\n    }\r\n\r\n    @include media-mobile {\r\n      margin-left: 58 * 100%/300;\r\n    }\r\n  }\r\n\r\n  &_right {\r\n    margin-left: 53px;\r\n\r\n    @include media-tablet-middle {\r\n      margin-left: 0;\r\n    }\r\n\r\n    @include media-mobile {\r\n      margin-right: 58 * 100%/300;\r\n    }\r\n  }\r\n}\r\n\r\n.pets-slider-container {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: flex-end;\r\n  overflow: hidden;\r\n}\r\n\r\n.pets-slider__list {\r\n  display: flex;\r\n  width: 100%;\r\n  max-width: 1080px;\r\n  padding: 0;\r\n  justify-content: center;\r\n  list-style: none;\r\n\r\n  @include media-tablet-middle {\r\n  }\r\n\r\n  @include media-mobile {\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n.pets-slider__item {\r\n  display: flex;\r\n  flex-basis: 33.33%;\r\n  justify-content: center;\r\n  flex-shrink: 0;\r\n\r\n  @include media-tablet-middle {\r\n    flex-basis: 50%;\r\n  }\r\n\r\n  @include media-mobile {\r\n    flex-basis: 100%;\r\n  }\r\n\r\n  &_current {\r\n    transform: translateX(0);\r\n  }\r\n  &_prev {\r\n    transform: translateX(0);\r\n  }\r\n  &_next {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n",".popup {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) scale(0);\r\n\r\n  display: flex;\r\n  width: 900px;\r\n  justify-content: flex-start;\r\n  background: $color-light-s;\r\n  border-radius: 9px;\r\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\r\n  z-index: 20;\r\n  cursor: auto;\r\n\r\n  color: #000;\r\n\r\n  @include media-tablet {\r\n    width: 630px;\r\n  }\r\n\r\n  @include media-mobile {\r\n    width: 240px;\r\n    padding: 10px;\r\n  }\r\n\r\n  &:hover {\r\n    .popup__button {\r\n      background-color: transparent;\r\n    }\r\n  }\r\n\r\n  &_active {\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n}\r\n\r\n.popup-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(41, 41, 41, 0.6);\r\n  z-index: 10;\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n    button {\r\n      background-color: $color-primary;\r\n    }\r\n  }\r\n}\r\n\r\n.popup-picture-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  border-radius: 9px;\r\n\r\n  @include media-mobile {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.popup__picture {\r\n  width: 500px;\r\n  height: 500px;\r\n  margin-right: 29px;\r\n\r\n  @include media-tablet {\r\n    width: 350px;\r\n    height: 350px;\r\n    margin-right: 11px;\r\n  }\r\n}\r\n\r\n.popup__content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 351px;\r\n  margin-top: 50px;\r\n\r\n  @include media-tablet {\r\n    width: 260px;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  @include media-mobile {\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.popup__title {\r\n  margin: 0 0 10px;\r\n  color: #000;\r\n\r\n  @include media-mobile {\r\n    font-size: 3.5rem;\r\n  }\r\n}\r\n\r\n.popup__type {\r\n  margin: 0 0 40px;\r\n  font-size: 2rem;\r\n  line-height: 115%;\r\n  color: #000;\r\n\r\n  @include media-tablet {\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n.popup__description {\r\n  margin: 0 0 40px;\r\n  text-align: left;\r\n  @include font(\r\n    $size: 1.5rem,\r\n    $height: 110%,\r\n    $weight: 400,\r\n    $family: $font-primary\r\n  );\r\n  letter-spacing: 0.06em;\r\n  color: #000000;\r\n\r\n  @include media-tablet {\r\n    font-size: 1.3rem;\r\n    margin-bottom: 20px;\r\n  }\r\n  @include media-mobile {\r\n    text-align: justify;\r\n    margin-bottom: 24px;\r\n  }\r\n}\r\n\r\n.popup-info {\r\n  box-sizing: border-box;\r\n  @include media-mobile {\r\n    width: 100%;\r\n    margin-left: 4px;\r\n  }\r\n}\r\n\r\n.popup-info__list {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding-left: 10px;\r\n\r\n  @include media-mobile {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.popup-info__item {\r\n  margin-bottom: 10px;\r\n  color: $color-primary;\r\n  span {\r\n    @include font(\r\n      $size: 1.5rem,\r\n      $height: 110%,\r\n      $weight: 400,\r\n      $family: $font-primary\r\n    );\r\n    letter-spacing: 0.06em;\r\n    color: #000000;\r\n  }\r\n}\r\n\r\n.popup-info__title {\r\n  display: inline;\r\n  @include font(\r\n    $size: 1.5rem,\r\n    $height: 110%,\r\n    $weight: 700,\r\n    $family: $font-primary\r\n  );\r\n  letter-spacing: 0.06em;\r\n  color: #000000;\r\n}\r\n\r\n.popup__button {\r\n  position: absolute;\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  top: -52px;\r\n  right: -42px;\r\n  width: 52px;\r\n  height: 52px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 2px solid $color-primary;\r\n  background-color: transparent;\r\n  border-radius: 100px;\r\n  pointer-events: none;\r\n  outline: none;\r\n\r\n  @include media-mobile {\r\n    top: -54px;\r\n    right: -26px;\r\n  }\r\n\r\n  &:hover {\r\n    background-color: $color-primary;\r\n    outline: none;\r\n  }\r\n\r\n  &:active {\r\n    background-color: $color-primary;\r\n    outline: none;\r\n  }\r\n}\r\n",".pet-card {\r\n  display: flex;\r\n  flex-basis: 270px;\r\n  flex-grow: 0;\r\n  flex-shrink: 0;\r\n  padding-bottom: 30px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: $color-light-s;\r\n  border-radius: 9px;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    background-color: $color-light;\r\n  }\r\n}\r\n\r\n.pet-card__title {\r\n  margin: 30px 0;\r\n  @include font($size: 2rem, $height: 2.3rem, $family: $font-primary);\r\n  letter-spacing: 0.06em;\r\n\r\n  color: $color-dark;\r\n}\r\n",".help-wrapper {\r\n  display: flex;\r\n  padding-top: 66px;\r\n  padding-bottom: 39px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  @include media-mobile {\r\n    padding-top: 27px;\r\n    padding-bottom: 5px;\r\n  }\r\n}\r\n\r\n.help__info {\r\n  text-align: center;\r\n  width: 312px;\r\n\r\n  @include media-mobile {\r\n    width: 100%;\r\n    max-width: 222px;\r\n  }\r\n}\r\n\r\n.help-icons {\r\n  padding: 25px 85px;\r\n\r\n  @include media-tablet {\r\n    padding: 25px 39px;\r\n  }\r\n\r\n  @include media-mobile {\r\n    padding: 8px 0;\r\n  }\r\n}\r\n\r\n.help-icons__list {\r\n  display: flex;\r\n  width: 100%;\r\n  padding: 0;\r\n  flex-wrap: wrap;\r\n  column-gap: 120px;\r\n  row-gap: 28px;\r\n  justify-content: center;\r\n  list-style: none;\r\n\r\n  @include media-tablet {\r\n    justify-content: space-between;\r\n    column-gap: 0;\r\n  }\r\n\r\n  @include media-mobile {\r\n    row-gap: 10px;\r\n  }\r\n}\r\n\r\n.help-icons__item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n\r\n  @include media-tablet {\r\n    flex-basis: 27%;\r\n  }\r\n\r\n  @include media-mobile {\r\n    flex-basis: 47%;\r\n\r\n    img {\r\n      width: 50px;\r\n      height: 50px;\r\n    }\r\n  }\r\n}\r\n\r\n.help-icon__title {\r\n  margin-top: 30px;\r\n  font-size: 2rem;\r\n\r\n  @include media-mobile {\r\n    margin-top: 20px;\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n",".donation {\r\n  background-color: $color-background3;\r\n}\r\n\r\n.donation-wrapper {\r\n  display: flex;\r\n  padding-top: 82px;\r\n  padding-bottom: 101px;\r\n  column-gap: 31px;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  @include media-tablet-middle {\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  @include media-mobile {\r\n    padding-top: 42px;\r\n    padding-bottom: 42px;\r\n  }\r\n}\r\n\r\n.donation__picture {\r\n  display: flex;\r\n\r\n  @include media-tablet-middle {\r\n    margin-top: 59px;\r\n    order: 2;\r\n  }\r\n\r\n  @include media-mobile {\r\n    width: 260 * 100% / 300;\r\n    max-width: 505px;\r\n    margin-top: 42px;\r\n\r\n    img {\r\n      width: 100%;\r\n    }\r\n  }\r\n}\r\n\r\n.donation__info {\r\n  width: 380px;\r\n\r\n  @include media-mobile {\r\n    width: 280 * 100%/300;\r\n    min-width: 280px;\r\n    max-width: 380px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n.donation__title {\r\n  width: 300px;\r\n  margin: 0 0 20px 0;\r\n\r\n  @include media-mobile {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.donation__capture {\r\n  @include font($size: 1.5rem, $height: 110%, $family: 'Georgia');\r\n  letter-spacing: 0.06em;\r\n\r\n  @include media-mobile {\r\n    display: block;\r\n    margin-bottom: 20px;\r\n    line-height: 160%;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.donation__card {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 349px;\r\n  height: 43px;\r\n  margin: 20px 0;\r\n  padding: 0 14px;\r\n  column-gap: 15px;\r\n  border-radius: 9px;\r\n  background: $color-primary;\r\n\r\n  @include media-mobile {\r\n    width: 281px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n.donation__card-number {\r\n  text-decoration: none;\r\n  @include font($size: 2rem, $height: 115%, $family: 'Georgia');\r\n  letter-spacing: 0.06em;\r\n  color: $color-dark;\r\n\r\n  @include media-mobile {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  &:hover {\r\n    color: $color-button-text;\r\n  }\r\n}\r\n\r\n.donation__description {\r\n  display: block;\r\n  width: 360px;\r\n  margin-bottom: 0;\r\n  @include font($size: 1.2rem, $height: 1.8rem, $style: italic);\r\n  letter-spacing: 0.08em;\r\n  color: #b2b2b2;\r\n\r\n  @include media-mobile {\r\n    width: 100%;\r\n    margin: 20px auto 0 auto;\r\n    text-align: justify;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./pages/main/js/Carousel.js":
/*!***********************************!*\
  !*** ./pages/main/js/Carousel.js ***!
  \***********************************/
/*! exports provided: Carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony import */ var _pets_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pets.json */ "./pages/main/js/pets.json");
var _pets_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./pets.json */ "./pages/main/js/pets.json", 1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Carousel = /*#__PURE__*/function () {
  function Carousel() {
    _classCallCheck(this, Carousel);

    this.petsList = _pets_json__WEBPACK_IMPORTED_MODULE_0__;
    this.arrowRight = document.getElementById('arrow-right');
    this.arrowLeft = document.getElementById('arrow-left');
    this.slider = document.getElementById('slider-carousel');
    this.sliderContainer = document.getElementById('slider-carousel-container');
    this.countCardsOnPage = this.getCountCardsOnPage();
    this.isRun = false;
  }

  _createClass(Carousel, [{
    key: "init",
    value: function init() {
      this.setCurrentStyleForCardOnload();
      this.updateDocument();
      this.arrowLeft.addEventListener('click', this.moveToLeft.bind(this));
      this.arrowRight.addEventListener('click', this.moveToRight.bind(this));
    } //After load page

  }, {
    key: "getCountCardsOnPage",
    value: function getCountCardsOnPage() {
      var widthContainer = window.innerWidth;
      var mediaTwoCardsWidth = 1130;
      var mediaOneCardsWidth = 767;
      if (widthContainer > mediaTwoCardsWidth) return 3;else if (widthContainer > mediaOneCardsWidth) return 2;else return 1;
    }
  }, {
    key: "setCurrentStyleForCardOnload",
    value: function setCurrentStyleForCardOnload() {
      var listOfCards = document.querySelectorAll('.pets-slider__item');

      for (var i = 0; i < this.countCardsOnPage; i++) {
        listOfCards[i].classList.add('pets-slider__item_current');
      }
    } // Render new cards

  }, {
    key: "getRandomPets",
    value: function getRandomPets() {
      var listOfCards = document.querySelectorAll('.pets-slider__item_current');
      var arrNotRepeatingPets = this.petsList.slice();
      var resultArrPets = [];
      listOfCards.forEach(function (card) {
        var name = card.querySelector('.pet-card__title').innerText;
        var index = arrNotRepeatingPets.findIndex(function (pet) {
          return pet.name === name;
        });
        arrNotRepeatingPets.splice(index, 1);
      });

      for (var i = 0; i < this.countCardsOnPage; i++) {
        var randomIndex = Math.floor(Math.random() * this.countCardsOnPage);
        resultArrPets.push(arrNotRepeatingPets.splice(randomIndex, 1)[0]);
      }

      return resultArrPets;
    }
  }, {
    key: "renderPet",
    value: function renderPet(pet, classForElement) {
      var li = document.createElement('li');

      if (classForElement) {
        li.classList.add('pets-slider__item', classForElement);
      } else {
        li.classList.add('pets-slider__item');
      }

      li.innerHTML = "<div class=\"pet-card\">\n    <img\n      src=\"assets/images/pets-".concat(pet.name.toLowerCase(), ".png\"\n      alt=\"Image pet\"\n    />\n    <span class=\"pet-card__title\">").concat(pet.name, "</span>\n    <div class=\"button button_per-card\">\n      <span class=\"button__title\">Learn more</span>\n    </div>\n  </div>");
      return li;
    }
  }, {
    key: "updateDocument",
    value: function updateDocument() {
      var arrPets = this.getRandomPets();
      var cardsList = document.querySelectorAll('.pets-slider__item');

      if (cardsList.length > this.countCardsOnPage) {
        for (var i = 0; i < cardsList.length; i++) {
          if (i + 1 > this.countCardsOnPage) cardsList[i].remove();
        }
      }

      for (var _i = 0; _i < this.countCardsOnPage; _i++) {
        this.slider.prepend(this.renderPet(arrPets[_i], 'pets-slider__item_prev'));
        this.slider.append(this.renderPet(arrPets[_i], 'pets-slider__item_next'));
      }

      cardsList = document.querySelectorAll('.pets-slider__item');
      cardsList.forEach(function (card) {
        card.style.transition = 'transform 0.8s';
      });
    }
  }, {
    key: "removeCards",
    value: function removeCards() {
      var cardsList = document.querySelectorAll('.pets-slider__item');
      cardsList.forEach(function (card) {
        card.style.transition = '';
      });
      cardsList.forEach(function (card) {
        var isCurrent = card.classList.contains('pets-slider__item_current');

        if (!isCurrent) {
          card.remove();
        } else {
          card.style.transform = "translateX(0)";
        }
      });
    }
  }, {
    key: "updateCurrentCardsStyle",
    value: function updateCurrentCardsStyle(isPrev) {
      var cardsCurrent = document.querySelectorAll('.pets-slider__item_current');
      cardsCurrent.forEach(function (card) {
        card.classList.remove('pets-slider__item_current');
      });

      if (isPrev) {
        var cardsPrev = document.querySelectorAll('.pets-slider__item_prev');
        cardsPrev.forEach(function (card) {
          card.classList.remove('pets-slider__item_prev');
          card.classList.add('pets-slider__item_current');
        });
      } else {
        var cardsNext = document.querySelectorAll('.pets-slider__item_next');
        cardsNext.forEach(function (card) {
          card.classList.remove('pets-slider__item_next');
          card.classList.add('pets-slider__item_current');
        });
      }
    } //EventHandlers

  }, {
    key: "moveToLeft",
    value: function moveToLeft() {
      var _this = this;

      if (this.isRun) return;
      this.isRun = true;
      var isPrev = true;
      var arrCards = document.querySelectorAll('.pets-slider__item');
      var that = this;
      arrCards.forEach(function (card) {
        card.style.transform = "translateX(".concat(_this.countCardsOnPage * 100, "%)");
      });
      this.updateCurrentCardsStyle(isPrev);
      setTimeout(function () {
        that.removeCards.bind(that)();
        that.updateDocument.bind(that)();
        that.isRun = false;
      }, 800);
    }
  }, {
    key: "moveToRight",
    value: function moveToRight() {
      var _this2 = this;

      if (this.isRun) return;
      this.isRun = true;
      var isPrev = false;
      var arrCards = document.querySelectorAll('.pets-slider__item');
      var that = this;
      arrCards.forEach(function (card) {
        card.style.transform = "translateX(-".concat(_this2.countCardsOnPage * 100, "%)");
      });
      this.updateCurrentCardsStyle(isPrev);
      setTimeout(function () {
        that.removeCards.bind(that)();
        that.updateDocument.bind(that)();
        that.isRun = false;
      }, 800);
    }
  }, {
    key: "getTranslateX",
    value: function getTranslateX(elem) {
      var style = window.getComputedStyle(elem);
      var matrix = style.transform || style.webkitTransform || style.mozTransform;
      var x; // Can either be 2d or 3d transform

      if (matrix) {
        var matrixType = matrix.includes('3d') ? '3d' : '2d';
        var matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');

        if (matrixType === '2d') {
          x = matrixValues[4];
        }

        if (matrixType === '3d') {
          x = matrixValues[12];
        }
      }

      return x;
    }
  }]);

  return Carousel;
}();

/***/ }),

/***/ "./pages/main/js/Hamburger.js":
/*!************************************!*\
  !*** ./pages/main/js/Hamburger.js ***!
  \************************************/
/*! exports provided: Hamburger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hamburger", function() { return Hamburger; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hamburger = /*#__PURE__*/function () {
  function Hamburger() {
    _classCallCheck(this, Hamburger);

    this.isActive = false;
    this.menuElement = document.getElementById('nav-mobile');
    this.buttonElement = document.getElementById('hamburger');
    this.logoElement = document.getElementById('logo');
    this.bodyClickHandlerBinded = this.bodyClickHandler.bind(this);
  }

  _createClass(Hamburger, [{
    key: "init",
    value: function init() {
      this.buttonElement.addEventListener('click', this.changeState.bind(this));
      this.menuElement.addEventListener('click', this.menuClickHandler.bind(this));
    }
  }, {
    key: "changeState",
    value: function changeState(e) {
      e.stopPropagation();
      this.isActive = !this.isActive;
      this.changeStyles();
      if (this.isActive) document.body.addEventListener('click', this.bodyClickHandlerBinded);else document.body.removeEventListener('click', this.bodyClickHandlerBinded);
    }
  }, {
    key: "changeStyles",
    value: function changeStyles() {
      this.menuElement.classList.toggle('navigation-mobile_translate', this.isActive);
      this.buttonElement.classList.toggle('hamburger_rotate', this.isActive);
      this.logoElement.classList.toggle('logo_shadow', this.isActive);
      document.body.classList.toggle('body_overlay', this.isActive);
    }
  }, {
    key: "bodyClickHandler",
    value: function bodyClickHandler(e) {
      this.changeState(e);
    }
  }, {
    key: "menuClickHandler",
    value: function menuClickHandler(e) {
      e.stopPropagation();

      if (e.target.closest('.navigation-mobile__item_active')) {
        window.scrollTo(0, 0);
        this.changeState(e);
      }
    }
  }]);

  return Hamburger;
}();

/***/ }),

/***/ "./pages/main/js/Popup.js":
/*!********************************!*\
  !*** ./pages/main/js/Popup.js ***!
  \********************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony import */ var _pets_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pets.json */ "./pages/main/js/pets.json");
var _pets_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./pets.json */ "./pages/main/js/pets.json", 1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Popup = /*#__PURE__*/function () {
  function Popup() {
    _classCallCheck(this, Popup);

    this.isActive = false;
    this.petsList = _pets_json__WEBPACK_IMPORTED_MODULE_0__;
    this.popup = document.getElementById('popup');
    this.overlay = document.getElementById('overlay');
  }

  _createClass(Popup, [{
    key: "init",
    value: function init() {
      var _this = this;

      document.addEventListener('DOMContentLoaded', this.setTransition.bind(this));
      this.setCardListeners();
      this.updateCardListeners();
      this.overlay.addEventListener('click', function (e) {
        if (e.target.closest('#popup') && !e.target.closest('#popup-button')) return;

        _this.changeState();
      });
    }
  }, {
    key: "setTransition",
    value: function setTransition() {
      this.popup.style.transition = 'transform 0.5s';
      console.log('ffdf');
    }
  }, {
    key: "updateCardListeners",
    value: function updateCardListeners() {
      var _this2 = this;

      var isUpdate = false;
      var arrows = document.querySelectorAll('.pets-slider__arrow');
      arrows.forEach(function (arrow) {
        arrow.addEventListener('click', function () {
          if (!isUpdate) {
            isUpdate = true;
            setTimeout(function () {
              var _this3 = this;

              var cardsListPrev = document.querySelectorAll('.pets-slider__item_prev');
              var cardsListNext = document.querySelectorAll('.pets-slider__item_next');
              cardsListPrev.forEach(function (card) {
                card.addEventListener('click', _this3.cardClickHandler.bind(_this3));
              });
              cardsListNext.forEach(function (card) {
                card.addEventListener('click', _this3.cardClickHandler.bind(_this3));
              });
              isUpdate = false;
            }.bind(this), 800);
          }
        }.bind(_this2));
      });
    }
  }, {
    key: "setCardListeners",
    value: function setCardListeners() {
      var _this4 = this;

      this.cardsList = document.querySelectorAll('.pets-slider__item');
      console.log(this.cardsList);
      this.cardsList.forEach(function (card) {
        card.addEventListener('click', _this4.cardClickHandler.bind(_this4));
      });
    }
  }, {
    key: "cardClickHandler",
    value: function cardClickHandler(e) {
      var pet = this.getPet(e.currentTarget);
      this.render(pet);
      this.changeState();
    }
  }, {
    key: "getPet",
    value: function getPet(target) {
      var petName = target.querySelector('.pet-card__title').innerText;
      var pet = this.petsList.find(function (pet) {
        return pet.name === petName;
      });
      return pet;
    }
  }, {
    key: "changeState",
    value: function changeState(e) {
      this.isActive = !this.isActive;
      this.popup.classList.toggle('popup_active', this.isActive);
      document.body.classList.toggle('overflow-y', this.isActive);
      this.overlay.classList.toggle('popup-overlay', this.isActive);
    }
  }, {
    key: "render",
    value: function render(pet) {
      for (var prop in pet) {
        var element = document.getElementById("popup-".concat(prop));

        if (element) {
          if (prop === 'img') {
            element.src = pet[prop];
          } else if (prop === 'inoculations' || prop === 'diseases' || prop === 'parasites') {
            element.innerText = pet[prop].join(', ');
          } else if (prop === 'type') element.innerText = "".concat(pet[prop], " - ").concat(pet.breed);else element.innerText = pet[prop];
        }
      }
    }
  }]);

  return Popup;
}();

/***/ }),

/***/ "./pages/main/js/main.js":
/*!*******************************!*\
  !*** ./pages/main/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ "./pages/main/sass/main.scss");
/* harmony import */ var _Hamburger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hamburger.js */ "./pages/main/js/Hamburger.js");
/* harmony import */ var _Carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel.js */ "./pages/main/js/Carousel.js");
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popup.js */ "./pages/main/js/Popup.js");




var hamburger = new _Hamburger_js__WEBPACK_IMPORTED_MODULE_1__["Hamburger"]();
hamburger.init();
var carousel = new _Carousel_js__WEBPACK_IMPORTED_MODULE_2__["Carousel"]();
carousel.init();
var popup = new _Popup_js__WEBPACK_IMPORTED_MODULE_3__["Popup"]();
popup.init();

/***/ }),

/***/ "./pages/main/js/pets.json":
/*!*********************************!*\
  !*** ./pages/main/js/pets.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"name\":\"Jennifer\",\"img\":\"assets/images/pets-jennifer.png\",\"type\":\"Dog\",\"breed\":\"Labrador\",\"description\":\"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.\",\"age\":\"2 months\",\"inoculations\":[\"none\"],\"diseases\":[\"none\"],\"parasites\":[\"none\"]},{\"id\":2,\"name\":\"Sophia\",\"img\":\"assets/images/pets-sophia.png\",\"type\":\"Dog\",\"breed\":\"Shih tzu\",\"description\":\"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.\",\"age\":\"1 month\",\"inoculations\":[\"parvovirus\"],\"diseases\":[\"none\"],\"parasites\":[\"none\"]},{\"id\":3,\"name\":\"Woody\",\"img\":\"assets/images/pets-woody.png\",\"type\":\"Dog\",\"breed\":\"Golden Retriever\",\"description\":\"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.\",\"age\":\"3 years 6 months\",\"inoculations\":[\"adenovirus\",\"distemper\"],\"diseases\":[\"right back leg mobility reduced\"],\"parasites\":[\"none\"]},{\"id\":4,\"name\":\"Scarlett\",\"img\":\"assets/images/pets-scarlett.png\",\"type\":\"Dog\",\"breed\":\"Jack Russell Terrier\",\"description\":\"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.\",\"age\":\"3 months\",\"inoculations\":[\"parainfluenza\"],\"diseases\":[\"none\"],\"parasites\":[\"none\"]},{\"id\":5,\"name\":\"Katrine\",\"img\":\"assets/images/pets-katrine.png\",\"type\":\"Cat\",\"breed\":\"British Shorthair\",\"description\":\"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.\",\"age\":\"6 months\",\"inoculations\":[\"panleukopenia\"],\"diseases\":[\"none\"],\"parasites\":[\"none\"]},{\"id\":6,\"name\":\"Timmy\",\"img\":\"assets/images/pets-timmy.png\",\"type\":\"Cat\",\"breed\":\"British Shorthair\",\"description\":\"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.\",\"age\":\"2 years 3 months\",\"inoculations\":[\"calicivirus\",\"viral rhinotracheitis\"],\"diseases\":[\"kidney stones\"],\"parasites\":[\"none\"]},{\"id\":7,\"name\":\"Freddie\",\"img\":\"assets/images/pets-freddie.png\",\"type\":\"Cat\",\"breed\":\"British Shorthair\",\"description\":\"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.\",\"age\":\"2 months\",\"inoculations\":[\"rabies\"],\"diseases\":[\"none\"],\"parasites\":[\"none\"]},{\"id\":8,\"name\":\"Charly\",\"img\":\"assets/images/pets-charly.png\",\"type\":\"Dog\",\"breed\":\"Jack Russell Terrier\",\"description\":\"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.\",\"age\":\"8 years\",\"inoculations\":[\"bordetella bronchiseptica\",\"leptospirosis\"],\"diseases\":[\"deafness\",\"blindness\"],\"parasites\":[\"lice\",\"fleas\"]}]");

/***/ }),

/***/ "./pages/main/sass/main.scss":
/*!***********************************!*\
  !*** ./pages/main/sass/main.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./pages/main/sass/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
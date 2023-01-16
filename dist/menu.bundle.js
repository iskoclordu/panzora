/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Belleza-Regular.ttf */ "./src/fonts/Belleza-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Adam-Light.ttf */ "./src/fonts/Adam-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Adam-Bold.ttf */ "./src/fonts/Adam-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Adam-Medium.ttf */ "./src/fonts/Adam-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/home-background.jpg */ "./src/images/home-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  --color-1:#171616;\n  --color-2:#9B2336;\n  --color-3:#F4F0E8;\n}\n\n@font-face {\n  font-family: logo-font;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: adam-font-light;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n@font-face {\n  font-family: adam-font-bold;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n@font-face {\n  font-family: adam-font-regular;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n/* Common Styles for All pages*/\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n.navbar-container{\n  background-color: #9b2335a6;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\na{\n  text-decoration: none;\n  color: inherit;\n}\n\n.navbar-elements{\n  width: 60vw;\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n  align-items: center;\n  \n}\n.navbar-elements div{\n  height: 3.2rem;\n  box-sizing: border-box;\n}\n\n.navbar-elements div:hover{\n  box-sizing: border-box;\n  border-bottom: 2px solid var(--color-3);  \n}\n\n.navbar-elements h3{\n  margin: 0.6rem;\n  font-family: adam-font-regular;\n  font-size: 2rem;\n  color: var(--color-3);\n}\n\n/* Home Page Styles*/\n\n#content-home {\n  height: 100%;\n  width: 100%;\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: cover;\n\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n}\n\n#content-home .content-body{\n  position:relative;\n}\n\n#content-home .logo-container{\n  height: max-content;\n  width: 40vw;\n  max-width: 45rem;\n  min-width: min-content;\n  background-color: #f4f0e8bd;\n  padding: 0;\n  position: relative;\n  right: 0;\n  top: 35%;\n  margin-left: auto;\n\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n\n#content-home .logo-container #logo{\n  height: 20vh;\n  min-height: 4rem;\n  margin-top: 1rem;\n  margin-right: 4rem;\n  vertical-align: bottom;\n}\n\n#content-home .footer-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#content-home .footer {\n  background-color: #171616bd;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding:0.5rem 1rem;\n}\n\n#content-home .footer span{\n  font-family: adam-font-regular;\n  letter-spacing: 0.5rem;\n  font-size: 1rem;\n  color: var(--color-3);\n}\n\n/* Menu Page Styles*/\n\n#content-menu, #content-contact {\n  height: 100%;\n  width: 100%;\n  background-color: var(--color-3);\n}\n\n#content-menu, #content-contact {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n}\n\n#content-menu .content-body{\n  width: 60vw;\n  min-width: 690px;\n  overflow-y: auto;\n  margin: 0 auto;\n  background-color: #171616bd;\n\n  padding: 0.5rem;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 3rem;\n}\n\n.menu-section{\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n  margin: 2px auto;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid var(--color-2);\n}\n\n.menu-section:nth-child(even){\n  flex-direction: row;\n}\n.menu-section:nth-child(odd){\n  flex-direction: row-reverse;\n}\n\n\n.menu-section .products {\n  width: 15rem;\n  font-family: adam-font-regular;\n  color: var(--color-3);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\n.products h2{\n  font-family: adam-font-bold;\n  font-size: 1.5rem;\n  letter-spacing: 0.2rem;\n  color: var(--color-2);\n  border-bottom: 2px solid var(--color-2);\n  padding-top: 0.2rem;\n  margin: 0;\n  background-color: #f4f0e86b;\n}\n.products .menu-row{\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n}\n.products .menu-row .name{\n  font-family: inherit;\n  font-size: 1.2rem;\n  flex: 1;\n}\n\n.products .price{\n  font-family: inherit;\n  font-size: 1.3rem;\n}\n\n.menu-section .image img{\n  height: 15rem;\n  width: 15rem;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--color-2); \n  border-radius: 2px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--color-2);\n  position: relative;\n  box-shadow: inset 1px 0 1px 0.5px #f4f0e844; \n}\n\n/* Footer Style is common for both menu and contact page */\n#content-menu  .logo-container, #content-contact .logo-container{\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n\n#content-menu .logo-container #logo,#content-contact .logo-container #logo{\n  height: 10vh;\n  min-height: 2.5rem;\n  margin-top: 0.1rem;\n  vertical-align: bottom;\n}\n\n#content-menu .footer ,#content-contact .footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3rem;\n}\n\n#content-menu .footer .contact ,#content-contact .footer .contact{\n  display: flex;\n  gap: 0.2rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-right: 5rem;\n}\n\n#content-menu .footer .contact h4 ,#content-contact .footer .contact h4{\n  margin: 0;\n  letter-spacing: 0.2rem;\n  font-family: adam-font-regular;\n  letter-spacing: 0.5rem;\n  font-size: 1.3rem;\n  color: var(--color-2);\n  align-self: center;\n}\n#content-menu .footer .contact span ,#content-contact .footer .contact span{\n  font-family: adam-font-regular;\n  letter-spacing: 0.5rem;\n  font-size: 1.3rem;\n  color: var(--color-2);\n  align-self: center;\n}\n\n/* Contact Page */\n\n#content-contact .content-body{\n  width: 60vw;\n  min-width: 690px;\n  overflow-y: auto;\n  margin: 0 auto;\n  background-color: #171616bd;\n\n  padding: 0.5rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2vw;\n}\n\n#content-contact .content-body .contact-section{\n  width: 20vw;\n\n  font-family: adam-font-regular;\n  font-size: 1.3rem;\n  color: var(--color-3);\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretch;\n  gap: 3rem;\n\n  border-right: 1px solid #F4F0E880;\n\n}\n\n#content-contact .content-body .contact-section-info{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  gap: 0.5rem;\n}\n\n#content-contact .content-body .location img{\n  width: 25vw;\n  height: auto;\n  border-radius: 2px;\n  margin-left: 3rem;\n}\n\n.customer-form{\n  padding-right: 0.5rem;\n  \n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.customer-form input[type='text'],\n.customer-form input[type='email']{\n  box-sizing: border-box;\n  font-family: inherit;\n  background-color: var(--color-3);\n  border: 1px solid var(--color-1);\n  border-radius: 2px;\n  width: 100%;\n  padding: 7px;\n  font: 0.8rem;\n}\n\n/* .customer-form .form-row input[type='text']:invalid,\n.customer-form .form-row input[type='email']:invalid {\n  border: 1px solid var(--color-2);\n  box-shadow: 0 0 2px 2px var(--color-2);\n} */\n\n.customer-form textarea{\n  font-family: inherit;\n  font-size: 1rem;\n\n  box-sizing: border-box;\n  border: 1px solid var(--color-1);\n  border-radius: 2px;\n\n  background-color: var(--color-3);\n\n  height: 7rem;\n  width: 100%;\n  margin-bottom: 0.5rem;\n  padding: 7px;\n  resize: none;\n  overflow-y: auto;\n}\n\n.customer-form  .text{\n  color: var(--color-3);\n  font-size: 0.8rem;\n  margin-bottom: 0.5rem;\n}\n\n.customer-form ::-webkit-scrollbar {\n  width: 5px;\n}\n\n.customer-form ::-webkit-scrollbar-thumb {\n  background: var(--color-2); \n  border-radius: 1px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--color-2);\n  position: relative;\n  box-shadow: inset 1px 0 1px 0.5px #f4f0e844; \n}\n\n.customer-form button{\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: bold;\n\n  color: var(--color-3);\n  background-color:var(--color-2);\n\n  border: none;\n  border-radius: 2px;\n\n  padding: 10px 40px;\n  cursor: pointer;\n}\n\n.customer-form button:hover{\n  scale: 1.02;\n}\n\n.customer-form button:active{\n  transition: 0.2s;\n  scale: 0.98;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n  --color-1:#171616;\n  --color-2:#9B2336;\n  --color-3:#F4F0E8;\n}\n\n@font-face {\n  font-family: logo-font;\n  src: url(./fonts/Belleza-Regular.ttf);\n}\n\n@font-face {\n  font-family: adam-font-light;\n  src: url(./fonts/Adam-Light.ttf);\n}\n@font-face {\n  font-family: adam-font-bold;\n  src: url(./fonts/Adam-Bold.ttf);\n}\n\n@font-face {\n  font-family: adam-font-regular;\n  src: url(./fonts/Adam-Medium.ttf);\n}\n\n/* Common Styles for All pages*/\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n.navbar-container{\n  background-color: #9b2335a6;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\na{\n  text-decoration: none;\n  color: inherit;\n}\n\n.navbar-elements{\n  width: 60vw;\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n  align-items: center;\n  \n}\n.navbar-elements div{\n  height: 3.2rem;\n  box-sizing: border-box;\n}\n\n.navbar-elements div:hover{\n  box-sizing: border-box;\n  border-bottom: 2px solid var(--color-3);  \n}\n\n.navbar-elements h3{\n  margin: 0.6rem;\n  font-family: adam-font-regular;\n  font-size: 2rem;\n  color: var(--color-3);\n}\n\n/* Home Page Styles*/\n\n#content-home {\n  height: 100%;\n  width: 100%;\n  background: no-repeat url(\"../src/images/home-background.jpg\");\n  background-size: cover;\n\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n}\n\n#content-home .content-body{\n  position:relative;\n}\n\n#content-home .logo-container{\n  height: max-content;\n  width: 40vw;\n  max-width: 45rem;\n  min-width: min-content;\n  background-color: #f4f0e8bd;\n  padding: 0;\n  position: relative;\n  right: 0;\n  top: 35%;\n  margin-left: auto;\n\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n\n#content-home .logo-container #logo{\n  height: 20vh;\n  min-height: 4rem;\n  margin-top: 1rem;\n  margin-right: 4rem;\n  vertical-align: bottom;\n}\n\n#content-home .footer-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#content-home .footer {\n  background-color: #171616bd;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding:0.5rem 1rem;\n}\n\n#content-home .footer span{\n  font-family: adam-font-regular;\n  letter-spacing: 0.5rem;\n  font-size: 1rem;\n  color: var(--color-3);\n}\n\n/* Menu Page Styles*/\n\n#content-menu, #content-contact {\n  height: 100%;\n  width: 100%;\n  background-color: var(--color-3);\n}\n\n#content-menu, #content-contact {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n}\n\n#content-menu .content-body{\n  width: 60vw;\n  min-width: 690px;\n  overflow-y: auto;\n  margin: 0 auto;\n  background-color: #171616bd;\n\n  padding: 0.5rem;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 3rem;\n}\n\n.menu-section{\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n  margin: 2px auto;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid var(--color-2);\n}\n\n.menu-section:nth-child(even){\n  flex-direction: row;\n}\n.menu-section:nth-child(odd){\n  flex-direction: row-reverse;\n}\n\n\n.menu-section .products {\n  width: 15rem;\n  font-family: adam-font-regular;\n  color: var(--color-3);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\n.products h2{\n  font-family: adam-font-bold;\n  font-size: 1.5rem;\n  letter-spacing: 0.2rem;\n  color: var(--color-2);\n  border-bottom: 2px solid var(--color-2);\n  padding-top: 0.2rem;\n  margin: 0;\n  background-color: #f4f0e86b;\n}\n.products .menu-row{\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n}\n.products .menu-row .name{\n  font-family: inherit;\n  font-size: 1.2rem;\n  flex: 1;\n}\n\n.products .price{\n  font-family: inherit;\n  font-size: 1.3rem;\n}\n\n.menu-section .image img{\n  height: 15rem;\n  width: 15rem;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--color-2); \n  border-radius: 2px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--color-2);\n  position: relative;\n  box-shadow: inset 1px 0 1px 0.5px #f4f0e844; \n}\n\n/* Footer Style is common for both menu and contact page */\n#content-menu  .logo-container, #content-contact .logo-container{\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n\n#content-menu .logo-container #logo,#content-contact .logo-container #logo{\n  height: 10vh;\n  min-height: 2.5rem;\n  margin-top: 0.1rem;\n  vertical-align: bottom;\n}\n\n#content-menu .footer ,#content-contact .footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3rem;\n}\n\n#content-menu .footer .contact ,#content-contact .footer .contact{\n  display: flex;\n  gap: 0.2rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-right: 5rem;\n}\n\n#content-menu .footer .contact h4 ,#content-contact .footer .contact h4{\n  margin: 0;\n  letter-spacing: 0.2rem;\n  font-family: adam-font-regular;\n  letter-spacing: 0.5rem;\n  font-size: 1.3rem;\n  color: var(--color-2);\n  align-self: center;\n}\n#content-menu .footer .contact span ,#content-contact .footer .contact span{\n  font-family: adam-font-regular;\n  letter-spacing: 0.5rem;\n  font-size: 1.3rem;\n  color: var(--color-2);\n  align-self: center;\n}\n\n/* Contact Page */\n\n#content-contact .content-body{\n  width: 60vw;\n  min-width: 690px;\n  overflow-y: auto;\n  margin: 0 auto;\n  background-color: #171616bd;\n\n  padding: 0.5rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2vw;\n}\n\n#content-contact .content-body .contact-section{\n  width: 20vw;\n\n  font-family: adam-font-regular;\n  font-size: 1.3rem;\n  color: var(--color-3);\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretch;\n  gap: 3rem;\n\n  border-right: 1px solid #F4F0E880;\n\n}\n\n#content-contact .content-body .contact-section-info{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  gap: 0.5rem;\n}\n\n#content-contact .content-body .location img{\n  width: 25vw;\n  height: auto;\n  border-radius: 2px;\n  margin-left: 3rem;\n}\n\n.customer-form{\n  padding-right: 0.5rem;\n  \n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.customer-form input[type='text'],\n.customer-form input[type='email']{\n  box-sizing: border-box;\n  font-family: inherit;\n  background-color: var(--color-3);\n  border: 1px solid var(--color-1);\n  border-radius: 2px;\n  width: 100%;\n  padding: 7px;\n  font: 0.8rem;\n}\n\n/* .customer-form .form-row input[type='text']:invalid,\n.customer-form .form-row input[type='email']:invalid {\n  border: 1px solid var(--color-2);\n  box-shadow: 0 0 2px 2px var(--color-2);\n} */\n\n.customer-form textarea{\n  font-family: inherit;\n  font-size: 1rem;\n\n  box-sizing: border-box;\n  border: 1px solid var(--color-1);\n  border-radius: 2px;\n\n  background-color: var(--color-3);\n\n  height: 7rem;\n  width: 100%;\n  margin-bottom: 0.5rem;\n  padding: 7px;\n  resize: none;\n  overflow-y: auto;\n}\n\n.customer-form  .text{\n  color: var(--color-3);\n  font-size: 0.8rem;\n  margin-bottom: 0.5rem;\n}\n\n.customer-form ::-webkit-scrollbar {\n  width: 5px;\n}\n\n.customer-form ::-webkit-scrollbar-thumb {\n  background: var(--color-2); \n  border-radius: 1px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--color-2);\n  position: relative;\n  box-shadow: inset 1px 0 1px 0.5px #f4f0e844; \n}\n\n.customer-form button{\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: bold;\n\n  color: var(--color-3);\n  background-color:var(--color-2);\n\n  border: none;\n  border-radius: 2px;\n\n  padding: 10px 40px;\n  cursor: pointer;\n}\n\n.customer-form button:hover{\n  scale: 1.02;\n}\n\n.customer-form button:active{\n  transition: 0.2s;\n  scale: 0.98;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ callContactPage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _images_location_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/location.png */ "./src/images/location.png");

// eslint-disable-next-line import/no-cycle




function createContentContact(mainContainer) {
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-body');
  mainContainer.appendChild(contentContainer);

  const contactSection = document.createElement('div');
  contactSection.classList.add('contact-section');
  contentContainer.appendChild(contactSection);

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-section-info');
  contactSection.appendChild(contactInfo);

  contactInfo.innerHTML = '<div class="adress">1314 N Front st, Philadelphia</div><div class="phone"><a href="tel:+01234567890">+0 123-456-7890</a></div><div class="email"><a href="mailto:info@panzora.com">info@panzora.com</a></div>';

  const form = document.createElement('div');
  form.classList.add('customer-form');
  contactSection.appendChild(form);

  const formRow1 = document.createElement('div');
  formRow1.classList.add('form-row');
  formRow1.innerHTML = '<input type="text" id="full-name" name="full-name" placeholder="Name*" required>';
  form.appendChild(formRow1);

  const formRow2 = document.createElement('div');
  formRow2.classList.add('form-row');
  formRow2.innerHTML = '<input type="email" id="email" name="email" placeholder="joe@example.com*" required>';
  form.appendChild(formRow2);

  const formRow3 = document.createElement('div');
  formRow3.classList.add('form-row');
  formRow3.innerHTML = '<textarea name="text" id="text" placeholder="Write your message here."></textarea>';
  form.appendChild(formRow3);

  const button = document.createElement('button');
  button.innerHTML = 'Send Us';
  form.appendChild(button);

  const locationImageContainer = document.createElement('div');
  locationImageContainer.classList.add('location');
  contentContainer.appendChild(locationImageContainer);

  const locationImage = document.createElement('img');
  locationImage.setAttribute('alt', 'Map view for location of restaurant');
  locationImage.src = _images_location_png__WEBPACK_IMPORTED_MODULE_3__;
  locationImageContainer.appendChild(locationImage);
}
function callContactPage() {
  const body = document.querySelector('body');
  body.innerHTML = '';
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'content-contact');
  body.appendChild(mainContainer);
  (0,_index__WEBPACK_IMPORTED_MODULE_1__.createNavBar)('content-contact');
  createContentContact(mainContainer);
  (0,_menu__WEBPACK_IMPORTED_MODULE_2__.createFooterMenuContent)('content-contact');
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callHomePage": () => (/* binding */ callHomePage),
/* harmony export */   "createNavBar": () => (/* binding */ createNavBar)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* eslint-disable no-script-url */


// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/no-cycle


function createNavBar(id) {
  const mainContainer = document.getElementById(id);
  const navBarContainer = document.createElement('div');
  navBarContainer.classList.add('navbar-container');
  mainContainer.appendChild(navBarContainer);

  const navBarElements = document.createElement('div');
  navBarElements.classList.add('navbar-elements');
  navBarContainer.appendChild(navBarElements);

  const aHome = document.createElement('a');
  aHome.setAttribute('href', 'javascript:callHomePage()');
  navBarElements.appendChild(aHome);

  const home = document.createElement('div');
  home.classList.add('home');
  aHome.appendChild(home);

  const homeText = document.createElement('h3');
  homeText.innerHTML = 'HOME';
  home.appendChild(homeText);

  const aMenu = document.createElement('a');
  aMenu.setAttribute('href', 'javascript:callMenuPage()');
  navBarElements.appendChild(aMenu);

  const menu = document.createElement('div');
  menu.classList.add('menu');
  aMenu.appendChild(menu);

  const menuText = document.createElement('h3');
  menuText.innerHTML = 'MENU';
  menu.appendChild(menuText);

  const aContact = document.createElement('a');
  aContact.setAttribute('href', 'javascript:callContactPage()');
  navBarElements.appendChild(aContact);

  const contact = document.createElement('div');
  contact.classList.add('contact');
  aContact.appendChild(contact);

  const contactText = document.createElement('h3');
  contactText.innerHTML = 'CONTACT';
  contact.appendChild(contactText);

  // eslint-disable-next-line no-use-before-define
  home.addEventListener('click', callHomePage);
  menu.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__["default"]);
  contact.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

function createContentHome() {
  const mainContainer = document.getElementById('content-home');
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-body');
  mainContainer.appendChild(contentContainer);

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');
  contentContainer.appendChild(logoContainer);

  const a = document.createElement('a');
  a.setAttribute('href', './index.html');
  logoContainer.appendChild(a);

  const img = document.createElement('img');
  img.setAttribute('id', 'logo');
  img.setAttribute('alt', 'Company logo');
  img.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;
  a.appendChild(img);
}

function createFooterHome() {
  const mainContainer = document.getElementById('content-home');
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('footer-container');
  mainContainer.appendChild(footerContainer);

  const footer = document.createElement('div');
  footer.classList.add('footer');
  footerContainer.appendChild(footer);

  footer.innerHTML = '<span>1314 N Front St, Philadelphia</span><span>|</span><a href="tel:+01234567890"><span>+0 123-456-7890</span></a>';
}

function callHomePage() {
  const body = document.querySelector('body');
  body.innerHTML = '';
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'content-home');
  body.appendChild(mainContainer);
  createNavBar('content-home');
  createContentHome();
  createFooterHome();
}

callHomePage();




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooterMenuContent": () => (/* binding */ createFooterMenuContent),
/* harmony export */   "default": () => (/* binding */ callMenuPage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pizza.jpg */ "./src/images/pizza.jpg");
/* harmony import */ var _images_pasta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/pasta.jpg */ "./src/images/pasta.jpg");
/* harmony import */ var _images_dessert_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/dessert.jpg */ "./src/images/dessert.jpg");
/* harmony import */ var _images_beverage_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/beverage.jpg */ "./src/images/beverage.jpg");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");

// eslint-disable-next-line import/no-cycle







const menuImages = {
  pizzas: _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__,
  pastas: _images_pasta_jpg__WEBPACK_IMPORTED_MODULE_3__,
  desserts: _images_dessert_jpg__WEBPACK_IMPORTED_MODULE_4__,
  beverages: _images_beverage_jpg__WEBPACK_IMPORTED_MODULE_5__,
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const menu = (() => {
  const pizzas = [];
  pizzas.push(new Product('Margherita', '12$'));
  pizzas.push(new Product('Quattro Formaggi', '13$'));
  pizzas.push(new Product('Siciliana', '13$'));
  pizzas.push(new Product('Tonno E Cipolla', '15$'));
  pizzas.push(new Product('Vegeteriana', '11$'));

  const pastas = [];
  pastas.push(new Product('Pasta E Fagioli', '10$'));
  pastas.push(new Product('Pasta Alla Zozzona', '12$'));
  pastas.push(new Product('Spagetthi Bolognaise', '12$'));
  pastas.push(new Product('Rigatoni Puttanesca', '11$'));
  pastas.push(new Product('Pork Ragu Rigatoni', '15$'));

  const desserts = [];
  desserts.push(new Product('Tiramisù', '9$'));
  desserts.push(new Product('Sbrisolona', '8$'));
  desserts.push(new Product('Sfogliatelle', '12$'));
  desserts.push(new Product('Cannoli', '9$'));
  desserts.push(new Product('Babà', '6$'));

  const beverages = [];
  beverages.push(new Product('Fresh Orange Juice', '5$'));
  beverages.push(new Product('Mineral Water', '2$'));
  beverages.push(new Product('Soda', '4$'));
  beverages.push(new Product('Wine (Red/White)', '4$'));
  beverages.push(new Product('Espresso', '3$'));

  return {
    pizzas, pastas, desserts, beverages,
  };
})();

function createContentMenu(mainContainer) {
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-body');
  mainContainer.appendChild(contentContainer);
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const part in menu) {
    const partContainer = document.createElement('div');
    partContainer.classList.add('menu-section');
    partContainer.classList.add(`${part}`);
    contentContainer.appendChild(partContainer);

    const productContainer = document.createElement('div');
    productContainer.classList.add('products');
    partContainer.appendChild(productContainer);

    const header = document.createElement('h2');
    header.innerHTML = part.toUpperCase();
    productContainer.appendChild(header);

    for (let i = 0; i < menu[part].length; i += 1) {
      const product = document.createElement('div');
      product.classList.add('menu-row');
      productContainer.appendChild(product);

      const productName = document.createElement('div');
      productName.classList.add('name');
      productName.innerHTML = `${menu[part][i].name}`;
      product.appendChild(productName);

      const productPrice = document.createElement('div');
      productPrice.classList.add('price');
      productPrice.innerHTML = `${menu[part][i].price}`;
      product.appendChild(productPrice);
    }

    const image = document.createElement('div');
    image.classList.add('image');

    image.classList.add(`${part.slice(0, -1)}`);
    partContainer.appendChild(image);

    const img = document.createElement('img');
    img.setAttribute('alt', `${part}`);
    img.src = menuImages[part];
    image.appendChild(img);
  }
}

function createFooterMenuContent(id) {
  const mainContainer = document.getElementById(id);
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('footer-container');
  mainContainer.appendChild(footerContainer);

  const footer = document.createElement('div');
  footer.classList.add('footer');
  footerContainer.appendChild(footer);

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');
  footer.appendChild(logoContainer);

  const a = document.createElement('a');
  a.setAttribute('href', './index.html');
  logoContainer.appendChild(a);

  const img = document.createElement('img');
  img.setAttribute('id', 'logo');
  img.setAttribute('alt', 'Company logo');
  img.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_6__;
  a.appendChild(img);

  const contact = document.createElement('div');
  contact.classList.add('contact');
  footer.appendChild(contact);

  contact.innerHTML = '<h4>Call For Reservation</h4> <a href="tel:+01234567890"><span>+0 123-456-7890</span></a>';
}

function callMenuPage() {
  const body = document.querySelector('body');
  body.innerHTML = '';
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'content-menu');
  body.appendChild(mainContainer);
  (0,_index__WEBPACK_IMPORTED_MODULE_1__.createNavBar)('content-menu');
  createContentMenu(mainContainer);
  createFooterMenuContent('content-menu');
}


/***/ }),

/***/ "./src/fonts/Adam-Bold.ttf":
/*!*********************************!*\
  !*** ./src/fonts/Adam-Bold.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cec1e13c3f7eed84276.ttf";

/***/ }),

/***/ "./src/fonts/Adam-Light.ttf":
/*!**********************************!*\
  !*** ./src/fonts/Adam-Light.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63c96b131742450ff7f9.ttf";

/***/ }),

/***/ "./src/fonts/Adam-Medium.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Adam-Medium.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb067da932828f690400.ttf";

/***/ }),

/***/ "./src/fonts/Belleza-Regular.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Belleza-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd095d8cf5ac9604d1d4.ttf";

/***/ }),

/***/ "./src/images/beverage.jpg":
/*!*********************************!*\
  !*** ./src/images/beverage.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b4a6b040101fd82094a.jpg";

/***/ }),

/***/ "./src/images/dessert.jpg":
/*!********************************!*\
  !*** ./src/images/dessert.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97a030d73904c493ca48.jpg";

/***/ }),

/***/ "./src/images/home-background.jpg":
/*!****************************************!*\
  !*** ./src/images/home-background.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29a6c0ecaa4c1658e5d0.jpg";

/***/ }),

/***/ "./src/images/location.png":
/*!*********************************!*\
  !*** ./src/images/location.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "053eb884b045dc9b8d1f.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4adeb421c1b99efc4ef0.png";

/***/ }),

/***/ "./src/images/pasta.jpg":
/*!******************************!*\
  !*** ./src/images/pasta.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d56ed8d81359fd19a69.jpg";

/***/ }),

/***/ "./src/images/pizza.jpg":
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a8d32c62b90f01973cd.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"menu": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZ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Ozs7VUNqSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFuem9yYS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcGFuem9yYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGFuem9yYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcGFuem9yYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BhbnpvcmEvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcGFuem9yYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wYW56b3JhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wYW56b3JhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BhbnpvcmEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcGFuem9yYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BhbnpvcmEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wYW56b3JhLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcGFuem9yYS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wYW56b3JhLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcGFuem9yYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYW56b3JhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BhbnpvcmEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BhbnpvcmEvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wYW56b3JhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFuem9yYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BhbnpvcmEvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcGFuem9yYS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wYW56b3JhL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wYW56b3JhL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcGFuem9yYS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcGFuem9yYS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQmVsbGV6YS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvQWRhbS1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FkYW0tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FkYW0tTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL3NyYy9pbWFnZXMvaG9tZS1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gIC0tY29sb3ItMTojMTcxNjE2O1xcbiAgLS1jb2xvci0yOiM5QjIzMzY7XFxuICAtLWNvbG9yLTM6I0Y0RjBFODtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogbG9nby1mb250O1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtbGlnaHQ7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGFkYW0tZm9udC1ib2xkO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtcmVndWxhcjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuLyogQ29tbW9uIFN0eWxlcyBmb3IgQWxsIHBhZ2VzKi9cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubmF2YmFyLWNvbnRhaW5lcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YjIzMzVhNjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmF7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLm5hdmJhci1lbGVtZW50c3tcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBcXG59XFxuLm5hdmJhci1lbGVtZW50cyBkaXZ7XFxuICBoZWlnaHQ6IDMuMnJlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5uYXZiYXItZWxlbWVudHMgZGl2OmhvdmVye1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci0zKTsgIFxcbn1cXG5cXG4ubmF2YmFyLWVsZW1lbnRzIGgze1xcbiAgbWFyZ2luOiAwLjZyZW07XFxuICBmb250LWZhbWlseTogYWRhbS1mb250LXJlZ3VsYXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XFxufVxcblxcbi8qIEhvbWUgUGFnZSBTdHlsZXMqL1xcblxcbiNjb250ZW50LWhvbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyIDFmcjtcXG59XFxuXFxuI2NvbnRlbnQtaG9tZSAuY29udGVudC1ib2R5e1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbiNjb250ZW50LWhvbWUgLmxvZ28tY29udGFpbmVye1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIHdpZHRoOiA0MHZ3O1xcbiAgbWF4LXdpZHRoOiA0NXJlbTtcXG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmMGU4YmQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDM1JTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuI2NvbnRlbnQtaG9tZSAubG9nby1jb250YWluZXIgI2xvZ297XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBtaW4taGVpZ2h0OiA0cmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogNHJlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxufVxcblxcbiNjb250ZW50LWhvbWUgLmZvb3Rlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2NvbnRlbnQtaG9tZSAuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MTZiZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOjAuNXJlbSAxcmVtO1xcbn1cXG5cXG4jY29udGVudC1ob21lIC5mb290ZXIgc3BhbntcXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtcmVndWxhcjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XFxufVxcblxcbi8qIE1lbnUgUGFnZSBTdHlsZXMqL1xcblxcbiNjb250ZW50LW1lbnUsICNjb250ZW50LWNvbnRhY3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG59XFxuXFxuI2NvbnRlbnQtbWVudSwgI2NvbnRlbnQtY29udGFjdCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnIgMWZyO1xcbn1cXG5cXG4jY29udGVudC1tZW51IC5jb250ZW50LWJvZHl7XFxuICB3aWR0aDogNjB2dztcXG4gIG1pbi13aWR0aDogNjkwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjE2YmQ7XFxuXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG4gIG1hcmdpbjogMnB4IGF1dG87XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uOm50aC1jaGlsZChldmVuKXtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5tZW51LXNlY3Rpb246bnRoLWNoaWxkKG9kZCl7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcblxcblxcbi5tZW51LXNlY3Rpb24gLnByb2R1Y3RzIHtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtcmVndWxhcjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuLnByb2R1Y3RzIGgye1xcbiAgZm9udC1mYW1pbHk6IGFkYW0tZm9udC1ib2xkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGYwZTg2YjtcXG59XFxuLnByb2R1Y3RzIC5tZW51LXJvd3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4OiAxO1xcbn1cXG4ucHJvZHVjdHMgLm1lbnUtcm93IC5uYW1le1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5wcm9kdWN0cyAucHJpY2V7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIC5pbWFnZSBpbWd7XFxuICBoZWlnaHQ6IDE1cmVtO1xcbiAgd2lkdGg6IDE1cmVtO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA4cHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMik7IFxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgMXB4IDAuNXB4ICNmNGYwZTg0NDsgXFxufVxcblxcbi8qIEZvb3RlciBTdHlsZSBpcyBjb21tb24gZm9yIGJvdGggbWVudSBhbmQgY29udGFjdCBwYWdlICovXFxuI2NvbnRlbnQtbWVudSAgLmxvZ28tY29udGFpbmVyLCAjY29udGVudC1jb250YWN0IC5sb2dvLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbiNjb250ZW50LW1lbnUgLmxvZ28tY29udGFpbmVyICNsb2dvLCNjb250ZW50LWNvbnRhY3QgLmxvZ28tY29udGFpbmVyICNsb2dve1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbWluLWhlaWdodDogMi41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC4xcmVtO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuI2NvbnRlbnQtbWVudSAuZm9vdGVyICwjY29udGVudC1jb250YWN0IC5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxufVxcblxcbiNjb250ZW50LW1lbnUgLmZvb3RlciAuY29udGFjdCAsI2NvbnRlbnQtY29udGFjdCAuZm9vdGVyIC5jb250YWN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4ycmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcXG59XFxuXFxuI2NvbnRlbnQtbWVudSAuZm9vdGVyIC5jb250YWN0IGg0ICwjY29udGVudC1jb250YWN0IC5mb290ZXIgLmNvbnRhY3QgaDR7XFxuICBtYXJnaW46IDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xcbiAgZm9udC1mYW1pbHk6IGFkYW0tZm9udC1yZWd1bGFyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4jY29udGVudC1tZW51IC5mb290ZXIgLmNvbnRhY3Qgc3BhbiAsI2NvbnRlbnQtY29udGFjdCAuZm9vdGVyIC5jb250YWN0IHNwYW57XFxuICBmb250LWZhbWlseTogYWRhbS1mb250LXJlZ3VsYXI7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi8qIENvbnRhY3QgUGFnZSAqL1xcblxcbiNjb250ZW50LWNvbnRhY3QgLmNvbnRlbnQtYm9keXtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgbWluLXdpZHRoOiA2OTBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MTZiZDtcXG5cXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJ2dztcXG59XFxuXFxuI2NvbnRlbnQtY29udGFjdCAuY29udGVudC1ib2R5IC5jb250YWN0LXNlY3Rpb257XFxuICB3aWR0aDogMjB2dztcXG5cXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtcmVndWxhcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZ2FwOiAzcmVtO1xcblxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0Y0RjBFODgwO1xcblxcbn1cXG5cXG4jY29udGVudC1jb250YWN0IC5jb250ZW50LWJvZHkgLmNvbnRhY3Qtc2VjdGlvbi1pbmZve1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNjb250ZW50LWNvbnRhY3QgLmNvbnRlbnQtYm9keSAubG9jYXRpb24gaW1ne1xcbiAgd2lkdGg6IDI1dnc7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBtYXJnaW4tbGVmdDogM3JlbTtcXG59XFxuXFxuLmN1c3RvbWVyLWZvcm17XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcbi5jdXN0b21lci1mb3JtIGlucHV0W3R5cGU9J3RleHQnXSxcXG4uY3VzdG9tZXItZm9ybSBpbnB1dFt0eXBlPSdlbWFpbCdde1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgZm9udDogMC44cmVtO1xcbn1cXG5cXG4vKiAuY3VzdG9tZXItZm9ybSAuZm9ybS1yb3cgaW5wdXRbdHlwZT0ndGV4dCddOmludmFsaWQsXFxuLmN1c3RvbWVyLWZvcm0gLmZvcm0tcm93IGlucHV0W3R5cGU9J2VtYWlsJ106aW52YWxpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IHZhcigtLWNvbG9yLTIpO1xcbn0gKi9cXG5cXG4uY3VzdG9tZXItZm9ybSB0ZXh0YXJlYXtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuXFxuICBoZWlnaHQ6IDdyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5jdXN0b21lci1mb3JtICAudGV4dHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uY3VzdG9tZXItZm9ybSA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA1cHg7XFxufVxcblxcbi5jdXN0b21lci1mb3JtIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMik7IFxcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgMXB4IDAuNXB4ICNmNGYwZTg0NDsgXFxufVxcblxcbi5jdXN0b21lci1mb3JtIGJ1dHRvbntcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbG9yLTIpO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcblxcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3VzdG9tZXItZm9ybSBidXR0b246aG92ZXJ7XFxuICBzY2FsZTogMS4wMjtcXG59XFxuXFxuLmN1c3RvbWVyLWZvcm0gYnV0dG9uOmFjdGl2ZXtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBzY2FsZTogMC45ODtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw0Q0FBZ0M7QUFDbEM7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiw0Q0FBK0I7QUFDakM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsNENBQWlDO0FBQ25DOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLG1CQUFtQjs7QUFFckI7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O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCOztFQUVqQixxQkFBcUI7RUFDckIsK0JBQStCOztFQUUvQixZQUFZO0VBQ1osa0JBQWtCOztFQUVsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAtLWNvbG9yLTE6IzE3MTYxNjtcXG4gIC0tY29sb3ItMjojOUIyMzM2O1xcbiAgLS1jb2xvci0zOiNGNEYwRTg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGxvZ28tZm9udDtcXG4gIHNyYzogdXJsKC4vZm9udHMvQmVsbGV6YS1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGFkYW0tZm9udC1saWdodDtcXG4gIHNyYzogdXJsKC4vZm9udHMvQWRhbS1MaWdodC50dGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtYm9sZDtcXG4gIHNyYzogdXJsKC4vZm9udHMvQWRhbS1Cb2xkLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGFkYW0tZm9udC1yZWd1bGFyO1xcbiAgc3JjOiB1cmwoLi9mb250cy9BZGFtLU1lZGl1bS50dGYpO1xcbn1cXG5cXG4vKiBDb21tb24gU3R5bGVzIGZvciBBbGwgcGFnZXMqL1xcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5uYXZiYXItY29udGFpbmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzliMjMzNWE2O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYXtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ubmF2YmFyLWVsZW1lbnRze1xcbiAgd2lkdGg6IDYwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIFxcbn1cXG4ubmF2YmFyLWVsZW1lbnRzIGRpdntcXG4gIGhlaWdodDogMy4ycmVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm5hdmJhci1lbGVtZW50cyBkaXY6aG92ZXJ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTMpOyAgXFxufVxcblxcbi5uYXZiYXItZWxlbWVudHMgaDN7XFxuICBtYXJnaW46IDAuNnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtcmVndWxhcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG59XFxuXFxuLyogSG9tZSBQYWdlIFN0eWxlcyovXFxuXFxuI2NvbnRlbnQtaG9tZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCB1cmwoXFxcIi4uL3NyYy9pbWFnZXMvaG9tZS1iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnIgMWZyO1xcbn1cXG5cXG4jY29udGVudC1ob21lIC5jb250ZW50LWJvZHl7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuI2NvbnRlbnQtaG9tZSAubG9nby1jb250YWluZXJ7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgd2lkdGg6IDQwdnc7XFxuICBtYXgtd2lkdGg6IDQ1cmVtO1xcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGYwZThiZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMzUlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4jY29udGVudC1ob21lIC5sb2dvLWNvbnRhaW5lciAjbG9nb3tcXG4gIGhlaWdodDogMjB2aDtcXG4gIG1pbi1oZWlnaHQ6IDRyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuI2NvbnRlbnQtaG9tZSAuZm9vdGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jY29udGVudC1ob21lIC5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxNmJkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6MC41cmVtIDFyZW07XFxufVxcblxcbiNjb250ZW50LWhvbWUgLmZvb3RlciBzcGFue1xcbiAgZm9udC1mYW1pbHk6IGFkYW0tZm9udC1yZWd1bGFyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG59XFxuXFxuLyogTWVudSBQYWdlIFN0eWxlcyovXFxuXFxuI2NvbnRlbnQtbWVudSwgI2NvbnRlbnQtY29udGFjdCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbn1cXG5cXG4jY29udGVudC1tZW51LCAjY29udGVudC1jb250YWN0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmciAxZnI7XFxufVxcblxcbiNjb250ZW50LW1lbnUgLmNvbnRlbnQtYm9keXtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgbWluLXdpZHRoOiA2OTBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MTZiZDtcXG5cXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgbWFyZ2luOiAycHggYXV0bztcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItMik7XFxufVxcblxcbi5tZW51LXNlY3Rpb246bnRoLWNoaWxkKGV2ZW4pe1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLm1lbnUtc2VjdGlvbjpudGgtY2hpbGQob2RkKXtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG59XFxuXFxuXFxuLm1lbnUtc2VjdGlvbiAucHJvZHVjdHMge1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgZm9udC1mYW1pbHk6IGFkYW0tZm9udC1yZWd1bGFyO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG4ucHJvZHVjdHMgaDJ7XFxuICBmb250LWZhbWlseTogYWRhbS1mb250LWJvbGQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItMik7XFxuICBwYWRkaW5nLXRvcDogMC4ycmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjBlODZiO1xcbn1cXG4ucHJvZHVjdHMgLm1lbnUtcm93e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXg6IDE7XFxufVxcbi5wcm9kdWN0cyAubWVudS1yb3cgLm5hbWV7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnByb2R1Y3RzIC5wcmljZXtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5tZW51LXNlY3Rpb24gLmltYWdlIGltZ3tcXG4gIGhlaWdodDogMTVyZW07XFxuICB3aWR0aDogMTVyZW07XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDhweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0yKTsgXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMCAxcHggMC41cHggI2Y0ZjBlODQ0OyBcXG59XFxuXFxuLyogRm9vdGVyIFN0eWxlIGlzIGNvbW1vbiBmb3IgYm90aCBtZW51IGFuZCBjb250YWN0IHBhZ2UgKi9cXG4jY29udGVudC1tZW51ICAubG9nby1jb250YWluZXIsICNjb250ZW50LWNvbnRhY3QgLmxvZ28tY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuI2NvbnRlbnQtbWVudSAubG9nby1jb250YWluZXIgI2xvZ28sI2NvbnRlbnQtY29udGFjdCAubG9nby1jb250YWluZXIgI2xvZ297XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBtaW4taGVpZ2h0OiAyLjVyZW07XFxuICBtYXJnaW4tdG9wOiAwLjFyZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG5cXG4jY29udGVudC1tZW51IC5mb290ZXIgLCNjb250ZW50LWNvbnRhY3QgLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuI2NvbnRlbnQtbWVudSAuZm9vdGVyIC5jb250YWN0ICwjY29udGVudC1jb250YWN0IC5mb290ZXIgLmNvbnRhY3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjJyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xcbn1cXG5cXG4jY29udGVudC1tZW51IC5mb290ZXIgLmNvbnRhY3QgaDQgLCNjb250ZW50LWNvbnRhY3QgLmZvb3RlciAuY29udGFjdCBoNHtcXG4gIG1hcmdpbjogMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxuICBmb250LWZhbWlseTogYWRhbS1mb250LXJlZ3VsYXI7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbiNjb250ZW50LW1lbnUgLmZvb3RlciAuY29udGFjdCBzcGFuICwjY29udGVudC1jb250YWN0IC5mb290ZXIgLmNvbnRhY3Qgc3BhbntcXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtcmVndWxhcjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogQ29udGFjdCBQYWdlICovXFxuXFxuI2NvbnRlbnQtY29udGFjdCAuY29udGVudC1ib2R5e1xcbiAgd2lkdGg6IDYwdnc7XFxuICBtaW4td2lkdGg6IDY5MHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxNmJkO1xcblxcbiAgcGFkZGluZzogMC41cmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnZ3O1xcbn1cXG5cXG4jY29udGVudC1jb250YWN0IC5jb250ZW50LWJvZHkgLmNvbnRhY3Qtc2VjdGlvbntcXG4gIHdpZHRoOiAyMHZ3O1xcblxcbiAgZm9udC1mYW1pbHk6IGFkYW0tZm9udC1yZWd1bGFyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBnYXA6IDNyZW07XFxuXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRjRGMEU4ODA7XFxuXFxufVxcblxcbiNjb250ZW50LWNvbnRhY3QgLmNvbnRlbnQtYm9keSAuY29udGFjdC1zZWN0aW9uLWluZm97XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2NvbnRlbnQtY29udGFjdCAuY29udGVudC1ib2R5IC5sb2NhdGlvbiBpbWd7XFxuICB3aWR0aDogMjV2dztcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbn1cXG5cXG4uY3VzdG9tZXItZm9ybXtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuLmN1c3RvbWVyLWZvcm0gaW5wdXRbdHlwZT0ndGV4dCddLFxcbi5jdXN0b21lci1mb3JtIGlucHV0W3R5cGU9J2VtYWlsJ117XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBmb250OiAwLjhyZW07XFxufVxcblxcbi8qIC5jdXN0b21lci1mb3JtIC5mb3JtLXJvdyBpbnB1dFt0eXBlPSd0ZXh0J106aW52YWxpZCxcXG4uY3VzdG9tZXItZm9ybSAuZm9ybS1yb3cgaW5wdXRbdHlwZT0nZW1haWwnXTppbnZhbGlkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggdmFyKC0tY29sb3ItMik7XFxufSAqL1xcblxcbi5jdXN0b21lci1mb3JtIHRleHRhcmVhe1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG5cXG4gIGhlaWdodDogN3JlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgcmVzaXplOiBub25lO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmN1c3RvbWVyLWZvcm0gIC50ZXh0e1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5jdXN0b21lci1mb3JtIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDVweDtcXG59XFxuXFxuLmN1c3RvbWVyLWZvcm0gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0yKTsgXFxuICBib3JkZXItcmFkaXVzOiAxcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMCAxcHggMC41cHggI2Y0ZjBlODQ0OyBcXG59XFxuXFxuLmN1c3RvbWVyLWZvcm0gYnV0dG9ue1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tY29sb3ItMik7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuXFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jdXN0b21lci1mb3JtIGJ1dHRvbjpob3ZlcntcXG4gIHNjYWxlOiAxLjAyO1xcbn1cXG5cXG4uY3VzdG9tZXItZm9ybSBidXR0b246YWN0aXZle1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIHNjYWxlOiAwLjk4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgeyBjcmVhdGVOYXZCYXIgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZUZvb3Rlck1lbnVDb250ZW50IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCBsb2NhdGlvbiBmcm9tICcuL2ltYWdlcy9sb2NhdGlvbi5wbmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50Q29udGFjdChtYWluQ29udGFpbmVyKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWJvZHknKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcblxuICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXNlY3Rpb24nKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbik7XG5cbiAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1zZWN0aW9uLWluZm8nKTtcbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuXG4gIGNvbnRhY3RJbmZvLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiYWRyZXNzXCI+MTMxNCBOIEZyb250IHN0LCBQaGlsYWRlbHBoaWE8L2Rpdj48ZGl2IGNsYXNzPVwicGhvbmVcIj48YSBocmVmPVwidGVsOiswMTIzNDU2Nzg5MFwiPiswIDEyMy00NTYtNzg5MDwvYT48L2Rpdj48ZGl2IGNsYXNzPVwiZW1haWxcIj48YSBocmVmPVwibWFpbHRvOmluZm9AcGFuem9yYS5jb21cIj5pbmZvQHBhbnpvcmEuY29tPC9hPjwvZGl2Pic7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbWVyLWZvcm0nKTtcbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgZm9ybVJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdzEuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgZm9ybVJvdzEuaW5uZXJIVE1MID0gJzxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZnVsbC1uYW1lXCIgbmFtZT1cImZ1bGwtbmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZSpcIiByZXF1aXJlZD4nO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Sb3cxKTtcblxuICBjb25zdCBmb3JtUm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtUm93Mi5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICBmb3JtUm93Mi5pbm5lckhUTUwgPSAnPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImpvZUBleGFtcGxlLmNvbSpcIiByZXF1aXJlZD4nO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Sb3cyKTtcblxuICBjb25zdCBmb3JtUm93MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtUm93My5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICBmb3JtUm93My5pbm5lckhUTUwgPSAnPHRleHRhcmVhIG5hbWU9XCJ0ZXh0XCIgaWQ9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIG1lc3NhZ2UgaGVyZS5cIj48L3RleHRhcmVhPic7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzMpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uaW5uZXJIVE1MID0gJ1NlbmQgVXMnO1xuICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgY29uc3QgbG9jYXRpb25JbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2NhdGlvbkltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25JbWFnZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgbG9jYXRpb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsb2NhdGlvbkltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ01hcCB2aWV3IGZvciBsb2NhdGlvbiBvZiByZXN0YXVyYW50Jyk7XG4gIGxvY2F0aW9uSW1hZ2Uuc3JjID0gbG9jYXRpb247XG4gIGxvY2F0aW9uSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25JbWFnZSk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYWxsQ29udGFjdFBhZ2UoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQtY29udGFjdCcpO1xuICBib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuICBjcmVhdGVOYXZCYXIoJ2NvbnRlbnQtY29udGFjdCcpO1xuICBjcmVhdGVDb250ZW50Q29udGFjdChtYWluQ29udGFpbmVyKTtcbiAgY3JlYXRlRm9vdGVyTWVudUNvbnRlbnQoJ2NvbnRlbnQtY29udGFjdCcpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tc2NyaXB0LXVybCAqL1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvLnBuZyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgY2FsbE1lbnVQYWdlIGZyb20gJy4vbWVudSc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgY2FsbENvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcihpZCkge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBjb25zdCBuYXZCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2QmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1jb250YWluZXInKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZCYXJDb250YWluZXIpO1xuXG4gIGNvbnN0IG5hdkJhckVsZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdkJhckVsZW1lbnRzLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1lbGVtZW50cycpO1xuICBuYXZCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2QmFyRWxlbWVudHMpO1xuXG4gIGNvbnN0IGFIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhSG9tZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnamF2YXNjcmlwdDpjYWxsSG9tZVBhZ2UoKScpO1xuICBuYXZCYXJFbGVtZW50cy5hcHBlbmRDaGlsZChhSG9tZSk7XG5cbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgYUhvbWUuYXBwZW5kQ2hpbGQoaG9tZSk7XG5cbiAgY29uc3QgaG9tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBob21lVGV4dC5pbm5lckhUTUwgPSAnSE9NRSc7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZVRleHQpO1xuXG4gIGNvbnN0IGFNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhTWVudS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnamF2YXNjcmlwdDpjYWxsTWVudVBhZ2UoKScpO1xuICBuYXZCYXJFbGVtZW50cy5hcHBlbmRDaGlsZChhTWVudSk7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgYU1lbnUuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgY29uc3QgbWVudVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBtZW51VGV4dC5pbm5lckhUTUwgPSAnTUVOVSc7XG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRleHQpO1xuXG4gIGNvbnN0IGFDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhQ29udGFjdC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnamF2YXNjcmlwdDpjYWxsQ29udGFjdFBhZ2UoKScpO1xuICBuYXZCYXJFbGVtZW50cy5hcHBlbmRDaGlsZChhQ29udGFjdCk7XG5cbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgYUNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgY29uc3QgY29udGFjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb250YWN0VGV4dC5pbm5lckhUTUwgPSAnQ09OVEFDVCc7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRleHQpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbEhvbWVQYWdlKTtcbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxNZW51UGFnZSk7XG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsQ29udGFjdFBhZ2UpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50SG9tZSgpIHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50LWhvbWUnKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtYm9keScpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuXG4gIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xuXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJy4vaW5kZXguaHRtbCcpO1xuICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGEpO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdDb21wYW55IGxvZ28nKTtcbiAgaW1nLnNyYyA9IGxvZ287XG4gIGEuYXBwZW5kQ2hpbGQoaW1nKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVySG9tZSgpIHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50LWhvbWUnKTtcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGFpbmVyJyk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGFpbmVyKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICBmb290ZXIuaW5uZXJIVE1MID0gJzxzcGFuPjEzMTQgTiBGcm9udCBTdCwgUGhpbGFkZWxwaGlhPC9zcGFuPjxzcGFuPnw8L3NwYW4+PGEgaHJlZj1cInRlbDorMDEyMzQ1Njc4OTBcIj48c3Bhbj4rMCAxMjMtNDU2LTc4OTA8L3NwYW4+PC9hPic7XG59XG5cbmZ1bmN0aW9uIGNhbGxIb21lUGFnZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudC1ob21lJyk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG4gIGNyZWF0ZU5hdkJhcignY29udGVudC1ob21lJyk7XG4gIGNyZWF0ZUNvbnRlbnRIb21lKCk7XG4gIGNyZWF0ZUZvb3RlckhvbWUoKTtcbn1cblxuY2FsbEhvbWVQYWdlKCk7XG5cbmV4cG9ydCB7XG4gIGNhbGxIb21lUGFnZSxcbiAgY3JlYXRlTmF2QmFyLFxufTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHsgY3JlYXRlTmF2QmFyIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgcGl6emFJbWFnZSBmcm9tICcuL2ltYWdlcy9waXp6YS5qcGcnO1xuaW1wb3J0IHBhc3RhSW1hZ2UgZnJvbSAnLi9pbWFnZXMvcGFzdGEuanBnJztcbmltcG9ydCBkZXNzZXJ0SW1hZ2UgZnJvbSAnLi9pbWFnZXMvZGVzc2VydC5qcGcnO1xuaW1wb3J0IGJldmVyYWdlSW1hZ2UgZnJvbSAnLi9pbWFnZXMvYmV2ZXJhZ2UuanBnJztcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1hZ2VzL2xvZ28ucG5nJztcblxuY29uc3QgbWVudUltYWdlcyA9IHtcbiAgcGl6emFzOiBwaXp6YUltYWdlLFxuICBwYXN0YXM6IHBhc3RhSW1hZ2UsXG4gIGRlc3NlcnRzOiBkZXNzZXJ0SW1hZ2UsXG4gIGJldmVyYWdlczogYmV2ZXJhZ2VJbWFnZSxcbn07XG5cbmNsYXNzIFByb2R1Y3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICB9XG59XG5cbmNvbnN0IG1lbnUgPSAoKCkgPT4ge1xuICBjb25zdCBwaXp6YXMgPSBbXTtcbiAgcGl6emFzLnB1c2gobmV3IFByb2R1Y3QoJ01hcmdoZXJpdGEnLCAnMTIkJykpO1xuICBwaXp6YXMucHVzaChuZXcgUHJvZHVjdCgnUXVhdHRybyBGb3JtYWdnaScsICcxMyQnKSk7XG4gIHBpenphcy5wdXNoKG5ldyBQcm9kdWN0KCdTaWNpbGlhbmEnLCAnMTMkJykpO1xuICBwaXp6YXMucHVzaChuZXcgUHJvZHVjdCgnVG9ubm8gRSBDaXBvbGxhJywgJzE1JCcpKTtcbiAgcGl6emFzLnB1c2gobmV3IFByb2R1Y3QoJ1ZlZ2V0ZXJpYW5hJywgJzExJCcpKTtcblxuICBjb25zdCBwYXN0YXMgPSBbXTtcbiAgcGFzdGFzLnB1c2gobmV3IFByb2R1Y3QoJ1Bhc3RhIEUgRmFnaW9saScsICcxMCQnKSk7XG4gIHBhc3Rhcy5wdXNoKG5ldyBQcm9kdWN0KCdQYXN0YSBBbGxhIFpvenpvbmEnLCAnMTIkJykpO1xuICBwYXN0YXMucHVzaChuZXcgUHJvZHVjdCgnU3BhZ2V0dGhpIEJvbG9nbmFpc2UnLCAnMTIkJykpO1xuICBwYXN0YXMucHVzaChuZXcgUHJvZHVjdCgnUmlnYXRvbmkgUHV0dGFuZXNjYScsICcxMSQnKSk7XG4gIHBhc3Rhcy5wdXNoKG5ldyBQcm9kdWN0KCdQb3JrIFJhZ3UgUmlnYXRvbmknLCAnMTUkJykpO1xuXG4gIGNvbnN0IGRlc3NlcnRzID0gW107XG4gIGRlc3NlcnRzLnB1c2gobmV3IFByb2R1Y3QoJ1RpcmFtaXPDuScsICc5JCcpKTtcbiAgZGVzc2VydHMucHVzaChuZXcgUHJvZHVjdCgnU2JyaXNvbG9uYScsICc4JCcpKTtcbiAgZGVzc2VydHMucHVzaChuZXcgUHJvZHVjdCgnU2ZvZ2xpYXRlbGxlJywgJzEyJCcpKTtcbiAgZGVzc2VydHMucHVzaChuZXcgUHJvZHVjdCgnQ2Fubm9saScsICc5JCcpKTtcbiAgZGVzc2VydHMucHVzaChuZXcgUHJvZHVjdCgnQmFiw6AnLCAnNiQnKSk7XG5cbiAgY29uc3QgYmV2ZXJhZ2VzID0gW107XG4gIGJldmVyYWdlcy5wdXNoKG5ldyBQcm9kdWN0KCdGcmVzaCBPcmFuZ2UgSnVpY2UnLCAnNSQnKSk7XG4gIGJldmVyYWdlcy5wdXNoKG5ldyBQcm9kdWN0KCdNaW5lcmFsIFdhdGVyJywgJzIkJykpO1xuICBiZXZlcmFnZXMucHVzaChuZXcgUHJvZHVjdCgnU29kYScsICc0JCcpKTtcbiAgYmV2ZXJhZ2VzLnB1c2gobmV3IFByb2R1Y3QoJ1dpbmUgKFJlZC9XaGl0ZSknLCAnNCQnKSk7XG4gIGJldmVyYWdlcy5wdXNoKG5ldyBQcm9kdWN0KCdFc3ByZXNzbycsICczJCcpKTtcblxuICByZXR1cm4ge1xuICAgIHBpenphcywgcGFzdGFzLCBkZXNzZXJ0cywgYmV2ZXJhZ2VzLFxuICB9O1xufSkoKTtcblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudE1lbnUobWFpbkNvbnRhaW5lcikge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC1ib2R5Jyk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgZ3VhcmQtZm9yLWluXG4gIGZvciAoY29uc3QgcGFydCBpbiBtZW51KSB7XG4gICAgY29uc3QgcGFydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uJyk7XG4gICAgcGFydENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke3BhcnR9YCk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJ0Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9kdWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3RzJyk7XG4gICAgcGFydENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9IHBhcnQudG9VcHBlckNhc2UoKTtcbiAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVbcGFydF0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2R1Y3QuY2xhc3NMaXN0LmFkZCgnbWVudS1yb3cnKTtcbiAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdCk7XG5cbiAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9kdWN0TmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgICBwcm9kdWN0TmFtZS5pbm5lckhUTUwgPSBgJHttZW51W3BhcnRdW2ldLm5hbWV9YDtcbiAgICAgIHByb2R1Y3QuYXBwZW5kQ2hpbGQocHJvZHVjdE5hbWUpO1xuXG4gICAgICBjb25zdCBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2R1Y3RQcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuICAgICAgcHJvZHVjdFByaWNlLmlubmVySFRNTCA9IGAke21lbnVbcGFydF1baV0ucHJpY2V9YDtcbiAgICAgIHByb2R1Y3QuYXBwZW5kQ2hpbGQocHJvZHVjdFByaWNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltYWdlJyk7XG5cbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKGAke3BhcnQuc2xpY2UoMCwgLTEpfWApO1xuICAgIHBhcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgYCR7cGFydH1gKTtcbiAgICBpbWcuc3JjID0gbWVudUltYWdlc1twYXJ0XTtcbiAgICBpbWFnZS5hcHBlbmRDaGlsZChpbWcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb290ZXJNZW51Q29udGVudChpZCkge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1jb250YWluZXInKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XG5cbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnLi9pbmRleC5odG1sJyk7XG4gIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28nKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0NvbXBhbnkgbG9nbycpO1xuICBpbWcuc3JjID0gbG9nbztcbiAgYS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICBjb250YWN0LmlubmVySFRNTCA9ICc8aDQ+Q2FsbCBGb3IgUmVzZXJ2YXRpb248L2g0PiA8YSBocmVmPVwidGVsOiswMTIzNDU2Nzg5MFwiPjxzcGFuPiswIDEyMy00NTYtNzg5MDwvc3Bhbj48L2E+Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsbE1lbnVQYWdlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBib2R5LmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50LW1lbnUnKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbiAgY3JlYXRlTmF2QmFyKCdjb250ZW50LW1lbnUnKTtcbiAgY3JlYXRlQ29udGVudE1lbnUobWFpbkNvbnRhaW5lcik7XG4gIGNyZWF0ZUZvb3Rlck1lbnVDb250ZW50KCdjb250ZW50LW1lbnUnKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWVudVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tZW51LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
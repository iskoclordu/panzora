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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  --color-1:#171616;\n  --color-2:#9B2336;\n  --color-3:#F4F0E8;\n}\n\n@font-face {\n  font-family: logo-font;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: adam-font-light;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n@font-face {\n  font-family: adam-font-bold;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n@font-face {\n  font-family: adam-font-regular;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n/* Common Styles for All pages*/\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n.navbar-container{\n  background-color: #9b2335a6;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\na{\n  text-decoration: none;\n  color: inherit;\n}\n\n.navbar-elements{\n  width: 60vw;\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n  align-items: center;\n  \n}\n.navbar-elements div{\n  height: 3.2rem;\n  box-sizing: border-box;\n}\n\n.navbar-elements div:hover{\n  box-sizing: border-box;\n  border-bottom: 2px solid var(--color-3);  \n}\n\n.navbar-elements h3{\n  margin: 0.6rem;\n  font-family: adam-font-regular;\n  font-size: 2rem;\n  color: var(--color-3);\n}\n\n/* Home Page Styles*/\n\n#content-home {\n  height: 100%;\n  width: 100%;\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: cover;\n\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n}\n\n#content-home .content-body{\n  position:relative;\n}\n\n#content-home .logo-container{\n  height: max-content;\n  width: 40vw;\n  max-width: 45rem;\n  min-width: min-content;\n  background-color: #f4f0e8bd;\n  padding: 0;\n  position: relative;\n  right: 0;\n  top: 35%;\n  margin-left: auto;\n\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n\n#content-home .logo-container #logo{\n  height: 20vh;\n  min-height: 4rem;\n  margin-top: 1rem;\n  margin-right: 4rem;\n  vertical-align: bottom;\n}\n\n#content-home .footer-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#content-home .footer {\n  background-color: #171616bd;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding:0.5rem 1rem;\n}\n\n#content-home .footer span{\n  font-family: adam-font-regular;\n  letter-spacing: 0.5rem;\n  font-size: 1rem;\n  color: var(--color-3);\n}\n\n/* Menu Page Styles*/\n\n#content-menu, #content-contact {\n  height: 100%;\n  width: 100%;\n  background-color: var(--color-3);\n}\n\n#content-menu, #content-contact {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n}\n\n#content-menu .content-body{\n  width: 60vw;\n  min-width: 690px;\n  overflow-y: auto;\n  margin: 0 auto;\n  background-color: #171616bd;\n\n  padding: 0.5rem;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 3rem;\n}\n\n.menu-section{\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n  margin: 2px auto;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid var(--color-2);\n}\n\n.menu-section:nth-child(even){\n  flex-direction: row;\n}\n.menu-section:nth-child(odd){\n  flex-direction: row-reverse;\n}\n\n\n.menu-section .products {\n  width: 15rem;\n  font-family: adam-font-regular;\n  color: var(--color-3);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\n.products h2{\n  font-family: adam-font-bold;\n  font-size: 1.5rem;\n  letter-spacing: 0.2rem;\n  color: var(--color-2);\n  border-bottom: 2px solid var(--color-2);\n  padding-top: 0.2rem;\n  margin: 0;\n  background-color: #f4f0e86b;\n}\n.products .menu-row{\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n}\n.products .menu-row .name{\n  font-family: inherit;\n  font-size: 1.2rem;\n  flex: 1;\n}\n\n.products .price{\n  font-family: inherit;\n  font-size: 1.3rem;\n}\n\n.menu-section .image img{\n  height: 15rem;\n  width: 15rem;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--color-2); \n  border-radius: 2px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--color-2);\n  position: relative;\n  box-shadow: inset 1px 0 1px 0.5px #f4f0e844; \n}\n\n/* Footer Style is common for both menu and contact page */\n#content-menu  .logo-container, #content-contact .logo-container{\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n\n#content-menu .logo-container #logo,#content-contact .logo-container #logo{\n  height: 10vh;\n  min-height: 2.5rem;\n  margin-top: 0.1rem;\n  vertical-align: bottom;\n}\n\n#content-menu .footer ,#content-contact .footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3rem;\n}\n\n#content-menu .footer .contact ,#content-contact .footer .contact{\n  display: flex;\n  gap: 0.2rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-right: 5rem;\n}\n\n#content-menu .footer .contact h4 ,#content-contact .footer .contact h4{\n  margin: 0;\n  letter-spacing: 0.2rem;\n  font-family: adam-font-regular;\n  letter-spacing: 0.5rem;\n  font-size: 1.3rem;\n  color: var(--color-2);\n  align-self: center;\n}\n#content-menu .footer .contact span ,#content-contact .footer .contact span{\n  font-family: adam-font-regular;\n  letter-spacing: 0.5rem;\n  font-size: 1.3rem;\n  color: var(--color-2);\n  align-self: center;\n}\n\n/* Contact Page */\n\n#content-contact .content-body{\n  width: 60vw;\n  min-width: 690px;\n  overflow-y: auto;\n  margin: 0 auto;\n  background-color: #171616bd;\n\n  padding: 0.5rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2vw;\n}\n\n#content-contact .content-body .contact-section{\n  width: 20vw;\n\n  font-family: adam-font-regular;\n  font-size: 1.3rem;\n  color: var(--color-3);\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretch;\n  gap: 3rem;\n\n  border-right: 1px solid #F4F0E880;\n\n}\n\n#content-contact .content-body .contact-section-info{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  gap: 0.5rem;\n}\n\n#content-contact .content-body .location img{\n  width: 25vw;\n  height: auto;\n  border-radius: 2px;\n  margin-left: 3rem;\n}\n\n.customer-form{\n  padding-right: 0.5rem;\n  \n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.customer-form input[type='text'],\n.customer-form input[type='email']{\n  box-sizing: border-box;\n  font-family: inherit;\n  background-color: var(--color-3);\n  border: 1px solid var(--color-1);\n  border-radius: 2px;\n  width: 100%;\n  padding: 7px;\n  font: 0.8rem;\n}\n\n/* .customer-form .form-row input[type='text']:invalid,\n.customer-form .form-row input[type='email']:invalid {\n  border: 1px solid var(--color-2);\n  box-shadow: 0 0 2px 2px var(--color-2);\n} */\n\n.customer-form textarea{\n  font-family: inherit;\n  font-size: 1rem;\n\n  box-sizing: border-box;\n  border: 1px solid var(--color-1);\n  border-radius: 2px;\n\n  background-color: var(--color-3);\n\n  height: 7rem;\n  width: 100%;\n  margin-bottom: 0.5rem;\n  padding: 7px;\n  resize: none;\n  overflow-y: auto;\n}\n\n.customer-form  .text{\n  color: var(--color-3);\n  font-size: 0.8rem;\n  margin-bottom: 0.5rem;\n}\n\n.customer-form ::-webkit-scrollbar {\n  width: 5px;\n}\n\n.customer-form ::-webkit-scrollbar-thumb {\n  background: var(--color-2); \n  border-radius: 1px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--color-2);\n  position: relative;\n  box-shadow: inset 1px 0 1px 0.5px #f4f0e844; \n}\n\n.customer-form button{\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: bold;\n\n  color: var(--color-3);\n  background-color:var(--color-2);\n\n  border: none;\n  border-radius: 2px;\n\n  padding: 10px 40px;\n  cursor: pointer;\n}\n\n.customer-form button:hover{\n  scale: 1.02;\n}\n\n.customer-form button:active{\n  transition: 0.2s;\n  scale: 0.98;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,4CAAqC;AACvC;;AAEA;EACE,4BAA4B;EAC5B,4CAAgC;AAClC;AACA;EACE,2BAA2B;EAC3B,4CAA+B;AACjC;;AAEA;EACE,8BAA8B;EAC9B,4CAAiC;AACnC;;AAEA,+BAA+B;AAC/B;EACE,aAAa;EACb,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,SAAS;EACT,8BAA8B;EAC9B,mBAAmB;;AAErB;AACA;EACE,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,uCAAuC;AACzC;;AAEA;EACE,cAAc;EACd,8BAA8B;EAC9B,eAAe;EACf,qBAAqB;AACvB;;AAEA,oBAAoB;;AAEpB;EACE,YAAY;EACZ,WAAW;EACX,6DAA8D;EAC9D,sBAAsB;;EAEtB,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,sBAAsB;EACtB,2BAA2B;EAC3B,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,QAAQ;EACR,iBAAiB;;EAEjB,aAAa;EACb,2BAA2B;EAC3B,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,sBAAsB;EACtB,eAAe;EACf,qBAAqB;AACvB;;AAEA,oBAAoB;;AAEpB;EACE,YAAY;EACZ,WAAW;EACX,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,2BAA2B;;EAE3B,eAAe;;EAEf,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,gBAAgB;EAChB,sBAAsB;EACtB,uCAAuC;AACzC;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,2BAA2B;AAC7B;;;AAGA;EACE,YAAY;EACZ,8BAA8B;EAC9B,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,2BAA2B;EAC3B,oBAAoB;AACtB;;AAEA;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,sBAAsB;EACtB,qBAAqB;EACrB,uCAAuC;EACvC,mBAAmB;EACnB,SAAS;EACT,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,OAAO;AACT;AACA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,OAAO;AACT;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,2CAA2C;AAC7C;;AAEA,0DAA0D;AAC1D;EACE,aAAa;EACb,2BAA2B;EAC3B,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,sBAAsB;EACtB,8BAA8B;EAC9B,sBAAsB;EACtB,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,8BAA8B;EAC9B,sBAAsB;EACtB,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA,iBAAiB;;AAEjB;EACE,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,2BAA2B;;EAE3B,eAAe;;EAEf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,WAAW;;EAEX,8BAA8B;EAC9B,iBAAiB;EACjB,qBAAqB;;EAErB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,oBAAoB;EACpB,SAAS;;EAET,iCAAiC;;AAEnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;;EAErB,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;AACA;;EAEE,sBAAsB;EACtB,oBAAoB;EACpB,gCAAgC;EAChC,gCAAgC;EAChC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,YAAY;AACd;;AAEA;;;;GAIG;;AAEH;EACE,oBAAoB;EACpB,eAAe;;EAEf,sBAAsB;EACtB,gCAAgC;EAChC,kBAAkB;;EAElB,gCAAgC;;EAEhC,YAAY;EACZ,WAAW;EACX,qBAAqB;EACrB,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,2CAA2C;AAC7C;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,iBAAiB;;EAEjB,qBAAqB;EACrB,+BAA+B;;EAE/B,YAAY;EACZ,kBAAkB;;EAElB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb","sourcesContent":[":root{\n  --color-1:#171616;\n  --color-2:#9B2336;\n  --color-3:#F4F0E8;\n}\n\n@font-face {\n  font-family: logo-font;\n  src: url(./fonts/Belleza-Regular.ttf);\n}\n\n@font-face {\n  font-family: adam-font-light;\n  src: url(./fonts/Adam-Light.ttf);\n}\n@font-face {\n  font-family: adam-font-bold;\n  src: url(./fonts/Adam-Bold.ttf);\n}\n\n@font-face {\n  font-family: adam-font-regular;\n  src: url(./fonts/Adam-Medium.ttf);\n}\n\n/* Common Styles for All pages*/\nbody {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n.navbar-container{\n  background-color: #9b2335a6;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\na{\n  text-decoration: none;\n  color: inherit;\n}\n\n.navbar-elements{\n  width: 60vw;\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n  align-items: center;\n  \n}\n.navbar-elements div{\n  height: 3.2rem;\n  box-sizing: border-box;\n}\n\n.navbar-elements div:hover{\n  box-sizing: border-box;\n  border-bottom: 2px solid var(--color-3);  \n}\n\n.navbar-elements h3{\n  margin: 0.6rem;\n  font-family: adam-font-regular;\n  font-size: 2rem;\n  color: var(--color-3);\n}\n\n/* Home Page Styles*/\n\n#content-home {\n  height: 100%;\n  width: 100%;\n  background: no-repeat url(\"../src/images/home-background.jpg\");\n  background-size: cover;\n\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n}\n\n#content-home .content-body{\n  position:relative;\n}\n\n#content-home .logo-container{\n  height: max-content;\n  width: 40vw;\n  max-width: 45rem;\n  min-width: min-content;\n  background-color: #f4f0e8bd;\n  padding: 0;\n  position: relative;\n  right: 0;\n  top: 35%;\n  margin-left: auto;\n\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n\n#content-home .logo-container #logo{\n  height: 20vh;\n  min-height: 4rem;\n  margin-top: 1rem;\n  margin-right: 4rem;\n  vertical-align: bottom;\n}\n\n#content-home .footer-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#content-home .footer {\n  background-color: #171616bd;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  padding:0.5rem 1rem;\n}\n\n#content-home .footer span{\n  font-family: adam-font-regular;\n  letter-spacing: 0.5rem;\n  font-size: 1rem;\n  color: var(--color-3);\n}\n\n/* Menu Page Styles*/\n\n#content-menu, #content-contact {\n  height: 100%;\n  width: 100%;\n  background-color: var(--color-3);\n}\n\n#content-menu, #content-contact {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n}\n\n#content-menu .content-body{\n  width: 60vw;\n  min-width: 690px;\n  overflow-y: auto;\n  margin: 0 auto;\n  background-color: #171616bd;\n\n  padding: 0.5rem;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 3rem;\n}\n\n.menu-section{\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n  margin: 2px auto;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid var(--color-2);\n}\n\n.menu-section:nth-child(even){\n  flex-direction: row;\n}\n.menu-section:nth-child(odd){\n  flex-direction: row-reverse;\n}\n\n\n.menu-section .products {\n  width: 15rem;\n  font-family: adam-font-regular;\n  color: var(--color-3);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\n.products h2{\n  font-family: adam-font-bold;\n  font-size: 1.5rem;\n  letter-spacing: 0.2rem;\n  color: var(--color-2);\n  border-bottom: 2px solid var(--color-2);\n  padding-top: 0.2rem;\n  margin: 0;\n  background-color: #f4f0e86b;\n}\n.products .menu-row{\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n}\n.products .menu-row .name{\n  font-family: inherit;\n  font-size: 1.2rem;\n  flex: 1;\n}\n\n.products .price{\n  font-family: inherit;\n  font-size: 1.3rem;\n}\n\n.menu-section .image img{\n  height: 15rem;\n  width: 15rem;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--color-2); \n  border-radius: 2px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--color-2);\n  position: relative;\n  box-shadow: inset 1px 0 1px 0.5px #f4f0e844; \n}\n\n/* Footer Style is common for both menu and contact page */\n#content-menu  .logo-container, #content-contact .logo-container{\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n\n#content-menu .logo-container #logo,#content-contact .logo-container #logo{\n  height: 10vh;\n  min-height: 2.5rem;\n  margin-top: 0.1rem;\n  vertical-align: bottom;\n}\n\n#content-menu .footer ,#content-contact .footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3rem;\n}\n\n#content-menu .footer .contact ,#content-contact .footer .contact{\n  display: flex;\n  gap: 0.2rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-right: 5rem;\n}\n\n#content-menu .footer .contact h4 ,#content-contact .footer .contact h4{\n  margin: 0;\n  letter-spacing: 0.2rem;\n  font-family: adam-font-regular;\n  letter-spacing: 0.5rem;\n  font-size: 1.3rem;\n  color: var(--color-2);\n  align-self: center;\n}\n#content-menu .footer .contact span ,#content-contact .footer .contact span{\n  font-family: adam-font-regular;\n  letter-spacing: 0.5rem;\n  font-size: 1.3rem;\n  color: var(--color-2);\n  align-self: center;\n}\n\n/* Contact Page */\n\n#content-contact .content-body{\n  width: 60vw;\n  min-width: 690px;\n  overflow-y: auto;\n  margin: 0 auto;\n  background-color: #171616bd;\n\n  padding: 0.5rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2vw;\n}\n\n#content-contact .content-body .contact-section{\n  width: 20vw;\n\n  font-family: adam-font-regular;\n  font-size: 1.3rem;\n  color: var(--color-3);\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretch;\n  gap: 3rem;\n\n  border-right: 1px solid #F4F0E880;\n\n}\n\n#content-contact .content-body .contact-section-info{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  gap: 0.5rem;\n}\n\n#content-contact .content-body .location img{\n  width: 25vw;\n  height: auto;\n  border-radius: 2px;\n  margin-left: 3rem;\n}\n\n.customer-form{\n  padding-right: 0.5rem;\n  \n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.customer-form input[type='text'],\n.customer-form input[type='email']{\n  box-sizing: border-box;\n  font-family: inherit;\n  background-color: var(--color-3);\n  border: 1px solid var(--color-1);\n  border-radius: 2px;\n  width: 100%;\n  padding: 7px;\n  font: 0.8rem;\n}\n\n/* .customer-form .form-row input[type='text']:invalid,\n.customer-form .form-row input[type='email']:invalid {\n  border: 1px solid var(--color-2);\n  box-shadow: 0 0 2px 2px var(--color-2);\n} */\n\n.customer-form textarea{\n  font-family: inherit;\n  font-size: 1rem;\n\n  box-sizing: border-box;\n  border: 1px solid var(--color-1);\n  border-radius: 2px;\n\n  background-color: var(--color-3);\n\n  height: 7rem;\n  width: 100%;\n  margin-bottom: 0.5rem;\n  padding: 7px;\n  resize: none;\n  overflow-y: auto;\n}\n\n.customer-form  .text{\n  color: var(--color-3);\n  font-size: 0.8rem;\n  margin-bottom: 0.5rem;\n}\n\n.customer-form ::-webkit-scrollbar {\n  width: 5px;\n}\n\n.customer-form ::-webkit-scrollbar-thumb {\n  background: var(--color-2); \n  border-radius: 1px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--color-2);\n  position: relative;\n  box-shadow: inset 1px 0 1px 0.5px #f4f0e844; \n}\n\n.customer-form button{\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: bold;\n\n  color: var(--color-3);\n  background-color:var(--color-2);\n\n  border: none;\n  border-radius: 2px;\n\n  padding: 10px 40px;\n  cursor: pointer;\n}\n\n.customer-form button:hover{\n  scale: 1.02;\n}\n\n.customer-form button:active{\n  transition: 0.2s;\n  scale: 0.98;\n}"],"sourceRoot":""}]);
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
/* eslint-disable import/no-cycle */
/* eslint-disable no-script-url */





function createNavBar(id) {
  const mainContainer = document.getElementById(id);
  const navBarContainer = document.createElement('div');
  navBarContainer.classList.add('navbar-container');
  mainContainer.appendChild(navBarContainer);

  const navBarElements = document.createElement('div');
  navBarElements.classList.add('navbar-elements');
  navBarContainer.appendChild(navBarElements);

  const home = document.createElement('div');
  home.classList.add('home');
  navBarElements.appendChild(home);

  const homeText = document.createElement('h3');
  homeText.innerHTML = 'HOME';
  home.appendChild(homeText);

  const menu = document.createElement('div');
  menu.classList.add('menu');
  navBarElements.appendChild(menu);

  const menuText = document.createElement('h3');
  menuText.innerHTML = 'MENU';
  menu.appendChild(menuText);

  const contact = document.createElement('div');
  contact.classList.add('contact');
  navBarElements.appendChild(contact);

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
/******/ 			"index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssWUFBWSxZQUFZLFlBQVksYUFBYSxjQUFjLGNBQWMsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxhQUFhLGNBQWMsV0FBVyxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLCtCQUErQixzQkFBc0Isc0JBQXNCLHNCQUFzQixHQUFHLGdCQUFnQiwyQkFBMkIsMENBQTBDLEdBQUcsZ0JBQWdCLGlDQUFpQyxxQ0FBcUMsR0FBRyxjQUFjLGdDQUFnQyxvQ0FBb0MsR0FBRyxnQkFBZ0IsbUNBQW1DLHNDQUFzQyxHQUFHLDRDQUE0QyxrQkFBa0IsaUJBQWlCLGNBQWMsZUFBZSxHQUFHLHNCQUFzQixnQ0FBZ0Msa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxNQUFNLDBCQUEwQixtQkFBbUIsR0FBRyxxQkFBcUIsZ0JBQWdCLGtCQUFrQixjQUFjLG1DQUFtQyx3QkFBd0IsT0FBTyx1QkFBdUIsbUJBQW1CLDJCQUEyQixHQUFHLCtCQUErQiwyQkFBMkIsOENBQThDLEdBQUcsd0JBQXdCLG1CQUFtQixtQ0FBbUMsb0JBQW9CLDBCQUEwQixHQUFHLDRDQUE0QyxpQkFBaUIsZ0JBQWdCLHFFQUFxRSwyQkFBMkIsb0JBQW9CLG9DQUFvQyxHQUFHLGdDQUFnQyxzQkFBc0IsR0FBRyxrQ0FBa0Msd0JBQXdCLGdCQUFnQixxQkFBcUIsMkJBQTJCLGdDQUFnQyxlQUFlLHVCQUF1QixhQUFhLGFBQWEsc0JBQXNCLG9CQUFvQixnQ0FBZ0MsMEJBQTBCLEdBQUcsd0NBQXdDLGlCQUFpQixxQkFBcUIscUJBQXFCLHVCQUF1QiwyQkFBMkIsR0FBRyxxQ0FBcUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyx5QkFBeUIsZ0NBQWdDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGNBQWMsd0JBQXdCLEdBQUcsK0JBQStCLG1DQUFtQywyQkFBMkIsb0JBQW9CLDBCQUEwQixHQUFHLDhEQUE4RCxpQkFBaUIsZ0JBQWdCLHFDQUFxQyxHQUFHLHFDQUFxQyxpQkFBaUIsZ0JBQWdCLGtCQUFrQixvQ0FBb0MsR0FBRyxnQ0FBZ0MsZ0JBQWdCLHFCQUFxQixxQkFBcUIsbUJBQW1CLGdDQUFnQyxzQkFBc0Isb0JBQW9CLDJCQUEyQixnQ0FBZ0MsY0FBYyxHQUFHLGtCQUFrQixrQkFBa0IsNEJBQTRCLGNBQWMscUJBQXFCLDJCQUEyQiw0Q0FBNEMsR0FBRyxrQ0FBa0Msd0JBQXdCLEdBQUcsK0JBQStCLGdDQUFnQyxHQUFHLCtCQUErQixpQkFBaUIsbUNBQW1DLDBCQUEwQixrQkFBa0IsMkJBQTJCLGdCQUFnQixnQ0FBZ0MseUJBQXlCLEdBQUcsaUJBQWlCLGdDQUFnQyxzQkFBc0IsMkJBQTJCLDBCQUEwQiw0Q0FBNEMsd0JBQXdCLGNBQWMsZ0NBQWdDLEdBQUcsc0JBQXNCLGtCQUFrQixtQ0FBbUMsWUFBWSxHQUFHLDRCQUE0Qix5QkFBeUIsc0JBQXNCLFlBQVksR0FBRyxxQkFBcUIseUJBQXlCLHNCQUFzQixHQUFHLDZCQUE2QixrQkFBa0IsaUJBQWlCLEdBQUcseUJBQXlCLGVBQWUsR0FBRywrQkFBK0IsZ0NBQWdDLHVCQUF1QixHQUFHLHFDQUFxQywrQkFBK0IsdUJBQXVCLGlEQUFpRCxHQUFHLGtJQUFrSSxrQkFBa0IsZ0NBQWdDLDBCQUEwQixHQUFHLCtFQUErRSxpQkFBaUIsdUJBQXVCLHVCQUF1QiwyQkFBMkIsR0FBRyxxREFBcUQsa0JBQWtCLG1DQUFtQyx3QkFBd0IsY0FBYyxHQUFHLHNFQUFzRSxrQkFBa0IsZ0JBQWdCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLHVCQUF1QixHQUFHLDRFQUE0RSxjQUFjLDJCQUEyQixtQ0FBbUMsMkJBQTJCLHNCQUFzQiwwQkFBMEIsdUJBQXVCLEdBQUcsOEVBQThFLG1DQUFtQywyQkFBMkIsc0JBQXNCLDBCQUEwQix1QkFBdUIsR0FBRyx5REFBeUQsZ0JBQWdCLHFCQUFxQixxQkFBcUIsbUJBQW1CLGdDQUFnQyxzQkFBc0Isb0JBQW9CLDRCQUE0Qix3QkFBd0IsYUFBYSxHQUFHLG9EQUFvRCxnQkFBZ0IscUNBQXFDLHNCQUFzQiwwQkFBMEIsc0JBQXNCLDJCQUEyQixtQ0FBbUMseUJBQXlCLGNBQWMsd0NBQXdDLEtBQUsseURBQXlELGtCQUFrQiwyQkFBMkIsNEJBQTRCLHlCQUF5QixnQkFBZ0IsR0FBRyxpREFBaUQsZ0JBQWdCLGlCQUFpQix1QkFBdUIsc0JBQXNCLEdBQUcsbUJBQW1CLDBCQUEwQixzQkFBc0IsMkJBQTJCLGdCQUFnQixHQUFHLHlFQUF5RSwyQkFBMkIseUJBQXlCLHFDQUFxQyxxQ0FBcUMsdUJBQXVCLGdCQUFnQixpQkFBaUIsaUJBQWlCLEdBQUcsbUhBQW1ILHFDQUFxQywyQ0FBMkMsSUFBSSw4QkFBOEIseUJBQXlCLG9CQUFvQiw2QkFBNkIscUNBQXFDLHVCQUF1Qix1Q0FBdUMsbUJBQW1CLGdCQUFnQiwwQkFBMEIsaUJBQWlCLGlCQUFpQixxQkFBcUIsR0FBRywwQkFBMEIsMEJBQTBCLHNCQUFzQiwwQkFBMEIsR0FBRyx3Q0FBd0MsZUFBZSxHQUFHLDhDQUE4QyxnQ0FBZ0MsdUJBQXVCLEdBQUcscUNBQXFDLCtCQUErQix1QkFBdUIsaURBQWlELEdBQUcsMEJBQTBCLHlCQUF5QixvQkFBb0Isc0JBQXNCLDRCQUE0QixvQ0FBb0MsbUJBQW1CLHVCQUF1Qix5QkFBeUIsb0JBQW9CLEdBQUcsZ0NBQWdDLGdCQUFnQixHQUFHLGlDQUFpQyxxQkFBcUIsZ0JBQWdCLEdBQUcsbUJBQW1CO0FBQ2x5bUI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNsQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDckI7QUFDdUM7QUFDVTtBQUNKOztBQUU3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQVE7QUFDOUI7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVk7QUFDZDtBQUNBLEVBQUUsOERBQXVCO0FBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUNBO0FBQ3FCO0FBQ2dCO0FBQ0g7QUFDTTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyw2Q0FBWTtBQUM3QyxvQ0FBb0MsZ0RBQWU7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQUk7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUtFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHbUI7QUFDckI7QUFDdUM7QUFDSztBQUNBO0FBQ0k7QUFDRTtBQUNiOztBQUVyQztBQUNBLFVBQVUsOENBQVU7QUFDcEIsVUFBVSw4Q0FBVTtBQUNwQixZQUFZLGdEQUFZO0FBQ3hCLGFBQWEsaURBQWE7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxLQUFLO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxtQkFBbUI7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxvQkFBb0I7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixrQkFBa0I7QUFDN0M7O0FBRUE7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQUk7QUFDaEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBWTtBQUNkO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhbnpvcmEvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BhbnpvcmEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BhbnpvcmEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BhbnpvcmEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wYW56b3JhLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BhbnpvcmEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGFuem9yYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGFuem9yYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wYW56b3JhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BhbnpvcmEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wYW56b3JhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGFuem9yYS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3BhbnpvcmEvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGFuem9yYS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3BhbnpvcmEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFuem9yYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wYW56b3JhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wYW56b3JhL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGFuem9yYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BhbnpvcmEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wYW56b3JhL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BhbnpvcmEvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcGFuem9yYS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGFuem9yYS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BhbnpvcmEvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BhbnpvcmEvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0JlbGxlemEtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FkYW0tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9BZGFtLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9mb250cy9BZGFtLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL2hvbWUtYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAtLWNvbG9yLTE6IzE3MTYxNjtcXG4gIC0tY29sb3ItMjojOUIyMzM2O1xcbiAgLS1jb2xvci0zOiNGNEYwRTg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGxvZ28tZm9udDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogYWRhbS1mb250LWxpZ2h0O1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtYm9sZDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogYWRhbS1mb250LXJlZ3VsYXI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcblxcbi8qIENvbW1vbiBTdHlsZXMgZm9yIEFsbCBwYWdlcyovXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm5hdmJhci1jb250YWluZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWIyMzM1YTY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5he1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5uYXZiYXItZWxlbWVudHN7XFxuICB3aWR0aDogNjB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxufVxcbi5uYXZiYXItZWxlbWVudHMgZGl2e1xcbiAgaGVpZ2h0OiAzLjJyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubmF2YmFyLWVsZW1lbnRzIGRpdjpob3ZlcntcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItMyk7ICBcXG59XFxuXFxuLm5hdmJhci1lbGVtZW50cyBoM3tcXG4gIG1hcmdpbjogMC42cmVtO1xcbiAgZm9udC1mYW1pbHk6IGFkYW0tZm9udC1yZWd1bGFyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbn1cXG5cXG4vKiBIb21lIFBhZ2UgU3R5bGVzKi9cXG5cXG4jY29udGVudC1ob21lIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmciAxZnI7XFxufVxcblxcbiNjb250ZW50LWhvbWUgLmNvbnRlbnQtYm9keXtcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4jY29udGVudC1ob21lIC5sb2dvLWNvbnRhaW5lcntcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICB3aWR0aDogNDB2dztcXG4gIG1heC13aWR0aDogNDVyZW07XFxuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjBlOGJkO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAzNSU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbiNjb250ZW50LWhvbWUgLmxvZ28tY29udGFpbmVyICNsb2dve1xcbiAgaGVpZ2h0OiAyMHZoO1xcbiAgbWluLWhlaWdodDogNHJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG5cXG4jY29udGVudC1ob21lIC5mb290ZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNjb250ZW50LWhvbWUgLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjE2YmQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzowLjVyZW0gMXJlbTtcXG59XFxuXFxuI2NvbnRlbnQtaG9tZSAuZm9vdGVyIHNwYW57XFxuICBmb250LWZhbWlseTogYWRhbS1mb250LXJlZ3VsYXI7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbn1cXG5cXG4vKiBNZW51IFBhZ2UgU3R5bGVzKi9cXG5cXG4jY29udGVudC1tZW51LCAjY29udGVudC1jb250YWN0IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMyk7XFxufVxcblxcbiNjb250ZW50LW1lbnUsICNjb250ZW50LWNvbnRhY3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyIDFmcjtcXG59XFxuXFxuI2NvbnRlbnQtbWVudSAuY29udGVudC1ib2R5e1xcbiAgd2lkdGg6IDYwdnc7XFxuICBtaW4td2lkdGg6IDY5MHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxNmJkO1xcblxcbiAgcGFkZGluZzogMC41cmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5tZW51LXNlY3Rpb257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICBtYXJnaW46IDJweCBhdXRvO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbjpudGgtY2hpbGQoZXZlbil7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ubWVudS1zZWN0aW9uOm50aC1jaGlsZChvZGQpe1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG5cXG4ubWVudS1zZWN0aW9uIC5wcm9kdWN0cyB7XFxuICB3aWR0aDogMTVyZW07XFxuICBmb250LWZhbWlseTogYWRhbS1mb250LXJlZ3VsYXI7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5wcm9kdWN0cyBoMntcXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcXG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmMGU4NmI7XFxufVxcbi5wcm9kdWN0cyAubWVudS1yb3d7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleDogMTtcXG59XFxuLnByb2R1Y3RzIC5tZW51LXJvdyAubmFtZXtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucHJvZHVjdHMgLnByaWNle1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiAuaW1hZ2UgaW1ne1xcbiAgaGVpZ2h0OiAxNXJlbTtcXG4gIHdpZHRoOiAxNXJlbTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogOHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTIpOyBcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0yKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDFweCAwLjVweCAjZjRmMGU4NDQ7IFxcbn1cXG5cXG4vKiBGb290ZXIgU3R5bGUgaXMgY29tbW9uIGZvciBib3RoIG1lbnUgYW5kIGNvbnRhY3QgcGFnZSAqL1xcbiNjb250ZW50LW1lbnUgIC5sb2dvLWNvbnRhaW5lciwgI2NvbnRlbnQtY29udGFjdCAubG9nby1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4jY29udGVudC1tZW51IC5sb2dvLWNvbnRhaW5lciAjbG9nbywjY29udGVudC1jb250YWN0IC5sb2dvLWNvbnRhaW5lciAjbG9nb3tcXG4gIGhlaWdodDogMTB2aDtcXG4gIG1pbi1oZWlnaHQ6IDIuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuMXJlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxufVxcblxcbiNjb250ZW50LW1lbnUgLmZvb3RlciAsI2NvbnRlbnQtY29udGFjdCAuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4jY29udGVudC1tZW51IC5mb290ZXIgLmNvbnRhY3QgLCNjb250ZW50LWNvbnRhY3QgLmZvb3RlciAuY29udGFjdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMnJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDVyZW07XFxufVxcblxcbiNjb250ZW50LW1lbnUgLmZvb3RlciAuY29udGFjdCBoNCAsI2NvbnRlbnQtY29udGFjdCAuZm9vdGVyIC5jb250YWN0IGg0e1xcbiAgbWFyZ2luOiAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtcmVndWxhcjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuI2NvbnRlbnQtbWVudSAuZm9vdGVyIC5jb250YWN0IHNwYW4gLCNjb250ZW50LWNvbnRhY3QgLmZvb3RlciAuY29udGFjdCBzcGFue1xcbiAgZm9udC1mYW1pbHk6IGFkYW0tZm9udC1yZWd1bGFyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKiBDb250YWN0IFBhZ2UgKi9cXG5cXG4jY29udGVudC1jb250YWN0IC5jb250ZW50LWJvZHl7XFxuICB3aWR0aDogNjB2dztcXG4gIG1pbi13aWR0aDogNjkwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjE2YmQ7XFxuXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAydnc7XFxufVxcblxcbiNjb250ZW50LWNvbnRhY3QgLmNvbnRlbnQtYm9keSAuY29udGFjdC1zZWN0aW9ue1xcbiAgd2lkdGg6IDIwdnc7XFxuXFxuICBmb250LWZhbWlseTogYWRhbS1mb250LXJlZ3VsYXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG4gIFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGdhcDogM3JlbTtcXG5cXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNGNEYwRTg4MDtcXG5cXG59XFxuXFxuI2NvbnRlbnQtY29udGFjdCAuY29udGVudC1ib2R5IC5jb250YWN0LXNlY3Rpb24taW5mb3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jY29udGVudC1jb250YWN0IC5jb250ZW50LWJvZHkgLmxvY2F0aW9uIGltZ3tcXG4gIHdpZHRoOiAyNXZ3O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XFxufVxcblxcbi5jdXN0b21lci1mb3Jte1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG4uY3VzdG9tZXItZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10sXFxuLmN1c3RvbWVyLWZvcm0gaW5wdXRbdHlwZT0nZW1haWwnXXtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMSk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGZvbnQ6IDAuOHJlbTtcXG59XFxuXFxuLyogLmN1c3RvbWVyLWZvcm0gLmZvcm0tcm93IGlucHV0W3R5cGU9J3RleHQnXTppbnZhbGlkLFxcbi5jdXN0b21lci1mb3JtIC5mb3JtLXJvdyBpbnB1dFt0eXBlPSdlbWFpbCddOmludmFsaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItMik7XFxuICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCB2YXIoLS1jb2xvci0yKTtcXG59ICovXFxuXFxuLmN1c3RvbWVyLWZvcm0gdGV4dGFyZWF7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcblxcbiAgaGVpZ2h0OiA3cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBwYWRkaW5nOiA3cHg7XFxuICByZXNpemU6IG5vbmU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uY3VzdG9tZXItZm9ybSAgLnRleHR7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmN1c3RvbWVyLWZvcm0gOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNXB4O1xcbn1cXG5cXG4uY3VzdG9tZXItZm9ybSA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTIpOyBcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0yKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDFweCAwLjVweCAjZjRmMGU4NDQ7IFxcbn1cXG5cXG4uY3VzdG9tZXItZm9ybSBidXR0b257XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci0yKTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG5cXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmN1c3RvbWVyLWZvcm0gYnV0dG9uOmhvdmVye1xcbiAgc2NhbGU6IDEuMDI7XFxufVxcblxcbi5jdXN0b21lci1mb3JtIGJ1dHRvbjphY3RpdmV7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgc2NhbGU6IDAuOTg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBcUM7QUFDdkM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsNENBQWdDO0FBQ2xDO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsNENBQStCO0FBQ2pDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDRDQUFpQztBQUNuQzs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsU0FBUztFQUNULDhCQUE4QjtFQUM5QixtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RC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RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIscUJBQXFCO0VBQ3JCLCtCQUErQjs7RUFFL0IsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgLS1jb2xvci0xOiMxNzE2MTY7XFxuICAtLWNvbG9yLTI6IzlCMjMzNjtcXG4gIC0tY29sb3ItMzojRjRGMEU4O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBsb2dvLWZvbnQ7XFxuICBzcmM6IHVybCguL2ZvbnRzL0JlbGxlemEtUmVndWxhci50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtbGlnaHQ7XFxuICBzcmM6IHVybCguL2ZvbnRzL0FkYW0tTGlnaHQudHRmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogYWRhbS1mb250LWJvbGQ7XFxuICBzcmM6IHVybCguL2ZvbnRzL0FkYW0tQm9sZC50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtcmVndWxhcjtcXG4gIHNyYzogdXJsKC4vZm9udHMvQWRhbS1NZWRpdW0udHRmKTtcXG59XFxuXFxuLyogQ29tbW9uIFN0eWxlcyBmb3IgQWxsIHBhZ2VzKi9cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubmF2YmFyLWNvbnRhaW5lcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YjIzMzVhNjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmF7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLm5hdmJhci1lbGVtZW50c3tcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBcXG59XFxuLm5hdmJhci1lbGVtZW50cyBkaXZ7XFxuICBoZWlnaHQ6IDMuMnJlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5uYXZiYXItZWxlbWVudHMgZGl2OmhvdmVye1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci0zKTsgIFxcbn1cXG5cXG4ubmF2YmFyLWVsZW1lbnRzIGgze1xcbiAgbWFyZ2luOiAwLjZyZW07XFxuICBmb250LWZhbWlseTogYWRhbS1mb250LXJlZ3VsYXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XFxufVxcblxcbi8qIEhvbWUgUGFnZSBTdHlsZXMqL1xcblxcbiNjb250ZW50LWhvbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgdXJsKFxcXCIuLi9zcmMvaW1hZ2VzL2hvbWUtYmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyIDFmcjtcXG59XFxuXFxuI2NvbnRlbnQtaG9tZSAuY29udGVudC1ib2R5e1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbiNjb250ZW50LWhvbWUgLmxvZ28tY29udGFpbmVye1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIHdpZHRoOiA0MHZ3O1xcbiAgbWF4LXdpZHRoOiA0NXJlbTtcXG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmMGU4YmQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDM1JTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuI2NvbnRlbnQtaG9tZSAubG9nby1jb250YWluZXIgI2xvZ297XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBtaW4taGVpZ2h0OiA0cmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogNHJlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxufVxcblxcbiNjb250ZW50LWhvbWUgLmZvb3Rlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2NvbnRlbnQtaG9tZSAuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MTZiZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOjAuNXJlbSAxcmVtO1xcbn1cXG5cXG4jY29udGVudC1ob21lIC5mb290ZXIgc3BhbntcXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtcmVndWxhcjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XFxufVxcblxcbi8qIE1lbnUgUGFnZSBTdHlsZXMqL1xcblxcbiNjb250ZW50LW1lbnUsICNjb250ZW50LWNvbnRhY3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG59XFxuXFxuI2NvbnRlbnQtbWVudSwgI2NvbnRlbnQtY29udGFjdCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnIgMWZyO1xcbn1cXG5cXG4jY29udGVudC1tZW51IC5jb250ZW50LWJvZHl7XFxuICB3aWR0aDogNjB2dztcXG4gIG1pbi13aWR0aDogNjkwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjE2YmQ7XFxuXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG4gIG1hcmdpbjogMnB4IGF1dG87XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uOm50aC1jaGlsZChldmVuKXtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5tZW51LXNlY3Rpb246bnRoLWNoaWxkKG9kZCl7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcblxcblxcbi5tZW51LXNlY3Rpb24gLnByb2R1Y3RzIHtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtcmVndWxhcjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuLnByb2R1Y3RzIGgye1xcbiAgZm9udC1mYW1pbHk6IGFkYW0tZm9udC1ib2xkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTIpO1xcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGYwZTg2YjtcXG59XFxuLnByb2R1Y3RzIC5tZW51LXJvd3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4OiAxO1xcbn1cXG4ucHJvZHVjdHMgLm1lbnUtcm93IC5uYW1le1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5wcm9kdWN0cyAucHJpY2V7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIC5pbWFnZSBpbWd7XFxuICBoZWlnaHQ6IDE1cmVtO1xcbiAgd2lkdGg6IDE1cmVtO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA4cHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMik7IFxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgMXB4IDAuNXB4ICNmNGYwZTg0NDsgXFxufVxcblxcbi8qIEZvb3RlciBTdHlsZSBpcyBjb21tb24gZm9yIGJvdGggbWVudSBhbmQgY29udGFjdCBwYWdlICovXFxuI2NvbnRlbnQtbWVudSAgLmxvZ28tY29udGFpbmVyLCAjY29udGVudC1jb250YWN0IC5sb2dvLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbiNjb250ZW50LW1lbnUgLmxvZ28tY29udGFpbmVyICNsb2dvLCNjb250ZW50LWNvbnRhY3QgLmxvZ28tY29udGFpbmVyICNsb2dve1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgbWluLWhlaWdodDogMi41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC4xcmVtO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuI2NvbnRlbnQtbWVudSAuZm9vdGVyICwjY29udGVudC1jb250YWN0IC5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxufVxcblxcbiNjb250ZW50LW1lbnUgLmZvb3RlciAuY29udGFjdCAsI2NvbnRlbnQtY29udGFjdCAuZm9vdGVyIC5jb250YWN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4ycmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcXG59XFxuXFxuI2NvbnRlbnQtbWVudSAuZm9vdGVyIC5jb250YWN0IGg0ICwjY29udGVudC1jb250YWN0IC5mb290ZXIgLmNvbnRhY3QgaDR7XFxuICBtYXJnaW46IDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xcbiAgZm9udC1mYW1pbHk6IGFkYW0tZm9udC1yZWd1bGFyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4jY29udGVudC1tZW51IC5mb290ZXIgLmNvbnRhY3Qgc3BhbiAsI2NvbnRlbnQtY29udGFjdCAuZm9vdGVyIC5jb250YWN0IHNwYW57XFxuICBmb250LWZhbWlseTogYWRhbS1mb250LXJlZ3VsYXI7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi8qIENvbnRhY3QgUGFnZSAqL1xcblxcbiNjb250ZW50LWNvbnRhY3QgLmNvbnRlbnQtYm9keXtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgbWluLXdpZHRoOiA2OTBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MTZiZDtcXG5cXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJ2dztcXG59XFxuXFxuI2NvbnRlbnQtY29udGFjdCAuY29udGVudC1ib2R5IC5jb250YWN0LXNlY3Rpb257XFxuICB3aWR0aDogMjB2dztcXG5cXG4gIGZvbnQtZmFtaWx5OiBhZGFtLWZvbnQtcmVndWxhcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZ2FwOiAzcmVtO1xcblxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0Y0RjBFODgwO1xcblxcbn1cXG5cXG4jY29udGVudC1jb250YWN0IC5jb250ZW50LWJvZHkgLmNvbnRhY3Qtc2VjdGlvbi1pbmZve1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNjb250ZW50LWNvbnRhY3QgLmNvbnRlbnQtYm9keSAubG9jYXRpb24gaW1ne1xcbiAgd2lkdGg6IDI1dnc7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBtYXJnaW4tbGVmdDogM3JlbTtcXG59XFxuXFxuLmN1c3RvbWVyLWZvcm17XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcbi5jdXN0b21lci1mb3JtIGlucHV0W3R5cGU9J3RleHQnXSxcXG4uY3VzdG9tZXItZm9ybSBpbnB1dFt0eXBlPSdlbWFpbCdde1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgZm9udDogMC44cmVtO1xcbn1cXG5cXG4vKiAuY3VzdG9tZXItZm9ybSAuZm9ybS1yb3cgaW5wdXRbdHlwZT0ndGV4dCddOmludmFsaWQsXFxuLmN1c3RvbWVyLWZvcm0gLmZvcm0tcm93IGlucHV0W3R5cGU9J2VtYWlsJ106aW52YWxpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci0yKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4IHZhcigtLWNvbG9yLTIpO1xcbn0gKi9cXG5cXG4uY3VzdG9tZXItZm9ybSB0ZXh0YXJlYXtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLTEpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuXFxuICBoZWlnaHQ6IDdyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5jdXN0b21lci1mb3JtICAudGV4dHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uY3VzdG9tZXItZm9ybSA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA1cHg7XFxufVxcblxcbi5jdXN0b21lci1mb3JtIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMik7IFxcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLTIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgMXB4IDAuNXB4ICNmNGYwZTg0NDsgXFxufVxcblxcbi5jdXN0b21lci1mb3JtIGJ1dHRvbntcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICBjb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbG9yLTIpO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcblxcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3VzdG9tZXItZm9ybSBidXR0b246aG92ZXJ7XFxuICBzY2FsZTogMS4wMjtcXG59XFxuXFxuLmN1c3RvbWVyLWZvcm0gYnV0dG9uOmFjdGl2ZXtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBzY2FsZTogMC45ODtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHsgY3JlYXRlTmF2QmFyIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXJNZW51Q29udGVudCB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgbG9jYXRpb24gZnJvbSAnLi9pbWFnZXMvbG9jYXRpb24ucG5nJztcblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudENvbnRhY3QobWFpbkNvbnRhaW5lcikge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC1ib2R5Jyk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG5cbiAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1zZWN0aW9uJyk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24pO1xuXG4gIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Qtc2VjdGlvbi1pbmZvJyk7XG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcblxuICBjb250YWN0SW5mby5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImFkcmVzc1wiPjEzMTQgTiBGcm9udCBzdCwgUGhpbGFkZWxwaGlhPC9kaXY+PGRpdiBjbGFzcz1cInBob25lXCI+PGEgaHJlZj1cInRlbDorMDEyMzQ1Njc4OTBcIj4rMCAxMjMtNDU2LTc4OTA8L2E+PC9kaXY+PGRpdiBjbGFzcz1cImVtYWlsXCI+PGEgaHJlZj1cIm1haWx0bzppbmZvQHBhbnpvcmEuY29tXCI+aW5mb0BwYW56b3JhLmNvbTwvYT48L2Rpdj4nO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdjdXN0b21lci1mb3JtJyk7XG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IGZvcm1Sb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Sb3cxLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gIGZvcm1Sb3cxLmlubmVySFRNTCA9ICc8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZ1bGwtbmFtZVwiIG5hbWU9XCJmdWxsLW5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWUqXCIgcmVxdWlyZWQ+JztcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93MSk7XG5cbiAgY29uc3QgZm9ybVJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdzIuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgZm9ybVJvdzIuaW5uZXJIVE1MID0gJzxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJqb2VAZXhhbXBsZS5jb20qXCIgcmVxdWlyZWQ+JztcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93Mik7XG5cbiAgY29uc3QgZm9ybVJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybVJvdzMuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgZm9ybVJvdzMuaW5uZXJIVE1MID0gJzx0ZXh0YXJlYSBuYW1lPVwidGV4dFwiIGlkPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBtZXNzYWdlIGhlcmUuXCI+PC90ZXh0YXJlYT4nO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Sb3czKTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLmlubmVySFRNTCA9ICdTZW5kIFVzJztcbiAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGNvbnN0IGxvY2F0aW9uSW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9jYXRpb25JbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uSW1hZ2VDb250YWluZXIpO1xuXG4gIGNvbnN0IGxvY2F0aW9uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbG9jYXRpb25JbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdNYXAgdmlldyBmb3IgbG9jYXRpb24gb2YgcmVzdGF1cmFudCcpO1xuICBsb2NhdGlvbkltYWdlLnNyYyA9IGxvY2F0aW9uO1xuICBsb2NhdGlvbkltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uSW1hZ2UpO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsbENvbnRhY3RQYWdlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBib2R5LmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50LWNvbnRhY3QnKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbiAgY3JlYXRlTmF2QmFyKCdjb250ZW50LWNvbnRhY3QnKTtcbiAgY3JlYXRlQ29udGVudENvbnRhY3QobWFpbkNvbnRhaW5lcik7XG4gIGNyZWF0ZUZvb3Rlck1lbnVDb250ZW50KCdjb250ZW50LWNvbnRhY3QnKTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tc2NyaXB0LXVybCAqL1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvLnBuZyc7XG5pbXBvcnQgY2FsbE1lbnVQYWdlIGZyb20gJy4vbWVudSc7XG5pbXBvcnQgY2FsbENvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcihpZCkge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBjb25zdCBuYXZCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2QmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1jb250YWluZXInKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZCYXJDb250YWluZXIpO1xuXG4gIGNvbnN0IG5hdkJhckVsZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdkJhckVsZW1lbnRzLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1lbGVtZW50cycpO1xuICBuYXZCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2QmFyRWxlbWVudHMpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gIG5hdkJhckVsZW1lbnRzLmFwcGVuZENoaWxkKGhvbWUpO1xuXG4gIGNvbnN0IGhvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaG9tZVRleHQuaW5uZXJIVE1MID0gJ0hPTUUnO1xuICBob21lLmFwcGVuZENoaWxkKGhvbWVUZXh0KTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICBuYXZCYXJFbGVtZW50cy5hcHBlbmRDaGlsZChtZW51KTtcblxuICBjb25zdCBtZW51VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIG1lbnVUZXh0LmlubmVySFRNTCA9ICdNRU5VJztcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51VGV4dCk7XG5cbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgbmF2QmFyRWxlbWVudHMuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgY29uc3QgY29udGFjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb250YWN0VGV4dC5pbm5lckhUTUwgPSAnQ09OVEFDVCc7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRleHQpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbEhvbWVQYWdlKTtcbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxNZW51UGFnZSk7XG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsQ29udGFjdFBhZ2UpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50SG9tZSgpIHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50LWhvbWUnKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtYm9keScpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuXG4gIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xuXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJy4vaW5kZXguaHRtbCcpO1xuICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGEpO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdDb21wYW55IGxvZ28nKTtcbiAgaW1nLnNyYyA9IGxvZ287XG4gIGEuYXBwZW5kQ2hpbGQoaW1nKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVySG9tZSgpIHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50LWhvbWUnKTtcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGFpbmVyJyk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGFpbmVyKTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICBmb290ZXIuaW5uZXJIVE1MID0gJzxzcGFuPjEzMTQgTiBGcm9udCBTdCwgUGhpbGFkZWxwaGlhPC9zcGFuPjxzcGFuPnw8L3NwYW4+PGEgaHJlZj1cInRlbDorMDEyMzQ1Njc4OTBcIj48c3Bhbj4rMCAxMjMtNDU2LTc4OTA8L3NwYW4+PC9hPic7XG59XG5cbmZ1bmN0aW9uIGNhbGxIb21lUGFnZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudC1ob21lJyk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG4gIGNyZWF0ZU5hdkJhcignY29udGVudC1ob21lJyk7XG4gIGNyZWF0ZUNvbnRlbnRIb21lKCk7XG4gIGNyZWF0ZUZvb3RlckhvbWUoKTtcbn1cblxuY2FsbEhvbWVQYWdlKCk7XG5cbmV4cG9ydCB7XG4gIGNhbGxIb21lUGFnZSxcbiAgY3JlYXRlTmF2QmFyLFxufTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHsgY3JlYXRlTmF2QmFyIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgcGl6emFJbWFnZSBmcm9tICcuL2ltYWdlcy9waXp6YS5qcGcnO1xuaW1wb3J0IHBhc3RhSW1hZ2UgZnJvbSAnLi9pbWFnZXMvcGFzdGEuanBnJztcbmltcG9ydCBkZXNzZXJ0SW1hZ2UgZnJvbSAnLi9pbWFnZXMvZGVzc2VydC5qcGcnO1xuaW1wb3J0IGJldmVyYWdlSW1hZ2UgZnJvbSAnLi9pbWFnZXMvYmV2ZXJhZ2UuanBnJztcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1hZ2VzL2xvZ28ucG5nJztcblxuY29uc3QgbWVudUltYWdlcyA9IHtcbiAgcGl6emFzOiBwaXp6YUltYWdlLFxuICBwYXN0YXM6IHBhc3RhSW1hZ2UsXG4gIGRlc3NlcnRzOiBkZXNzZXJ0SW1hZ2UsXG4gIGJldmVyYWdlczogYmV2ZXJhZ2VJbWFnZSxcbn07XG5cbmNsYXNzIFByb2R1Y3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICB9XG59XG5cbmNvbnN0IG1lbnUgPSAoKCkgPT4ge1xuICBjb25zdCBwaXp6YXMgPSBbXTtcbiAgcGl6emFzLnB1c2gobmV3IFByb2R1Y3QoJ01hcmdoZXJpdGEnLCAnMTIkJykpO1xuICBwaXp6YXMucHVzaChuZXcgUHJvZHVjdCgnUXVhdHRybyBGb3JtYWdnaScsICcxMyQnKSk7XG4gIHBpenphcy5wdXNoKG5ldyBQcm9kdWN0KCdTaWNpbGlhbmEnLCAnMTMkJykpO1xuICBwaXp6YXMucHVzaChuZXcgUHJvZHVjdCgnVG9ubm8gRSBDaXBvbGxhJywgJzE1JCcpKTtcbiAgcGl6emFzLnB1c2gobmV3IFByb2R1Y3QoJ1ZlZ2V0ZXJpYW5hJywgJzExJCcpKTtcblxuICBjb25zdCBwYXN0YXMgPSBbXTtcbiAgcGFzdGFzLnB1c2gobmV3IFByb2R1Y3QoJ1Bhc3RhIEUgRmFnaW9saScsICcxMCQnKSk7XG4gIHBhc3Rhcy5wdXNoKG5ldyBQcm9kdWN0KCdQYXN0YSBBbGxhIFpvenpvbmEnLCAnMTIkJykpO1xuICBwYXN0YXMucHVzaChuZXcgUHJvZHVjdCgnU3BhZ2V0dGhpIEJvbG9nbmFpc2UnLCAnMTIkJykpO1xuICBwYXN0YXMucHVzaChuZXcgUHJvZHVjdCgnUmlnYXRvbmkgUHV0dGFuZXNjYScsICcxMSQnKSk7XG4gIHBhc3Rhcy5wdXNoKG5ldyBQcm9kdWN0KCdQb3JrIFJhZ3UgUmlnYXRvbmknLCAnMTUkJykpO1xuXG4gIGNvbnN0IGRlc3NlcnRzID0gW107XG4gIGRlc3NlcnRzLnB1c2gobmV3IFByb2R1Y3QoJ1RpcmFtaXPDuScsICc5JCcpKTtcbiAgZGVzc2VydHMucHVzaChuZXcgUHJvZHVjdCgnU2JyaXNvbG9uYScsICc4JCcpKTtcbiAgZGVzc2VydHMucHVzaChuZXcgUHJvZHVjdCgnU2ZvZ2xpYXRlbGxlJywgJzEyJCcpKTtcbiAgZGVzc2VydHMucHVzaChuZXcgUHJvZHVjdCgnQ2Fubm9saScsICc5JCcpKTtcbiAgZGVzc2VydHMucHVzaChuZXcgUHJvZHVjdCgnQmFiw6AnLCAnNiQnKSk7XG5cbiAgY29uc3QgYmV2ZXJhZ2VzID0gW107XG4gIGJldmVyYWdlcy5wdXNoKG5ldyBQcm9kdWN0KCdGcmVzaCBPcmFuZ2UgSnVpY2UnLCAnNSQnKSk7XG4gIGJldmVyYWdlcy5wdXNoKG5ldyBQcm9kdWN0KCdNaW5lcmFsIFdhdGVyJywgJzIkJykpO1xuICBiZXZlcmFnZXMucHVzaChuZXcgUHJvZHVjdCgnU29kYScsICc0JCcpKTtcbiAgYmV2ZXJhZ2VzLnB1c2gobmV3IFByb2R1Y3QoJ1dpbmUgKFJlZC9XaGl0ZSknLCAnNCQnKSk7XG4gIGJldmVyYWdlcy5wdXNoKG5ldyBQcm9kdWN0KCdFc3ByZXNzbycsICczJCcpKTtcblxuICByZXR1cm4ge1xuICAgIHBpenphcywgcGFzdGFzLCBkZXNzZXJ0cywgYmV2ZXJhZ2VzLFxuICB9O1xufSkoKTtcblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudE1lbnUobWFpbkNvbnRhaW5lcikge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC1ib2R5Jyk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgZ3VhcmQtZm9yLWluXG4gIGZvciAoY29uc3QgcGFydCBpbiBtZW51KSB7XG4gICAgY29uc3QgcGFydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uJyk7XG4gICAgcGFydENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke3BhcnR9YCk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJ0Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9kdWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3RzJyk7XG4gICAgcGFydENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9IHBhcnQudG9VcHBlckNhc2UoKTtcbiAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVbcGFydF0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2R1Y3QuY2xhc3NMaXN0LmFkZCgnbWVudS1yb3cnKTtcbiAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdCk7XG5cbiAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9kdWN0TmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgICBwcm9kdWN0TmFtZS5pbm5lckhUTUwgPSBgJHttZW51W3BhcnRdW2ldLm5hbWV9YDtcbiAgICAgIHByb2R1Y3QuYXBwZW5kQ2hpbGQocHJvZHVjdE5hbWUpO1xuXG4gICAgICBjb25zdCBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2R1Y3RQcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuICAgICAgcHJvZHVjdFByaWNlLmlubmVySFRNTCA9IGAke21lbnVbcGFydF1baV0ucHJpY2V9YDtcbiAgICAgIHByb2R1Y3QuYXBwZW5kQ2hpbGQocHJvZHVjdFByaWNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltYWdlJyk7XG5cbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKGAke3BhcnQuc2xpY2UoMCwgLTEpfWApO1xuICAgIHBhcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgYCR7cGFydH1gKTtcbiAgICBpbWcuc3JjID0gbWVudUltYWdlc1twYXJ0XTtcbiAgICBpbWFnZS5hcHBlbmRDaGlsZChpbWcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb290ZXJNZW51Q29udGVudChpZCkge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1jb250YWluZXInKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XG5cbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnLi9pbmRleC5odG1sJyk7XG4gIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28nKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0NvbXBhbnkgbG9nbycpO1xuICBpbWcuc3JjID0gbG9nbztcbiAgYS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICBjb250YWN0LmlubmVySFRNTCA9ICc8aDQ+Q2FsbCBGb3IgUmVzZXJ2YXRpb248L2g0PiA8YSBocmVmPVwidGVsOiswMTIzNDU2Nzg5MFwiPjxzcGFuPiswIDEyMy00NTYtNzg5MDwvc3Bhbj48L2E+Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsbE1lbnVQYWdlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBib2R5LmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50LW1lbnUnKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbiAgY3JlYXRlTmF2QmFyKCdjb250ZW50LW1lbnUnKTtcbiAgY3JlYXRlQ29udGVudE1lbnUobWFpbkNvbnRhaW5lcik7XG4gIGNyZWF0ZUZvb3Rlck1lbnVDb250ZW50KCdjb250ZW50LW1lbnUnKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
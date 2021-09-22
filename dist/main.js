/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadAbout = () => {\r\n  const main = document.querySelector(\"main\");\r\n  main.textContent = \"\";\r\n  const text = document.createElement(\"div\");\r\n  const h1 = document.createElement(\"h1\");\r\n  const h2 = document.createElement(\"h2\");\r\n\r\n  h1.textContent = \"About Us\";\r\n  h2.textContent =\r\n    \"We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up a scrumptious dinner utilizing the best and freshest ingredients.\";\r\n\r\n  text.classList.add(\"text-about\");\r\n\r\n  text.appendChild(h1);\r\n  text.appendChild(h2);\r\n  main.appendChild(text);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadHome = () => {\r\n  const main = document.querySelector(\"main\");\r\n  main.textContent = \"\";\r\n  const text = document.createElement(\"div\");\r\n  const h1 = document.createElement(\"h1\");\r\n  const h2 = document.createElement(\"h2\");\r\n  const img = document.createElement(\"img\");\r\n  const stroke = document.createElement(\"img\");\r\n\r\n  h1.textContent = \"Enjoy Your Meal\";\r\n  h2.textContent = \"Nothing brings people together like good food.\";\r\n  img.setAttribute(\"src\", \"../dist/images/food.jpg\");\r\n  stroke.setAttribute(\"src\", \"../dist/images/stroke.png\");\r\n\r\n  img.classList.add(\"image\");\r\n  stroke.classList.add(\"stroke\");\r\n  text.classList.add(\"text-home\");\r\n\r\n  text.appendChild(h1);\r\n  text.appendChild(h2);\r\n  main.appendChild(text);\r\n  main.appendChild(img);\r\n  main.appendChild(stroke);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\n\r\nconst init = (() => {\r\n  (0,_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n})();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addFood = (src, textName, textPrice) => {\r\n  const food = document.createElement(\"div\");\r\n  const img = document.createElement(\"img\");\r\n  const info = document.createElement(\"div\");\r\n  const name = document.createElement(\"p\");\r\n  const price = document.createElement(\"p\");\r\n\r\n  food.classList.add(\"information-dish\");\r\n  img.classList.add(\"random-dish\");\r\n  info.classList.add(\"random-info\");\r\n  name.classList.add(\"name\");\r\n  price.classList.add(\"price\");\r\n\r\n  img.setAttribute(\"src\", src);\r\n\r\n  name.textContent = textName;\r\n  price.textContent = textPrice;\r\n\r\n  info.appendChild(name);\r\n  info.appendChild(price);\r\n  food.appendChild(img);\r\n  food.appendChild(info);\r\n\r\n  return food;\r\n};\r\n\r\nconst loadMenu = () => {\r\n  const main = document.querySelector(\"main\");\r\n  main.textContent = \"\";\r\n\r\n  const foods = [\r\n    addFood(\"../dist/images/1.jpg\", \"Burrata e Ham\", \"10$\"),\r\n    addFood(\"../dist/images/2.jpg\", \"Uni and Tapioca\", \"10$\"),\r\n    addFood(\"../dist/images/3.jpg\", \"Cappelletti\", \"10$\"),\r\n    addFood(\"../dist/images/5.jpg\", \"Pork Dumplings\", \"10$\"),\r\n  ];\r\n\r\n  for (let food of foods) {\r\n    main.appendChild(food);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nconst event = {\r\n  Home: _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n  Menu: _menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n  About: _about__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n};\r\n\r\nconst createLi = (text) => {\r\n  const li = document.createElement(\"li\");\r\n  li.textContent = text;\r\n  li.addEventListener(\"click\", (e) => {\r\n    event[text]();\r\n    const active = document.querySelector(\".active\");\r\n    active.classList.remove(\"active\");\r\n    li.classList.add(\"active\");\r\n  });\r\n  return li;\r\n};\r\n\r\nconst createNav = () => {\r\n  const nav = document.createElement(\"nav\");\r\n  const ul = document.createElement(\"ul\");\r\n  const home = createLi(\"Home\");\r\n  const menu = createLi(\"Menu\");\r\n  const about = createLi(\"About\");\r\n\r\n  home.classList.add(\"active\");\r\n  nav.classList.add(\"navigation\");\r\n\r\n  ul.appendChild(home);\r\n  ul.appendChild(menu);\r\n  ul.appendChild(about);\r\n  nav.appendChild(ul);\r\n  return nav;\r\n};\r\n\r\nconst createHeader = () => {\r\n  const header = document.createElement(\"header\");\r\n  const nav = createNav();\r\n  header.appendChild(nav);\r\n  return header;\r\n};\r\n\r\nconst loadPage = () => {\r\n  const body = document.querySelector(\"body\");\r\n  const content = document.querySelector(\"#content\");\r\n  const main = document.createElement(\"main\");\r\n\r\n  const bg = document.createElement(\"div\");\r\n  const header = createHeader();\r\n  const subbg = document.createElement(\"div\");\r\n\r\n  bg.classList.add(\"bg-image\");\r\n  subbg.classList.add(\"sub-bg\");\r\n\r\n  body.appendChild(bg);\r\n  content.appendChild(subbg);\r\n  content.appendChild(header);\r\n  content.appendChild(main);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/page.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
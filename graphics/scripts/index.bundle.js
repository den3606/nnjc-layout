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

/***/ "./src/graphics/index.js":
/*!*******************************!*\
  !*** ./src/graphics/index.js ***!
  \*******************************/
/***/ (() => {

eval("\n\nconst leftPlayerName = document.querySelector(\"#left-player-name\");\nconst rightPlayerName = document.querySelector(\"#right-player-name\");\nconst leftPlayerNameReplicant = nodecg.Replicant('leftPlayerName');\nconst rightPlayerNameReplicant = nodecg.Replicant('rightPlayerName');\n\n// Change will be called when the Replicant loads too, so we can use it to set the initial value.\nleftPlayerNameReplicant.on('change', (newValue, oldValue) => {\n\tleftPlayerName.innerText = newValue;\n});\n\nrightPlayerNameReplicant.on('change', (newValue, oldValue) => {\n\trightPlayerName.innerText = newValue;\n});\n\n\n//# sourceURL=webpack://nnjc-layout/./src/graphics/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/graphics/index.js"]();
/******/ 	
/******/ })()
;
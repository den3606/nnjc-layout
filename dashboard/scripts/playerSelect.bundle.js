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

/***/ "./src/dashboard/playerSelect.js":
/*!***************************************!*\
  !*** ./src/dashboard/playerSelect.js ***!
  \***************************************/
/***/ (() => {

eval("// import { parse } from 'csv-parse';\n\n\nconst leftNameReplicant = nodecg.Replicant(\"leftPlayerName\");\n\nconst leftPlayerNameElement = document.querySelector(\"#left-player-name\");\nleftPlayerNameElement.addEventListener('change', (e) => {\n  leftNameReplicant.value = e.target.value;\n});\n\nleftNameReplicant.on(\"change\", ((newValue, oldValue) => { leftPlayerNameElement.value = newValue }));\n\n\nconst rightNameReplicant = nodecg.Replicant(\"rightPlayerName\");\n\nconst rightPlayerNameElement = document.querySelector(\"#right-player-name\");\nrightPlayerNameElement.addEventListener('change', (e) => {\n  rightNameReplicant.value = e.target.value;\n});\n\nrightNameReplicant.on(\"change\", ((newValue, oldValue) => { rightPlayerNameElement.value = newValue }));\n\n\n\n// jsonファイル一覧取得のソース\n// const players = await async function () {\n//   const e = await fetch(\"./playerList.json\");\n//   return (await e.json()).players\n// }();\n// nameReplicant.value = players[0]\n\n// csvファイルの内容を読み込み\n// csvファイルをパース\n// const records = parse(data, { columns: true });\n// 結果の表示\n// for (const record of records) {\n//   console.log(record);\n// }\n\n\n//# sourceURL=webpack://nnjc-layout/./src/dashboard/playerSelect.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/dashboard/playerSelect.js"]();
/******/ 	
/******/ })()
;
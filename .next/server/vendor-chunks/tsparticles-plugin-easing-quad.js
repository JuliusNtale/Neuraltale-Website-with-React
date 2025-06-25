"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-plugin-easing-quad";
exports.ids = ["vendor-chunks/tsparticles-plugin-easing-quad"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-plugin-easing-quad/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles-plugin-easing-quad/esm/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadEasingQuadPlugin: () => (/* binding */ loadEasingQuadPlugin)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nasync function loadEasingQuadPlugin() {\n    (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.addEasing)(\"ease-in-quad\", (value) => value ** 2);\n    (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.addEasing)(\"ease-out-quad\", (value) => 1 - (1 - value) ** 2);\n    (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.addEasing)(\"ease-in-out-quad\", (value) => (value < 0.5 ? 2 * value ** 2 : 1 - (-2 * value + 2) ** 2 / 2));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtcGx1Z2luLWVhc2luZy1xdWFkL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQztBQUN4QztBQUNQLElBQUksNkRBQVM7QUFDYixJQUFJLDZEQUFTO0FBQ2IsSUFBSSw2REFBUztBQUNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGV4dGVjaC10ZWNobm9sb2dpZXMtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1wbHVnaW4tZWFzaW5nLXF1YWQvZXNtL2luZGV4LmpzPzU3NmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkRWFzaW5nIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRFYXNpbmdRdWFkUGx1Z2luKCkge1xuICAgIGFkZEVhc2luZyhcImVhc2UtaW4tcXVhZFwiLCAodmFsdWUpID0+IHZhbHVlICoqIDIpO1xuICAgIGFkZEVhc2luZyhcImVhc2Utb3V0LXF1YWRcIiwgKHZhbHVlKSA9PiAxIC0gKDEgLSB2YWx1ZSkgKiogMik7XG4gICAgYWRkRWFzaW5nKFwiZWFzZS1pbi1vdXQtcXVhZFwiLCAodmFsdWUpID0+ICh2YWx1ZSA8IDAuNSA/IDIgKiB2YWx1ZSAqKiAyIDogMSAtICgtMiAqIHZhbHVlICsgMikgKiogMiAvIDIpKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-plugin-easing-quad/esm/index.js\n");

/***/ })

};
;